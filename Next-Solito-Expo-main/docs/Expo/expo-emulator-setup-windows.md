# Setting Up Android Emulators for Expo on Windows

This guide will walk you through the steps to set up Android emulators on your Windows machine for testing Expo applications.

> **Note**: iOS simulation is not available on Windows as it requires macOS. You can only set up Android emulators on Windows.

## Android Emulator Setup

### Prerequisites
- Windows 10/11 (64-bit)
- 8GB RAM minimum (16GB recommended)
- Virtualization technology enabled in BIOS/UEFI
- Admin privileges on your computer

### Checking Virtualization Support

1. **Check if virtualization is enabled**:
   - Press `Ctrl + Alt + Delete` and select Task Manager
   - Go to the "Performance" tab
   - Check at the bottom of the CPU section; it should say "Virtualization: Enabled"
   
   If virtualization is not enabled:
   - Restart your computer and enter BIOS/UEFI (usually by pressing F2, F10, F12, or Delete during startup)
   - Find virtualization technology settings (might be called VT-x, AMD-V, SVM, or Virtualization)
   - Enable it, save changes, and restart

### Installation Steps

1. **Install Android Studio**
   - Download Android Studio from the [official website](https://developer.android.com/studio)
   - Run the installer and follow the prompts
   - When prompted, select "Standard" installation type
   - This will install:
     - Android SDK
     - Android SDK Platform
     - Android Virtual Device (AVD)
     - Android Emulator

2. **Set up Environment Variables (Optional but Recommended)**
   - Right-click on "This PC" or "My Computer" and select "Properties"
   - Click on "Advanced system settings"
   - Click the "Environment Variables" button
   - Under "System variables", click "New" and add:
     - Variable name: `ANDROID_HOME`
     - Variable value: `C:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk` (replace YOUR_USERNAME with your Windows username)
   - Select "Path" from the system variables list and click "Edit"
   - Click "New" and add the following paths:
     - `%ANDROID_HOME%\platform-tools`
     - `%ANDROID_HOME%\emulator`
   - Click "OK" on all dialogs to save the changes

3. **Create an Android Virtual Device (AVD)**
   - Launch Android Studio
   - Click on `More Actions` or the hamburger menu, then select `Virtual Device Manager`
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

1. Open Command Prompt or PowerShell and navigate to your Expo project:
   ```cmd
   cd C:\path\to\your\project
   ```

2. Start Expo with the Android emulator:
   ```cmd
   npx expo start --android
   ```
   
   Or start Expo and press `a` when prompted:
   ```cmd
   npx expo start
   ```

## Troubleshooting

### Virtualization Issues
- **"HAXM is not installed" or "VT-x is disabled in BIOS"**:
  - Make sure virtualization is enabled in your BIOS settings
  - Try installing Intel HAXM manually from Android Studio's SDK Manager
  - If using AMD processor, ensure Windows Hypervisor Platform is enabled

### Emulator Performance Issues
- **Emulator is slow or laggy**:
  - Increase RAM and CPU cores allocated to the AVD in settings
  - Use an x86 or x86_64 system image instead of ARM
  - Close other memory-intensive applications
  - Update your graphics drivers

### Connection Issues
- **Expo can't connect to emulator**:
  - Make sure the emulator is fully booted before running Expo
  - Check that your development server is running on a port that's not blocked by a firewall
  - Try using a different port for Metro: `npx expo start --port 19001`

### Common Errors
- **"Unable to locate adb" error**:
  - Ensure Android SDK Platform Tools are installed via Android Studio's SDK Manager
  - Verify environment variables are set correctly
  - Restart your command prompt after setting environment variables

- **"Failed to install APK"**:
  - Check if your emulator has enough storage space
  - Try clearing the emulator data (`Tools > AVD Manager > wipe data`)

## Alternative Emulators

If you're experiencing issues with the default Android emulator, you can try these alternatives:

### Genymotion
1. Download and install Genymotion from [genymotion.com](https://www.genymotion.com/download/)
2. Create a virtual device
3. Start the device and run your Expo app using `npx expo start`

### Bluestacks
1. Download and install Bluestacks from [bluestacks.com](https://www.bluestacks.com/)
2. Install the Expo Go app from the Google Play Store
3. Run your Expo app and use the URL or QR code to open it in Expo Go

## Testing on Physical Devices

For the best testing experience, use a physical Android device:

1. Enable Developer Options on your Android device:
   - Go to `Settings > About phone`
   - Tap on "Build number" 7 times until you see "You are now a developer"

2. Enable USB Debugging:
   - Go to `Settings > System > Developer options`
   - Turn on "USB debugging"

3. Connect your device to your computer with a USB cable
4. Accept any prompts on your device
5. Install the Expo Go app from the Google Play Store
6. Run `npx expo start` and press `a` to open on your connected device

Alternatively, scan the QR code with the Expo Go app while connected to the same network as your development machine.

---

For more detailed information, visit the [Expo documentation](https://docs.expo.dev/workflow/android-studio-emulator/) and [React Native documentation](https://reactnative.dev/docs/environment-setup). 