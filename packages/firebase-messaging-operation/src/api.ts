import { defineOperationApi } from '@directus/extensions-sdk';
import { AppOptions, cert, initializeApp } from 'firebase-admin/app';
import { getMessaging, Message } from 'firebase-admin/messaging';
import { Options } from './_types';

const firebaseOptions: AppOptions = {
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
  }),
};

// @ts-ignore
const app = global.app || initializeApp(firebaseOptions);

// Initialize Firebase Cloud Messaging
const messaging = getMessaging(app);

export default defineOperationApi<Options>({
  id: 'firebase:messaging',
  // @ts-ignore
  handler: async (options) => {
    let message: Omit<Message, 'condition'> = {
      notification: {
        title: options.title,
        body: options?.body ?? undefined,
        imageUrl: options?.imageUrl ?? undefined,
      },
      data: options?.data ?? undefined,
    };
    // Delete empty properties
    message = JSON.parse(JSON.stringify(message));

    switch (options.target) {
      case 'device':
        return messaging
          .send(
            {
              token: options.registrationToken,
              ...message,
            },
            options.dryRun
          )
          .then((response) => response)
          .catch((error) => ({ error }));
      case 'multicast':
        return messaging
          .sendMulticast({
            tokens: options.registrationTokens,
            ...message,
          })
          .then((response) => response)
          .catch((error) => ({ error }));
      case 'topic':
        return messaging
          .send(
            {
              topic: options.topic,
              ...message,
            },
            options.dryRun
          )
          .then((response) => response)
          .catch((error) => ({ error }));
      case 'condition':
        return messaging
          .send(
            {
              condition: options.condition,
              ...message,
            },
            options.dryRun
          )
          .then((response) => response)
          .catch((error) => ({ error }));
      default:
        return { error: { message: 'Invalid target option' } };
    }
  },
});
