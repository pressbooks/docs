---
ID: 149
post_title: Upgrading
author: Ned Zimmerman
post_excerpt: ""
layout: page
permalink: https://docs.pressbooks.org/upgrading/
published: true
post_date: 2017-07-08 15:12:55
---
## Upgrading from Pressbooks 3.x to Pressbooks 4.x

### Autoloader

Pressbooks 4.0 (and our other open source plugins) rely on the Human Made autoloader, which is [bundled][1] with the Pressbooks plugin. Before you can use Pressbooks 4.0, you will need to copy the file from:

`/path/to/your/site/wp-content/plugins/pressbooks/hm-autoloader.php`

To:

`/path/to/your/site/wp-content/mu-plugins/hm-autoloader.php`

This will make it available to Pressbooks and any other plugins that require it. You may need to create the `wp-content/mu-plugins/` directory if it doesn't yet exist.

### Themes

Pressbooks >= 4.0 requires that themes previously bundled with Pressbooks 3.x be installed separately. For installation instructions, consult the README file of the theme(s) you need to install below. (NOTE: theme folders must not have version numbers on the end. Good: `pressbooks-publisher`. Bad: `pressbooks-publisher-3.1.0`. If you are installing manually, make sure that you rename the folders appropriately.)

Two themes are required for all Pressbooks installations:

*   [Pressbooks Book (Luther)][2]
*   [Pressbooks Publisher][3]

The remaining themes are recommended but optional, and they are required if you used them on Pressbooks 3.x:

*   [Austen Classic][4]
*   [Clarke][5]
*   [Donham][6]
*   [Fitzgerald][7]
*   [Custom CSS][8]

 [1]: https://github.com/pressbooks/pressbooks/blob/dev/hm-autoloader.php
 [2]: https://github.com/pressbooks/pressbooks-book
 [3]: https://github.com/pressbooks/pressbooks-publisher
 [4]: https://github.com/pressbooks/pressbooks-austenclassic
 [5]: https://github.com/pressbooks/pressbooks-clarke
 [6]: https://github.com/pressbooks/pressbooks-donham
 [7]: https://github.com/pressbooks/pressbooks-fitzgerald
 [8]: https://github.com/pressbooks/pressbooks-custom-css