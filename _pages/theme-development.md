---
ID: 94
post_title: Theme Development
author: Ned Zimmerman
post_excerpt: ""
layout: page
permalink: >
  http://docs.pressbooks.org/theme-development/
published: true
post_date: 2017-07-07 22:29:32
---
<em>Follow along with these steps at the <a href="https://github.com/pressbooks/pressbooks-demo">pressbooks/pressbooks-demo</a> repository.</em>
<h2>1. Getting Started</h2>
<em>Reference Commit: <a href="https://github.com/pressbooks/pressbooks-demo/commit/15875fb8c7d4ea8a026190c60e48ae4b4971cef3">15875fb</a></em>

We recommend that you start by installing <a href="http://wp-cli.org/#installing">WP-CLI</a> and our <a href="https://github.com/pressbooks/pb-cli/#installing">pb-cli</a> package. This will let you scaffold a new Pressbooks book theme in your development environment with the following command:
<pre><code>wp scaffold book-theme &lt;slug&gt;
</code></pre>
For further options, <a href="https://github.com/pressbooks/pb-cli/#using">read the docs</a>.

The resulting theme will have the following structure and contents:
<pre><code>├── assets
│   ├── styles
│   │   ├── components
│   │   │   ├── _accessibility.scss
│   │   │   ├── _colors.scss
│   │   │   ├── _elements.scss
│   │   │   ├── _media.scss
│   │   │   ├── _specials.scss
│   │   │   ├── _structure.scss
│   │   │   ├── _titles.scss
│   │   │   ├── _toc.scss
│   │   ├── epub
│   │   │   ├── _fonts.scss
│   │   │   ├── style.scss
│   │   ├── prince
│   │   │   ├── _fonts.scss
│   │   │   ├── style.scss
│   │   ├── web
│   │   │   ├── _fonts.scss
│   │   │   ├── style.scss
├── .editorconfig
├── .gitignore
├── .scss-lint.yml
├── functions.php
├── style.css
</code></pre>
Note that <a href="https://github.com/pressbooks/pressbooks-demo/blob/15875fb8c7d4ea8a026190c60e48ae4b4971cef3/style.css"><code>style.css</code></a> is not used except to provide Pressbooks with <a href="https://codex.wordpress.org/File_Header#Theme_File_Header_Example">theme file header</a> information. Your web theme stylesheet is compiled when your theme is activated or theme options that affect it are changed. For easier development, you can add the following line to <code>wp-config.php</code>:

<code>define('WP_ENV', 'development');</code>

This will turn on the development compiler introduced in Pressbooks 3.9.0, which triggers a recompile of your web theme stylesheet if the source files have been modified since it was last compiled when you visit any page in your webbook (<a href="https://github.com/pressbooks/pressbooks/blob/v3.9.0/themes-book/pressbooks-book/functions.php#L97-L143">see here</a>).
<h2>2. Overriding Defaults</h2>
<em>Reference Commit: <a href="https://github.com/pressbooks/pressbooks-demo/commit/53619ba787069fd46853ac66fd697ed11a21443d">53619ba</a></em>

If you activate the theme you have just created, you will be able to export your book in all formats thanks to our sensible defaults. But now comes the fun part. Each file in <code>assets/styles/components</code> is set up to allow you to override the default values of all theme variables. Components are as follows:
<h3>_accessiblity.scss</h3>
Contains rules for accessibility.
<h3>_colors.scss</h3>
Contains color definitions which can be assigned elsewhere.
<h3>_elements.scss</h3>
Contains rules for standard elements (headings, paragraphs, blockquotes et cetera).
<h3>_media.scss</h3>
Contains rules for images, embedded audio and embedded video.
<h3>_specials.scss</h3>
Contains rules for custom elements (columns, footnotes, pullquotes, dropcaps, et cetera).
<h3>_structure.scss</h3>
Contains rules for document and page and structure (only included in <a href="https://pressbooks.com/prince/">PrinceXML</a> PDF — page dimensions, margins, recto-verso, running content et cetera).
<h3>_titles.scss</h3>
Contains rules for book, front matter, part, chapter and back matter titles.
<h3>_toc.scss</h3>
Contains rules for the book's table of contents.

Let's take a look at <a href="https://github.com/pressbooks/pressbooks-demo/blob/15875fb8c7d4ea8a026190c60e48ae4b4971cef3/assets/styles/components/_elements.scss"><code>assets/styles/components/_elements.scss</code></a>:
<pre>// Elements

// Override variables above this line, using the !default flag to allow further overrides.
@import 'variables/elements';

// Add custom SCSS below these imports and includes.
@import 'components/elements/links';
@import 'components/elements/blockquotes';
@import 'components/elements/body';
@import 'components/elements/headings';
@import 'components/elements/lists';
@import 'components/elements/miscellaneous';
@import 'components/elements/paragraphs';
@import 'components/elements/tables';</pre>
As you can see, this file is importing a variables file and a number of individual component files (all of which can be found within the Pressbooks plugin in the <a href="https://github.com/pressbooks/pressbooks/tree/master/assets/book/styles"><code>assets/book/styles</code></a> directory). Let's examine the rules found in <a href="https://github.com/pressbooks/pressbooks/blob/master/assets/book/styles/components/elements/_blockquotes.scss"><code>components/elements/_blockquotes.scss</code></a>:
<pre>.blockquote,
blockquote {
margin-top: $blockquote-margin-top;
margin-right: $blockquote-margin-right;
margin-bottom: $blockquote-margin-bottom;
margin-left: $blockquote-margin-left;
font-family: $blockquote-font-family;
font-size: $blockquote-font-size;
font-style: $blockquote-font-style;
font-weight: $blockquote-font-weight;
line-height: $blockquote-line-height;
text-align: $blockquote-align;
}</pre>
The values for these SCSS variables are found in <a href="https://github.com/pressbooks/pressbooks/blob/master/assets/book/styles/variables/_elements.scss"><code>variables/_elements.scss</code></a> (all directories and root-level SCSS partials in <code>assets/book/styles/components</code> have a corresponding variables file):

<code>$blockquote-font-family: $font-1 !default;
$blockquote-font-size: .9em !default;
$blockquote-font-style: normal !default;
$blockquote-font-weight: normal !default;
$blockquote-line-height: 1.2em !default;
$blockquote-margin-top: 1em !default;
$blockquote-margin-right: 1em !default;
$blockquote-margin-bottom: 1em !default;
$blockquote-margin-left: 1em !default;
$blockquote-align: justify !default;</code>

You will notice that all these values are set with the SCSS <a href="https://robots.thoughtbot.com/sass-default"><code>!default</code> flag</a>. Essentially, the <code>!default</code> flag tells the SCSS compiler to use this value <strong>unless</strong> another value has already been assigned to the variable. Going back to your new theme's <a href="https://github.com/pressbooks/pressbooks-demo/blob/15875fb8c7d4ea8a026190c60e48ae4b4971cef3/assets/styles/components/_elements.scss"><code>assets/styles/components/_elements.scss</code></a>, file, you could change it as follows:
<pre>// Elements

$blockquote-font-style: italic !default;

// Override variables above this line, using the !default flag to allow further overrides.
@import 'variables/elements';

// Add custom SCSS below these imports and includes.
@import 'components/elements/links';
@import 'components/elements/blockquotes';
@import 'components/elements/body';
@import 'components/elements/headings';
@import 'components/elements/lists';
@import 'components/elements/miscellaneous';
@import 'components/elements/paragraphs';
@import 'components/elements/tables';</pre>
When Pressbooks compiles your theme's SCSS, the rule for blockquotes will now include the <code>font-style</code> value from your theme instead of the global default, so the output will look like this:

<code>.blockquote,
blockquote {
margin-top: 1em;
margin-right: 1em;
margin-bottom: 1em;
margin-left: 1em;
font-family: serif;
font-size: 0.9em;
font-style: italic;
font-weight: normal;
line-height: 1.2em;
text-align: justify;
}</code>

The reason you should use the <code>!default</code> flag on your variable definitions is so that your theme's values can be further overridden by user options. Most variables cannot currently be overridden in this way (because the necessary theme options don't exist yet), but we recommend always using the default flag so that future enhancements to user theme options can be developed with as much flexibility as possible.
<h2>3. Adding Custom Rules</h2>
<em>Reference Commit: <a href="https://github.com/pressbooks/pressbooks-demo/commit/550648bf3c6ea947a5670ce083b8078535d39fb5">550648b</a></em>

Now that you've overridden a variable, try adding your own custom rule. Perhaps your book needs a special type of blockquote that is centered on the page. You can add it by inserting the following rule below the <code>@import</code> rules in <a href="https://github.com/pressbooks/pressbooks-demo/blob/550648bf3c6ea947a5670ce083b8078535d39fb5/assets/styles/components/_elements.scss"><code>assets/styles/components/_elements.scss</code></a>:
<pre><code>blockquote.centered,
.blockquote.centered {
margin-right: auto;
margin-left: auto;
}</code></pre>
Now our full <a href="https://github.com/pressbooks/pressbooks-demo/blob/550648bf3c6ea947a5670ce083b8078535d39fb5/assets/styles/components/_elements.scss"><code>assets/styles/components/_elements.scss</code></a> file looks like this:
<pre>// Elements

$blockquote-font-style: italic !default;
// Override variables above this line, using the !default flag to allow further overrides.
 @import 'variables/elements';

// Add custom SCSS below these imports and includes.
 @import 'components/elements/links';
 @import 'components/elements/blockquotes';
 @import 'components/elements/body';
 @import 'components/elements/headings';
 @import 'components/elements/lists';
 @import 'components/elements/miscellaneous';
 @import 'components/elements/paragraphs';
 @import 'components/elements/tables';

blockquote.centered,
 .blockquote.centered {
 margin-right: auto;
 margin-left: auto;
 }

</pre>
And when you export your book, Pressbooks will compile your new rule after the default rule for blockquotes, so <code>blockquote.centered</code> will inherit all the properties of the standard blockquote but will override the left and right margin properties.
<h2>4. Different Formats, Different Rules</h2>
<em>Reference Commit: <a href="https://github.com/pressbooks/pressbooks-demo/commit/4eb01592c38830127f8392ecfaf4afb7de491260">4eb0159</a></em>

Sometimes you need to set a variable differently depending on which format you are using. Perhaps you want to left-align your blockquotes for EPUB and web, but you want to justify them for PDF. This is easy to accomplish using an SCSS if-statement with the <code>$type</code> variable. Add another variable override to the top of <a href="https://github.com/pressbooks/pressbooks-demo/blob/4eb01592c38830127f8392ecfaf4afb7de491260/assets/styles/components/_elements.scss"><code>assets/styles/components/_elements.scss</code></a> as follows:

<code>@if $type == 'epub' {
$blockquote-align: left !default;
} @else if $type == 'prince' {
$blockquote-align: justify !default;
}  @else if $type == 'web' {
$blockquote-align: left !default;
}</code>

All the component files you are working on are imported into the different outputs' <code>style.scss</code> files. For example, your book theme's stylesheet for Prince PDF, <a href="https://github.com/pressbooks/pressbooks-demo/blob/4eb01592c38830127f8392ecfaf4afb7de491260/assets/styles/prince/style.scss"><code>assets/styles/prince/style.scss</code></a>, looks like this:
<pre>
 $type: 'prince';

@import 'fonts';
 @import '../components/colors';
 @import '../components/elements';
 @import '../components/specials';
 @import '../components/media';
 @import '../components/titles';
 @import '../components/structure';
 @import '../components/toc';

</pre>
The if-statement you just wrote will be evaluated based on each stylesheet's <code>$type</code> variable, so the <code>$blockquote-align</code> property variable will be set to <code>left</code> for EPUB and web and <code>justify</code> for Prince PDF.

You should never modify the <code>assets/styles/&lt;format&gt;/style.scss</code> file directly; all your variables and rules should go in the component files.
<h2>5. Fonts</h2>
TK.
<h2>6. Images</h2>
TK.
<h2>7. Scripts</h2>
TK.