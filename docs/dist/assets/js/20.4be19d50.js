(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{375:function(e,t,r){"use strict";r.r(t);var a=r(45),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"recommended-tools"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recommended-tools"}},[e._v("#")]),e._v(" Recommended Tools")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/callumlocke/json-formatter",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON Formatter"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/paulhitz/yet-another-rest-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yet Another REST Client"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/eventespresso/Basic-Auth",target:"_blank",rel:"noopener noreferrer"}},[e._v("Basic Authentication Plugin (FastCGI Compatible Fork)"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"troubleshooting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),r("ul",[r("li",[e._v("JSON Formatter: "),r("strong",[e._v("CTRL/CMD+Click")]),e._v(" a triangle to collapse/expand nodes at the same level.")]),e._v(" "),r("li",[e._v("YARC: When testing with Basic Authentication, make sure you are logged out of WordPress first.")])]),e._v(" "),r("h2",{attrs:{id:"getting-started"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://developer.wordpress.org/rest-api/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WP API"),r("OutboundLink")],1),e._v(" supports all HTTP Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS. WP API respects permissions but the developer must "),r("a",{attrs:{href:"https://developer.wordpress.org/rest-api/using-the-rest-api/authentication/#authentication-plugins",target:"_blank",rel:"noopener noreferrer"}},[e._v("setup authentication"),r("OutboundLink")],1),e._v(" separately.")]),e._v(" "),r("h3",{attrs:{id:"schema"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#schema"}},[e._v("#")]),e._v(" Schema")]),e._v(" "),r("p",[e._v("WP API is self-documenting. Send an OPTIONS request to any endpoint and get back")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://json-schema.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON Schema"),r("OutboundLink")],1),e._v(' compatible info on how to use it: [caption id="attachment_127" align="aligncenter" width="653"]'),r("a",{attrs:{href:"https://pressbooks.org/app/uploads/sites/2/2017/07/options.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://pressbooks.org/app/uploads/sites/2/2017/07/options.png",alt:"Options in YARC"}}),r("OutboundLink")],1),r("a",{attrs:{href:"https://pressbooks.org/app/uploads/sites/2/2017/07/options.png",target:"_blank",rel:"noopener noreferrer"}},[e._v("7"),r("OutboundLink")],1),e._v(" Options in YARC[/caption]")]),e._v(" "),r("blockquote",[r("p",[e._v("To get the entire API schema in a single query, add "),r("code",[e._v("context=help")]),e._v(" at the index. (Ie. http://site/book/wp-json?context=help )")])]),e._v(" "),r("h3",{attrs:{id:"multisite"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#multisite"}},[e._v("#")]),e._v(" Multisite")]),e._v(" "),r("p",[e._v('Pressbooks has different API endpoints for book and the root site: [caption id="attachment_128" align="aligncenter" width="1366"]')]),e._v(" "),r("p",[r("img",{attrs:{src:"https://pressbooks.org/app/uploads/sites/2/2017/07/namespaces.png",alt:"Book vs. Root"}}),e._v(" Book vs. Root[/caption]")]),e._v(" "),r("h3",{attrs:{id:"features"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),r("p",[e._v("WP API items have a "),r("code",[e._v("_links")]),e._v(" node based on "),r("a",{attrs:{href:"http://stateless.co/hal_specification.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("HAL"),r("OutboundLink")],1),e._v(' (Hypertext Application Language): [caption id="attachment_129" align="aligncenter" width="586"]'),r("img",{attrs:{src:"https://pressbooks.org/app/uploads/sites/2/2017/07/links.png",alt:"_links"}}),e._v(" _links[/caption] To reduce the number of HTTP requests use "),r("a",{attrs:{href:"https://developer.wordpress.org/rest-api/using-the-rest-api/global-parameters/#*embed",target:"_blank",rel:"noopener noreferrer"}},[e._v("the *embed parameter"),r("OutboundLink")],1),e._v(' to tell the API that the response should include embeddable resources. [caption id="attachment_130" align="aligncenter" width="680"]'),r("a",{attrs:{href:"https://developer.wordpress.org/rest-api/using-the-rest-api/global-parameters/#*embed",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://pressbooks.org/app/uploads/sites/2/2017/07/embeded.png",alt:"_embedded"}}),r("OutboundLink")],1),r("a",{attrs:{href:"https://pressbooks.org/app/uploads/sites/2/2017/07/embeded.png",target:"_blank",rel:"noopener noreferrer"}},[e._v("10"),r("OutboundLink")],1),e._v(' _embedded[/caption] WP API exposes pagination info in the response header. [caption id="attachment_131" align="aligncenter" width="1024"]'),r("a",{attrs:{href:"https://pressbooks.org/app/uploads/sites/2/2017/07/embeded.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://pressbooks.org/app/uploads/sites/2/2017/07/pagination.png",alt:"Pagination"}}),r("OutboundLink")],1),r("a",{attrs:{href:"https://pressbooks.org/app/uploads/sites/2/2017/07/pagination.png",target:"_blank",rel:"noopener noreferrer"}},[e._v("11"),r("OutboundLink")],1),e._v(" Pagination[/caption]")]),e._v(" "),r("h3",{attrs:{id:"php-to-json"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#php-to-json"}},[e._v("#")]),e._v(" PHP to JSON")]),e._v(" "),r("p",[e._v("WP API renders JSON in a generic way that does not match the DB columns. Keep calm and")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://developer.wordpress.org/rest-api/reference/posts/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RTFM"),r("OutboundLink")],1),e._v(":")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("if ( ! empty( $schema['properties']['author'] ) ) {\n    $data['author'] = (int) $post->post_author;\n}\nif ( ! empty( $schema['properties']['slug'] ) ) {\n    $data['slug'] = $post->post_name;\n}\nif ( ! empty( $schema['properties']['content'] ) ) {\n    $data['content'] = array(\n        'rendered'  => post_password_required( $post ) ? '' : apply_filters( 'the_content', $post->post_content ),\n        'protected' => (bool) $post->post_password,\n    );\n}\n")])])]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('{\n  "author": 1,\n  "slug": "chapter-1",\n  "content": {\n    "rendered": "<p>This is the first chapter in the main body of the text. You can change the text, rename the chapter, add new chapters, and add new parts.</p>",\n    "protected": false\n  }\n}\n')])])])])}),[],!1,null,null,null);t.default=s.exports}}]);