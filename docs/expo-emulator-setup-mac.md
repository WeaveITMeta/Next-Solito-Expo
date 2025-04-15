# Setting Up iOS and Android Emulators for Expo on macOS

This guide will walk you through the steps to set up both iOS and Android emulators on your Mac for testing Expo applications.

## iOS Simulator Setup

### Prerequisites
- A Mac computer (iOS simulation is not available on Windows)
- macOS 10.15.4 or newer
- At least 8GB of RAM recommended

### Installation Steps

1. **Install Xcode**
   - Download Xcode from the [Mac App Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12)
   - After installation, open Xcode to accept the license agreement
   - Let Xcode install the required components when prompted

2. **Install Command Line Tools**
   - Open Terminal
   - Run: `xcode-select --install`
   - Follow the prompts to complete the installation

3. **Start iOS Simulator**
   - Open Terminal
   - Run: `open -a Simulator`
   - The iOS Simulator will launch with the default device

4. **Select a Different iOS Device (Optional)**
   - With Simulator open, go to `File > Open Simulator > [Choose a Device]`
   - Select from available iPhone or iPad models and iOS versions

### Running Expo on iOS Simulator

1. Navigate to your Expo project:
   ```bash
   cd /path/to/your/project
   ```

2. Start Expo with the iOS simulator:
   ```bash
   npx expo start --ios
   ```
   
   Or start Expo and press `i` when prompted:
   ```bash
   npx expo start
   ```

## Android Emulator Setup

### Prerequisites
- macOS 10.14 or newer
- 8GB RAM minimum (16GB recommended)
- Virtualization support enabled (most Macs have this enabled by default)

### Installation Steps

1. **Install Android Studio**
   - Download Android Studio from the [official website](https://developer.android.com/studio)
   - Open the downloaded .dmg file and drag Android Studio to your Applications folder
   - Launch Android Studio

2. **Initial Setup**
   - Complete the Android Studio setup wizard
   - When prompted, select "Standard" installation type
   - This will install:
     - Android SDK
     - Android SDK Platform
     - Android Virtual Device (AVD)

3. **Create an Android Virtual Device (AVD)**
   - In Android Studio, click on `More Actions` or the hamburger menu, then select `Virtual Device Manager`
   - Click `Create Virtual Device`
   - Select a phone definition (e.g., Pixel 6)
   - Select a system image (recommend an x86 image with Google Play services)
     - You may need to download the system image if it's not already installed
   - Customize the AVD configuration if needed (default settings are usually fine)
   - Click `Finish`

4. **Start the Android Emulator**
   - In the Virtual Device Manager, click the play button (▶️) next to your AVD
   - Wait for the emulator to start and show the Android home screen

### Running Expo on Android Emulator

1. Navigate to your Expo project:
   ```bash
   cd /path/to/your/project
   ```

2. Start Expo with the Android emulator:
   ```bash
   npx expo start --android
   ```
   
   Or start Expo and press `a` when prompted:
   ```bash
   npx expo start
   ```

## Troubleshooting

### iOS Simulator Issues
- **Simulator is slow**: Close other applications to free up memory
- **App doesn't install**: Try resetting the simulator (`Device > Erase All Content and Settings`)
- **Outdated simulator**: Update Xcode to get the latest iOS simulators

### Android Emulator Issues
- **Emulator is slow**: 
  - Enable hardware acceleration in Android Studio settings
  - Use an x86 or x86_64 system image instead of ARM
- **"Unable to locate adb" error**: Ensure Android SDK Platform Tools are installed via Android Studio's SDK Manager
- **Expo can't connect to emulator**:
  - Make sure the emulator is fully booted before running Expo
  - Check that your development server is running on a port that's not blocked by a firewall

## Optimizing Performance

### iOS Simulator
- Keep only the simulators you need (remove others via `Window > Devices and Simulators`)
- Enable `Connect Hardware Keyboard` for easier typing

### Android Emulator
- Allocate more RAM and CPU cores to the emulator in AVD settings
- Enable `Cold Boot` option if the emulator gets stuck on startup
- Use a snapshot to speed up emulator startup time

## Testing on Physical Devices

While emulators are convenient, testing on physical devices is recommended for final testing as it provides the most accurate representation of user experience.

### iOS Physical Device
- Install the Expo Go app from the App Store
- Make sure your Mac and iOS device are on the same network
- Scan the QR code with your iOS device's camera

### Android Physical Device
- Install the Expo Go app from the Google Play Store
- Make sure your Mac and Android device are on the same network
- Scan the QR code with the Expo Go app or use the URL method

---

For more detailed information, visit the [Expo documentation](https://docs.expo.dev/workflow/android-studio-emulator/) and [React Native documentation](https://reactnative.dev/docs/environment-setup). 