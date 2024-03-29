export type Options = {
  target: 'device' | 'multicast' | 'topic' | 'condition';
  dryRun: boolean;
  registrationToken: string;
  registrationTokens: string[];
  topic: string;
  condition: string;
  title: string;
  body?: string;
  imageUrl?: string;
  data?: {
    [key: string]: string;
  };
  messagePayload: Record<string, string>;
};
