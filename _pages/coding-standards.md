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
## Validating with PHP Code Sniffer

Instead of reading any of this why not just let the computer nag you? From the Pressbooks plugin directory:

1.  `composer install`
2.  `composer standards`

Bonus: You can sometimes automatically fix errors by running `vendor/bin/phpcbf --standard=phpcs.ruleset.xml /path/to/your/file`

## Pressbooks Coding Standards (Mandatory)

We enforce [Human Made Coding Standards][1] with the following small tweaks.

*   Use camelCase for class methods & properties, uppercase for class constants, snake_case everywhere else.
*   [PHP Sessions][2] are allowed.

### Write Classes or Namespaced functions, stay out of global space!

[PHP Namespaces][3] have been available since 2009. Namespaces are not a new concept. We use them.

Our namespace is: `\Pressbooks\`

*   If your Class isn't an Object like `\WP_User`, `\WP_Dependencies`, `\WP_Query` etc., write a library of functions.
*   If your Class is a bunch of Static methods and nothing else, write a library of functions.
*   Afraid of function name collisions? See [Namespaces][3]. 

## Pressbooks Coding Recommendations (Optional)

Write accurate [PHPDoc][4] styled code comments.

Prefix [action and filter hook][5] names with `pb_`.

Prefix WP Post meta keys with `pb_`.

Prefix WP User meta keys with `pb_`.

Prefix WP Option names with `pressbooks_`.

Theme files are exempt from the above rules, but should still make an effort to follow them.

 [1]: https://github.com/humanmade/coding-standards
 [2]: http://php.net/manual/en/book.session.php
 [3]: https://secure.php.net/manual/en/language.namespaces.php
 [4]: http://en.wikipedia.org/wiki/PHPDoc
 [5]: https://developer.wordpress.org/plugins/hooks/