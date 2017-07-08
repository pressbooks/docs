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
## Download

Download the [latest release][1] of Pressbooks from our [releases page][2].

## Installation (Manual)

IMPORTANT!

*   Do not install Pressbooks on an existing WordPress blog -- create a new WordPress install instead.
*   Pressbooks works with [PHP 5.6.x][3] and WordPress 4.8. Lower versions are not supported.

### Part 1: WordPress

1.  Install WordPress using the [Famous 5-Minute Install][4].

2.  [Create a Network][5] of WordPress sites, i.e.:

3.  Edit the wp-config.php file and add the following:
    
    `define('WP_ALLOW_MULTISITE', true);`

4.  Login to the WordPress admin area. Navigate to **Tools** → **Network Setup**, click **Install**.

5.  Complete the steps printed on the screen (i.e. edit your `wp-config.php` and `.htaccess files` with the information provided).

### Part 2: Pressbooks

1.  Copy the Pressbooks plugin folder to: `/path/to/your/site/wp-content/plugins/*`.

2.  Copy the Pressbooks Book, Pressbooks Publisher and other theme folders to: `/path/to/your/site/wp-content/themes/*`

3.  Log out, log in, navigate to: **My Sites** → **Network Admin** → **Dashboard**.

4.  Navigate to **Plugins** → **Installed Plugins**.

5.  Network Enable "Pressbooks".

6.  Navigate to **Themes** → **Installed Themes**.

7.  Network Enable "Luther", "Pressbooks Publisher", and any other Pressbooks theme you want to use.

8.  Navigate to **Settings** → **Network Settings**.

9.  Pick the most appropriate Registration setting:
    
    *   User accounts may be registered. (Do not use this setting, since it will not allow users to create new books!)
    *   Logged in users may register new sites. (If you are a publisher using Pressbooks as a production tool, this is the best setting: it allows network administrators to add new users, who can then create books/sites. However, registration is not available to the public.)
    *   Both sites and user accounts can be registered. (Use this setting if you intend on offering a publishing-platform open to the public, such as [Pressbooks.com][6])

10. Navigate to **My Catalog** → **Your Site** → **Dashboard**

11. Navigate to **Appearance** and activate "Pressbooks Publisher".

12. Navigate to **My Catalog** → **Add A New Book** (this will be your first book).

13. Navigate to **My Catalog** → **Your First Book** → **Dashboard**.

14. Navigate to **Book Info**. Make sure to fill out Title, Author and Publication Date.

15. Navigate to **Text** → **Organize**. Make sure some content is selected for export.

### Part 3: Pressbooks Dependencies

Pressbooks requires some third-party libraries to be installed on your server to enable export capabilities.

*   For PDF export, install [PrinceXML][7] 11 (note: this is not free software)
*   For PDF export via mPDF, install the [Pressbooks mPDF plugin][8]. You will also need to ensure that the following folders have write access and/or they are owned by the appropriate user. See [http://codex.wordpress.org/Changing_File_Permissions][9] for more details on adjusting file permissions. 
    *   `wp-content/plugins/pressbooks-mpdf/symbionts/mpdf/ttfontdata`
    *   `wp-content/plugins/pressbooks-mpdf/symbionts/mpdf/tmp`
    *   `wp-content/plugins/pressbooks-mpdf/symbionts/mpdf/graph_cache`
*   For MOBI export install [KindleGen][10] 2.9
*   For EPUB validation install [EpubCheck][11] 4.0
*   For XML validation install [xmllint][12] 20800
*   For ODT export install [Saxon-HE][13] 9.7.0-10
*   Certain Linux installations do not ship with the `php5-xsl` library enabled by default. If you attempt to export an ePub and get a either a white screen with minimal text, or a "Fatal error: Class 'XSLTProcessor' not found" error, you may need to run a command like `apt-get install php5-xsl`.

Unlisted versions are not supported. Upgrade/downgrade accordingly.

Once installed, define the following `wp-config.php` variables. The defaults are:

    define( 'PB_PRINCE_COMMAND', '/usr/bin/prince' );
    define( 'PB_KINDLEGEN_COMMAND', '/opt/kindlegen/kindlegen' );
    define( 'PB_EPUBCHECK_COMMAND', '/usr/bin/epubcheck' );
    define( 'PB_XMLLINT_COMMAND', '/usr/bin/xmllint' );
    define( 'PB_SAXON_COMMAND', '/usr/bin/java -jar /opt/saxon-he/saxon-he.jar' );
    

Example config files for a dev site hosted at http://localhost/~dac514/textopress/

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
    $base = '/~dac514/textopress/';
    define('DOMAIN_CURRENT_SITE', 'localhost');
    define('PATH_CURRENT_SITE', '/~dac514/textopress/');
    define('SITE_ID_CURRENT_SITE', 1);
    define('BLOG_ID_CURRENT_SITE', 1);
    
    /**
     * Pressbooks
     */
    define( 'PB_PRINCE_COMMAND', '/usr/bin/prince' );
    define( 'PB_KINDLEGEN_COMMAND', '/home/dac514/bin/kindlegen' );
    define( 'PB_EPUBCHECK_COMMAND', '/usr/bin/java -jar /home/dac514/bin/epubcheck-4.0/epubcheck-4.0.jar' );
    define( 'PB_XMLLINT_COMMAND', '/usr/bin/xmllint' );
    define( 'PB_SAXON_COMMAND', '/usr/bin/java -jar home/dac514/bin/saxon-he/saxon-he.jar' );
    
    /**
     * Optional definitions
     */
    // define( 'WP_POST_REVISIONS', 5 ); // Limit post revisions: int or false
    // define( 'EMPTY_TRASH_DAYS', 1 ); // Purge trash interval
    // define( 'AUTOSAVE_INTERVAL', 60 ); // Autosave every N seconds
    
    /* That's all, stop editing! Happy blogging. */
    

### .htaccess file:

    RewriteEngine On
    RewriteBase /~dac514/textopress/
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

First, get [WP-CLI][14].

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
    wp core install --url="http://domain.com" --title="Pressbooks" --admin_user="username" --admin_password="password" --admin_email="user@domain.com"
    wp core multisite-convert --title="Pressbooks"
    wp plugin delete hello
    wp plugin update-all
    wp plugin install https://github.com/pressbooks/pressbooks/releases/download/3.9.10/pressbooks-3.9.10.zip --activate-network
    wp theme list
    wp theme enable pressbooks-book --network
    wp theme enable clarke --network
    wp theme enable donham --network
    wp theme enable fitzgerald --network
    wp theme enable austen --network
    wp theme enable pressbooks-custom-css --network
    

Note that this does not install the required libraries for export. See above (Part 3, Pressbooks dependencies).

 [1]: https://github.com/pressbooks/pressbooks/releases/latest
 [2]: https://github.com/pressbooks/pressbooks/releases/
 [3]: https://secure.php.net/supported-versions.php
 [4]: http://codex.wordpress.org/Installing_WordPress
 [5]: http://codex.wordpress.org/Create_A_Network
 [6]: https://pressbooks.com
 [7]: http://pressbooks.com/prince
 [8]: https://wordpress.org/plugins/pressbooks-mpdf
 [9]: here
 [10]: http://www.amazon.com/gp/feature.html?docId=1000765211
 [11]: https://github.com/idpf/epubcheck
 [12]: http://xmlsoft.org/xmllint.html
 [13]: https://sourceforge.net/projects/saxon/files/Saxon-HE/
 [14]: https://wp-cli.org/