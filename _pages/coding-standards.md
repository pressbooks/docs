---
ID: 80
post_title: Coding Standards
author: Ned Zimmerman
post_excerpt: ""
layout: page
permalink: >
  http://docs.pressbooks.org/coding-standards/
published: true
post_date: 2017-07-07 22:29:32
---
Write accurate [PHPDoc][1] styled code comments.

Write real Classes or Namespaced functions.

[PHP Namespaces][2] have been available since 2009. Namespaces are not a new concept. We use them.

Our namespace is: `\Pressbooks\`

*   If your Class isn't an Object like `\WP_User`, `\WP_Dependencies`, `\WP_Query` etc., write a library of functions.
*   If your Class is a bunch of Static methods and nothing else, write a library of functions.
*   Afraid of function name collisions? See [Namespaces][2].

Functions are `written_like_this()`. Class methods are `writtenLikeThis()`.

Rules of thumb:

*   `getFooBar()` is when you are getting something associated with an object -- it implies the set is already defined.
*   `loadFooBar()` is when you are loading from an external source, like a file or a database.
*   `isFooBar()` or `hasFooBar()` is when a method returns a boolean value.
*   `createFooBar()` is when a method creates new files or assets.

Don't write `public function foo()`, just write `function foo()`. Public is implied. Order of methods in a class:

1.  `magic`
2.  `public`
3.  `protected`
4.  `private`
5.  `static`

Prefix WP Post meta keys with `pb_`. Prefix WP User meta keys with `pb_`. Prefix WP Option names with `pressbooks_`.

Files under `themes-book/` and `themes-root/` are exempt from the above rules, but should still make an effort to follow them.

For everything else not mentioned we respect the [WordPress coding standards][3].

## Validating with PHP Code Sniffer

From the Pressbooks plugin directory:

1.  `composer install --dev`
2.  `composer standards`

 [1]: http://en.wikipedia.org/wiki/PHPDoc
 [2]: https://secure.php.net/manual/en/language.namespaces.php
 [3]: http://make.wordpress.org/core/handbook/coding-standards/php/