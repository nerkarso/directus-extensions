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

    const items = data.sort((a, b) => (a.total_downloads < b.total_downloads ? 1 : -1));

    // Get details of all items
    const details = await Promise.allSettled(
      items.map((item) => {
        return fetch(`${API_URL}/${item.id}`)
          .then((response) => response.json())
          .then(({ data }) => data);
      })
    );

    // Remove spinner
    itemsContainer.innerHTML = '';

    items.forEach((item, index) => {
      const itemElem = itemTemplate.content.cloneNode(true);
      const itemDetails = details[index].value;

      itemElem.querySelector('a').href = `https://www.npmjs.com/package/${item.name}`;
      itemElem.querySelector('.name').textContent = item.name.replace('directus-extension', '').replaceAll('-', ' ');
      itemElem.querySelector('.description').textContent = item.description;
      itemElem.querySelector('.downloads').textContent = item.total_downloads;
      itemElem.querySelector('.version').textContent = `v${itemDetails?.versions?.[0]?.version ?? '0.0.0'}`;
      itemElem.querySelector('.type').textContent = item.type;

      const chart = new ApexCharts(itemElem.querySelector('.chart'), {
        chart: {
          type: 'area',
          width: '100%',
          height: '30rem',
          animations: { enabled: false },
          dropShadow: { enabled: false },
          toolbar: { show: false },
          selection: { enabled: false },
          zoom: { enabled: false },
          sparkline: { enabled: true },
        },
        colors: ['#60a5fa'],
        dataLabels: { enabled: false },
        series: [
          {
            name: 'downloads',
            data: itemDetails.downloads.map(({ count }) => count),
          },
        ],
        stroke: {
          width: 1.5,
        },
        tooltip: { enabled: false },
      });

      itemsContainer.appendChild(itemElem);

      // Wait to render the chart to calculate the correct width
      setTimeout(() => chart.render(), 10);
    });
  })
  .catch((error) => {
    itemsContainer.textContent = error.message;
  });
