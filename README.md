# 📲 React Native Push Notifications (Android)

This project demonstrates how to implement push notifications in a React Native application for Android using **Firebase Cloud Messaging (FCM)**.

## Examples

**Configure Firebase**
```rust
Go to the Firebase Console → Create a new project.
Add an Android app:
Package Name (same as your app’s package in android/app/src/main/AndroidManifest.xml)
Download the google-services.json file.
Place it inside android/app/.
```

**Modify Android Files**
```rust
android/build.gradle

dependencies {
    classpath("com.google.gms:google-services:4.3.10")
}
```
```rust
android/app/build.gradle

dependencies {
    classpath("com.google.gms:google-services:4.3.10")
}
```

**Enable Background Messaging**
```rust
import { AppRegistry } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import App from './App';
import { name as appName } from './app.json';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
```

## Installation

```rust
npm install @react-native-firebase/app
npm install @react-native-firebase/messaging
```

![Screenshot 2025-03-17 114433](https://github.com/user-attachments/assets/56d4780e-811f-4fc1-b2c8-70b915be72b9)

![Screenshot_2025-03-17-11-39-34-256_com miui home](https://github.com/user-attachments/assets/0c5ee2e7-ad70-4bfd-a760-234b388c324a)![Screenshot_2025-03-17-11-40-03-867_com miui home](https://github.com/user-attachments/assets/67ffb057-cd75-4a6e-b584-d353a6fdbb81)
