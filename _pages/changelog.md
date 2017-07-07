---
ID: 78
post_title: Changelog
author: Ned Zimmerman
post_excerpt: ""
layout: page
permalink: http://docs.pressbooks.org/changelog/
published: true
post_date: 2017-07-07 22:29:32
---
### 3\.9.10

*   **Feature:** Strikethrough text (the `<del>` tag) can now be used in front matter, part, chapter and back matter titles (see #790).

### 3\.9.9

**NOTICE:** Pressbooks now requires [WordPress 4.7.5][1].

*   **Feature:** A curated listed of recommended plugins is now displayed within the plugin installer (see #729).
*   **Feature:** Search and Replace now supports regular expressions (props to @stepmuel; see #754). This feature can be enabled by adding: `define( 'PB_ENABLE_REGEX_SEARCHREPLACE', true );` to `wp-config.php`.
*   **Enhancement:** Updating a book theme will now trigger the regeneration of the webbook stylesheet (see #727 and #762).
*   **Enhancement:** There is now a specific template part, `private.php`, for the page that is displayed when a book is private (props to @stepmuel; see #755).
*   **Enhancement:** "Part" is now properly localized in the PDF Table of Contents (see #742).
*   **Enhancement:** Improved blank page rules in theme components.
*   **Enhancement:** The Ebook theme options tab is now hidden when Ebook dependencies are missing (props to @masaka222; see #745).
*   **Enhancement:** Dependency check results are now stored in site transients to reduce unnecessary function calls (see #749, #750).
*   **Enhancement:** Replaced variables with constants where appropriate (see #751).
*   **Enhancement:** Replaced uses of `PATH_CURRENT_SITE` with `network_home_url()` (props to @jeremyfelt; see #734).
*   **Enhancement:** Current `$post` is now included with `wp_enqueue_media()` in `symbionts/custom-metadata` (props to @jeremyfelt; see #735).
*   **Fix:** Removed the sticky navigation bar that overlapped webbook content (props to @pbstudent for the bug report; see #747 and #760).
*   **Fix:** Fixed an issue where running content strings would not be populated when a custom title page was used (see #496 and #761).
*   **Fix:** Fixed an issue where the book title would not update properly (see #542 and #746).
*   **Fix:** Fixed issues that arose when `pb_language` or `user_interface_lang` were not set (props to @monkecheese for initial bug report and testing; see #738, #739, #740).
*   **Fix:** Fixed an issue where a database error would be thrown when installing on a utf8mb4 MySQL instance (props to @jeremyfelt; see #733).

### 3\.9.8.2

**NOTICE:** Pressbooks' PHP version requirement (>= 5.6) and WordPress version requirement (>= 4.7.3) can no longer be overridden. Before installing Pressbooks 3.9.8, please ensure that your system has been upgraded accordingly.

*   **Fix:** Switched to an unmodified version of htmLawed to fix a regression in [vanilla/htmlawed][2] which was stripping paragraph tags from blockquotes (see #723).
*   **Fix:** Fixed an issue where users would be informed that their theme had been unlocked when saving Export options even thought it was already unlocked (see #722).
*   **Fix:** Fixed an issue where wp-cli would give a permissions error because of the `\Pressbooks\ThemeLock::isLocked()` check (see #721).

### 3\.9.8.1

**NOTICE:** Pressbooks' PHP version requirement (>= 5.6) and WordPress version requirement (>= 4.7.3) can no longer be overridden. Before installing Pressbooks 3.9.8, please ensure that your system has been upgraded accordingly.

*   **Fix:** Restored some webbook styles that were being omitted in older book themes.

### 3\.9.8

**NOTICE:** Pressbooks' PHP version requirement (>= 5.6) and WordPress version requirement (>= 4.7.3) can no longer be overridden. Before installing Pressbooks 3.9.8, please ensure that your system has been upgraded accordingly.

*   **Feature:** Themes can now be locked a particular version. The theme's stylesheets and other assets will be copied into the book's media directory and used for future exports (see #657, #704).
*   **Feature:** The paragraph separation option is now available for webbooks (see #655, #696).
*   **Feature:** The section openings PDF theme option now supports additional options (see #450, #691).
*   **Feature:** When export sharing is enabled, the download links are now stable, e.g. `/open/download?type=pdf` (props to @rootl for the suggestion; see #684, #699).
*   **Enhancement:** Pressbooks now supports third-party export formats (see #385 and #674).
*   **Enhancement:** `\Pressbooks\Options` field display functions have been refactored to use an array of arguments instead of a list of parameters (see #648, #697) [BREAKING CHANGE].
*   **Enhancement:** SCSS overrides have been moved into their respective theme options classes (see #452, #701).
*   **Enhancement:** Webbook interface styles have been separated from the Luther book theme's content styles (see #656, #708).
*   **Enhancement:** Webbook stylesheet and script enqueuing has been clarified and simplified (see #396).
*   **Enhancement:** Searching now excludes non-Pressbooks post types (props to @colomet for the report; see #706, #707).
*   **Enhancement:** Front-end scripts are now loaded asynchronously (props to @bdolor; see #681).
*   **Enhancement:** htmLawed is now a Composer dependency (see #702).
*   **Enhancement:** The sassphp dependency is no longer required (see #693).
*   **Enhancement:** The SaxonHE dependency check can now be overridden (see https://github.com/pressbooks/pressbooks/commit/7ea32fe).
*   **Enhancement:** [perchten/rmrdir][3] is now used for recursive directory removal (see [37ab804][4]).
*   **Enhancement:** Added \Pressbooks\Utility\rcopy() function for recursive directory copying (props to @blobaugh for the [example code][5]; see [52b087b][6]).
*   **Enhancement:** Added `pb_dependency_errors` filter hook for suppression of dependency errors (see #719).
*   **Fix:** Images on custom title pages are now exported as expected in EPUB and Kindle (see #690, #698).
*   **Fix:** The diagnostics page now functions as expected on the root blog (props to @colomet for the report; see #688, #695);
*   **Fix:** Print PDF exports are now available for download when export sharing is enabled (props to @bdolor; see #677).
*   **Fix:** Numberless chapters no longer display a lonely period in PDF outputs from SCSS v2 themes (props to @thomasdumm for the report; see #670).
*   **Fix:** Importing as a draft now works for EPUB imports (props to @thomasdumm for the report; see #668).

### 3\.9.7.2

**NOTICE:** Pressbooks now requires [WordPress 4.7.3][7].

*   **Enhancement:** Streamlined and refactored the running content SCSS partials for SCSS-based themes (see #675 and #686).

### 3\.9.7.1

*   **Fix:** Fixed an issue where the custom CSS file for webbooks would not be loaded on subdirectory installs.

### 3\.9.7

**NOTICE:** Pressbooks now requires [WordPress 4.7.2][8].

*   **Feature:** Added support for Canadian Indigenous syllabics, which are used for the Chipewyan, Inuktitut, Plains Cree, Cree, Moose Cree, Slave, Northern Cree, Naskapi, Swampy Cree, Southern East Cree, and Ojibwa languages (props to @bdolor; see #635).
*   **Feature:** Part numbers are now displayed consistently across all formats (see #341).
*   **Enhancement:** SCSS maps are now used to provide variables for different export formats.
*   **Enhancement:** The global `_titles.scss` partial for SCSS v2 themes has been split into `_pages.scss` and `_section-titles.scss` for better separation of concerns.
*   **Enhancement:** Added the `pb_add_latex_renderer_option`, `pb_require_latex`, `pb_latex_renderers`, and `pb_add_latex_config_scripts` filters and the `pb_enqueue_latex_scripts` action to support custom LaTeX renderers (props to @monkecheese; see #583).
*   **Enhancement:** Added the `pb_root_description` filter to allow the default root blog description to be changed.
*   **Enhancement:** Custom theme options can now be registered, either on an existing tab or on a new tab (see #470 and #618).
*   **Enhancement:** Added the `pb_publisher_catalog_query_args` filter to allow customizing the query for books on the front page of Pressbooks Publisher (see #619).
*   **Enhancement:** Added the `\Pressbooks\Metadata::getJsonMetadata()` function and the `pb_json_metadata` filter to support returning book information as JSON data for posting to an API endpoint (see #637).
*   **Enhancement:** Added the `pb_add_bisac_subjects_field` filter, which allows those with a licensed copy of the BISAC subject headers to display a multiple select instead of Pressbooks' default text input (see #637).
*   **Enhancement:** Added the `pb_audience` field to the Book Information page to allow setting a book's target audience (see #638).
*   **Enhancement:** The export metadata settings for all book contents are now fetched in a single query within `\Pressbooks\Book::getBookStructure()` (props to @monkecheese; see #633).
*   **Enhancement:** The book language will now be set to the language selected when the book is registered (see #595).
*   **Enhancement:** The Comments column on the Organize page will now be hidden if comments are disabled (see #644).
*   **Enhancement:** Core textbox styles now apply to the equivalent `.bcc-*` selectors for improved compatibility with Pressbooks Textbook.
*   **Enhancement:** Imported content can optionally be set to `published` status instead of `draft` (see #593).
*   **Enhancement:** Front matter, chapter, and back matter types will now be imported from Pressbooks WXR files (see #601).
*   **Enhancement:** Empty front matter, chapters, and back matter will now be imported from Pressbooks WXR files (see #592).
*   **Enhancement:** Title display and export metadata will now be imported from Pressbooks WXR files (see #606).
*   **Enhancement:** Completing an import from a Pressbooks WXR file will now correctly enumerate different content types instead of labelling all as chapters.
*   **Enhancement:** Bold, italic, superscript, and subscript text is now properly imported from Word documents (props to @crism; see #629).
*   **Enhancement:** Inline language attributes are now properly imported from Word documents (props to @crism; see #630 and #639).
*   **Enhancement:** Removed the Postmark-specific `wp_mail()` override (see #587).
*   **Enhancement:** Export dependency errors are now grouped intelligently into a single alert (see #646).
*   **Enhancement:** Javascript and SCSS files are now validated on pull requests using [Hound][9] (see #617).
*   **Enhancement:** The sender address and name used for emails from a Pressbooks instance can now be customized by defining constants for `WP_MAIL_FROM` and `WP_MAIL_FROM_NAME` (see #663).
*   **Fix:** To prevent an erroneous reversion to the WordPress < 3.5 uploads directory structure, `\Pressbooks\Utility\get_media_prefix()` now checks for the `ms_files_rewriting` site option instead of for the `blogs.dir` directory.
*   **Fix:** The custom CSS file URL scheme is now relative, which should prevent mixed content errors under some circumstances (see #599).
*   **Fix:** Fixed an undefined index error in mPDF theme options (props to @monkecheese; see #613).
*   **Fix:** Fixed a database max key length error when creating the catalog tables (see #589).
*   **Fix:** Removed the Pressbooks plugin installer tab, which was preventing plugin searching from being conducted (see #596).
*   **Fix:** Deleted books will now be removed from user catalogs (see #412).
*   **Fix:** Fixed an issue where hyphenation would be enabled in Prince exports even if it was disabled in theme options (see #645).
*   **Fix:** Fixed an issue where custom running content was being displayed in the wrong place (see #623).
*   **Fix:** Fixed an issue where OpenOffice files would not be properly exposed for download (see #649).
*   **Fix:** The time allowed for an mPDF export to complete has been conditionally increased to account for certain edge cases (props to @bdolor; see #652).
*   **Fix:** Added between section numbers and titles in the mPDF TOC (props to @bdolor; see #653).
*   **Fix:** We now use the https endpoint for the Automattic LaTeX server to avoid mixed content errors (props to @bdolor; see #651).
*   **Fix:** Publisher logos inserted via `add_theme_support( 'pressbooks_publisher_logo' )` hook are now properly copied into EPUB outputs (see #666).

### 3\.9.6

**NOTICE:** Pressbooks now requires [WordPress 4.7 "Vaughan"][10]. **NOTICE:** Pressbooks now requires [PrinceXML 11][11] for PDF exports.

*   **Feature:** If you select a language on the book information page and the WordPress language pack for that language is available but not installed, Pressbooks will try to install it for you (and politely inform you if it can't).
*   **Feature:** Added Hindi language support using [Noto Sans Devanagari][12] and [Noto Serif Devanagari][13].
*   **Enhancement:** The whitelist-based theme filtering behaviour of Pressbooks =< 3.9.5.1 has been removed; all book themes are now available for use in all books (if network enabled), and all non-book themes are now available for use on the root blog (if network enabled). If you wish to restrict theme availability further, you can do so by adding additional filters to the `allowed_themes` filter hook.
*   **Enhancement:** Added the ability to retry asset fetching during EPUB export in the event of server errors (props to @nathanielks, see [7344674][14])
*   **Enhancement:** Added filter and action hooks to support the addition of import modules via third-party plugins (props to @monkecheese, see [4d7ca64][15]).
*   **Enhancement:** Added the `pb_disable_root_comments` filter hook for control over comment display on the root blog (defaults to `true` -- disable comments -- as Pressbooks Publisher does not support comments).
*   **Enhancement:** Added a link from the user's catalog logo or profile image to their profile URL, if set.
*   **Enhancement:** Added variables for textbox header font size and text alignment to book theme partials.
*   **Enhancement:** Removed our custom `user_interface_lang` setting in favour of WordPress 4.7's user locale.
*   **Enhancement:** Removed `\Pressbooks\utility\multi_sort()` in favour of WordPress 4.7's shiny new `wp_list_sort()`.
*   **Enhancement:** Removed our last remaining use of `get_blog_details`, which will be deprecated in a forthcoming WordPress release.
*   **Fix:** Fixed an issue which prevented the Pressbooks admin color scheme from being applied upon manual plugin activation.
*   **Fix:** Fixed an issue which prevented the book name from properly updating under some circumstances.
*   **Fix:** Fixed some styles on the registration screen in the Pressbooks Publisher theme (now at v3.0.1).

### 3\.9.5.1

*   **Enhancement:** Added [`pb_cover_image`][16] filter to improve support for networks which host uploaded content on a third-party server (props to @monkecheese).
*   **Fix:** Fixed a discrepancy in the line height of PrinceXML PDF exports of books using Cardo as the body font which resulted from an invalid descender value.
*   **Fix:** Fixed an issue where the Network Sharing & Privacy page would not update the associated site option value.
*   **Fix:** Fixed the vertical alignment of the Facebook share button in the webbook theme (props to @colomet).

### 3\.9.5

*   **Enhancement:** The Pressbooks Publisher theme has been streamlined and refreshed.
*   **Fix:** The version requirement for xmllint has been downgraded to 20706 to maintain RHEL 6 compatibility (props to @bdolor for the PR).

### 3\.9.4.2

*   **Feature:** It is now possibled to modify the default session configuration via the `pressbooks_session_configuration` filter hook (props to @monkecheese).
*   **Feature:** The `pb_append_chapter_content` is now available in the mPDF exporter (props to @monkecheese).
*   **Enhancement:** The `generator` meta property has been added to XHTML exports.
*   **Fix:** A bug which resulted in anchors being added to internal links twice in EPUB exports has been resolved.

### 3\.9.4.1

*   **Feature:** The copyright string in the Pressbooks Publisher theme footer can now be customized via the `pressbooks_publisher_content_info` filter.
*   **Feature:** The text that is displayed when there are no books in a Pressbooks Publisher catalog can now be customized via the `pressbooks_publisher_empty_catalog` filter.
*   **Fix:** Updated a component of the Diagnostics page to remove a deprecation notice (props to @thomasdumm for the report).
*   **Fix:** Fixed a glitch in the Pressbooks colour scheme.

### 3\.9.4

*   **Feature:** Pressbooks + Hypothesis: Version 0.4.8 of the [Hypothesis][17] WordPress plugin now supports custom post types, and Pressbooks 3.9.4 adds Hypothesis support to all of ours (parts, chapters, front and back matter).
*   **Feature:** Having a problem with Pressbooks? We've added a diagnostics page which is accessible from the 'Diagnostics' link in the footer of every dashboard screen. If you need to report a bug, copy your system configuration info from your Diagnostics page to help us help you resolve the issue more efficiently.
*   **Enhancement:** `check_epubcheck_install` can now be overridden using the `pb_epub_has_dependencies` hook for use cases where EPUB validation is not required (props to @monkecheese for the PR).
*   **Enhancement:** Some adjustments were made to the PDF output stylesheets for running headers and footers.
*   **Fix:** Fixed a visual glitch by hiding the TinyMCE table editor's inline toolbar.

### 3\.9.3

*   **NOTE:** [Saxon-HE 9.7.0-10][18] is no longer bundled with Pressbooks and must be installed separately for ODT export support (see [Installation][19]).
*   **Feature:** The copy on the publish page can now be replaced by adding a filter to the `pressbooks_publish_page` filter hook.
*   **Feature:** If registration is enabled, a 'Register' button now appears on the front page of the Pressbooks Publisher theme.
*   **Enhancement:** A URL sanitization routine has been added to the `\Pressbooks\Options` class.
*   **Enhancement:** The methods of `\Pressbooks\Options` which list the options of various types (bool, string, float, etc.) are now optional, and the sanitize function now checks for each type before trying to sanitize it.
*   **Enhancement:** The publish page has been refactored using the `\Pressbooks\Options` class.
*   **Fix:** Unwanted validation warning emails will no longer be sent.

### 3\.9.2.1

*   **NOTE:** Pressbooks 3.9.2 requires [PrinceXML 20160929][20] or later.
*   **Fix:** Fixed an issue where user actions on the Organize page would fail to update certain properties.

### 3\.9.2

*   **NOTE:** Pressbooks 3.9.2 requires [PrinceXML 20160929][20] or later.
*   **Feature:** Added an export format for print-ready PDF, compatible with the [CreateSpace PDF Submission Specification][21] (**Requires [PrinceXML 20160929][20] or later**).
*   **Feature:** Added a button to the editor which lets you assign a custom class to any element.
*   **Feature:** Simplified the Disable Comments feature, which can now be found under Sharing & Privacy settings.
*   **Enhancement:** Added version-based dependency checks for all Pressbooks dependencies.
*   **Enhancement:** Updated the TinyMCE Table Editor plugin to the latest version.
*   **Enhancement:** Custom styles, table classes, row classes and cell classes are now filterable.
*   **Fix:** Fixed an issue where email validation logs would not be sent.

### 3\.9.1

*   **Fix:** Fixed an issue where the htmLawed and PrinceXMLPHP dependencies were not being loaded properly.

### 3\.9.0

*   **Feature:** Added a web theme option to display the title of the current part in the webbook (props to @bdolor).
*   **Feature:** Noto CJK fonts (required for Chinese, Japanese and Korean PDF output) are now downloaded only when needed from within Pressbooks, reducing the overall size of the Pressbooks download.
*   **Feature:** Added a recompile routine for webbook stylesheets to allow more straightforward development (only enabled when `WP_ENV` is defined and set to `development`).
*   **Enhancement:** Applied our [coding standards][22] across the board and added PHP_CodeSniffer to our CI routines.
*   **Enhancement:** Added some unit tests.
*   **Enhancement:** Moved the Pressbooks API to /vendor.
*   **Enhancement:** Changed some colour variables for clarity.
*   **Enhancement:** Added initial support for SVG LaTeX images in PDF exports (requires [QuickLaTex][23]).
*   **Enhancement:** Added some scaffolding to allow option defaults to be filtered in pages built using the new options class.
*   **Enhancement:** The book information post is now created when a book is registered.
*   **Fix:** Added missing methods which were triggering fatal errors in the Export Options page (props to @bdolor).
*   **Fix:** Fixed in issue which prevented the Ebook paragraph separation theme option from being applied in Clarke.
*   **Fix:** Fixed an issue where internal links from within part content were broken in EPUB.
*   **Fix:** Fixed an issue where backslashes would be erroneously stripped when replacements were applied in the Search and Replace utility (props to @rootl for the bug report).
*   **Fix:** Fixed an issue where the book title would not be updated on the first save.

 [1]: https://wordpress.org/news/2017/05/wordpress-4-7-5/
 [2]: https://github.com/vanilla/htmlawed/
 [3]: https://packagist.org/packages/perchten/rmrdir
 [4]: https://github.com/pressbooks/pressbooks/commit/37ab804489c580ad1d1121c0a07144f37772c7d0
 [5]: http://ben.lobaugh.net/blog/864/php-5-recursively-move-or-copy-files
 [6]: https://github.com/pressbooks/pressbooks/commit/52b087b5e2185ea08c6f67c24111ad9ef0ee1fa0
 [7]: https://wordpress.org/news/2017/03/wordpress-4-7-3-security-and-maintenance-release/
 [8]: https://wordpress.org/news/2017/01/wordpress-4-7-2-security-release/
 [9]: https://houndci.com
 [10]: https://wordpress.org/news/2016/12/vaughan/
 [11]: http://www.princexml.com/download/
 [12]: https://www.google.com/get/noto/#sans-deva
 [13]: https://www.google.com/get/noto/#serif-deva
 [14]: https://github.com/pressbooks/pressbooks/commit/7344674f823517ed7eb2fef462a4795f7182ce56
 [15]: https://github.com/pressbooks/pressbooks/commit/4d7ca649ec3b6c05c40e1c5bb8f92beb1de5ea30
 [16]: https://github.com/pressbooks/pressbooks/pull/540/
 [17]: https://hypothes.is
 [18]: https://sourceforge.net/projects/saxon/files/Saxon-HE/
 [19]: http://docs.pressbooks.org/installation
 [20]: http://www.princexml.com/latest/
 [21]: https://www.createspace.com/ServicesWorkflow/ResourceDownload.do?id=1583
 [22]: https://github.com/pressbooks/pressbooks/blob/master/docs/coding-standards.md
 [23]: https://wordpress.org/plugins/wp-quicklatex/