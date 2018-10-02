---
ID: 547
post_title: Pressbooks LTI Provider
author: Ned Zimmerman
post_excerpt: ""
layout: page
permalink: >
  https://docs.pressbooks.org/changelog/pressbooks-lti-provider/
published: true
post_date: 2018-09-11 09:17:48
---
## 1.1.1
 * Update izumi-kun/lti to version 1.1.5 (fix broken signature verification)
 * New `pb_integrations_multidomain_email` filter

## 1.1.0

- Update izumi-kun/lti to version 1.1.4
- Fix read_and_close session option for LTI endpoints
- Bump minimum PHP to 7.1
- Switch to Pressbooks Coding Standards
- Switch to wp dist-archive for release build

### 1.0.0

- Update izumi-kun/lti to version 1.1.3
- Add network option to (dis)allow books overrides.
- Add option to show all export versions.
- Tweak CC files for Blackboard compatibility.
- Use email prefix as login name, store LTI ID in user meta.
- Fix GitHub Updater
