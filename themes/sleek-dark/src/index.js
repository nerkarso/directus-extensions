import './style.css';

/** @type {import('@directus/themes').Theme} */
const theme = {
  id: 'sleek-dark',
  name: 'Sleek Dark',
  appearance: 'dark',
  rules: {
    borderRadius: '0.5rem',
    borderWidth: '1px',
    form: {
      field: {
        input: {
          height: '3.25rem',
          padding: '0.25rem 0.75rem',
        },
      },
      rowGap: '2rem',
    },
    navigation: {
      background: 'transparent',
      project: {
        background: 'transparent',
      },
    },
    sidebar: {
      background: 'transparent',
      section: {
        toggle: {
          background: 'transparent',
        },
      },
    },
  },
};

export default theme;
