![Banner](https://user-images.githubusercontent.com/522079/158864859-0fbeae62-9d7a-4619-b35e-f8fa5f68e0c8.png)

# firebase-messaging-operation

Custom operation to send messages with Firebase.

## Installation

1. Install Node.js module:

```sh
npm install directus-extension-firebase-messaging-operation
```

2. Add these environment variables:

```sh
FIREBASE_PROJECT_ID=""
FIREBASE_CLIENT_EMAIL=""
FIREBASE_PRIVATE_KEY=""
```

## Known Issues

### Fix messaging/authentication-error

1. Go to GCP Dashboard in your project.
2. Search "API and Service".
3. In the "Enable APIs and Services" section, click "+ Enable APIs and Services".
4. Then search "cloud messaging".
6. Now go to "Cloud Messaging" and "Firebase Cloud Messaging API" one by one and enable it.
