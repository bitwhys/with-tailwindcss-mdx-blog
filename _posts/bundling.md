---
title: Bundling
---
## Where bundling comes from?

We started bundling our assets because of performance reasons.

-   HTTP1 supports a limited requests on a single connection. Creating connections for each asset was killing the performance.
-   We started bundling things page by page to increase performance with more effective caching.
-   We were able to add the fingerprint to it and upload it to a CDN. (home-page.231434.js). So we were able to deploy our application by dockerizing it.
-   Bundling also helps us reduce the page size more because bundler knows the full system. This means it can remove unused things and minify things easier. You can't do it without a bundler easily.
-   Also, bundlers are using transpilers. Browsers can't always be able to run the codes that we write like Typescript, CoffeeScript. Bundlers can transpile these codes easily into bundles.

## Do we still need it?

Nowadays things are changed a lot like we bundle our assets.

-   First of all, almost every browser now supports HTTP/2. So we can request multiple files on the same connection. Bundling is not needed because of this anymore. Also, we have http/2 server push.
-   Libraries like React, Angular, Vue are a lot more effective in size. They can be easily downloaded to a page from a gzip supporting source.

These are the reasons we don't need bundling anymore.

**But based on your project we may still need bundling. This is the real truth.**

I would still go with bundling.

---

In my company, we are using a container orchestration system to control our dockerized applications. We may run more than a version same time. Creating fingerprints for files while bundling and uploading them to CDN is still more effective for us. And also we are trying to get use of [prefetching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ) and [preloading](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content). CDN helps us reduce the loading times of other country visitors. And also we are getting support from service worker to change assets when we need it by page.

So actually nowadays it is just based on your project. There are not much performance reasons anymore.
