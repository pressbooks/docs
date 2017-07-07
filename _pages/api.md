---
ID: 124
post_title: API
author: Ned Zimmerman
post_excerpt: ""
layout: page
permalink: http://docs.pressbooks.org/api/
published: true
post_date: 2017-07-07 22:44:41
---
<h2 id="recommendedtools">Recommended Tools</h2>
<ul>
 	<li><a href="https://github.com/callumlocke/json-formatter">JSON Formatter</a></li>
 	<li><a href="https://github.com/paulhitz/yet-another-rest-client">Yet Another REST Client</a></li>
 	<li><a href="https://github.com/eventespresso/Basic-Auth">Basic Authentication Plugin (FastCGI Compatible Fork)</a></li>
</ul>
<h3 id="troubleshooting">Troubleshooting</h3>
<ul>
 	<li>JSON Formatter: <strong>CTRL/CMD+Click</strong> a triangle to collapse/expand nodes at the same level.</li>
 	<li>YARC: When testing with Basic Authentication, make sure you are logged out of WordPress first.</li>
</ul>
<h2 id="gettingstarted">Getting Started</h2>
<a href="https://developer.wordpress.org/rest-api/">WP API</a> supports all HTTP Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS.

WP API respects permissions but the developer must <a href="https://developer.wordpress.org/rest-api/using-the-rest-api/authentication/#authentication-plugins">setup authentication</a> separately.
<h3 id="schema">Schema</h3>
WP API is self-documenting. Send an OPTIONS request to any endpoint and get back <a href="http://json-schema.org/">JSON Schema</a> compatible info on how to use it:
<figure><img src="images/api/options.png" alt="OPTIONS in YARC" /><figcaption>OPTIONS in YARC</figcaption></figure>
<blockquote>To get the entire API schema in a single query, add <code>context=help</code> at the index. (Ie. http://site/book/wp-json?context=help )</blockquote>
<h3 id="multisite">Multisite</h3>
Pressbooks has different API endpoints for book and the root site:
<figure><img src="images/api/namespaces.png" alt="Book vs. Root" /><figcaption>Book vs. Root</figcaption></figure>
<h3 id="features">Features</h3>
WP API items have a <code>_links</code> node based on <a href="http://stateless.co/hal_specification.html">HAL</a> (Hypertext Application Language):
<figure><img src="images/api/links.png" alt="_links" /><figcaption>_links</figcaption></figure>
To reduce the number of HTTP requests use [the <em>embed parameter](https://developer.wordpress.org/rest-api/using-the-rest-api/global-parameters/#</em>embed) to tell the API that the response should include embeddable resources.
<figure><img src="images/api/embeded.png" alt="_embeded" /><figcaption>_embeded</figcaption></figure>
WP API exposes pagination info in the response header.
<figure><img src="images/api/pagination.png" alt="pagination" /><figcaption>pagination</figcaption></figure>
<h3 id="phptojson">PHP to JSON</h3>
WP API renders JSON in a generic way that does not match the DB columns. Keep calm and <a href="https://developer.wordpress.org/rest-api/reference/posts/">RTFM</a>:
<pre><code class="php">if ( ! empty( $schema['properties']['author'] ) ) {
    $data['author'] = (int) $post-&gt;post_author;
}
if ( ! empty( $schema['properties']['slug'] ) ) {
    $data['slug'] = $post-&gt;post_name;
}
if ( ! empty( $schema['properties']['content'] ) ) {
    $data['content'] = array(
        'rendered'  =&gt; post_password_required( $post ) ? '' : apply_filters( 'the_content', $post-&gt;post_content ),
        'protected' =&gt; (bool) $post-&gt;post_password,
    );
}</code></pre>
<pre><code class="json">{
  "author": 1,
  "slug": "chapter-1",
  "content": {
    "rendered": "&lt;p&gt;This is the first chapter in the main body of the text. You can change the text, rename the chapter, add new chapters, and add new parts.&lt;/p&gt;",
    "protected": false
  }
}</code></pre>