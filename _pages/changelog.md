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
<h3>4.0.0</h3>
<strong>NOTICE:</strong> Upon upgrading to Pressbooks 4.0, you will need to install the <a href="https://github.com/pressbooks/pressbooks-book">Pressbooks Book</a> and <a href="https://github.com/pressbooks/pressbooks-publisher">Pressbooks Publisher</a> themes along with any of our other open source <a href="https://github.com/search?q=topic%3Abook-theme+org%3Apressbooks&amp;type=Repositories">book themes</a> that were bundled with earlier versions of Pressbooks. For more information, see the <a href="upgrading.md">upgrading instructions</a>.

<strong>NOTICE:</strong> Pressbooks 4.0 requires <a href="https://wordpress.org/news/2017/06/evans/">WordPress 4.8.0</a>.
<h4>Pressbooks 4.0 "Slate"</h4>
<h5>Next-Generation REST API</h5>
Building on <a href="http://bradpayne.ca">Brad Payne's</a> original REST API for Pressbooks, we've introduced an improved and expanded REST API based on the WordPress Core <a href="https://developer.wordpress.org/rest-api/">REST API</a> infrastructure. The Pressbooks REST API v2 supports authenticated CRUD (Create, Read, Update, Destroy) access to all Pressbooks content types (front and back matter, parts, and chapters) as well as read-only access to book structure and metadata. For more information, see our <a href="http://docs.pressbooks.org/api">REST API documentation</a>. We're excited to see what the Pressbooks Open Source community will do with these new API capabilities! Share your projects with us: <a href="mailto:code@pressbooks.com">code@pressbooks.com</a>.
<h5>Enhanced LaTeX Rendering</h5>
Pressbooks' core LaTeX renderer now produces high resolution output suitable for print! More improvements to come, and thanks for your patience as we've worked to improve this important feature.
<h5>Better Content Management</h5>
Want to mark all chapters for export on the Organize screen? You can do that now! Trashed something that you want back? Just navigate to Text → Trash and you can restore it. Many more improvements to come!
<h5>Pressbooks CLI</h5>
The Pressbooks command line interface is now part of Pressbooks. Want to make your own book theme? Run <code>wp scaffold book-theme</code> from the root of your Pressbooks install and take advantage of our intuitive SCSS-based theme structure. More commands to come -- <a href="https://github.com/pressbooks/pb-cli/issues">submit your ideas</a>!
<h4>Detailed Changelog</h4>
<ul>
 	<li><strong>Feature:</strong> REST API v2 (see #472, #763, #770, #771, #774, #778, #780, #781, #783, #785, #788, #798, #803, #804, #806, #807, #810, #812, #815, #816, #823, #832, and our <a href="http://docs.pressbooks.org/api">API Docs</a></li>
 	<li><strong>Feature:</strong> LaTeX outputs are now at a sufficient resolution for print applications (see #819).</li>
 	<li><strong>Feature:</strong> You can now change statuses in bulk on the <strong>Organize</strong> page (see #249 and #822).</li>
 	<li><strong>Feature:</strong> Deleted content can now be restored from <strong>Text → Trash</strong> (see <a href="https://github.com/pressbooks/pressbooks/tree/9283c26504007ba55259672c5cb9efc8ee07b3c0">9283c26</a>).</li>
 	<li><strong>Enhancement:</strong> The Pressbooks CLI is now bundled in Pressbooks (see #464 and #826).</li>
 	<li><strong>Enhancement:</strong> <code>new \Pressbooks\Metadata()</code> now returns book metadata as an implementation of <a href="https://secure.php.net/manual/en/class.jsonserializable.php">JsonSerializeable</a> (see #804 and #832).</li>
 	<li><strong>Enhancement:</strong> Expanded metadata is now hidden on the <strong>Book Information</strong> page unless needed (see #804 and #832).</li>
 	<li><strong>Enhancement:</strong> We now use the <a href="https://engineering.hmn.md/how-we-work/style/php/">Human Made coding standards</a> for PHP. <a href="http://docs.pressbooks.org/coding-standards/#validating-with-php-code-sniffer">Check your code</a> before submitting a PR 👍.</li>
 	<li><strong>Enhancement:</strong> We now use <a href="https://github.com/jeffreyway/laravel-mix">Laravel Mix</a> to handle all plugin assets (see #769 and #795). Making a change in <code>/assets/src/</code>? With <a href="https://yarnpkg.com">Yarn</a> installed in your development environment, run <code>yarn &amp;&amp; yarn run build</code> to build assets for distribution.</li>
 	<li><strong>Enhancement:</strong> SCSS files can now be validated for using <a href="https://stylelint.io">stylelint</a> with the command <code>yarn run lint</code> (see #743 and #817).</li>
 	<li><strong>Enhancement:</strong> Root and book themes are now distributed separately from the Pressbooks plugin -- make sure you install the required themes when you <a href="http://docs.pressbooks.org/upgrading">upgrade</a>! (See #756 and #799.)</li>
 	<li><strong>Enhancement:</strong> Part content has been migrated to the standard content editor instead of a custom field (see #486 and #764).</li>
 	<li><strong>Enhancement:</strong> The Search and Replace module has been heavily optimized, reducing memory usage by ~85% (see #759 and #793).</li>
 	<li><strong>Enhancement:</strong> Additional post types can be added to the list of permitted post types for editing using the <a href="https://github.com/pressbooks/pressbooks/blob/4.0.0/inc/posttype/namespace.php#L16-L29"><code>pb_supported_post_types</code> filter</a> (props to @steelwagstaff, see #758).</li>
 	<li><strong>Enhancement:</strong> We now use <a href="https://packagist.org/packages/vanilla/htmlawed">vanilla/htmlawed</a> as our htmLawed provider (see #767).</li>
 	<li><strong>Enhancement:</strong> Developers can now add new import types via the <code>pb_import_table_cell</code> and <code>pb_initialize_import</code> filter hooks (props @bdolor; see #802 and #811).</li>
 	<li><strong>Enhancement:</strong> Releases are now packaged automatically via Travis (see #730 and #821).</li>
 	<li><strong>Fix:</strong> DOCX and ODT files exported from Google Docs (which lack standard metadata) can now be imported without issue via the import module (see #837 and #838).</li>
 	<li><strong>Fix:</strong> Images are now set to a <code>prince-image-resolution</code> of <code>auto, normal</code> rather than 300dpi for more reliably high-quality print PDF output (see #744 and #776).</li>
 	<li><strong>Fix:</strong> Text suggesting that we offer printing services has been removed from the Publish page (see #784).</li>
 	<li><strong>Fix:</strong> Export downloads from the webbook include the proper file extensions (props to @bdolor; see #808).</li>
 	<li><strong>Fix:</strong> Current privacy settings are now displayed properly when updating book privacy from the Organize page (see #711 and #801).</li>
 	<li><strong>Fix:</strong> The editor style is now enqueued with a version for cache busting (see #813 and #814).</li>
 	<li><strong>Fix:</strong> Miscellaneous improvements to improve performance and reduce unnecessary error output.</li>
</ul>
<h3>3.9.9</h3>
<strong>NOTICE:</strong> Pressbooks now requires <a href="https://wordpress.org/news/2017/05/wordpress-4-7-5/">WordPress 4.7.5</a>.
<ul>
 	<li><strong>Feature:</strong> A curated listed of recommended plugins is now displayed within the plugin installer (see #729).</li>
 	<li><strong>Feature:</strong> Search and Replace now supports regular expressions (props to @stepmuel; see #754). This feature can be enabled by adding: <code>define( 'PB_ENABLE_REGEX_SEARCHREPLACE', true );</code> to <code>wp-config.php</code>.</li>
 	<li><strong>Enhancement:</strong> Updating a book theme will now trigger the regeneration of the webbook stylesheet (see #727 and #762).</li>
 	<li><strong>Enhancement:</strong> There is now a specific template part, <code>private.php</code>, for the page that is displayed when a book is private (props to @stepmuel; see #755).</li>
 	<li><strong>Enhancement:</strong> "Part" is now properly localized in the PDF Table of Contents (see #742).</li>
 	<li><strong>Enhancement:</strong> Improved blank page rules in theme components.</li>
 	<li><strong>Enhancement:</strong> The Ebook theme options tab is now hidden when Ebook dependencies are missing (props to @masaka222; see #745).</li>
 	<li><strong>Enhancement:</strong> Dependency check results are now stored in site transients to reduce unnecessary function calls (see #749, #750).</li>
 	<li><strong>Enhancement:</strong> Replaced variables with constants where appropriate (see #751).</li>
 	<li><strong>Enhancement:</strong> Replaced uses of <code>PATH_CURRENT_SITE</code> with <code>network_home_url()</code> (props to @jeremyfelt; see #734).</li>
 	<li><strong>Enhancement:</strong> Current <code>$post</code> is now included with <code>wp_enqueue_media()</code> in <code>symbionts/custom-metadata</code> (props to @jeremyfelt; see #735).</li>
 	<li><strong>Fix:</strong> Removed the sticky navigation bar that overlapped webbook content (props to @pbstudent for the bug report; see #747 and #760).</li>
 	<li><strong>Fix:</strong> Fixed an issue where running content strings would not be populated when a custom title page was used (see #496 and #761).</li>
 	<li><strong>Fix:</strong> Fixed an issue where the book title would not update properly (see #542 and #746).</li>
 	<li><strong>Fix:</strong> Fixed issues that arose when <code>pb_language</code> or <code>user_interface_lang</code> were not set (props to @monkecheese for initial bug report and testing; see #738, #739, #740).</li>
 	<li><strong>Fix:</strong> Fixed an issue where a database error would be thrown when installing on a utf8mb4 MySQL instance (props to @jeremyfelt; see #733).</li>
</ul>
<h3>3.9.8.2</h3>
<strong>NOTICE:</strong> Pressbooks' PHP version requirement (&gt;= 5.6) and WordPress version requirement (&gt;= 4.7.3) can no longer be overridden. Before installing Pressbooks 3.9.8, please ensure that your system has been upgraded accordingly.
<ul>
 	<li><strong>Fix:</strong> Switched to an unmodified version of htmLawed to fix a regression in <a href="https://github.com/vanilla/htmlawed/">vanilla/htmlawed</a> which was stripping paragraph tags from blockquotes (see #723).</li>
 	<li><strong>Fix:</strong> Fixed an issue where users would be informed that their theme had been unlocked when saving Export options even thought it was already unlocked (see #722).</li>
 	<li><strong>Fix:</strong> Fixed an issue where wp-cli would give a permissions error because of the <code>\Pressbooks\ThemeLock::isLocked()</code> check (see #721).</li>
</ul>
<h3>3.9.8.1</h3>
<strong>NOTICE:</strong> Pressbooks' PHP version requirement (&gt;= 5.6) and WordPress version requirement (&gt;= 4.7.3) can no longer be overridden. Before installing Pressbooks 3.9.8, please ensure that your system has been upgraded accordingly.
<ul>
 	<li><strong>Fix:</strong> Restored some webbook styles that were being omitted in older book themes.</li>
</ul>
<h3>3.9.8</h3>
<strong>NOTICE:</strong> Pressbooks' PHP version requirement (&gt;= 5.6) and WordPress version requirement (&gt;= 4.7.3) can no longer be overridden. Before installing Pressbooks 3.9.8, please ensure that your system has been upgraded accordingly.
<ul>
 	<li><strong>Feature:</strong> Themes can now be locked a particular version. The theme's stylesheets and other assets will be copied into the book's media directory and used for future exports (see #657, #704).</li>
 	<li><strong>Feature:</strong> The paragraph separation option is now available for webbooks (see #655, #696).</li>
 	<li><strong>Feature:</strong> The section openings PDF theme option now supports additional options (see #450, #691).</li>
 	<li><strong>Feature:</strong> When export sharing is enabled, the download links are now stable, e.g. <code>/open/download?type=pdf</code> (props to @rootl for the suggestion; see #684, #699).</li>
 	<li><strong>Enhancement:</strong> Pressbooks now supports third-party export formats (see #385 and #674).</li>
 	<li><strong>Enhancement:</strong> <code>\Pressbooks\Options</code> field display functions have been refactored to use an array of arguments instead of a list of parameters (see #648, #697) [BREAKING CHANGE].</li>
 	<li><strong>Enhancement:</strong> SCSS overrides have been moved into their respective theme options classes (see #452, #701).</li>
 	<li><strong>Enhancement:</strong> Webbook interface styles have been separated from the Luther book theme's content styles (see #656, #708).</li>
 	<li><strong>Enhancement:</strong> Webbook stylesheet and script enqueuing has been clarified and simplified (see #396).</li>
 	<li><strong>Enhancement:</strong> Searching now excludes non-Pressbooks post types (props to @colomet for the report; see #706, #707).</li>
 	<li><strong>Enhancement:</strong> Front-end scripts are now loaded asynchronously (props to @bdolor; see #681).</li>
 	<li><strong>Enhancement:</strong> htmLawed is now a Composer dependency (see #702).</li>
 	<li><strong>Enhancement:</strong> The sassphp dependency is no longer required (see #693).</li>
 	<li><strong>Enhancement:</strong> The SaxonHE dependency check can now be overridden (see https://github.com/pressbooks/pressbooks/commit/7ea32fe).</li>
 	<li><strong>Enhancement:</strong> <a href="https://packagist.org/packages/perchten/rmrdir">perchten/rmrdir</a> is now used for recursive directory removal (see <a href="https://github.com/pressbooks/pressbooks/commit/37ab804489c580ad1d1121c0a07144f37772c7d0">37ab804</a>).</li>
 	<li><strong>Enhancement:</strong> Added \Pressbooks\Utility\rcopy() function for recursive directory copying (props to @blobaugh for the <a href="http://ben.lobaugh.net/blog/864/php-5-recursively-move-or-copy-files">example code</a>; see <a href="https://github.com/pressbooks/pressbooks/commit/52b087b5e2185ea08c6f67c24111ad9ef0ee1fa0">52b087b</a>).</li>
 	<li><strong>Enhancement:</strong> Added <code>pb_dependency_errors</code> filter hook for suppression of dependency errors (see #719).</li>
 	<li><strong>Fix:</strong> Images on custom title pages are now exported as expected in EPUB and Kindle (see #690, #698).</li>
 	<li><strong>Fix:</strong> The diagnostics page now functions as expected on the root blog (props to @colomet for the report; see #688, #695);</li>
 	<li><strong>Fix:</strong> Print PDF exports are now available for download when export sharing is enabled (props to @bdolor; see #677).</li>
 	<li><strong>Fix:</strong> Numberless chapters no longer display a lonely period in PDF outputs from SCSS v2 themes (props to @thomasdumm for the report; see #670).</li>
 	<li><strong>Fix:</strong> Importing as a draft now works for EPUB imports (props to @thomasdumm for the report; see #668).</li>
</ul>
<h3>3.9.7.2</h3>
<strong>NOTICE:</strong> Pressbooks now requires <a href="https://wordpress.org/news/2017/03/wordpress-4-7-3-security-and-maintenance-release/">WordPress 4.7.3</a>.
<ul>
 	<li><strong>Enhancement:</strong> Streamlined and refactored the running content SCSS partials for SCSS-based themes (see #675 and #686).</li>
</ul>
<h3>3.9.7.1</h3>
<ul>
 	<li><strong>Fix:</strong> Fixed an issue where the custom CSS file for webbooks would not be loaded on subdirectory installs.</li>
</ul>
<h3>3.9.7</h3>
<strong>NOTICE:</strong> Pressbooks now requires <a href="https://wordpress.org/news/2017/01/wordpress-4-7-2-security-release/">WordPress 4.7.2</a>.
<ul>
 	<li><strong>Feature:</strong> Added support for Canadian Indigenous syllabics, which are used for the Chipewyan, Inuktitut, Plains Cree, Cree, Moose Cree, Slave, Northern Cree, Naskapi, Swampy Cree, Southern East Cree, and Ojibwa languages (props to @bdolor; see #635).</li>
 	<li><strong>Feature:</strong> Part numbers are now displayed consistently across all formats (see #341).</li>
 	<li><strong>Enhancement:</strong> SCSS maps are now used to provide variables for different export formats.</li>
 	<li><strong>Enhancement:</strong> The global <code>_titles.scss</code> partial for SCSS v2 themes has been split into <code>_pages.scss</code> and <code>_section-titles.scss</code> for better separation of concerns.</li>
 	<li><strong>Enhancement:</strong> Added the <code>pb_add_latex_renderer_option</code>, <code>pb_require_latex</code>, <code>pb_latex_renderers</code>, and <code>pb_add_latex_config_scripts</code> filters and the <code>pb_enqueue_latex_scripts</code> action to support custom LaTeX renderers (props to @monkecheese; see #583).</li>
 	<li><strong>Enhancement:</strong> Added the <code>pb_root_description</code> filter to allow the default root blog description to be changed.</li>
 	<li><strong>Enhancement:</strong> Custom theme options can now be registered, either on an existing tab or on a new tab (see #470 and #618).</li>
 	<li><strong>Enhancement:</strong> Added the <code>pb_publisher_catalog_query_args</code> filter to allow customizing the query for books on the front page of Pressbooks Publisher (see #619).</li>
 	<li><strong>Enhancement:</strong> Added the <code>\Pressbooks\Metadata::getJsonMetadata()</code> function and the <code>pb_json_metadata</code> filter to support returning book information as JSON data for posting to an API endpoint (see #637).</li>
 	<li><strong>Enhancement:</strong> Added the <code>pb_add_bisac_subjects_field</code> filter, which allows those with a licensed copy of the BISAC subject headers to display a multiple select instead of Pressbooks' default text input (see #637).</li>
 	<li><strong>Enhancement:</strong> Added the <code>pb_audience</code> field to the Book Information page to allow setting a book's target audience (see #638).</li>
 	<li><strong>Enhancement:</strong> The export metadata settings for all book contents are now fetched in a single query within <code>\Pressbooks\Book::getBookStructure()</code> (props to @monkecheese; see #633).</li>
 	<li><strong>Enhancement:</strong> The book language will now be set to the language selected when the book is registered (see #595).</li>
 	<li><strong>Enhancement:</strong> The Comments column on the Organize page will now be hidden if comments are disabled (see #644).</li>
 	<li><strong>Enhancement:</strong> Core textbox styles now apply to the equivalent <code>.bcc-*</code> selectors for improved compatibility with Pressbooks Textbook.</li>
 	<li><strong>Enhancement:</strong> Imported content can optionally be set to <code>published</code> status instead of <code>draft</code> (see #593).</li>
 	<li><strong>Enhancement:</strong> Front matter, chapter, and back matter types will now be imported from Pressbooks WXR files (see #601).</li>
 	<li><strong>Enhancement:</strong> Empty front matter, chapters, and back matter will now be imported from Pressbooks WXR files (see #592).</li>
 	<li><strong>Enhancement:</strong> Title display and export metadata will now be imported from Pressbooks WXR files (see #606).</li>
 	<li><strong>Enhancement:</strong> Completing an import from a Pressbooks WXR file will now correctly enumerate different content types instead of labelling all as chapters.</li>
 	<li><strong>Enhancement:</strong> Bold, italic, superscript, and subscript text is now properly imported from Word documents (props to @crism; see #629).</li>
 	<li><strong>Enhancement:</strong> Inline language attributes are now properly imported from Word documents (props to @crism; see #630 and #639).</li>
 	<li><strong>Enhancement:</strong> Removed the Postmark-specific <code>wp_mail()</code> override (see #587).</li>
 	<li><strong>Enhancement:</strong> Export dependency errors are now grouped intelligently into a single alert (see #646).</li>
 	<li><strong>Enhancement:</strong> Javascript and SCSS files are now validated on pull requests using <a href="https://houndci.com">Hound</a> (see #617).</li>
 	<li><strong>Enhancement:</strong> The sender address and name used for emails from a Pressbooks instance can now be customized by defining constants for <code>WP_MAIL_FROM</code> and <code>WP_MAIL_FROM_NAME</code> (see #663).</li>
 	<li><strong>Fix:</strong> To prevent an erroneous reversion to the WordPress &lt; 3.5 uploads directory structure, <code>\Pressbooks\Utility\get_media_prefix()</code> now checks for the <code>ms_files_rewriting</code> site option instead of for the <code>blogs.dir</code> directory.</li>
 	<li><strong>Fix:</strong> The custom CSS file URL scheme is now relative, which should prevent mixed content errors under some circumstances (see #599).</li>
 	<li><strong>Fix:</strong> Fixed an undefined index error in mPDF theme options (props to @monkecheese; see #613).</li>
 	<li><strong>Fix:</strong> Fixed a database max key length error when creating the catalog tables (see #589).</li>
 	<li><strong>Fix:</strong> Removed the Pressbooks plugin installer tab, which was preventing plugin searching from being conducted (see #596).</li>
 	<li><strong>Fix:</strong> Deleted books will now be removed from user catalogs (see #412).</li>
 	<li><strong>Fix:</strong> Fixed an issue where hyphenation would be enabled in Prince exports even if it was disabled in theme options (see #645).</li>
 	<li><strong>Fix:</strong> Fixed an issue where custom running content was being displayed in the wrong place (see #623).</li>
 	<li><strong>Fix:</strong> Fixed an issue where OpenOffice files would not be properly exposed for download (see #649).</li>
 	<li><strong>Fix:</strong> The time allowed for an mPDF export to complete has been conditionally increased to account for certain edge cases (props to @bdolor; see #652).</li>
 	<li><strong>Fix:</strong> Added between section numbers and titles in the mPDF TOC (props to @bdolor; see #653).</li>
 	<li><strong>Fix:</strong> We now use the https endpoint for the Automattic LaTeX server to avoid mixed content errors (props to @bdolor; see #651).</li>
 	<li><strong>Fix:</strong> Publisher logos inserted via <code>add_theme_support( 'pressbooks_publisher_logo' )</code> hook are now properly copied into EPUB outputs (see #666).</li>
</ul>
<h3>3.9.6</h3>
<strong>NOTICE:</strong> Pressbooks now requires <a href="https://wordpress.org/news/2016/12/vaughan/">WordPress 4.7 "Vaughan"</a>.
<strong>NOTICE:</strong> Pressbooks now requires <a href="http://www.princexml.com/download/">PrinceXML 11</a> for PDF exports.
<ul>
 	<li><strong>Feature:</strong> If you select a language on the book information page and the WordPress language pack for that language is available but not installed, Pressbooks will try to install it for you (and politely inform you if it can't).</li>
 	<li><strong>Feature:</strong> Added Hindi language support using <a href="https://www.google.com/get/noto/#sans-deva">Noto Sans Devanagari</a> and <a href="https://www.google.com/get/noto/#serif-deva">Noto Serif Devanagari</a>.</li>
 	<li><strong>Enhancement:</strong> The whitelist-based theme filtering behaviour of Pressbooks =&lt; 3.9.5.1 has been removed; all book themes are now available for use in all books (if network enabled), and all non-book themes are now available for use on the root blog (if network enabled). If you wish to restrict theme availability further, you can do so by adding additional filters to the <code>allowed_themes</code> filter hook.</li>
 	<li><strong>Enhancement:</strong> Added the ability to retry asset fetching during EPUB export in the event of server errors (props to @nathanielks, see <a href="https://github.com/pressbooks/pressbooks/commit/7344674f823517ed7eb2fef462a4795f7182ce56">7344674</a>)</li>
 	<li><strong>Enhancement:</strong> Added filter and action hooks to support the addition of import modules via third-party plugins (props to @monkecheese, see <a href="https://github.com/pressbooks/pressbooks/commit/4d7ca649ec3b6c05c40e1c5bb8f92beb1de5ea30">4d7ca64</a>).</li>
 	<li><strong>Enhancement:</strong> Added the <code>pb_disable_root_comments</code> filter hook for control over comment display on the root blog (defaults to <code>true</code> -- disable comments -- as Pressbooks Publisher does not support comments).</li>
 	<li><strong>Enhancement:</strong> Added a link from the user's catalog logo or profile image to their profile URL, if set.</li>
 	<li><strong>Enhancement:</strong> Added variables for textbox header font size and text alignment to book theme partials.</li>
 	<li><strong>Enhancement:</strong> Removed our custom <code>user_interface_lang</code> setting in favour of WordPress 4.7's user locale.</li>
 	<li><strong>Enhancement:</strong> Removed <code>\Pressbooks\utility\multi_sort()</code> in favour of WordPress 4.7's shiny new <code>wp_list_sort()</code>.</li>
 	<li><strong>Enhancement:</strong> Removed our last remaining use of <code>get_blog_details</code>, which will be deprecated in a forthcoming WordPress release.</li>
 	<li><strong>Fix:</strong> Fixed an issue which prevented the Pressbooks admin color scheme from being applied upon manual plugin activation.</li>
 	<li><strong>Fix:</strong> Fixed an issue which prevented the book name from properly updating under some circumstances.</li>
 	<li><strong>Fix:</strong> Fixed some styles on the registration screen in the Pressbooks Publisher theme (now at v3.0.1).</li>
</ul>
<h3>3.9.5.1</h3>
<ul>
 	<li><strong>Enhancement:</strong> Added <a href="https://github.com/pressbooks/pressbooks/pull/540/"><code>pb_cover_image</code></a> filter to improve support for networks which host uploaded content on a third-party server (props to @monkecheese).</li>
 	<li><strong>Fix:</strong> Fixed a discrepancy in the line height of PrinceXML PDF exports of books using Cardo as the body font which resulted from an invalid descender value.</li>
 	<li><strong>Fix:</strong> Fixed an issue where the Network Sharing &amp; Privacy page would not update the associated site option value.</li>
 	<li><strong>Fix:</strong> Fixed the vertical alignment of the Facebook share button in the webbook theme (props to @colomet).</li>
</ul>
<h3>3.9.5</h3>
<ul>
 	<li><strong>Enhancement:</strong> The Pressbooks Publisher theme has been streamlined and refreshed.</li>
 	<li><strong>Fix:</strong> The version requirement for xmllint has been downgraded to 20706 to maintain RHEL 6 compatibility (props to @bdolor for the PR).</li>
</ul>
<h3>3.9.4.2</h3>
<ul>
 	<li><strong>Feature:</strong> It is now possibled to modify the default session configuration via the <code>pressbooks_session_configuration</code> filter hook (props to @monkecheese).</li>
 	<li><strong>Feature:</strong> The <code>pb_append_chapter_content</code> is now available in the mPDF exporter (props to @monkecheese).</li>
 	<li><strong>Enhancement:</strong> The <code>generator</code> meta property has been added to XHTML exports.</li>
 	<li><strong>Fix:</strong> A bug which resulted in anchors being added to internal links twice in EPUB exports has been resolved.</li>
</ul>
<h3>3.9.4.1</h3>
<ul>
 	<li><strong>Feature:</strong> The copyright string in the Pressbooks Publisher theme footer can now be customized via the <code>pressbooks_publisher_content_info</code> filter.</li>
 	<li><strong>Feature:</strong> The text that is displayed when there are no books in a Pressbooks Publisher catalog can now be customized via the <code>pressbooks_publisher_empty_catalog</code> filter.</li>
 	<li><strong>Fix:</strong> Updated a component of the Diagnostics page to remove a deprecation notice (props to @thomasdumm for the report).</li>
 	<li><strong>Fix:</strong> Fixed a glitch in the Pressbooks colour scheme.</li>
</ul>
<h3>3.9.4</h3>
<ul>
 	<li><strong>Feature:</strong> Pressbooks + Hypothesis: Version 0.4.8 of the <a href="https://hypothes.is">Hypothesis</a> WordPress plugin now supports custom post types, and Pressbooks 3.9.4 adds Hypothesis support to all of ours (parts, chapters, front and back matter).</li>
 	<li><strong>Feature:</strong> Having a problem with Pressbooks? We've added a diagnostics page which is accessible from the 'Diagnostics' link in the footer of every dashboard screen. If you need to report a bug, copy your system configuration info from your Diagnostics page to help us help you resolve the issue more efficiently.</li>
 	<li><strong>Enhancement:</strong> <code>check_epubcheck_install</code> can now be overridden using the <code>pb_epub_has_dependencies</code> hook for use cases where EPUB validation is not required (props to @monkecheese for the PR).</li>
 	<li><strong>Enhancement:</strong> Some adjustments were made to the PDF output stylesheets for running headers and footers.</li>
 	<li><strong>Fix:</strong> Fixed a visual glitch by hiding the TinyMCE table editor's inline toolbar.</li>
</ul>
<h3>3.9.3</h3>
<ul>
 	<li><strong>NOTE:</strong> <a href="https://sourceforge.net/projects/saxon/files/Saxon-HE/">Saxon-HE 9.7.0-10</a> is no longer bundled with Pressbooks and must be installed separately for ODT export support (see <a href="http://docs.pressbooks.org/installation">Installation</a>).</li>
 	<li><strong>Feature:</strong> The copy on the publish page can now be replaced by adding a filter to the <code>pressbooks_publish_page</code> filter hook.</li>
 	<li><strong>Feature:</strong> If registration is enabled, a 'Register' button now appears on the front page of the Pressbooks Publisher theme.</li>
 	<li><strong>Enhancement:</strong> A URL sanitization routine has been added to the <code>\Pressbooks\Options</code> class.</li>
 	<li><strong>Enhancement:</strong> The methods of <code>\Pressbooks\Options</code> which list the options of various types (bool, string, float, etc.) are now optional, and the sanitize function now checks for each type before trying to sanitize it.</li>
 	<li><strong>Enhancement:</strong> The publish page has been refactored using the <code>\Pressbooks\Options</code> class.</li>
 	<li><strong>Fix:</strong> Unwanted validation warning emails will no longer be sent.</li>
</ul>
<h3>3.9.2.1</h3>
<ul>
 	<li><strong>NOTE:</strong> Pressbooks 3.9.2 requires <a href="http://www.princexml.com/latest/">PrinceXML 20160929</a> or later.</li>
 	<li><strong>Fix:</strong> Fixed an issue where user actions on the Organize page would fail to update certain properties.</li>
</ul>
<h3>3.9.2</h3>
<ul>
 	<li><strong>NOTE:</strong> Pressbooks 3.9.2 requires <a href="http://www.princexml.com/latest/">PrinceXML 20160929</a> or later.</li>
 	<li><strong>Feature:</strong> Added an export format for print-ready PDF, compatible with the <a href="https://www.createspace.com/ServicesWorkflow/ResourceDownload.do?id=1583">CreateSpace PDF Submission Specification</a> (<strong>Requires <a href="http://www.princexml.com/latest/">PrinceXML 20160929</a> or later</strong>).</li>
 	<li><strong>Feature:</strong> Added a button to the editor which lets you assign a custom class to any element.</li>
 	<li><strong>Feature:</strong> Simplified the Disable Comments feature, which can now be found under Sharing &amp; Privacy settings.</li>
 	<li><strong>Enhancement:</strong> Added version-based dependency checks for all Pressbooks dependencies.</li>
 	<li><strong>Enhancement:</strong> Updated the TinyMCE Table Editor plugin to the latest version.</li>
 	<li><strong>Enhancement:</strong> Custom styles, table classes, row classes and cell classes are now filterable.</li>
 	<li><strong>Fix:</strong> Fixed an issue where email validation logs would not be sent.</li>
</ul>
<h3>3.9.1</h3>
<ul>
 	<li><strong>Fix:</strong> Fixed an issue where the htmLawed and PrinceXMLPHP dependencies were not being loaded properly.</li>
</ul>
<h3>3.9.0</h3>
<ul>
 	<li><strong>Feature:</strong> Added a web theme option to display the title of the current part in the webbook (props to @bdolor).</li>
 	<li><strong>Feature:</strong> Noto CJK fonts (required for Chinese, Japanese and Korean PDF output) are now downloaded only when needed from within Pressbooks, reducing the overall size of the Pressbooks download.</li>
 	<li><strong>Feature:</strong> Added a recompile routine for webbook stylesheets to allow more straightforward development (only enabled when <code>WP_ENV</code> is defined and set to <code>development</code>).</li>
 	<li><strong>Enhancement:</strong> Applied our <a href="https://github.com/pressbooks/pressbooks/blob/master/docs/coding-standards.md">coding standards</a> across the board and added PHP_CodeSniffer to our CI routines.</li>
 	<li><strong>Enhancement:</strong> Added some unit tests.</li>
 	<li><strong>Enhancement:</strong> Moved the Pressbooks API to /vendor.</li>
 	<li><strong>Enhancement:</strong> Changed some colour variables for clarity.</li>
 	<li><strong>Enhancement:</strong> Added initial support for SVG LaTeX images in PDF exports (requires <a href="https://wordpress.org/plugins/wp-quicklatex/">QuickLaTex</a>).</li>
 	<li><strong>Enhancement:</strong> Added some scaffolding to allow option defaults to be filtered in pages built using the new options class.</li>
 	<li><strong>Enhancement:</strong> The book information post is now created when a book is registered.</li>
 	<li><strong>Fix:</strong> Added missing methods which were triggering fatal errors in the Export Options page (props to @bdolor).</li>
 	<li><strong>Fix:</strong> Fixed in issue which prevented the Ebook paragraph separation theme option from being applied in Clarke.</li>
 	<li><strong>Fix:</strong> Fixed an issue where internal links from within part content were broken in EPUB.</li>
 	<li><strong>Fix:</strong> Fixed an issue where backslashes would be erroneously stripped when replacements were applied in the Search and Replace utility (props to @rootl for the bug report).</li>
 	<li><strong>Fix:</strong> Fixed an issue where the book title would not be updated on the first save.</li>
</ul>
<h3>3.8.1</h3>
<ul>
 	<li><strong>Fix:</strong> Internal links are now <em>actually</em> fixed in EPUB exports.</li>
</ul>
<h3>3.8.0</h3>
<ul>
 	<li><strong>Feature:</strong> The redistribution option from <a href="https://github.com/BCcampus/pressbooks-textbook/">Pressbooks Textbook</a>, which allows a book administrator to share the latest export files of their book on the webbook cover page, has been migrated into Pressbooks and can be found under (Network) Settings -&gt; Sharing and Privacy. Many thanks to @bdolor for developing this feature (and fixing a display bug in our implementation of it).</li>
 	<li><strong>Feature:</strong> Luther and all child themes now support searching within webbooks.</li>
 	<li><strong>Feature:</strong> The Pressbooks.com promotion on book covers can now be hidden using the <code>PB_HIDE_COVER_PROMO</code> constant.</li>
 	<li><strong>Enhancement:</strong> <a href="https://wordpress.org/plugins/hypothesis/">Hypothesis</a> has been added to the supported plugins list, and the supported plugins list is now built more intelligently.</li>
 	<li><strong>Enhancement:</strong> The hard-coded default theme for new books has been replaced by the following logic: 1. Use <code>PB_BOOK_THEME</code> (if set); 2. Use <code>WP_DEFAULT_THEME</code> (if set); 3. Use Luther.</li>
 	<li><strong>Enhancement:</strong> Added the <code>pressbooks_register_theme_directory</code> action to support the registration of custom theme directores by third-party developers (props to @bdolor).</li>
 	<li><strong>Enhancement:</strong> Added support for testing PrinceXML's built-in <a href="http://www.princexml.com/doc/properties/prince-pdf-profile/">PDF profile</a> support by setting the <code>PB_PDF_PROFILE</code> constant to the desired profile.</li>
 	<li><strong>Enhancement:</strong> Refactored generic shortcodes to allow testing and tests were written for them.</li>
 	<li><strong>Enhancement:</strong> Switched from internal fork to dev-master of gridonic/princexmlphp and switched to versioned copy of pressbooks/saxonhe.</li>
 	<li><strong>Enhancement:</strong> The <code>\Pressbooks\Modules\ThemeOptions</code> class now supports the registration of custom tags by third-party developers.</li>
 	<li><strong>Fix:</strong> Removed a leftover conditional check for the <code>accessibility_fontsize</code> option in webbooks (props to @bdolor for the bug report).</li>
 	<li><strong>Fix:</strong> Internal links to parts now work in XHTML, PDF and EPUB exports.</li>
 	<li><strong>Fix:</strong> Fixed some faulty logic in the TOC collapse Javascript (props to @bdolor).</li>
 	<li><strong>Fix:</strong> Fixed some incorrect color values in the mobile admin bar.</li>
 	<li><strong>Fix:</strong> Fixed a misplaced comment in the conditional check for IE 9 in Pressbooks Book (props to @chrillep).</li>
 	<li><strong>Fix:</strong> Fixed a bug where protocol-relative images would not be exported properly in EPUB (props to @bdolor).</li>
</ul>
<h3>3.7.1</h3>
<ul>
 	<li><strong>Fix:</strong> Fixed a bug where increased font size would be applied to all PDF exports.</li>
</ul>
<h3>3.7.0</h3>
<ul>
 	<li><strong>Feature:</strong> Introduced <code>\Pressbooks\Options</code> class and rebuilt theme options using on this class.</li>
 	<li><strong>Feature:</strong> Introduced <code>\Pressbooks\Taxonomy</code> class and rebuilt front matter, chapter and back matter types using this class.</li>
 	<li><strong>Feature:</strong> Added support for custom base font size, line height, page margins, image resolution and running content in SCSS v2 themes for PDF.</li>
 	<li><strong>Feature:</strong> Enabled webbook collapsible TOC by default (as needed).</li>
 	<li><strong>Feature:</strong> Enabled webbook font size control by default.</li>
 	<li><strong>Feature:</strong> Added custom sidebar color for catalog (props to @monkecheese).</li>
 	<li><strong>Enhancement:</strong> Prince will now ignore self-signed certificates in a development environment.</li>
 	<li><strong>Fix:</strong> Fixed an admin style inconsistency introduced with WordPress 4.6.</li>
 	<li><strong>Fix:</strong> Fixed an error where SCSS v2 themes could not be imported into the Custom CSS editor.</li>
 	<li><strong>Fix:</strong> Added user feedback to allow recovery from JPEG errors (props to @bdolor).</li>
 	<li><strong>Fix:</strong> Added a call to <code>wp_cache_flush()</code> to fix an error during book creation.</li>
</ul>
<h3>3.6.3</h3>
<ul>
 	<li><strong>Fix:</strong> Fixed an error caused by the change to get_sites().</li>
</ul>
<h3>3.6.2</h3>
<ul>
 	<li>Requires WordPress 4.6.</li>
 	<li><strong>Fix:</strong> Replaced deprecated wp_get_sites() function with get_sites() (props to @bdolor for the bug report).</li>
</ul>
<h3>3.6.1</h3>
<ul>
 	<li><strong>Fix:</strong> An issue where footnotes would not display in endnote mode has been resolved.</li>
 	<li><strong>Fix:</strong> An SCSS error in Luther has been resolved (props to @bearkrust for the bug report).</li>
</ul>
<h3>3.6.0</h3>
<ul>
 	<li>Requires WordPress 4.5.3.</li>
 	<li><strong>Feature:</strong> Structural SCSS and supports are in place for the new book theme model (see http://pressbooks.org/core/2016/05/16/rethinking-book-themes/).</li>
 	<li><strong>Feature:</strong> Clarke 2.0 has been rebuilt on the new book theme model (see https://pressbooks.com/themes/clarke).</li>
 	<li><strong>Feature:</strong> Themes built on the new book theme model can display publisher logos on the title page via <code>add_theme_support( 'pressbooks_publisher_logo', [ 'logo_uri'&gt; $logo_uri ] )</code>.</li>
 	<li><strong>Feature:</strong> Themes built on the new book theme model define support for global typography using <code>add_theme_support( 'pressbooks_global_typography', [ $language_codes ] )</code>.</li>
 	<li><strong>Feature:</strong> Custom post types, built-in taxonomies and custom taxonomies can now be imported from a Pressbooks or WordPress XML file using the filters <code>pb_import_custom_post_types</code> and <code>pb_import_custom_taxonomies</code> (props to @monkecheese).</li>
 	<li><strong>Feature:</strong> Filter hooks have been added which allow content to be appended to front matter, chapters and back matter via <code>pb_append_front_matter_content</code>, <code>pb_append_chapter_content</code> and <code>pb_append_back_matter_content</code> (props to @monkecheese).</li>
 	<li><strong>Feature:</strong> Network administrators can now clear all of a book's exports (this is useful for testing).</li>
 	<li><strong>Enhancement:</strong> The Export page is now responsive.</li>
 	<li><strong>Enhancement:</strong> <code>script.js</code> is no longer required for Prince exports (if the the file is not there it will no longer trigger an error).</li>
 	<li><strong>Enhancement:</strong> The <code>&lt;base href=""&gt;</code> tag has been removed from XHTML outputs, which should make these files more functional in some cases (props to @bdolor).</li>
 	<li><strong>Fix:</strong> Search and Replace is now accessible to book administrators, not just network administrators.</li>
 	<li><strong>Fix:</strong> The broken Forum link in the Pressbooks menu has been replaced with a link to our Help page.</li>
</ul>
<h3>3.5.2</h3>
<ul>
 	<li><strong>Feature:</strong> Login screen logo and color scheme can now be changed via filters (see https://github.com/pressbooks/pressbooks/commit/d09a104bfbbe3ad00a108004d0375ad1f7057ae0).</li>
 	<li><strong>Enhancement:</strong> Google Fonts are now requested over https under all circumstances.</li>
 	<li><strong>Enhancement:</strong> Added some functionality to the Disable Comments plugin (props to @bdolor).</li>
 	<li><strong>Fix:</strong> Imports will no longer fail in certain environments (props to @monkecheese for the bug fix).</li>
 	<li><strong>Fix:</strong> Subsection titles are now properly sanitized for XHTML output.</li>
</ul>
<h3>3.5.1</h3>
<ul>
 	<li>Requires WordPress 4.5.2.</li>
 	<li><strong>Fixed:</strong> Resolved a formatting issue on the Export page (props to @bdolor).</li>
 	<li><strong>Under the Hood:</strong> Added anchor, superscript and subscript buttons to core MCE routines (eliminating dependencies).</li>
</ul>
<h3>3.5.0</h3>
<ul>
 	<li>FEATURE: Search and Replace functionality has been rebuilt and more closely integrated with Pressbooks core.</li>
 	<li>FEATURE: Pressbooks plugins (specifications forthcoming) can now be activated at the book level by book administrators.</li>
 	<li>FIXED: Some image asset paths were updated.</li>
 	<li>FIXED: Default mPDF options were updated.</li>
 	<li>UNDER THE HOOD: Pressbooks now bundles the WordPress API feature plugin (more to come on this front).</li>
 	<li>UNDER THE HOOD: Our namespace is now \Pressbooks.</li>
</ul>
<h3>3.4.0</h3>
<ul>
 	<li>Requires WordPress 4.5.1.</li>
 	<li>FEATURE: OpenDocument (beta) is now available as an export format.</li>
 	<li>ENHANCED: Plugin assets are now managed using Bower and compiled using gulp. Your Pressbooks dashboard will now load more efficiently (thanks to the @rootswp team for their development of this workflow).</li>
 	<li>ENHANCED: All symbionts except for that weird ICML one are now managed using Composer.</li>
 	<li>ENHANCED: <code>check_prince_install()</code> now tries to run <code>prince --version</code> instead of looking for the executable file.</li>
 	<li>FIXED: The Tweet button had stopped working, so we replaced our previous sharing script with @ellisonleao's excellent <a href="https://github.com/ellisonleao/sharer.js/">sharer.js</a>.</li>
 	<li>FIXED: Our fork of @johngodley's Search Regex plugin has been updated for PHP 7.0 compatibility (props to @r66r for the bug report).</li>
</ul>
<h3>3.3.2</h3>
<ul>
 	<li>FIXED: Themes were not appearing to be network enabled due to changes introduced in https://core.trac.wordpress.org/ticket/28436.</li>
</ul>
<h3>3.3.1</h3>
<ul>
 	<li>FIXED: The custom logo feature introduced in v3.3.0 now displays logos at a more reasonable size.</li>
 	<li>FIXED: Some extraneous files were bundled in v3.3.0. They are gone now.</li>
 	<li>FIXED: An extra line break was introduced to the Export screen in v3.3.0. It is gone now too.</li>
</ul>
<h3>3.3.0</h3>
<ul>
 	<li>Requires WordPress 4.5.</li>
 	<li>ICML is now an experimental export format (see http://pressbooks.com/blog/discontinuing-support-for-icml-exports-on-april-12/).</li>
 	<li>Added support for WordPress core's custom logo in Pressbooks Publisher.</li>
 	<li>Added the TinyMCE background color button.</li>
 	<li>Allow a user to choose their password when registering.</li>
 	<li>Allow a network administrator to replace the Pressbooks News dashboard feed with their own RSS feed or disable the dashboard feed entirely.</li>
 	<li>Fixed an issue where the "Show Title" checkbox on the "Organize" page had no effect (props to @sswettenham for the bug report).</li>
 	<li>Fixed an issue where uploaded media were not attached to their parent Front Matter, Chapter or Back Matter.</li>
 	<li>Internal dependencies are now managed using <a href="https://getcomposer.org">Composer</a>.</li>
</ul>
<h3>3.2.0</h3>
<ul>
 	<li>Requires WordPress 4.4.2.</li>
 	<li>Added Google Analytics support at the network level (subdomain and subdirectory installs) and the book level (subdomain installs only).</li>
 	<li>Added support for installs that use SSL (props to @bdolor for contributions).</li>
 	<li>Added localization support for strings (currently, "Chapter" and "Part") in book stylesheets.</li>
 	<li>Added localization support for the Pressbooks "freebie" notice.</li>
 	<li>Clarified new user and book registration text.</li>
 	<li>Set timezone on export page based on root site settings (props to @chrillep for the bug report).</li>
 	<li>Enhanced image display in exports.</li>
 	<li>Expanded code coverage.</li>
 	<li>Fixed an issue where footnote anchors would not be properly created when importing a Word document (thanks to @crism for the report and the contribution).</li>
 	<li>Fixed an issue where clicking 'Show in Catalog' would not work (props to @colomet for the bug report).</li>
 	<li>Fixed an issue where the "My Books" button would appear in Pressbooks Publisher for logged-in users with no books.</li>
 	<li>Fixed the way the PB_PLUGIN_DIR and PB_PLUGIN_URL constants are defined to support installations of Pressbooks where plugins and themes are symlinked.</li>
</ul>
<h3>3.1.2</h3>
<ul>
 	<li>Requires WordPress 4.4.1.</li>
 	<li>Added internal links (anchors) to the built in 'Insert/edit Link' dialog.</li>
 	<li>Added admin notices to indicate the success or failure of some AJAX actions which do not produce a visible result.</li>
 	<li>Fixed an issue with EPUB validation introduced by WordPress 4.4's implementation of the srcset attribute.</li>
 	<li>Fixed an issue where a dynamically-generated webBook stylesheet would be erroneously loaded.</li>
 	<li>Fixed an issue with image paths in Luther webBook stylesheet (props to @bdolor for the bug report).</li>
 	<li>Fixed an issue that caused ODT exports to fail in a particularly undignified manner.</li>
 	<li>Fixed an issue where PDF themes would not be imported for editing properly when using the Pressbooks Custom CSS theme.</li>
 	<li>Expanded test suites.</li>
</ul>
<h3>3.1.1</h3>
<ul>
 	<li>Fixed an issue where custom web book themes would not be properly loaded.</li>
 	<li>Updated the PB_PLUGIN_VERSION constant, which slipped under our radar when we released Pressbooks 3.1.</li>
</ul>
<h3>3.1</h3>
<ul>
 	<li>Requires WordPress 4.4.</li>
 	<li>Added a new Textboxes menu in TinyMCE which supports some new types of textboxes in addition to standard and shaded.</li>
 	<li>Added support for assigning classes to tables within the TinyMCE Table Editor and removed some unnecessary features from it.</li>
 	<li>Added a new Greek language font.</li>
 	<li>Moved the mPDF library to an external plugin, <a href="https://wordpress.org/plugins/pressbooks-mpdf">Pressbooks mPDF</a>.</li>
 	<li>Localized strings within some of our TinyMCE plugins. More to come.</li>
 	<li>Improved SCSS theme structure and SCSS compilation routines.</li>
 	<li>Improved XSL file for ODT export.</li>
 	<li>Improved some TinyMCE styles.</li>
 	<li>Fixed an issue where activating a non-SCSS theme would cause an error.</li>
 	<li>Fixed an issue where loading the Search and Replace tool would cause an error (props to @rootl for the bug report).</li>
 	<li>Updated some assets.</li>
</ul>
<h3>3.0</h3>
<ul>
 	<li>SASS-y themes: book themes are now built with SASS (specifically the SCSS variant) and compiled for export or web display using either the bundled scssphp compiler (https://github.com/leafo/scssphp/) or the SASS PHP extension if installed (https://github.com/sensational/sassphp). See <code>/docs/themes-book.txt</code> for details if you are developing your own themes.</li>
 	<li>Global Typography: users can add fonts to display Ancient Greek, Arabic, Biblical Hebrew, Chinese (Simplified or Traditional), Coptic, Gujarati, Japanese, Korean, Syriac, Tamil or Tibetan in any theme across all standard export formats via the Theme Options page.</li>
 	<li>EPUB 3: the current version of the EPUB standard is now fully supported and will soon become Pressbooks' default EPUB export format.</li>
 	<li>Added support for importing book information from a Pressbooks XML file.</li>
 	<li>Added support for persistent export format selections on the Export page.</li>
 	<li>Added the ability to show or hide front matter, chapter and back matter titles on the Organize page.</li>
 	<li>Added initial support for unit testing.</li>
 	<li>Requires PHP 5.6 (this can be overridden by setting <code>$pb_minimum_php</code> in wp-config.php, but we do not encourage this).</li>
 	<li>Updated the Prince command line wrapper to support Prince 10r5.</li>
 	<li>Updated export icons to support Retina screens.</li>
 	<li>Fixed an issue where Norwegian localization files were not being properly loaded.</li>
 	<li>Fixed an issue where the xml:lang attribute would set to <code>en</code> regardless of the book language.</li>
 	<li>Fixed an issue that prevented Prince from loading its built-in hyphenation dictionaries.</li>
 	<li>Fixed an issue with Kindle exports in bundled book themes.</li>
 	<li>Fixed an issue with multi-level TOC styling in bundled book themes.</li>
 	<li>Fixed an issue with EPUB images.</li>
 	<li>Fixed some PHP warnings.</li>
 	<li>Refactored some code for consistent namespacing and other improvements.</li>
 	<li>Various localization updates.</li>
 	<li>Various performance enhancements.</li>
</ul>
<h3>2.7.2</h3>
<ul>
 	<li>Requires WordPress 4.3.1.</li>
 	<li>Added MCE Anchor Button (migrated from Pressbooks Textbook, props to @bdolor).</li>
 	<li>Fixed an issue where the book language could be incorrectly set to Afrikaans if the network language was undefined.</li>
 	<li>Fixed an issue where loading a user's catalog would call memory-intensive functions repeatedly (props to @connerbw).</li>
 	<li>Suppressed unhelpful errors when calling getSubsections() function (props to @connerbw).</li>
</ul>
<h3>2.7.1</h3>
<ul>
 	<li>Fixed an issue where changes made with the Search &amp; Replace tool would not be saved (props to @connerbw).</li>
 	<li>Fixed an issue where users without super admin privileges would be incorrectly prevented from using the Import or Search &amp; Replace tools.</li>
 	<li>Fixed a display bug in recent builds of Google Chrome (props to @connerbw).</li>
</ul>
<h3>2.7</h3>
<ul>
 	<li>Major cleanup of the administration interface.</li>
</ul>
<h3>2.6.7</h3>
<ul>
 	<li>Added the ability to edit a table's class in the MCE Table Button's properties editor.</li>
 	<li>Fixed an issue where Chinese would appear as the default user interface language.</li>
 	<li>Fixed an issue where disabling social media sharing buttons would only disable Facebook (props to @colomet for the bug report).</li>
 	<li>Updated localizations.</li>
</ul>
<h3>2.6.6</h3>
<ul>
 	<li>Exporting a MOBI file no longer requires you to export an EPUB file also.</li>
</ul>
<h3>2.6.5</h3>
<ul>
 	<li>Fixed a number of issues with multi-level TOC parsing.</li>
 	<li>Fixed an issue where internal links on subdirectory installs were not being properly modified for PDF output (props to @bdolor).</li>
</ul>
<h3>2.6.4</h3>
<ul>
 	<li>Added support for audio shortcodes in EPUB3 (props to @jflowers45).</li>
 	<li>Modified login buttons to redirect users to the page they were viewing after login rather than force redirecting them to their dashboard (props to @marcusschiesser for the feature request).</li>
 	<li>Fixed an issue where PDF exports were not respecting user-defined widow and orphan settings.</li>
 	<li>Fixed an issue where unsupported @font-face declarations where being used in mPDF exports (props to @jflowers45 for the bug report and @bdolor for fixing it).</li>
 	<li>Fixed an issue where updating a book's URL would break permalinks to front matter, back matter and parts (props to @programmieraffe for the bug report).</li>
 	<li>Removed the WordPress contextual help button to avoid confusion on the dashboard (props to @colomet for noting its presence).</li>
</ul>
<h3>2.6.3</h3>
<ul>
 	<li>Fixed issue with self-closing tags introduced in 2.6.1.</li>
</ul>
<h3>2.6.2</h3>
<ul>
 	<li>Fixed issues with character encoding and improperly formed
tags introduced in 2.6.1.</li>
</ul>
<h3>2.6.1</h3>
<ul>
 	<li>Fixed issues with subsection parsing where</li>
</ul>
&lt;

h1&gt; tags had inline styles or were wrapped in other block elements.
* Fixed an issue where changing a book's language to "English" as opposed to "English (United States)" would fail to override the network's language setting.
* Updated documentation.
<h3>2.6</h3>
<ul>
 	<li>Requires WordPress 4.3.</li>
 	<li>The language selected on the book info page now applies to the book's webbook display.</li>
 	<li>The language selected on the network settings page now applies automatically to new books and users.</li>
 	<li>The language selected on a user's profile now overrides the network and book languages when they view the Pressbooks dashboard.</li>
</ul>
<h3>2.5.4</h3>
<ul>
 	<li>Requires WordPress 4.2.4.</li>
 	<li>Added Disable Comments (migrated from Pressbooks Textbook, props to @bdolor and the plugin's creators).</li>
 	<li>Added a warning message when users upload a cover image above the recommended size.</li>
 	<li>Optimized \Pressbooks\Book::getBookStructure() so as to only fetch export status during export routines (props to @bracken).</li>
 	<li>Fixed a conflict with Jetpack (props to @programmieraffe for the bug report).</li>
 	<li>Fixed an issue where chapters were being number in mPDF TOCs regardless of user preference (props to @bdolor for the fix and to @sswettenham for the bug report).</li>
 	<li>Fixed an issue where sections would be parsed unnecessarily in webbooks (props to @bracken).</li>
 	<li>Fixed two issues related to permissive private content (props to @marcusschiesser for the bug reports).</li>
 	<li>Fixed an issue that caused a recursion during PDF export (props to @bseeger for the bug report).</li>
</ul>
<h3>2.5.3</h3>
<ul>
 	<li>Added option to allow logged-in subscribers, contributors and authors to view a book's private content (props to @marcusschiesser for the feature request).</li>
 	<li>Fixed an issue where the webbook TOC would not be displayed for any user who was not logged in (props to @sswettenham for the bug report).</li>
 	<li>Fixed an issue where the media folder was not being deleted after ODT exports without a cover image.</li>
</ul>
<h3>2.5.2</h3>
<ul>
 	<li>Added MCE Superscript &amp; Subscript Buttons (migrated from Pressbooks Textbook, props to @bdolor and the plugin's creators).</li>
 	<li>Improved ODT export: temporary files are now deleted when export fails (props to @sswettenham for the bug report).</li>
 	<li>Improved user catalog: book covers are now clickable links (props to @kdv24).</li>
 	<li>Improved user catalog: sidebars are sized to fit content instead of being restricted to window height (props to @changemachine).</li>
 	<li>Fixed an issue where private chapters would appear in webbook TOC for logged-in users without the permissions to actually view them (props to @marcusschiesser for the bug report).</li>
</ul>
<h3>2.5.1</h3>
<ul>
 	<li>Added MCE Table Editor (migrated from Pressbooks Textbook, props to @bdolor and the plugin's creators).</li>
 	<li>Added support for excluding root domains <em>and</em> subdomains in <code>show_experimental_features()</code> function.</li>
 	<li>Added the ability to toggle social media integration on or off in webbooks (props to @bdolor).</li>
 	<li>Added the ability to restrict specific network administrators' access to some network administration pages.</li>
 	<li>Added a note in readme.txt indicating that <code>php5-xsl</code> is a required extension for certain exports (props to @jflowers45).</li>
 	<li>Added a function to intelligently load plugins in <code>/symbionts</code> so as to avoid conflicts (props to @bdolor and the Pressbooks Textbook team for providing the basis for this).</li>
 	<li>Forced Google webfonts to load via SSL (props to @bdolor).</li>
 	<li>Improved editor style so that large images fit the editing window (props to @hughmcguire).</li>
 	<li>Improved Javascript related to the sidebar table of contents in webbooks (props to @changemachine and @kdv24).</li>
 	<li>Improved logic related to maximum import size reporting (props to @jflowers45).</li>
 	<li>Improved styles associated with the accessibility plugin (props to @bdolor).</li>
 	<li>Improved XSL for ODT export.</li>
 	<li>Restored login screen branding in Pressbooks Publisher 2.0.</li>
 	<li>Restored user catalog links in Pressbooks Publisher 2.0.</li>
 	<li>Fixed a database error in user catalogs (props to @bdolor for the bug report).</li>
 	<li>Fixed an issue where books would overlap on the user catalog page (props to @bracken and @changemachine).</li>
 	<li>Fixed an issue where cover images and LaTex images would be omitted from ODT exports (props to @bdolor for the bug report and for assistance in solving this).</li>
 	<li>Fixed an issue where embedded audio files would be hidden in exports because of an inline style (props to @bdolor).</li>
 	<li>Fixed an issue where the <code>introduction</code> class would not be applied in certain exports.</li>
 	<li>Fixed an issue where exports would fail because the <code>get_user_by</code> function was being improperly namespaced (props to @borayeris for the bug report).</li>
</ul>
<h3>2.5</h3>
<ul>
 	<li>Requires WordPress 4.2.2.</li>
 	<li>New root theme, Pressbooks Publisher 2.0. Pressbooks Publisher One has been deprecated and is now available (unsupported) <a href="https://github.com/pressbooks/pressbooks-publisher-one/">here</a>.</li>
 	<li>Added centralized <code>show_experimental_features()</code> function to control where such things appear.</li>
 	<li>Added experimental PDF export via mPDF as an open source alternative to Prince (props to @bdolor).</li>
 	<li>Added fallbacks for title, author and cover image fetching in <code>getBookInformation()</code> function.</li>
 	<li>Improved image fetching in ODT export (props to @bdolor).</li>
 	<li>Improved import of Pressbooks XML files (props to @bdolor).</li>
 	<li>Fixed issue where the API could show chapters as appearing in the wrong part (props to @bdolor).</li>
 	<li>Fixed issue where entities would be improperly loaded in XML document in ODT export (props to @bdolor).</li>
 	<li>Fixed issue with the network administration menu in the admin bar.</li>
 	<li>Fixed issue with spacing and punctuation in webbook license module output.</li>
</ul>
<h3>2.4.5</h3>
<ul>
 	<li>Requires WordPress 4.2.1.</li>
</ul>
<h3>2.4.4</h3>
<ul>
 	<li>Requires WordPress 4.2.</li>
 	<li>Added experimental ODT export capability.</li>
 	<li>Fixed issue where useful backslashes were stripped on import (props to @lukaiser for identifying this issue).</li>
</ul>
<h3>2.4.3</h3>
<ul>
 	<li>Requires WordPress 4.1.2.</li>
 	<li>Removed Hpub export routines.</li>
 	<li>Made links inside the <code>[footnote]</code> shortcode clickable (props to @bdolor).</li>
 	<li>Added accessibility plugin to allow font size increases in webbook and PDF exports (props to @BakingSoda and @bdolor).</li>
 	<li>Added some instructional text to Book Info page.</li>
 	<li>Fixed character encoding issue with the TOC display of subsection titles.</li>
 	<li>Fixed internal links for subdirectory installs within PDF exports (props to @bdolor).</li>
 	<li>Fixed issue with catalog page in WebKit browsers (props to @bdolor).</li>
 	<li>Fixed potential XSS attack via <code>remove_query_arg</code> (see: https://blog.sucuri.net/2015/04/security-advisory-xss-vulnerability-affecting-multiple-wordpress-plugins.html; props to @bdolor).</li>
 	<li>Fixed variable-related warnings on RESTful API when debugging mode is enabled (props to @julienCXX).</li>
 	<li>Fixed XHTML export issue with respect to determining the introduction part or chapter for page numbering.</li>
 	<li>Updated included custom-metadata plugin to fix <code>array_reverse</code> bug (@props to bdolor).</li>
 	<li>Swedish translation (props to @chrillep).</li>
</ul>
<h3>2.4.2</h3>
<ul>
 	<li>Fixed licenses.</li>
 	<li>Added child theme support to collapsible TOC functionality (props to @bdolor).</li>
</ul>
<h3>2.4.1</h3>
<ul>
 	<li>Fixed issue with improperly parsed sections in chapters and back matter.</li>
</ul>
<h3>2.4</h3>
<ul>
 	<li>Requires WordPress 4.1.</li>
 	<li>Refined export logic to ensure that parts are handled properly under all circumstances.</li>
 	<li>Refined parsing of chapter subsections; this feature no longer requires the use of the <code>&lt;section&gt;</code> tag.</li>
 	<li>Subsections are now parsed in front- and back-matter as well.</li>
 	<li>Support for a centralized fonts folder in the themes directory.</li>
 	<li>Fixed bug that broke the running head in PDF exports.</li>
 	<li>Fixed bug that broke internal links in PDF exports.</li>
 	<li>Fixed bug that caused the Chapter Types menu item to be displayed twice for certain users.</li>
 	<li>Beta Pressbooks API (props to @bdolor; see http://pressbooks.com/api/v1/docs).</li>
 	<li>Collapsible TOCs for webbooks (props to @drlippman).</li>
 	<li>Import enhancements (props to @bdolor).</li>
 	<li>EPUB export enhancements (props to @bdolor).</li>
</ul>
<h3>2.3.3</h3>
<ul>
 	<li>Compatibility with WordPress 4.0.</li>
 	<li>Fixed some issues with our experimental EPUB3 export (props to @bdolor).</li>
 	<li>Enhancements to WXR and EPUB import (props to @bdolor and @drlippman).</li>
 	<li>Added support for contributing authors in webbooks and exports (props to @bdolor).</li>
 	<li>Added some new translation files.</li>
</ul>
<h3>2.3.2</h3>
<ul>
 	<li>Cleaner print output from webbooks.</li>
 	<li>Ebook theme option to skip line between paragraphs is now honored in all themes.</li>
</ul>