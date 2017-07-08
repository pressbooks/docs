---
ID: 96
post_title: Book Themes
author: Ned Zimmerman
post_excerpt: ""
layout: page
permalink: http://docs.pressbooks.org/book-themes/
published: true
post_date: 2017-07-07 22:29:32
---
In addition to being WordPress compatible, a book theme must have the following directories and files. These files are used by our PDF &amp; EPUB export modules. The files can be empty (<code>script.js</code>, for example), but must exist.

We use the SCSS variant of <a href="http://sass-lang.com">SASS</a> for our stylesheets, which allows us dynamically modify font stacks and other variables based on user preferences.
<pre>├── _fonts-epub.scss
├── _fonts-prince.scss
├── _fonts-web.scss
├── export
│   ├── epub
│   │   ├── images
│   │   │   └── *
│   │   └── style.scss
│   └── prince
│       ├── images
│       │   └── *
│       ├── script.js
│       └── style.scss
├── style.scss
</pre>
<h2>Fonts</h2>
<code>_fonts-epub.scss</code>, <code>_fonts-prince.scss</code>, <code>_fonts-web.scss</code> are SCSS font stack definitions for EPUB, PDF and WEB.

Example code in <code>_fonts-prince.scss</code>:
<pre>@import '_font-stack-prince'; // Dynamically generated

$serif-prince: serif !default;
$sans-serif-prince: sans-serif !default;

$font-1: "Tinos", Georgia, $serif-prince;
$font-2: 'Lato', Helvetica, Arial, $sans-serif-prince;

@import 'LatoFont', 'TinosFont';
</pre>
Most themes have at least two font stacks. <code>$font-1</code> must be the body font, and <code>$font-2</code> must be the header font.

The <code>@import</code> rule loads a SCSS <code>_font-stack-{TYPE}</code> file which is dynamically generated based on the Global Typography theme option. The <code>_font-stack-{TYPE}</code> is built from partials found in <code>./pressbooks/assets/scss/fonts/*.*</code>

These files, in combination with the <code>$serif-epub</code>, <code>$sans-serif-epub</code>, <code>$serif-prince</code>, <code>$sans-serif-prince</code>, <code>$serif-web</code> and <code>$sans-serif-web</code> variables, allow us to dynamically add support for non-Latin character sets.

Each <code>style.scss</code> file must import the appropriate font stack(s). Example for <code>./export/prince/style.scss</code>:
<pre>@import 'fonts-prince';</pre>
Font files are located in <code>./themes-book/pressbooks-book/fonts/</code>

The paths for all such fonts in your Custom CSS need to be as follows:
<pre>@font-face {
// ...
src: url(themes-book/pressbooks-book/fonts/YourFont.ttf) format("truetype");
}</pre>
<h2>PDF (Prince) Best Practices</h2>
<ol>
 	<li>Use CSS and JavaScript as outlined in the <a href="http://www.princexml.com/doc/">Prince user guide</a>.</li>
</ol>
<h2>Ebook Best Practices</h2>
<ol>
 	<li>CSS must validate as CSS 2.01 with absolutely <strong>no</strong> errors. See:
<ul>
 	<li><a href="http://jigsaw.w3.org/css-validator/">W3C CSS Validation Service</a></li>
 	<li><a href="http://idpf.org/epub/20/spec/OPS_2.0.1_draft.htm#Section3.0">Open Publication Structure (OPS) Style Sheets</a></li>
</ul>
Why? Adobe Digital Editions (v1.7.2), a licensed technology used by other vendors, will not render CSS with errors.</li>
 	<li>Avoid nested styles.Why? Some CSS styles which are declared in nested form do not work well with Mobi7.</li>
 	<li>More Mobi7 superstition.Newer Kindles (KF8) work pretty good! Unfortunately there are no CSS standards for old Kindles (Mobi7). Mobi7
styling is all done inline. The problems you will encounter are when kindlegen converts CSS to inline HTML for
backwards compatibility.<code>font-size</code>, <code>font-weight</code>, and <code>font-*</code> on <code>.someclass p</code>, <code>.someclass h5</code>, and <code>.someclass *random*</code> will mess up
Mobi7 ouput very badly. You can solve this by making valid CSS 2.1 too complicated for the Mobi7 converter to
figure out. For example, defining a CSS selector that only applies to a node that has multi-class CSS inheritance,
e.g. <code>.ugc.ugc-chapter h5</code>, or by using the <code>&gt;</code> symbol.This is "throw salt over your shoulder" and "don't walk on sidewalk cracks" advice. The bugs you will encounter
with Mobi7 conversion are time consuming and arbitrary. Expect a ton of exports, a ton of trial and error. You can
save some time by unpacking MOBI files and looking directly at the Mobi7 HTML with a tool like:
<a href="http://www.mobileread.com/forums/showthread.php?t=61986">Mobi Unpack</a>.</li>
 	<li>We test in:
<ul>
 	<li>Calibre</li>
 	<li>Firefox Epub reader</li>
 	<li>iBooks</li>
 	<li>Adobe Digital Editions 1.7.2</li>
 	<li>Nook Simple Touch</li>
 	<li>Kindle Preview</li>
 	<li>$69 Kindle</li>
</ul>
</li>
</ol>
<h2>Theme Options</h2>
Certain style elements can be overridden by the user under My Books → <strong>YOUR_BOOK</strong> → Appearance → Theme Options.

These options are in the book theme, not in the plugin. As a book theme designer you are required to created the
following functions in your functions.php file:
<ul>
 	<li><code>pressbooks_theme_options_display()</code></li>
 	<li><code>pressbooks_theme_options_summary()</code></li>
</ul>
When it comes time to exporting, the following WordPress filters are available:
<ul>
 	<li><code>pb_pdf_css_override</code></li>
 	<li><code>pb_epub_css_override</code></li>
 	<li><code>pb_pdf_hacks</code></li>
 	<li><code>pb_epub_hacks</code></li>
</ul>
The rule of thumb is that <em>all</em> PDF styling should be done using CSS.

In contrast, the HTML piped to the Epub exporter may include HTML hacks to work around bugs found in older Ebook
readers. As older hardware is deprecated we expect this situation to improve.

Examples:
<pre>function pressbooks_theme_pdf_css_override( $css ) {
    return $css; // string
}
add_filter( 'pb_pdf_css_override', 'pressbooks_theme_pdf_css_override' );

function pressbooks_theme_ebook_css_override( $css ) {
  return $css; // string
}
add_filter( 'pb_epub_css_override', 'pressbooks_theme_ebook_css_override' );

function pressbooks_theme_pdf_hacks( $hacks ) {
  return $hacks; // array of options passed back to the export module
}
add_filter( 'pb_pdf_hacks', 'pressbooks_theme_pdf_hacks' );

function pressbooks_theme_ebook_hacks( $hacks ) {
  return $hacks; // array of options passed back to the export module
}
add_filter( 'pb_epub_hacks', 'pressbooks_theme_ebook_hacks' );
</pre>
More functions available to book designers. See: pressbooks/functions.php
<ul>
 	<li><code>pb_get_book_information()</code></li>
 	<li><code>pb_get_book_structure()</code></li>
 	<li><code>pb_get_prev()</code></li>
 	<li><code>pb_get_next()</code></li>
 	<li><code>pb_get_first()</code></li>
 	<li><code>pb_decode()</code></li>
 	<li><code>pb_is_custom_theme()</code></li>
 	<li><code>pb_get_custom_stylesheet_url()</code></li>
 	<li><code>pb_get_chapter_number( $post_name )</code></li>
 	<li><code>pb_thumbify( $thumb, $path )</code></li>
</ul>
<h3>The HTML</h3>
Top level elements (i.e. children nodes of):

<code>&lt;div id="X"&gt;</code> where X can be:
<ul>
 	<li>cover-image</li>
 	<li>half-title-page</li>
 	<li>title-page</li>
 	<li>copyright-page</li>
 	<li>toc</li>
</ul>
<code>&lt;div class="X" id="post_name"&gt;</code> where X can be:
<ul>
 	<li>front-matter</li>
 	<li>part</li>
 	<li>chapter</li>
 	<li>back-matter</li>
</ul>
<h3>Typical structure for <em>front-matter</em> (note: "ugc" stands for "User Generated Content")</h3>
<pre>
<div id="post_name" class="front-matter subclass">
<div class="front-matter-title-wrap">
<h3 class="front-matter-number">123</h3>
<h1 class="front-matter-title">Title</h1>

</div>
<div class="ugc front-matter-ugc">

<!-- Optional -->
<h2 class="chapter-author"></h2>
<h2 class="chapter-subtitle"></h2>
<!-- WordPress, post_content -->

</div>
<div class="endnotes"><!-- h3, ol --></div>

</div>
</pre>

<h3>Typical structure for <em>part</em></h3>

<pre><div class="part" id="post_name">
  <div class="part-title-wrap">
    <h3 class="part-number">123</h3>
    <h1 class="part-title">Title</h1>
  </div>
</div></pre>

<h3>Typical structure for <em>chapter</em></h3>
<pre><div class="chapter" id="post_name">
  <div class="chapter-title-wrap">
    <h3 class="chapter-number">123</h3>
    <h2 class="chapter-title">Title</h2>
  </div>
  <div class="ugc chapter-ugc">
    <!-- Optional -->
    <h2 class="chapter-author"></h2>
    <h2 class="chapter-subtitle"></h2>
    <h6 class="short-title"></h2>
    <!-- WordPress, post_content -->
  </div>
  <div class="endnotes"><!-- h3, ol--></div>
</div></pre>
<h3>Typical structure for <em>back-matter</em></h3>
<pre><div class="back-matter subclass" id="post_name">
  <div class="back-matter-title-wrap">
    <h3 class="back-matter-number">123</h3>
    <h1 class="back-matter-title">Title</h1>
  </div>
  <div class="ugc back-matter-ugc">
  <!-- WordPress, post_content -->
  </div>
  <div class="endnotes"><!-- h3, ol --></div>
</div></pre>