# Movie App

Movie App is a simple cross-platform tracker for movies and TV shows built with Expo. It is designed to run on Android, iOS, and web from the same codebase.

The app currently focuses on three main areas:

- Movies page, split into `in corso`, `da vedere`, and `già viste`
- TV shows page, split into the same three sections
- Search page, where you can search media and open a detail screen
- Settings page, currently empty and ready for future options

At the moment the app uses mocked data so the UI and navigation can be built and tested before connecting to TMDB.

## Tech Stack

- Expo
- React Native
- Expo Router
- TanStack Query
- Zod
- react-native-toast-message
- AsyncStorage, planned for local persistence

## Project Structure

- `src/app` contains the routed screens
- `src/components` contains reusable UI components
- `services` contains mocked media data and the future API layer

## First Run

If this is your first time opening the project, follow these steps:

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

3. Open it on the platform you want:

   - press `a` for Android
   - press `i` for iOS
   - press `w` for web

## Available Scripts

```bash
npm start
npm run android
npm run ios
npm run web
npm run lint
```

## Current State

The app is already wired with:

- mocked movie and TV show cards
- a search flow
- a detail page
- a bottom navigation menu
- TanStack Query and toast infrastructure at the root

The next step will be replacing the mock services with TMDB-backed requests while keeping the same screen structure.
