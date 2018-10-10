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
### 2.5.2

#### Upgrade Notice

- McLuhan 2.5.2 requires [Pressbooks >= 5.5.3](https://github.com/pressbooks/pressbooks/releases/5.5.3).

#### Patches

- Fix invalid CSS in `.sidebar` rules (update Buckram to 1.1.2): [#275](https://github.com/pressbooks/pressbooks-book/pull/275)

### 2.5.1

#### Upgrade Notice

- McLuhan 2.5.1 requires [Pressbooks >= 5.5.2](https://github.com/pressbooks/pressbooks/releases/5.5.2).

#### Patches

- Gracefully handle missing source authors ([#265](https://github.com/pressbooks/pressbooks-book/issues/265)): [#267](https://github.com/pressbooks/pressbooks-book/pull/267)
- Add trailing slash to URL in footer: [#271](https://github.com/pressbooks/pressbooks-book/pull/271)
- Update Buckram to [1.1.1](https://github.com/pressbooks/buckram/releases/1.1.1) (see also [1.1.0](https://github.com/pressbooks/buckram/releases/1.1.0)): [#273](https://github.com/pressbooks/pressbooks-book/pull/273)

### 2.5.0

#### Upgrade Notice

- McLuhan 2.5.0 requires [Pressbooks >= 5.5.0](https://github.com/pressbooks/pressbooks/releases/5.5.0).

#### Minor Changes

- Improve the accuracy of the comparison tool: [#248](https://github.com/pressbooks/pressbooks-book/pull/248)
- Display front and back matter types in navigation: [#253](https://github.com/pressbooks/pressbooks-book/pull/253)
- Make webbook navigation consistent on all screen size (props [@colomet](https://github.com/colomet) for the [idea](https://github.com/pressbooks/ideas/issues/10)): [#256](https://github.com/pressbooks/pressbooks-book/pull/256)
- Use smaller size for the webbook cover image (props [@colomet](https://github.com/colomet) for [#250](https://github.com/pressbooks/pressbooks-book/issues/250)): [#262](https://github.com/pressbooks/pressbooks-book/pull/262)

#### Patches

- Support deleted source books in cloned book info ([#254](https://github.com/pressbooks/pressbooks-book/issues/254)): [#258](https://github.com/pressbooks/pressbooks-book/pull/258), [#259](https://github.com/pressbooks/pressbooks-book/pull/259)
- Preserve tags in collapsible section headings: ([#255](https://github.com/pressbooks/pressbooks-book/issues/255)): [#257](https://github.com/pressbooks/pressbooks-book/pull/257)
- Prevent button icons from shrinking when collapsible sections have long titles ([#261](https://github.com/pressbooks/pressbooks-book/issues/261)): [#263](https://github.com/pressbooks/pressbooks-book/pull/263)

### 2.4.3

#### Upgrade Notice

- McLuhan 2.4.2 requires [Pressbooks >= 5.4.0](https://github.com/pressbooks/pressbooks/releases/5.4.0).

#### Patches

- Fix page numbering and running content position in print PDF exports ([#244](https://github.com/pressbooks/pressbooks-book/issues/244)): [#245](https://github.com/pressbooks/pressbooks-book/pull/245)
- Upgrade to Buckram 1.0.2: [#246](https://github.com/pressbooks/pressbooks-book/pull/246)

### 2.4.2

#### Upgrade Notice

- McLuhan 2.4.2 requires [Pressbooks >= 5.4.0](https://github.com/pressbooks/pressbooks/releases/5.4.0).

#### Patches

- Upgrade to [Buckram 1.0.1](https://github.com/pressbooks/buckram/releases/1.0.1): [#235](https://github.com/pressbooks/pressbooks-book/pull/235)
- Allow sections with their own containers to collapse ([#237](https://github.com/pressbooks/pressbooks-book/issues/237), props [@beckej13820](https://github.com/beckej13820) for the bug report): [#240](https://github.com/pressbooks/pressbooks-book/pull/240)
- Adopt Pressbooks coding standards: [#241](https://github.com/pressbooks/pressbooks-book/pull/241)

### 2.4.1

#### Upgrade Notice

- McLuhan 2.4.1 requires [Pressbooks >= 5.4.0](https://github.com/pressbooks/pressbooks/releases/5.4.0).

#### Patches

- Resolve issue where visiting a page requiring authentication would return a 200 status code instead of the correct 401 status code: [#232](https://github.com/pressbooks/pressbooks-book/pull/232), [#233](https://github.com/pressbooks/pressbooks-book/pull/233)

### 2.4.0

#### Upgrade Notice

- McLuhan 2.4.0 requires [Pressbooks >= 5.4.0](https://github.com/pressbooks/pressbooks/releases/5.4.0).

##### Minor Changes

- Update to Buckram 1.0: [#226](https://github.com/pressbooks/pressbooks-book/pull/226)
- Buckram 1.0 compatibility: [#227](https://github.com/pressbooks/pressbooks-book/pull/227)
- Add lightbox feature for linked images ([#229](https://github.com/pressbooks/pressbooks-book/issues/229)): [#230](https://github.com/pressbooks/pressbooks-book/pull/230)
- Use `wp-dist-archive` for release ([#222](https://github.com/pressbooks/pressbooks-book/issues/222)): [87612eb](https://github.com/pressbooks/pressbooks-book/commit/87612eb4ca5c056b3def079c1c7e15f0c56d4315)

#### Patches

- Hide additional navigation elements and suppress keyboard navigation within an LMS ([#207](https://github.com/pressbooks/pressbooks-book/issues/207), [#219](https://github.com/pressbooks/pressbooks-book/issues/219)): [#221](https://github.com/pressbooks/pressbooks-book/pull/221)
- Ensure that navigational elements appear above H5P activities and embedded audio ([#220](https://github.com/pressbooks/pressbooks-book/issues/220)): [#223](https://github.com/pressbooks/pressbooks-book/pull/223)
- Add textdomain: [2311845](https://github.com/pressbooks/pressbooks-book/commit/2311845d770d0031fed76b32b7ca1cf26f3b1b60)

### 2.3.0

#### Upgrade Notice

- McLuhan 2.3.0 requires [Pressbooks >= 5.3.0](https://github.com/pressbooks/pressbooks/).

#### Minor Changes

- Add tool for comparison with source of cloned content ([#152](https://github.com/pressbooks/pressbooks-book/issues/152)): [#177](https://github.com/pressbooks/pressbooks-book/pull/177)
- Add support for collapsible sections ([#166](https://github.com/pressbooks/pressbooks-book/issues/166)): [#168](https://github.com/pressbooks/pressbooks-book/pull/168)
- Add support for updated license module ([pressbooks/pressbooks#1201](https://github.com/pressbooks/pressbooks/pull/1201)): [#194](https://github.com/pressbooks/pressbooks-book/pull/194)
- Add support for hiding navigational elements via .no-navigation body class ([#36](https://github.com/pressbooks/pressbooks-book/issues/36)): [#196](https://github.com/pressbooks/pressbooks-book/pull/196)
- Add context to webbook navigation ([#192](https://github.com/pressbooks/pressbooks-book/issues/192), props [@jhung](https://github.com/jhung)): [#197](https://github.com/pressbooks/pressbooks-book/pull/197)
- Update sharer.js to 0.3.3: [#176](https://github.com/pressbooks/pressbooks-book/pull/176)
- Improve font size tool ([#172](https://github.com/pressbooks/pressbooks-book/issues/172), [#173](https://github.com/pressbooks/pressbooks-book/issues/173); props [@jhung](https://github.com/jhung)): [#181](https://github.com/pressbooks/pressbooks-book/pull/181)
- Add labels to cover heading block ([#174](https://github.com/pressbooks/pressbooks-book/issues/174), props [@jhung](https://github.com/jhung)): [#182](https://github.com/pressbooks/pressbooks-book/pull/182)
- Add label to search field to clarify scope of search ([#171](https://github.com/pressbooks/pressbooks-book/issues/171), props [@jhung](https://github.com/jhung)): [#183](https://github.com/pressbooks/pressbooks-book/pull/183)
- Add aria-label and aria-role to header logo ([#170](https://github.com/pressbooks/pressbooks-book/issues/170), props [@jhung](https://github.com/jhung)): [#184](https://github.com/pressbooks/pressbooks-book/pull/184)
- Improve TOC markup ([#175](https://github.com/pressbooks/pressbooks-book/issues/175), props [@jhung](https://github.com/jhung)): [#185](https://github.com/pressbooks/pressbooks-book/pull/185), [#187](https://github.com/pressbooks/pressbooks-book/pull/187)
- Refactor helper functions: [#186](https://github.com/pressbooks/pressbooks-book/pull/186)
- Add information for usage to book title on reading pages ([#188](https://github.com/pressbooks/pressbooks-book/issues/188), props [@jhung](https://github.com/jhung)): [#191](https://github.com/pressbooks/pressbooks-book/pull/191)
- Update to Buckram 0.8.0: [#194](https://github.com/pressbooks/pressbooks-book/pull/194)

#### Patches

- Show part titles in webbook reading view: [#180](https://github.com/pressbooks/pressbooks-book/pull/180)
- Use `wp_login_url()` where possible to allow custom redirects: [#164](https://github.com/pressbooks/pressbooks-book/pull/164)
- Fix an issue where short titles would cause a page break: [#194](https://github.com/pressbooks/pressbooks-book/pull/194)

### 2.2.1

#### Upgrade Notice

- McLuhan 2.2.1 requires [Pressbooks >= 5.2.0](https://github.com/pressbooks/pressbooks/).

#### Patches

- Restore some missing webbook styles in legacy themes ([#150](https://github.com/pressbooks/pressbooks-book/issues/150)): [b7b42ec](https://github.com/pressbooks/pressbooks-book/commit/b7b42ec2f70ae6a0b6556e0864a90b9a90a21af4)

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
* **Fix:** Add webbook theme support for WordPress' built-in `<!--nextpage-->` tag, which splits a single post into multiple web pages (see #35).

### 1.9.2

* **Fix:** Restore missing localizations (see #22)

### 1.9.1

* **Fix:** Add missing styles to v1 SCSS books (see #21).

### 1.9.0

* Initial independent release.
* Migrates all theme partials and fonts from Pressbooks to Pressbooks Book, and adds full compatibility with Pressbooks 4.0.

 [1]: https://github.com/pressbooks/mix
