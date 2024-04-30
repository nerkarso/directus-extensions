export interface Attachment {
  contentType?: string;
  filename?: string;
  content?: string;
}

export interface DirectusFile {
  id: string;
  filename_disk?: string;
  filename_download: string;
  type?: string;
}

interface MailFields {
  from?: string;
  to?: string[];
  cc?: string[];
  bcc?: string[];
  replyTo?: string;
  subject?: string;
  text?: string;
  html?: string;
}

export interface MailMessage extends MailFields {
  template?: {
    name?: string;
    data?: Record<string, any>;
  };
  attachments?: Attachment[];
}

export interface Options extends MailFields {
  template: string;
  data?: Record<string, any>;
  files?: string[];
  type: "wysiwyg" | "markdown" | "template";
  body?: string;
  attachments?: {
    filename: string;
    path: string;
  }[];
}

export interface StreamAttachment {
  file: DirectusFile;
  stream: any;
}
