const spinnerTemplate = document.getElementById('spinnerTemplate');
const itemTemplate = document.getElementById('itemTemplate');
const itemsEmptyTemplate = document.getElementById('itemsEmptyTemplate');
const itemsContainer = document.getElementById('itemsContainer');
const itemsTotalContainer = document.getElementById('itemsTotalContainer');

const PROXY_URL = 'https://proxy.ngineer.workers.dev';
const API_URL = `${PROXY_URL}/https://registry.directus.io/extensions`;

// Show spinner
itemsContainer.innerHTML = spinnerTemplate.innerHTML;

fetch(`${API_URL}?limit=10&by=350fb99f-218d-40b1-aaaf-98baa9f1751c`)
  .then((response) => response.json())
  .then(async ({ data }) => {
    let totalItems = data?.length ?? 0;
    itemsTotalContainer.textContent = totalItems;

    if (!data || totalItems === 0) {
      itemsContainer.innerHTML = itemsEmptyTemplate.innerHTML;
      return;
    }

    // Get version of all items
    const versions = await Promise.allSettled(
      data.map((item) => {
        return fetch(`${API_URL}/${item.id}`)
          .then((response) => response.json())
          .then(({ data }) => data?.versions?.[0]?.version);
      })
    );

    // Remove spinner
    itemsContainer.innerHTML = '';

    data
      ?.sort((a, b) => (a.total_downloads < b.total_downloads ? 1 : -1))
      .forEach((item, index) => {
        const itemElem = itemTemplate.content.cloneNode(true);

        itemElem.querySelector('a').href = `https://www.npmjs.com/package/${item.name}`;
        itemElem.querySelector('.name').textContent = item.name.replace('directus-extension', '').replaceAll('-', ' ');
        itemElem.querySelector('.description').textContent = item.description;
        itemElem.querySelector('.version').textContent = versions[index].value ?? '--';
        itemElem.querySelector('.downloads').textContent = item.total_downloads;
        itemElem.querySelector('.type').textContent = item.type;

        itemsContainer.appendChild(itemElem);
      });
  })
  .catch((error) => {
    itemsContainer.textContent = error.message;
  });
