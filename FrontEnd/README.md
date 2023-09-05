# Deploying a SvelteKit App Guide

This guide will walk you through the process of deploying a SvelteKit app. We'll cover updating environment variables, local development, and building the app for deployment.

## Table of Contents

- [Updating Environment Variables](#updating-environment-variables)
- [Local Development](#local-development)
- [Building the App](#building-the-app)

## Updating Environment Variables

Before deploying your SvelteKit app, make sure to set the appropriate environment variables. These variables are used to configure the app's behavior in different environments.

1. Locate the `.env` file in the root directory of your SvelteKit app.

2. Update the values of `PUBLIC_DEV_API_URL` and `PUBLIC_BUILD_API_URL` according to your deployment settings. For example:

   ```plaintext
   PUBLIC_DEV_API_URL="http://127.0.0.1:8090"
   PUBLIC_BUILD_API_URL="https://api.example.com"
   ```

   Replace the URLs with the actual URLs of your development and production APIs.

## Local Development

Before deploying, it's a good practice to test your app locally.

1. Open a terminal and navigate to your project directory.

2. Install dependencies if you haven't already:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Access your app in a web browser at `http://localhost:5173`.

   Make sure your app functions correctly in the development environment.

## Admin Front End account

```
User: sites@gmail.com
pass: sites@123
```

## Building the App

Before deploying your app to a production environment, you need to build it.

1. In the terminal, while in your project directory, run:

   ```bash
   npm run build
   ```

   This command will generate optimized static files for your app in the `build` directory.
