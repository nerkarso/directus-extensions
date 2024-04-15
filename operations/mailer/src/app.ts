import { OperationAppConfig } from '@directus/extensions';

const config: OperationAppConfig = {
  id: 'mailer',
  name: 'Send Email',
  icon: 'attach_email',
  description: 'Send an email with Nodemailer',
  overview: ({ from, to, subject }) => [
    {
      label: 'From',
      text: from,
    },
    {
      label: 'To',
      text: Array.isArray(to) ? to.join(', ') : to,
    },
    {
      label: 'Subject',
      text: subject,
    },
  ],
  // @ts-ignore
  options: (panel) => {
    return [
      {
        field: 'from',
        name: 'From',
        type: 'string',
        meta: {
          width: 'full',
          interface: 'input',
          note: 'The email address of the sender.',
          options: {
            placeholder: 'sender@server.com or "Sender Name" sender@server.com',
          },
        },
      },
      {
        field: 'to',
        name: 'To',
        type: 'csv',
        meta: {
          width: 'half',
          interface: 'tags',
          note: 'Comma separated list of recipients email addresses.',
          options: {
            placeholder: 'Add e-mail address and press enter',
            iconRight: 'alternate_email',
          },
        },
      },
      {
        field: 'replyTo',
        name: 'Reply-To',
        type: 'string',
        meta: {
          width: 'half',
          interface: 'input',
          note: 'An email address that will appear in the Reply-To field.',
          options: {
            placeholder: 'sender@server.com',
          },
        },
      },
      {
        field: 'cc',
        name: 'CC',
        type: 'csv',
        meta: {
          width: 'half',
          interface: 'tags',
          note: 'Comma separated list of recipients email addresses that will appear in the CC field.',
          options: {
            placeholder: 'Add e-mail address and press enter',
            iconRight: 'alternate_email',
          },
        },
      },
      {
        field: 'bcc',
        name: 'BCC',
        type: 'csv',
        meta: {
          width: 'half',
          interface: 'tags',
          note: 'Comma separated list of recipients email addresses that will appear in the BCC field.',
          options: {
            placeholder: 'Add e-mail address and press enter',
            iconRight: 'alternate_email',
          },
        },
      },
      {
        field: 'subject',
        name: 'Subject',
        type: 'string',
        meta: {
          width: 'full',
          interface: 'input',
          note: 'The subject of the email.',
        },
      },
      {
        field: 'template',
        name: 'Template',
        type: 'string',
        meta: {
          width: 'full',
          interface: 'input',
          note: 'Name of the template to be used for the email. Custom email templates are stored in the templates folder in Directus extensions folder.',
          options: {
            placeholder: 'newsletter',
          },
        },
      },
      {
        field: 'data',
        name: 'Data',
        type: 'json',
        meta: {
          width: 'full',
          interface: 'input-code',
          note: 'Data to be used in the template.',
          options: {
            language: 'json',
          },
        },
      },
      {
        field: 'attachments',
        name: 'Attachments',
        type: 'json',
        meta: {
          width: 'full',
          interface: 'input-code',
          note: 'An array of attachment objects.',
          options: {
            language: 'json',
            placeholder: JSON.stringify(
              [
                {
                  filename: 'file.pdf',
                  path: './uploads/file.pdf',
                },
                {
                  filename: 'hello.txt',
                  content: 'Hello World',
                },
              ],
              null,
              2
            ),
            template: JSON.stringify(
              [
                {
                  filename: 'file.pdf',
                  path: './uploads/file.pdf',
                },
              ],
              null,
              2
            ),
          },
        },
      },
      {
        field: 'files',
        name: 'Files',
        type: 'csv',
        meta: {
          width: 'full',
          interface: 'tags',
          note: 'Comma separated list of file IDs.',
          options: {
            placeholder: 'Add file ID and press enter',
            iconRight: 'attach_file',
          },
        },
      },
    ];
  },
};

export default config;
