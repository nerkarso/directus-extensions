import DisplayComponent from './display.vue';

export default {
  id: 'date-formatter',
  name: 'Date Formatter',
  icon: 'edit_calendar',
  description: 'Format your date',
  component: DisplayComponent,
  types: ['date', 'datetime'],
  options: [
    {
      field: 'dateFormat',
      type: 'string',
      name: 'Date Format',
      meta: {
        interface: 'text',
        placeholder: 'Enter date format (e.g. DD/MM/YYYY)',
        note: 'https://day.js.org/docs/en/display/format#list-of-all-available-formats',
      },
    },
  ],
};
