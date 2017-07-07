---
ID: 84
post_title: Debugging
author: Ned Zimmerman
post_excerpt: ""
layout: page
permalink: http://docs.pressbooks.org/debugging/
published: true
post_date: 2017-07-07 22:29:32
---
A few things you can try:

1.  Add this line to `wp-config.php`: `define( 'WP_ENV', 'development' );` (this will enable some debugging features and outputs that are not enabled in production environments).
2.  Network disable all plugins other than Pressbooks, then see if the problem persists.
3.  Switch your book to the “Luther” book theme (the Pressbooks default), then see if the problem persists.