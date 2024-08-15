import { OperationAppConfig } from '@directus/extensions';

const config: OperationAppConfig = {
  id: 'firebase:messaging',
  name: 'Firebase Cloud Messaging',
  icon: 'send',
  description: 'Send an FCM message',
  overview: ({ target, title, body }) => [
    {
      label: 'Send To',
      text: target,
    },
    {
      label: 'Title',
      text: title,
    },
    {
      label: 'Body',
      text: body,
    },
  ],
  // @ts-ignore
  options: (panel) => {
    return [
      {
        field: 'target',
        name: 'Send To',
        type: 'string',
        meta: {
          width: 'half',
          interface: 'select-dropdown',
          note: 'Send message to this type of target.',
          required: true,
          options: {
            choices: [
              { value: 'device', text: 'Device' },
              { value: 'multicast', text: 'Multicast' },
              { value: 'topic', text: 'Topic' },
              { value: 'condition', text: 'Condition' },
            ],
          },
        },
      },
      {
        field: 'dryRun',
        name: 'Dry Run',
        type: 'boolean',
        meta: {
          width: 'half',
          interface: 'boolean',
          note: 'When set to true, test without actually sending a message.',
        },
        schema: {
          default_value: false,
        },
      },
      {
        field: 'registrationToken',
        name: 'Registration Token',
        type: 'string',
        meta: {
          hidden: ['multicast', 'topic', 'condition'].includes(panel.target),
          width: 'full',
          interface: 'input',
          note: 'Token to send to a single device.',
        },
      },
      {
        field: 'registrationTokens',
        name: 'Registration Tokens',
        type: 'json',
        meta: {
          hidden: ['device', 'topic', 'condition'].includes(panel.target),
          width: 'full',
          interface: 'input-code',
          note: 'Array of tokens to send to multiple devices.',
          options: {
            language: 'json',
            placeholder: JSON.stringify(['token1', 'token2'], null, 2),
            template: JSON.stringify(['token1', 'token2'], null, 2),
          },
        },
      },
      {
        field: 'topic',
        name: 'Topic',
        type: 'string',
        meta: {
          hidden: ['device', 'multicast', 'condition'].includes(panel.target),
          width: 'full',
          interface: 'input',
          note: 'The topic to which to send the message.',
          options: {
            placeholder: 'puppies',
          },
        },
      },
      {
        field: 'condition',
        name: 'Condition',
        type: 'string',
        meta: {
          hidden: ['device', 'multicast', 'topic'].includes(panel.target),
          width: 'full',
          interface: 'input',
          note: 'The condition determining to which topics to send the message.',
          options: {
            font: 'monospace',
            placeholder: "'TopicA' in topics && ('TopicB' in topics || 'TopicC' in topics)",
          },
        },
      },
      {
        field: 'title',
        name: 'Title',
        type: 'string',
        meta: {
          width: 'full',
          interface: 'input',
          note: "The notification's title.",
          required: true,
        },
      },
      {
        field: 'body',
        name: 'Body',
        type: 'text',
        meta: {
          width: 'full',
          interface: 'input-multiline',
          note: "The notification's body text.",
        },
      },
      {
        field: 'imageUrl',
        name: 'Image URL',
        type: 'string',
        meta: {
          width: 'full',
          interface: 'input',
          note: 'URL of an image to be displayed in the notification.',
          options: {
            placeholder: 'https://example.com/image.png',
          },
        },
      },
      {
        field: 'messagePayload',
        name: 'Message Payload',
        type: 'json',
        meta: {
          width: 'full',
          interface: 'input-code',
          note: 'Extra keys available for building notification messages for iOS and Android.',
          options: {
            language: 'json',
            placeholder: JSON.stringify(
              {
                android: {
                  notification: {
                    sound: 'default',
                  },
                },
                apns: {
                  payload: {
                    aps: {
                      sound: 'default',
                    },
                  },
                },
              },
              null,
              2
            ),
          },
        },
      },
      {
        field: 'data',
        name: 'Message Data',
        type: 'json',
        meta: {
          width: 'full',
          interface: 'input-code',
          note: 'Extra data to include in the message.',
          options: {
            language: 'json',
            placeholder: JSON.stringify(
              {
                key1: "value1",
                key2: "value2",
              },
              null,
              2
            ),
          },
        },
      },
    ];
  },
};

export default config;
