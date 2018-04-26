---
ID: 92
post_title: Installation
author: Ned Zimmerman
post_excerpt: ""
layout: page
permalink: >
  https://docs.pressbooks.org/installation/
published: true
post_date: 2017-07-07 22:29:32
---
## Downloads

Download the latest releases of [Pressbooks][pressbooks], [McLuhan][mcluhan], and [Aldine][aldine], as well as the latest releases of any other [book themes][book-themes] you wish to install.

## Installation (Manual)

IMPORTANT!

* Do not install Pressbooks on an existing WordPress blog -- create a new WordPress install instead.
* Pressbooks works with [PHP 7.0][php] and WordPress 4.9.4. Lower versions are not supported.

### Part 1: WordPress

1. Install WordPress using the [Famous 5-Minute Install][wp-install].

2. [Create a Network][create-a-network] of WordPress sites, i.e.:

3. Edit the `wp-config.php` file and add the following:

```
define('WP_ALLOW_MULTISITE', true);
```

4. Login to the WordPress admin area. Navigate to **Tools** → **Network Setup**, click **Install**.

5. Complete the steps printed on the screen (i.e. edit your `wp-config.php` and `.htaccess` files with the information provided).

### Part 2: Pressbooks

1. Copy the Pressbooks plugin folder to: `/path/to/your/site/wp-content/plugins/*`.

2. Copy Pressbooks' autoloader file from `/path/to/your/site/wp-content/plugins/pressbooks/hm-autoloader.php` to `/path/to/your/site/wp-content/mu-plugins/hm-autoloader.php`. You may need to create the `wp-content/mu-plugins/` directory if it doesn't yet exist.

3. Copy the Pressbooks Book, Pressbooks Aldine and other theme folders to: `/path/to/your/site/wp-content/themes/*` (**NOTE**: theme folders must not have version numbers on the end. **GOOD**: `pressbooks-aldine`. **BAD**: `pressbooks-aldine-3.1.0`. Make sure that you rename the folders appropriately.)

4. Log out, log in, navigate to: **My Sites** → **Network Admin** → **Dashboard**.

5. Navigate to **Plugins** → **Installed Plugins**.

6. Network Enable "Pressbooks".

7. Navigate to **Themes** → **Installed Themes**.

8. Network Enable "McLuhan", "Aldine", and any other Pressbooks theme you want to use.

9. Navigate to **Settings** → **Network Settings**.

10. Pick the most appropriate Registration setting:

    * User accounts may be registered. (Do not use this setting, since it will not allow users to create new books!)
    * Logged in users may register new sites. (If you are a publisher using Pressbooks as a production tool, this is the best setting: it allows network administrators to add new users, who can then create books/sites. However, registration is not available to the public.)
    * Both sites and user accounts can be registered. (Use this setting if you intend on offering a publishing-platform open to the public, such as [Pressbooks.com][8])

11. Navigate to **My Catalog** → **Your Site** → **Dashboard**

12. Navigate to **Appearance** and activate "Aldine".

13. Navigate to **My Catalog** → **Add A New Book** (this will be your first book).

14. Navigate to **My Catalog** → **Your First Book** → **Dashboard**.

15. Navigate to **Book Info**. Make sure to fill out Title, Author and Publication Date.

16. Navigate to **Text** → **Organize**. Make sure some content is selected for export.

### Part 3: Pressbooks Dependencies

Pressbooks requires some third-party libraries to be installed on your server to enable export capabilities.

* For PDF export, install [PrinceXML][9] 11 (note: this is not free software although you can use it free of charge for non-commercial purposes.)
* For PDF export via mPDF, install the [mPDF for Pressbooks][10] plugin. You will also need to ensure that the following folders have write access and/or they are owned by the appropriate user. See [here][11] for more details on adjusting file permissions.
    * `wp-content/plugins/pressbooks-mpdf/symbionts/mpdf/ttfontdata`
    * `wp-content/plugins/pressbooks-mpdf/symbionts/mpdf/tmp`
    * `wp-content/plugins/pressbooks-mpdf/symbionts/mpdf/graph_cache`
* For MOBI export install [KindleGen][12] 2.9
* For EPUB validation install [EpubCheck][13] 4.0.2
* For XML validation install [xmllint][14] 20903
* For ODT export install [Saxon-HE][15] 9.7.0-10
* Certain Linux installations do not ship with the `php-xsl` library enabled by default. If you attempt to export an ePub and get a either a white screen with minimal text, or a "Fatal error: Class 'XSLTProcessor' not found" error, you may need to run a command like `apt install php-xsl`.
* Certain Linux installations do not ship with the `php-exif` library enabled by default. If you attempt to export an ePub and get a either a white screen with minimal text, or an error, you may need to install this extension (e.g. `apt install php-exif` )

Unlisted versions are not supported. Upgrade/downgrade accordingly.

Once installed, define the following `wp-config.php` variables (make sure to update the paths to correspond to your specific installation). The defaults are:

    define( 'PB_PRINCE_COMMAND', '/usr/bin/prince' );
    define( 'PB_KINDLEGEN_COMMAND', '/opt/kindlegen/kindlegen' );
    define( 'PB_EPUBCHECK_COMMAND', '/usr/bin/java -jar /opt/epubcheck/epubcheck.jar' );
    define( 'PB_XMLLINT_COMMAND', '/usr/bin/xmllint' );
    define( 'PB_SAXON_COMMAND', '/usr/bin/java -jar /opt/saxon-he/saxon-he.jar' );

Example config files for a dev site hosted at http://localhost/~example/textopress/

### wp-config.php file [snippet]:

    /**
     * For developers: WordPress debugging mode.
     *
     * Change this to true to enable the display of notices during development.
     * It is strongly recommended that plugin and theme developers use WP_DEBUG
     * in their development environments.
     */
    define('WP_DEBUG', true);
    define('WP_DEBUG_LOG', true);
    
    /**
     * Multi-site support, Part 1
     */
    define('WP_ALLOW_MULTISITE', true);
    
    /**
     * Multi-site support, Part 2
     */
    define('MULTISITE', true);
    define('SUBDOMAIN_INSTALL', false);
    $base = '/~example/textopress/';
    define('DOMAIN_CURRENT_SITE', 'localhost');
    define('PATH_CURRENT_SITE', '/~example/textopress/');
    define('SITE_ID_CURRENT_SITE', 1);
    define('BLOG_ID_CURRENT_SITE', 1);
    
    /**
     * Pressbooks
     */
    define( 'PB_PRINCE_COMMAND', '/usr/bin/prince' );
    define( 'PB_KINDLEGEN_COMMAND', '/home/example/bin/kindlegen' );
    define( 'PB_EPUBCHECK_COMMAND', '/usr/bin/java -jar /home/example/bin/epubcheck/epubcheck.jar' );
    define( 'PB_XMLLINT_COMMAND', '/usr/bin/xmllint' );
    define( 'PB_SAXON_COMMAND', '/usr/bin/java -jar home/example/bin/saxon-he/saxon-he.jar' );
    
    /**
     * Optional definitions
     */
    // define( 'AUTOSAVE_INTERVAL', 60 ); // Autosave every N seconds
    // define( 'WP_POST_REVISIONS', 5 ); // Limit post revisions: int or false
    // define( 'EMPTY_TRASH_DAYS', 1 ); // Purge trash interval. PB default is after 30 days.
    
    /* That's all, stop editing! Happy blogging. */
    

### .htaccess file:

    RewriteEngine On
    RewriteBase /~example/textopress/
    RewriteRule ^index.php$ - [L]
    
    # add a trailing slash to /wp-admin
    RewriteRule ^([_0-9a-zA-Z-]+/)?wp-admin$ $1wp-admin/ [R=301,L]
    
    RewriteCond %{REQUEST_FILENAME} -f [OR]
    RewriteCond %{REQUEST_FILENAME} -d
    RewriteRule ^ - [L]
    RewriteRule  ^[_0-9a-zA-Z-]+/(wp-(content|admin|includes).*) $1 [L]
    RewriteRule  ^[_0-9a-zA-Z-]+/(.*.php)$ $1 [L]
    RewriteRule . index.php [L]
    

## Installation (WP-CLI)

First, get [WP-CLI][16].

Once WP-CLI is installed on your server, the following shell commands executed in the site root will download and install a fresh version of Pressbooks. Obviously you need to put in the correct information for your server and install on lines 2 and 10, and enter the correct paths to `WP_PRINCE_COMMAND`, `PB_KINDLEGEN_COMMAND`, `PB_EPUBCHECK_COMMAND` and `PB_XMLLINT_COMMAND` where indicated.

    wp core download
    wp core config --dbname="dbname" --dbuser="dbuser" --dbpass="dbpass" --extra-php <<PHP
    /* Pressbooks */
    define( 'WP_DEFAULT_THEME', 'pressbooks-book' );
    define( 'PB_PRINCE_COMMAND', '/usr/bin/prince' );
    define( 'PB_KINDLEGEN_COMMAND', '/opt/kindlegen/kindlegen' );
    define( 'PB_EPUBCHECK_COMMAND', '/usr/bin/java -jar /opt/epubcheck/epubcheck.jar' );
    define( 'PB_XMLLINT_COMMAND', '/usr/bin/xmllint' );
    define( 'PB_SAXON_COMMAND', '/usr/bin/java -jar /opt/saxon-he/saxon-he.jar' );
    PHP
    wp core multisite-install --url="http://domain.com" --title="Pressbooks" --admin_user="username" --admin_password="password" --admin_email="user@domain.com"
    wp plugin delete hello
    wp plugin update-all
    wp plugin install https://pressbooks.org/download/pressbooks/
    mkdir wp-content/mu-plugins && cp wp-content/plugins/pressbooks/hm-autoloader.php wp-content/mu-plugins
    wp plugin activate pressbooks --network
    wp theme install https://pressbooks.org/download/mcluhan/
    wp theme install https://pressbooks.org/download/aldine/
    wp theme install https://github.com/pressbooks/pressbooks-jacobs/archive/master.zip
    wp theme install https://github.com/pressbooks/pressbooks-austenclassic/archive/master.zip
    wp theme install https://github.com/pressbooks/pressbooks-clarke/archive/master.zip
    wp theme install https://github.com/pressbooks/pressbooks-donham/archive/master.zip
    wp theme install https://github.com/pressbooks/pressbooks-fitzgerald/archive/master.zip    
    wp theme enable pressbooks-book --network
    wp theme enable pressbooks-jacobs --network
    wp theme enable pressbooks-clarke --network
    wp theme enable pressbooks-donham --network
    wp theme enable pressbooks-fitzgerald --network
    wp theme enable pressbooks-austenclassic --network    
    

Note that this does not install the required libraries for export. See above (Part 3).

 [pressbooks]: https://pressbooks.org/download/pressbooks/
 [mcluhan]: https://pressbooks.org/download/mcluhan/
 [aldine]: https://pressbooks.org/download/aldine/
 [book-themes]: https://github.com/search?q=topic:book-theme%20org:pressbooks&type=Repositories
 [php]: https://secure.php.net/supported-versions.php
 [wp-install]: http://codex.wordpress.org/Installing_WordPress
 [create-a-network]: http://codex.wordpress.org/Create_A_Network
 [8]: https://pressbooks.com
 [9]: http://pressbooks.com/prince
 [10]: https://wordpress.org/plugins/pressbooks-mpdf
 [11]: http://codex.wordpress.org/Changing_File_Permissions
 [12]: http://www.amazon.com/gp/feature.html?docId=1000765211
 [13]: https://github.com/idpf/epubcheck
 [14]: http://xmlsoft.org/xmllint.html
 [15]: https://sourceforge.net/projects/saxon/files/Saxon-HE/
 [16]: https://wp-cli.org/
