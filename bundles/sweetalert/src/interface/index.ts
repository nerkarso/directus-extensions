import { defineInterface } from '@directus/extensions-sdk';
import InterfaceComponent from './interface.vue';

export default defineInterface({
  id: 'sweetalert:button',
  name: 'SweetAlert Button',
  icon: 'smart_button',
  description: 'Show a SweetAlert when clicking a button',
  component: InterfaceComponent,
  group: 'presentation',
  localTypes: ['presentation'],
  types: ['alias'],
  autoKey: true,
  hideLabel: true,
  options: [
    {
      field: 'button_text',
      name: 'Button Text',
      type: 'string',
      meta: {
        width: 'half',
        interface: 'string',
        options: {
          placeholder: 'Show alert',
        },
      },
    },
    {
      field: 'configuration',
      name: 'Configuration',
      type: 'json',
      meta: {
        width: 'full',
        interface: 'input-code',
        options: {
          language: 'json',
          placeholder: JSON.stringify(
            {
              title: '',
              text: '',
              icon: '',
              heightAuto: false,
            },
            null,
            2
          ),
          template: JSON.stringify(
            {
              title: 'Good job!',
              text: 'You clicked the button!',
              icon: 'success',
              heightAuto: false,
            },
            null,
            2
          ),
        },
      },
    },
  ],
});
