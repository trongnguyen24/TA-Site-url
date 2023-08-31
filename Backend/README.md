# Introduction

PocketBase is an open source backend consisting of embedded database (SQLite) with realtime subscriptions, built-in auth management, convenient dashboard UI and simple REST-ish API.

The easiest way to get started is to download the prebuilt minimal PocketBase app:

https://github.com/pocketbase/pocketbase/releases/tag/v0.16.10

Once you've extracted the archive, you could start the application by running `./pocketbase serve` in the extracted directory.

And that's it! A web server will be started with the following routes:

```http://127.0.0.1:8090 - if pb_public directory exists, serves the static content from it (html, css, images, etc.)
http://127.0.0.1:8090/_/ - Admin dashboard UI
http://127.0.0.1:8090/api/ - REST API```


See the https://pocketbase.io/docs/ page for other platforms and more details

# Deploying a Pocketbase Guide

https://pocketbase.io/docs/going-to-production
