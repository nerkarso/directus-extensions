import { defineInterface } from '@directus/extensions-sdk';
import InterfaceComponent from './interface.vue';

export default defineInterface({
  id: 'spacer',
  name: 'Spacer',
  icon: 'space_bar',
  description: 'Add empty spaces in your forms',
  component: InterfaceComponent,
  group: 'presentation',
  localTypes: ['presentation'],
  types: ['alias'],
  autoKey: true,
  hideLabel: true,
  options: [
    {
      field: 'custom_css',
      name: 'Custom CSS',
      type: 'json',
      meta: {
        width: 'full',
        interface: 'input-code',
        options: {
          language: 'json',
          placeholder: JSON.stringify(
            {
              'background-color': '#f00',
              height: '1px',
            },
            null,
            4
          ),
          template: JSON.stringify(
            {
              'background-color': '#f00',
              height: '1px',
            },
            null,
            4
          ),
        },
      },
    },
  ],
});
