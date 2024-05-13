<p align="center"><img alt="Banner" src="https://raw.githubusercontent.com/nerkarso/directus-extensions/master/.github/banner.png"></p>

# Firebase Messaging

Custom operation to send messages with Firebase.

![Screenshot 1](https://raw.githubusercontent.com/nerkarso/directus-extensions/master/operations/firebase-messaging/.screenshots/01.jpeg)
![Screenshot 2](https://raw.githubusercontent.com/nerkarso/directus-extensions/master/operations/firebase-messaging/.screenshots/02.jpeg)
![Screenshot 3](https://raw.githubusercontent.com/nerkarso/directus-extensions/master/operations/firebase-messaging/.screenshots/03.jpeg)

## Usage

1. Install the extension using a package manager or from the Marketplace:

```sh
npm install directus-extension-firebase-messaging-operation
```

2. Download the `google-services.json` file from Google Cloud and add it to the root of Directus.

3. Or upload it via the Data Studio and copy the `Filename (Disk)`.

4. Add this environment variable:

```sh
GOOGLE_APPLICATION_CREDENTIALS="./google-services.json"
# OR
GOOGLE_APPLICATION_CREDENTIALS="./uploads/<uuid>.json"
```

## Known Issues

### Fix messaging/authentication-error

1. Go to GCP Dashboard in your project.
2. Search "API and Service".
3. In the "Enable APIs and Services" section, click "+ Enable APIs and Services".
4. Then search "cloud messaging".
6. Now go to "Cloud Messaging" and "Firebase Cloud Messaging API" one by one and enable it.
