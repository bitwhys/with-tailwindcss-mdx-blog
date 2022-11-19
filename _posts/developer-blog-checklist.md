# Developer Blog
## Components & Services
- Building the site (design)
- Publishing content (how written content gets to readers/site)
- Newsletters
- ~~Paid subscriptions~~

## Provided by Out-the-box solution (e.g. Ghost)
-   Tag archives, routes and templates
-   Author archives, routes and templates
-   Generated sitemap.xml for SEO
-   Intelligent output and fallbacks for SEO meta data
-   Automatic Open Graph structured data
-   Automatic support for Twitter Cards
-   Automatic Google AMP routes and templates
-   Custom routes and automatic pagination
-   Front-end code injection from admin

## Sections / Pages
- Home
  - Featured post(s)
  - Means to access previous posts
  - Promotion of other projects/services
  - latest YouTube video (BitByBit)
- All Posts
  - searchable
  - fliters
  - identify which posts have been previously read by user
- Single Post
  - DUH!
- TL;DR; / Resources
  - Cheatsheets
  - codesandbox's
  - shorts

---
## How to syndicate content (properly)
1. **Set up canonical URLs on your own website**
  -  i.e. `<link rel="canonical" href="https://domain.com/blog/slug-of-your-post"`
     >Make sure you're handling common issues like trailing slashes, adding/removing the www, etc. with the proper 301s. If you search for "your blogging platform + canonical urls" you'll probably find out how to set it up (if you use Gatsby, [here's a plugin](https://click.convertkit-mail4.com/5qu0437607c8umrd02a6/dpheh0h7wxdxq9sm/aHR0cHM6Ly93d3cuZ2F0c2J5anMub3JnL3BhY2thZ2VzL2dhdHNieS1wbHVnaW4tY2Fub25pY2FsLXVybHMv "https://click.convertkit-mail4.com/5qu0437607c8umrd02a6/dpheh0h7wxdxq9sm/aHR0cHM6Ly93d3cuZ2F0c2J5anMub3JnL3BhY2thZ2VzL2dhdHNieS1wbHVnaW4tY2Fub25pY2FsLXVybHMv") I've used with success, but don't forget the server-side redirects too).
