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

## Upgrading to Pressbooks 5.x

Pressbooks 5.0 requires McLuhan, our [new default book theme](https://github.com/pressbooks/pressbooks-book/releases/tag/2.0.0/). McLuhan takes the place of [Luther](https://github.com/pressbooks/pressbooks-luther/), and will replace the theme currently known as Luther when you install the latest update on your Pressbooks network. To keep using Luther, you must make sure to install the new [standalone version of Luther](https://github.com/pressbooks/pressbooks-luther/releases/tag/1.8.2) and network activate it on your Pressbooks network _before_ you upgrade to Pressbooks 5.0 and McLuhan. If you do this, books that were using Luther will be switched to the new standalone version automatically. If Luther is _not_ installed or network active when you upgrade to Pressbooks 5.0, you may have to switch books to Luther manually.

### Steps

1. Verify that upgrade are available for Pressbooks (to version 5.0.0) and Luther (to version 2.0.0).
2. Install [Luther 1.8.2](https://github.com/pressbooks/pressbooks-luther/releases/tag/1.8.2) and network activate it. You will now have two versions of Luther installed (sorry).
2. Run the upgrades for Pressbooks and Luther. This will replace the old Luther with McLuhan and switch any books that were using it to Luther 1.8.2.

## Upgrading from Pressbooks 3.x to Pressbooks 4.x

### Autoloader

Pressbooks 4.0 (and our other open source plugins) rely on the Human Made autoloader, which is [bundled][1] with the Pressbooks plugin. Before you can use Pressbooks 4.0, you will need to copy the file from:

`/path/to/your/site/wp-content/plugins/pressbooks/hm-autoloader.php`

To:

`/path/to/your/site/wp-content/mu-plugins/hm-autoloader.php`

This will make it available to Pressbooks and any other plugins that require it. You may need to create the `wp-content/mu-plugins/` directory if it doesn't yet exist.

### Themes

Pressbooks >= 4.0 requires that themes previously bundled with Pressbooks 3.x be installed separately. For installation instructions, consult the README file of the theme(s) you need to install below. (**NOTE**: theme folders must not have version numbers on the end. **GOOD**: `pressbooks-publisher`. **BAD**: `pressbooks-publisher-3.1.0`. If you are installing manually, make sure that you rename the folders appropriately.)

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