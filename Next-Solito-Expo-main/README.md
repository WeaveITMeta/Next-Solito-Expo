# Next.js-Solito-Expo Template 🚀

Welcome to the **Next.js-Solito-Expo** template! This is a powerful monorepo setup for building cross-platform applications using **Next.js** for web 🌐 and **Expo** for mobile 📱, with **Solito** enabling seamless code sharing between platforms.

## Why This Tech Stack is Awesome 🌟
- **Unified Codebase** 📜: Write once, deploy everywhere. Share components, pages, and navigation logic between web and mobile using Solito, reducing duplication and development time.
- **Next.js for Web** 🖥️: Leverage Next.js's powerful features like server-side rendering, static optimization, and a vast ecosystem for a top-tier web experience.
- **Expo for Mobile** 📲: Simplify mobile development with Expo's managed workflow, pre-built libraries, and rapid iteration for iOS and Android apps.
- **Solito for Navigation** 🧭: Seamlessly unify routing across platforms, ensuring consistent navigation behavior whether on web or mobile.
- **Monorepo with Turbo** 📁: Organize your project efficiently with shared packages (`shared-pages`, `shared-components`) and optimized builds, making maintenance a breeze.
- **Modern & Scalable** 🚀: Built with the latest tools and best practices, this stack is ideal for startups, MVPs, or large-scale apps looking to target multiple platforms.

This template sets you up for success with a clear structure and the power to ship fast across platforms. Whether you're a solo developer or part of a team, this stack maximizes productivity and user experience. 💪

## What's Inside? 🛠️
- **Monorepo Structure** with Turbo for managing apps and packages 📁
- **Apps**:
  - `apps/next`: Next.js app for web 🖥️
  - `apps/expo`: Expo app for mobile (iOS & Android) 📱
- **Packages** (Shared code across platforms 🔄):
  - `packages/shared-pages`: Full-page components tied to navigation routes 📄
  - `packages/shared-components`: Reusable UI components 🧩
  - `packages/shared-utils`: Utility functions and helpers 🛠️

## Getting Started 🌟
1. **Clone the Repo**:
   ```bash
   git clone <repository-url>
   cd Next-Solito-Expo-main
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run the Apps**:
   - **For Web (Next.js) 🖥️**:
     1. Open a terminal and navigate to `apps/next`.
     2. Run the following command to start the development server:
        ```bash
        npm run dev
        ```
     3. Open your browser and go to `http://localhost:3000` to see the app.
   - **For Mobile (Expo) 📱**:
     1. Open another terminal tab and navigate to `apps/expo`.
     2. Run the following command to start the Expo server:
        ```bash
        npm start
        ```
     3. Use the Expo Go app on your device or a simulator to view the mobile app by scanning the QR code, or press `i` for iOS simulator or `a` for Android emulator.

## Major Changes & Customizations ✨
We've made several enhancements to tailor this template for cross-platform development:
- **Cross-Platform Homepage** 🏠: Implemented a shared `HomeScreen` component used in both Next.js and Expo apps for a consistent user experience.
- **Platform-Specific Pages** 🎯:
  - Added `Web Exclusive` page for Next.js web app 🌐
  - Integrated `Mobile Exclusive` page for Expo mobile app using `ExclusivePage.tsx` 📱
- **Navigation Setup** 🧭: Added basic routing in both apps to navigate between the shared homepage and platform-specific pages.
- **Project Cleanup** 🧹: Removed unnecessary files like `App.js` in Expo, configuring `App.tsx` as the entry point.
- **TypeScript Fixes** 🔧: Resolved TypeScript configuration issues by removing references to non-existent base configs and adding necessary type declarations.

## Contributing 🤝
Feel free to contribute by opening issues or pull requests. Let's make this template even better together! 💪

## License 📜
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
