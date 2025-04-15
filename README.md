### To create the app used the following commands:
1. `npm install -g expo-cli`
2. `npx create-expo-app MotivationalBg --template blank`

### To run the app, used the following command:
`npx expo start`
To access app on Expo Go, the wifi and PC needs to be on same wifi.

If PC and phone are connected to the different wifi and you want to run the app in mobile using Expo Go app then use following command to start:
`npx expo start --tunnel`

### Other Packages installed :
| Package                          | Why it’s needed                                               |
|----------------------------------|----------------------------------------------------------------|
| `@react-navigation/native`       | Core navigation logic for React Native apps                   |
| `@react-navigation/bottom-tabs`  | Enables bottom tab bar navigation                             |
| `react-native-screens`           | Optimizes screen mounting/unmounting for performance          |
| `react-native-safe-area-context` | Prevents UI overlap with notches, status bars, etc.           |
| `react-native-gesture-handler`   | Handles complex gestures (swipe, tap, long-press, etc.)       |
| `react-native-reanimated`        | Enables high-performance animations and smooth transitions     |
| `react-native-svg`               | Adds support for SVG rendering (icons, vector graphics)        |
| `react-native-set-wallpaper`     | Adds support for setting the background wallpaper        
                 |


## To build apk used the following commands:
1. `npx expo prebuild`
2. `npm install -g eas-cli`
3. `eas login`
4. `eas build:configure`
5. `eas build --platform android --profile preview` (we can use --profile production also for more optimized release builds)

## To build locally:
1. [Install Andorid SDK](https://developer.android.com/studio#cmdline-tools)
2. Set Environment Variables (ANDROID_HOME and Path)
3. Run the following command from cmd : `sdkmanager "platform-tools" "platforms;android-35" "build-tools;35.0.0"` (run `sdkmanager --list` and `adb --version` to check if its successfully installed)
4. [Download the ndk](https://github.com/android/ndk/wiki/Unsupported-Downloads)
5. Run `.\gradlew clean` from android/ directory
6. a. Run `.\gradlew assembleRelease` to get .apk file (good for local testing)
   b. Run `.\gradlew bundleRelease` to get .aab file (for PlayStore upload)