# Next.js, Expo, and Solito Cross-Platform Template

Welcome to the ultimate cross-platform app template using **Next.js**, **Expo (React Native)**, and **Solito** in a monorepo structure managed by Turbo. This setup allows you to build for web, iOS, and Android from a single codebase with shared logic and UI components.

## Why This Tech Stack is Awesome

- **Unified Codebase**: Write once, deploy everywhere. Share components, pages, and navigation logic between web and mobile using Solito, reducing duplication and development time.
- **Next.js for Web**: Leverage Next.js's powerful features like server-side rendering, static optimization, and a vast ecosystem for a top-tier web experience.
- **Expo for Mobile**: Simplify mobile development with Expo's managed workflow, pre-built libraries, and rapid iteration for iOS and Android apps.
- **Solito for Navigation**: Seamlessly unify routing across platforms, ensuring consistent navigation behavior whether on web or mobile.
- **Monorepo with Turbo**: Organize your project efficiently with shared packages (`shared-pages`, `shared-components`) and optimized builds, making maintenance a breeze.
- **Modern & Scalable**: Built with the latest tools and best practices, this stack is ideal for startups, MVPs, or large-scale apps looking to target multiple platforms.

This template sets you up for success with a clear structure and the power to ship fast across platforms. Whether you're a solo developer or part of a team, this stack maximizes productivity and user experience.

## Getting Started

Follow these instructions to run the web and mobile apps locally.

### Web (Next.js)
1. Open a terminal and navigate to `/Users/USERNAME/Next-Solito-Expo/apps/next`.
2. Run `npm run dev` to start the development server.
3. Open your browser and go to `http://localhost:3000` to see the app.

### Mobile (Expo)
1. Open another terminal tab and navigate to `/Users/USERNAME/Next-Solito-Expo/apps/expo`.
2. Run `npm start` to start the Expo server.
3. Use the Expo Go app on your device or a simulator to view the mobile app by scanning the QR code or pressing `i` for iOS simulator or `a` for Android emulator.

## Project Structure

- **apps/**: Platform-specific code
  - **next/**: Next.js app for web
  - **expo/**: Expo app for mobile (iOS & Android)
- **packages/**: Shared code across platforms
  - **shared-pages/**: Full-page components tied to navigation routes
  - **shared-components/**: Reusable UI components
  - **shared-utils/**: Utility functions and helpers

## Need Help?

If you encounter issues or want to extend this template with additional features, refer to the documentation for [Next.js](https://nextjs.org/), [Expo](https://docs.expo.dev/), and [Solito](https://solito.dev/). For specific questions or bugs, feel free to reach out or open an issue.

Happy coding! 🚀
