---
ID: 416
post_title: Aldine
author: Ned Zimmerman
post_excerpt: ""
layout: page
permalink: >
  https://docs.pressbooks.org/changelog/pressbooks-aldine/
published: true
post_date: 2018-02-26 20:46:14
---
### 1.1.0

#### Minor Changes

- Add editor buttons to insert shortcodes for page sections and calls to action: [#108](https://github.com/pressbooks/pressbooks-aldine/pull/108/)
 
#### Patches

- Hide archived, spammed and deleted books from catalog (props [@colomet](https://github.com/colomet) for reporting): [#107](https://github.com/pressbooks/pressbooks-aldine/pull/107)

### 1.0.1

#### Patches

* Load header image from `dist` ([#104](https://github.com/pressbooks/pressbooks-aldine/issues/104), props [@steven1350](https://github.com/steven1350) for reporting): [826dc93](https://github.com/pressbooks/pressbooks-aldine/commit/826dc930869041df0ffdd15748f686013fbed54e)
* Prevent page header from overlapping menu in some situations ([#103](https://github.com/pressbooks/pressbooks-aldine/issues/103), props [@beckej13820](https://github.com/beckej13820) for reporting): [df793ac](https://github.com/pressbooks/pressbooks-aldine/commit/df793acda9a4ccd4975056e150862e73f9e8379f)
* Improve display of pages without content ([#102](https://github.com/pressbooks/pressbooks-aldine/issues/102)): [0866e9a](https://github.com/pressbooks/pressbooks-aldine/commit/0866e9afe80f82b7d79dfd5a4d17095ee0bf716b)
* Update activation routine to use shortcodes: [1409a01](https://github.com/pressbooks/pressbooks-aldine/commit/1409a01b7759b6b4117316763957d498a5827692)
* Use a unique cookie name for the network homepage font size setting: [d109496](https://github.com/pressbooks/pressbooks-aldine/commit/d10949677ccc3fee67fbb9b1069c360b2270c779)

### 1.0.0

#### Customisation & Branding

Aldine is the new default network theme for Pressbooks installations. Its creation was supported by [Ryerson University](https://ryerson.ca). Designed with customization in mind, it allows network managers to add institutional branding in the form of colours, logos and contact information, as well as custom content in blocks on the front page.

#### Standalone Catalog

In addition, Aldine introduces a standalone catalog page that is sortable and filterable by subject or license. Adding books to the catalog is controlled in the [same way as before](https://eduguide.pressbooks.com/chapter/catalogs/).

#### Additional Pages

You can now more easily add additional pages to the network root, such as an “About Us” or “Help” page.