---
title: REST API
permalink: /rest-api/
---
## Recommended Tools

* [JSON Formatter][1]  
* [Yet Another REST Client][2]  
* [Basic Authentication Plugin (FastCGI Compatible Fork)][3]

### Troubleshooting

* JSON Formatter: **CTRL/CMD+Click** a triangle to collapse/expand nodes at the same level.  
* YARC: When testing with Basic Authentication, make sure you are logged out of WordPress first.

## Getting Started

[WP API][4] supports all HTTP Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS. WP API respects permissions but the developer must [setup authentication][5] separately.

### Schema

WP API is self-documenting. Send an OPTIONS request to any endpoint and get back

[JSON Schema][6] compatible info on how to use it: [caption id="attachment_127" align="aligncenter" width="653"][![Options in YARC](https://pressbooks.org/app/uploads/sites/2/2017/07/options.png)][7][7] Options in YARC[/caption]

> To get the entire API schema in a single query, add `context=help` at the index. (Ie. http://site/book/wp-json?context=help )

### Multisite

Pressbooks has different API endpoints for book and the root site: [caption id="attachment_128" align="aligncenter" width="1366"]

![Book vs. Root](https://pressbooks.org/app/uploads/sites/2/2017/07/namespaces.png) Book vs. Root[/caption]

### Features

WP API items have a `_links` node based on [HAL][8] (Hypertext Application Language): [caption id="attachment_129" align="aligncenter" width="586"]![_links](https://pressbooks.org/app/uploads/sites/2/2017/07/links.png) _links[/caption] To reduce the number of HTTP requests use [the *embed parameter][9] to tell the API that the response should include embeddable resources. [caption id="attachment_130" align="aligncenter" width="680"][![_embedded](https://pressbooks.org/app/uploads/sites/2/2017/07/embeded.png)][9][10] _embedded[/caption] WP API exposes pagination info in the response header. [caption id="attachment_131" align="aligncenter" width="1024"][![Pagination](https://pressbooks.org/app/uploads/sites/2/2017/07/pagination.png)][10][11] Pagination[/caption]

### PHP to JSON

WP API renders JSON in a generic way that does not match the DB columns. Keep calm and

[RTFM][12]:

```
if ( ! empty( $schema['properties']['author'] ) ) {
    $data['author'] = (int) $post->post_author;
}
if ( ! empty( $schema['properties']['slug'] ) ) {
    $data['slug'] = $post->post_name;
}
if ( ! empty( $schema['properties']['content'] ) ) {
    $data['content'] = array(
        'rendered'  => post_password_required( $post ) ? '' : apply_filters( 'the_content', $post->post_content ),
        'protected' => (bool) $post->post_password,
    );
}
```

```
{
  "author": 1,
  "slug": "chapter-1",
  "content": {
    "rendered": "<p>This is the first chapter in the main body of the text. You can change the text, rename the chapter, add new chapters, and add new parts.</p>",
    "protected": false
  }
}
```

 [1]: https://github.com/callumlocke/json-formatter  
 [2]: https://github.com/paulhitz/yet-another-rest-client  
 [3]: https://github.com/eventespresso/Basic-Auth  
 [4]: https://developer.wordpress.org/rest-api/  
 [5]: https://developer.wordpress.org/rest-api/using-the-rest-api/authentication/#authentication-plugins  
 [6]: http://json-schema.org/  
 [7]: https://pressbooks.org/app/uploads/sites/2/2017/07/options.png  
 [8]: http://stateless.co/hal_specification.html  
 [9]: https://developer.wordpress.org/rest-api/using-the-rest-api/global-parameters/#*embed  
 [10]: https://pressbooks.org/app/uploads/sites/2/2017/07/embeded.png  
 [11]: https://pressbooks.org/app/uploads/sites/2/2017/07/pagination.png  
 [12]: https://developer.wordpress.org/rest-api/reference/posts/
