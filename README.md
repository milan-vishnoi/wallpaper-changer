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