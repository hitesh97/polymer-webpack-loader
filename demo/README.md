# Experian Portal Header project

## Setup

```
npm i
bower i
npm start
```

If you are getting "Unable to verify the first certificate" error whilst installing selenium web drivers
then, set "$env:NODE_TLS_REJECT_UNAUTHORIZED = 0" on windows and "NODE_TLS_REJECT_UNAUTHORIZED = 0" on mac
--also sometimes it helps to turn off Strict-ssl on npm

## What's included

This project uses polymer-webpack-loader and is a basic project set up that,
  Allows you to define a Polymer element which uses ES Module, syntax to `import` a dependency from the `node_modules` directory.
  Allows you to create your own build pipeline for 'Dev', 'Test' and 'PROD' builds.
  Template for dev, test and prod builds.
