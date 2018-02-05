---
ID: 272
post_title: Pressbooks Book
author: Ned Zimmerman
post_excerpt: ""
layout: page
permalink: >
  https://docs.pressbooks.org/changelog/pressbooks-book/
published: true
post_date: 2017-09-06 21:04:06
---
### 2.0.0
* **Feature**: New Look, Part 1: Book 2.0 includes a new book theme, McLuhan, designed for textbooks and created with the support of [eCampus Ontario](https://ecampusontario.ca). Users of Luther must download it [here](https://github.com/pressbooks/pressbooks-luther) to continue using it.
* **Feature**: New Look, Part 2: Book 2.0 includes a redesigned webbook theme with many oft-requested features, including…
* **Feature**: Accessibility: We've made the Table of Contents accessible via keyboard navigation, and added other accessibility and inclusivity features throughout the theme.
* **Feature**: Customizeable Colors & Logo: Your webbook will share the color scheme and logo defined by your network's [root theme](https://github.com/pressbooks/pressbooks-aldine) for easy branding.
* **Feature**: Variable Reading Widths: Visit the Web Theme Options page to adjust your webbook's reading width.
* **Feature**: Version Tracking: Cloned books will now display a link back to their source on the webbook cover page.
* **Core Enhancement**: We've added new action hooks for appending content throughout the cover page and other areas of the webbook theme (see [here](https://gist.github.com/greatislander/65c8c2db065211e1d7da85bcb26ad031)).

### 1.12.0

* **[CORE ENHANCEMENT]** Updated Ekatra fonts (for the Gujarati language) to the latest version.
* **[FIX]** Fixed an issue where invisible parts would appear in the webbook TOC (props to Michael Shiflet for the bug report).

### 1.11.0

*   **[FEATURE]** Add parameter to pressbooks_copyright_license() to allow hiding custom copyright license (see #50).
*   **[CORE ENHANCEMENT]** Remove WordPress generator meta tag (see 6c621ad).

### 1.10.5

*   **[FIX]** Added cache busting to ensure that custom styles are loaded after save (see #46).

### 1.10.4

*   **[FIX]** Fixed an issue where part numbering would not reset properly in Prince if the part was the book’s first content (see #45).

### 1.10.3

*   **[FIX]** Fix some issues with Biblical Hebrew, Devanagari, and Turkish fonts.

### 1.10.2

*   **[ENHANCEMENT]** Updated to version 2.1 of [pressbooks/mix][1].
*   **[FIX]** The cover page now displays the subtitle from Book Information as the book's subtitle, rather than the tagline.

### 1.10.1

*   **Fix:** Consistent display of custom copyright notice (see #38).

### 1.10.0

*   **Feature:** Add support for Pressbooks 4.1.0's content licensing feature (see #25, #26, #31, #32, #37, pressbooks/pressbooks#805).
*   **Feature:** Add support for Punjabi Gurmukhi script (props to @alexpflores) (see #27).
*   **Fix:** Fix an issue where enabling social media would break the mobile webbook layout (see #28, #30).
*   **Fix:** Fix an issue where numberless chapters in a book would cause the MOBI export to fail with certain book themes (see #33).
*   **Fix:** Add webbook theme support for WordPress' built-in `<!--nextpage--> tag`, which splits a single post into multiple web pages (see #35).

### 1.9.2

*   **Fix:** Restore missing localizations (see #22)

### 1.9.1

*   **Fix:** Add missing styles to v1 SCSS books (see #21).

### 1.9.0

*   Initial independent release.
*   Migrates all theme partials and fonts from Pressbooks to Pressbooks Book, and adds full compatibility with Pressbooks 4.0.

 [1]: https://github.com/pressbooks/mix
