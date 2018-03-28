---
ID: 272
post_title: McLuhan
author: Ned Zimmerman
post_excerpt: ""
layout: page
permalink: >
  https://docs.pressbooks.org/changelog/pressbooks-book/
published: true
post_date: 2017-09-06 21:04:06
---
### 2.2.0

#### Upgrade Notice

- McLuhan 2.2.0 requires [Pressbooks 5.2.0](https://github.com/pressbooks/pressbooks/).

#### Minor Changes

- Indicate the current section in the dropdown Table of Contents ([#116](https://github.com/pressbooks/pressbooks-book/issues/116); props to [@thomasdumm](https://github.com/thomasdumm) for the suggestion): [#160](https://github.com/pressbooks/pressbooks-book/issues/160)
- Add "Show All"/"Hide All" buttons to the cover Table of Contents ([#146](https://github.com/pressbooks/pressbooks-book/issues/146); props to [@colomet](https://github.com/colomet) for the suggestion): [#161](https://github.com/pressbooks/pressbooks-book/issues/161) 

#### Patches

- Improve cache invalidation in environments where object caching occurs outside the database: [#162](https://github.com/pressbooks/pressbooks-book/issues/162) 
- Remove titlecase on `<h1>` elements: [0177f0d](https://github.com/pressbooks/pressbooks-book/commit/0177f0d)
- Fix undefined variables when visiting Table of Contents page ([#154](https://github.com/pressbooks/pressbooks-book/issues/154)): [#160](https://github.com/pressbooks/pressbooks-book/issues/160)
- Remove gap in table of contents caused by an invisible part with hidden chapters (props to [@beckej13820](https://github.com/beckej13820) for reporting): [b6ef40d](https://github.com/pressbooks/pressbooks-book/commit/b6ef40d)
- Hide "Read" actions for books without visible content ([#144](https://github.com/pressbooks/pressbooks-book/issues/144); props to [@colomet](https://github.com/colomet) for reporting): [#158](https://github.com/pressbooks/pressbooks-book/issues/158) 
- Hide the title on single views if "Show title" is disabled for current content ([#148](https://github.com/pressbooks/pressbooks-book/issues/148)): [#157](https://github.com/pressbooks/pressbooks-book/issues/157)
- Direct readers to 404 page when they try to visit missing content ([#145](https://github.com/pressbooks/pressbooks-book/issues/145); props to [@colomet](https://github.com/colomet) for reporting): [#155](https://github.com/pressbooks/pressbooks-book/issues/155) 
- Contributor labels now use singular/plural depending on how many their are ([#149](https://github.com/pressbooks/pressbooks-book/issues/149)): [#156](https://github.com/pressbooks/pressbooks-book/issues/156) 
- Add focus style to cover page "Download" button ([#143](https://github.com/pressbooks/pressbooks-book/issues/143); props to [@josieg](https://github.com/josieg) for reporting): [014148e](https://github.com/pressbooks/pressbooks-book/commit/014148e)
- Improve styling of paged navigation for search results ([#147](https://github.com/pressbooks/pressbooks-book/issues/147); props to [@colomet](https://github.com/colomet) for reporting): [2134fb1](https://github.com/pressbooks/pressbooks-book/commit/2134fb1)s

### 2.1.0
#### Minor Changes

- Add support for interactive content in ebook and PDF: [#136](https://github.com/pressbooks/pressbooks-book/pull/136/) 

#### Patches

- Restore running content author string: [#141](https://github.com/pressbooks/pressbooks-book/pull/141/)
- Fix public domain license icon: [dab3511](https://github.com/pressbooks/pressbooks-book/commit/dab3511)
- Improve support for password-protected content (see pressbooks/pressbooks#1144): [dcc829a](https://github.com/pressbooks/pressbooks-book/commit/dcc829a)
- Improve link styles in web content: [f5052d6](https://github.com/pressbooks/pressbooks-book/commit/f5052d6)
- Update footer links: [aa7c398](https://github.com/pressbooks/pressbooks-book/commit/aa7c398)

### 2.0.1

#### Patches

* Ensure that the font size setting is respected throughout the book (props to [@colomet](https://github.com/colomet) for reporting): [#131](https://github.com/pressbooks/pressbooks-book/issues/131), [#138](https://github.com/pressbooks/pressbooks-book/pull/138)
* Ensure that hiding social media buttons doesn't hide chapter license footer: [#134](https://github.com/pressbooks/pressbooks-book/issues/134), [#137](https://github.com/pressbooks/pressbooks-book/pull/137)
* Fix `date() expects parameter 2 to be an integer` warning by type casting: [#135](https://github.com/pressbooks/pressbooks-book/pull/135)
* Display chapter authors properly in single chapter views: [#132](https://github.com/pressbooks/pressbooks-book/pull/132)

### 2.0.0

#### Introducing McLuhan

As we move forward with an improved theme structure, McLuhan is replacing Luther as the new default theme for all books. Luther is now available as a standalone theme; see our [instructions for upgrading](https://docs.pressbooks.org/upgrading/#upgrading-to-pressbooks-5-x). McLuhan has been designed with textbooks in mind, but supports all kinds of content. The creation of this theme was supported by [eCampus Ontario](https://ecampusontario.ca).

#### Webbook Overhaul

The webbook has undergone a much needed design refresh, with several long requested features being introduced. These include an increased default reading width and variable width in theme options, a keyboard accessible table of contents and customizable colours and logos (inherited from network settings). We expect to continue building on this in the coming months. This development work was supported by [Ryerson University](https://www.ryerson.ca/).

#### Detailed Changelog

* **Feature**: New Look, Part 1: Book 2.0 includes a new book theme, McLuhan, designed for textbooks and created with the support of [eCampus Ontario](https://ecampusontario.ca). Users of Luther must follow our [instructions for upgrading](https://docs.pressbooks.org/upgrading/#upgrading-to-pressbooks-5-x) to continue using it.
* **Feature**: New Look, Part 2: Book 2.0 includes a redesigned webbook theme based on our new style guide, Aetna, with many oft-requested features, including…
* **Feature**: Accessibility: We've made the Table of Contents accessible via keyboard navigation, and added other accessibility and inclusivity features throughout the theme.
* **Feature**: Customizeable Colors & Logo: Your webbook will share the color scheme and logo defined by your network's [root theme](https://github.com/pressbooks/pressbooks-aldine) for easy branding.
* **Feature**: Variable Reading Widths: Visit the Web Theme Options page to adjust your webbook's reading width.
* **Feature**: Version Tracking: Cloned books will now display a link back to their source on the webbook cover page.
* **Core Enhancement**: We've improved and updated [Buckram](https://github.com/pressbooks/buckram/), our style library for book themes.
* **Core Enhancement**: We've added new action hooks for appending content throughout the cover page and other areas of the webbook theme (see [here](https://gist.github.com/greatislander/65c8c2db065211e1d7da85bcb26ad031)).
* **Core Enhancement**: We've added automated accessibility feedback for our ongoing development of the theme using [AccessLint](https://www.accesslint.com/)

### 1.12.0

* **[CORE ENHANCEMENT]** Updated Ekatra fonts (for the Gujarati language) to the latest version.
* **[FIX]** Fixed an issue where invisible parts would appear in the webbook TOC (props to Michael Shiflet for the bug report).

### 1.11.0

* **[FEATURE]** Add parameter to pressbooks_copyright_license() to allow hiding custom copyright license (see #50).
* **[CORE ENHANCEMENT]** Remove WordPress generator meta tag (see 6c621ad).

### 1.10.5

* **[FIX]** Added cache busting to ensure that custom styles are loaded after save (see #46).

### 1.10.4

* **[FIX]** Fixed an issue where part numbering would not reset properly in Prince if the part was the book’s first content (see #45).

### 1.10.3

* **[FIX]** Fix some issues with Biblical Hebrew, Devanagari, and Turkish fonts.

### 1.10.2

* **[ENHANCEMENT]** Updated to version 2.1 of [pressbooks/mix][1].
* **[FIX]** The cover page now displays the subtitle from Book Information as the book's subtitle, rather than the tagline.

### 1.10.1

* **Fix:** Consistent display of custom copyright notice (see #38).

### 1.10.0

* **Feature:** Add support for Pressbooks 4.1.0's content licensing feature (see #25, #26, #31, #32, #37, pressbooks/pressbooks#805).
* **Feature:** Add support for Punjabi Gurmukhi script (props to @alexpflores) (see #27).
* **Fix:** Fix an issue where enabling social media would break the mobile webbook layout (see #28, #30).
* **Fix:** Fix an issue where numberless chapters in a book would cause the MOBI export to fail with certain book themes (see #33).
* **Fix:** Add webbook theme support for WordPress' built-in `\<!--nextpage--\>` tag, which splits a single post into multiple web pages (see #35).

### 1.9.2

* **Fix:** Restore missing localizations (see #22)

### 1.9.1

* **Fix:** Add missing styles to v1 SCSS books (see #21).

### 1.9.0

* Initial independent release.
* Migrates all theme partials and fonts from Pressbooks to Pressbooks Book, and adds full compatibility with Pressbooks 4.0.

 [1]: https://github.com/pressbooks/mix