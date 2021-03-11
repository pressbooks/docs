---
title: Pressbooks LTI Provider
permalink: /integrations/lti/
---
** Table of contents **
* [Installation](#installation)
* [Basic interfaces](#basic-interfaces)
* [Behaviour details](#behaviour-details)
* [Manually Set up a LTI Configuration](#manually-set-up-a-lti-configuration)
* [Common Cartridge](#common-cartridge)

This documentation is up to date as of version 1.x of the Pressbooks LTI Provider plugin.

# Installation
Get the plugin here: [https://github.com/pressbooks/pressbooks-lti-provider](https://github.com/pressbooks/pressbooks-lti-provider)

This plugin must be installed and activated on the network level, but has configurations available both at the network and book level.

**Note**: If the user's web browser does not allow 3rd Party Cookies, then logins will not work when Pressbooks is in an iframe.

**Note**: Please ensure that your web server has correct X-Frame-Options settings, otherwise iframes will refuse to display. More info: [https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)

# Basic Interfaces
The "Pressbooks LTI Provider" plugin is available from the Plugins menu at the Network level.

When the plugin is active, two submenu items (“LTI Consumers” and "LTI Settings") are added to the Network Admin interface under “Integrations”.

Moreover, on the book level, a submenu item ("LTI Settings") is added to the book admin interface under "Integrations".

## LTI Consumers (network admin)

The "LTI Consumers" link leads to a page listing the existing, configured LTI connexions with LTI consumers. This page is empty upon first activation of the Pressbooks LTI Provider plugin, and is populated as LTI connections are created, either manually or automatically.

<a href="/images/pb-lti-consumers.png"><img class="alignnone size-large wp-image-511" src="https://pressbooks.org/app/uploads/sites/2/2018/06/pb-lti-consumers-1024x366.png" alt="Screenshot of Pressbooks LTI Consumers configuration page" width="840" height="300" /></a>

The table containing the list of LTI configurations is based on the IMS Global example plugin. It provides a basic overview of the configuration information for each LTI consumer:

- **Name**: Name of LTI consumer
- **Base URL**: URL of the specific book for which the configuration applies (automatic configuration only)
- **Key**: identification key used for the LTI protocol
- **Version**: LTI protocol version (automatic configuration only)
- **Last access**: date the LTI consumer last accessed the content
- **Available:** Shows whether the content can be accessed via LTI
    - Unavailable content will be shown with an "X"
    - Cases where content is unavailable:
    - It is not marked as "Enabled"
    - It is marked as "Enabled" but is currently outside of the Enabled date range.
- **Protected**: When turned on, the code will bail with 'A tool consumer GUID must be included in the launch request.' if one is not provided by the LMS.

The "**Add New**" button leads to a form where the network manager can create a new configuration manually. See "[Manually Set Up a LTI Configuration](#manually-set-up-a-lti-configuration)" below for instructions.

## LTI Settings (network admin)

The LTI Settings link (on the network admin level) leads to the general, network-level LTI configurations page. This page contains:

- **LTI2 Registration Whitelist**: whitelisted domains for automatic registration
- **Sensible defaults:** default configuration for book-level settings. These defaults can be overridden at the book level:
    - **Allow books to override...**: option to enable or disable book settings to override the network defaults
    - **Map [Administrator/Staff/Learner] to the following Pressbooks role**: default mapping of LMS user role to Pressbooks user role when the LMS triggers the creation of a new user. (These can be overridden at the book level.)
    - **Appearance**: whether or not to include navigation elements when embedding Pressbooks content in the LMS.
- **Common Cartridge version**: Default Common Cartridge version shown in the exports page for CC exports. Can be overridden at the book level.

<a href="https://pressbooks.org/app/uploads/sites/2/2018/07/ltiNetworkSettings.png"><img class="aligncenter wp-image-557 size-large" src="https://pressbooks.org/app/uploads/sites/2/2018/07/ltiNetworkSettings-846x1024.png" alt="Screenshot of LTI network settings page" width="840" height="1017" /></a>

## LTI Settings (book admin)

The LTI Settings link (at the book admin level) leads to a configuration page that is specific for the book. The book administrator can then override the network defaults for the following settings:

- **Map [Administrator/Staff/Learner] to the following Pressbooks role**
- **Appearance**
- **Common Cartridge version**

## LTI links

- Each book has an LTI URL in the following format: **https://site/book/format/lti/launch**
(ex: https:&#x200d;//university.pressbooks.pub/testbook/**format/lti/launch**)

- LTI URLs to specific chapters are in the following format: **https://site/book/format/lti/launch/part/chapter**
(ex: https:&#x200d;//university.pressbooks.pub/testbook/**format/lti/launch**/chapter/chapter-1/)

# Behaviour details

## Whitelisting

Whitelisting is necessary in order for an LTI connection to be **automatically** configured.
Whitelisting is not necessary for manual configurations.
<div style="background-color: #fff8e1;padding: 8px">Note: if the domain was whitelisted while the LTI configuration was initially (automatically) set up and the domain was subsequently removed from the whitelist, the LTI connection *will still work*.</div>
To disable an LTI connection, go to **Network admin > Integrations > LTI Consumers**, select the target connection, and either trash it or uncheck the "**Enabled**" box.

**Note:** Automatic configuration is a feature of the [LTI 2.0](https://www.imsglobal.org/specs/ltiv2p0) specification and is not widely supported by Learning Management Systems.

## User creation and mapping
When a user accesses Pressbooks content via LTI, it is possible for Pressbooks to automatically create a new user or log a returning user into his Pressbooks account based on information sent by the LMS (user role and ID).

Pressbooks uses the LMS user's email address to identify them.

Mapping settings are available at the network levels and at the book level.
- Network-level mappings provide the defaults for all books on the network
- Book-level mappings apply to specific books and override network-level default mappings

By default, all mappings at the network and book levels are set to Anonymous Guest.

**Mapping effects on books:**

Newly-created books inherit the default network-level mappings

- IF the network defaults are modified AFTER a book has been created
    - And IF the book mappings have never been changed from the default
        - The book mappings will be updated according to the new network defaults
    - Otherwise (if the book mappings have been changed)
        - The book mappings will not be updated.

**Mapping effects on users/access to Pressbooks content:**

If the mapping is set to:

- "**Anonymous Guest"**, no user will be created in Pressbooks and the LMS will display the web page as it appears on the open Web
    - If the book is set to Private, the LMS will display the "Access denied" message
- **any other role**,
    - a first-time LMS visitor will have a new user automatically created on Pressbooks and added to the book they are trying to access with the specified role
    - a returning LMS visitor will be logged into Pressbooks; the incoming user will be matched to the existing Pressbooks user based on the email address.
        * if the user does not exist at the book level, they will be added to the book
        * at every login, the user role will be verified and updated according to the mapping.
            - Note: If the user is a super admin, the book role assignment will not impact their super admin privileges.
            - since the user is now logged in, the LMS will be able to display contents of books set to "private"

**User mapping mechanism**
- Get the user role from the LMS. (abstracted as: Anonymous Guest, Learner, Staff, Admin)
- Get the email from the LMS.
- Get LTI ID from the LMS. [tool_consumer_instance_guid + user_id]

Sometimes an email is not sent so we create a fake email using the [UserID@127.0.0.1](mailto:UserID@127.0.0.1). Canvas user ids look like `967620f91cb9080c633b4e55f561d40ed83924a4`. This behavior mirrors the Candela LTI Plugin.

- Try to match a Pressbooks user by LTI ID (Stored in user_meta table.)
- If no match, then try to match a Pressbooks user by email.
- If there's no match, then check if we should create a user (Anonymous Guest = No, Everything Else = Yes).  When creating a user: Username = email prefix,  email = see above, and the LTI ID will be stored in the user_meta table. A user can have more than one LTI ID (Example: Moodle, Sakai, Canvas, Blackboard all point to the same Book and we can match the user's email).
- If the user does not have rights to the book, and role is not Anonymous Guest, then add them to the book with appropriate role and log them in.

The email can be filtered, example: `add_filter( 'pb_integrations_multidomain_email', function( $email, $uid, $plugin ) { /* Custom use case, return $email */ }, 10, 3 );`

# Manually Set Up a LTI Configuration
1. Click the Add new button on the LTI Consumers page. You will be brought to the "Adding LTI Consumer" form:
<a href="https://pressbooks.org/app/uploads/sites/2/2018/06/pb-lti-addconsumer.png"><img class="alignnone size-large wp-image-521" src="https://pressbooks.org/app/uploads/sites/2/2018/06/pb-lti-addconsumer-1024x507.png" alt="" width="840" height="416" /></a>
2. Fill in:
- **Name**: Name of LTI consumer
- **Key**: identification key used for the LTI protocol; can be any string (though some LMSes will reject a key if it is too long).
- **Secret**: string used for encryption. A secret is automatically generated when the user opens the form; they may choose to keep it or pick their own secret.
- **Enabled**: Check to allow the LMS to access content through this connection; Uncheck to prevent LMS from accessing content through this connection.
- **Enable from/Enable until**: (optional) specify date range during which this connection should be active. Connections outside the date range will be automatically refused.
Note: the "Enabled" checkbox above takes precedence over this setting: if the connection is not enabled, connections will be refused even if they are within the date range.
- **Protected**: When turned on, the code will bail with 'A tool consumer GUID must be included in the launch request.' if one is not provided by the LMS. We recommend keeping it on.

**Note**: once a configuration is created, it will not be possible to edit the "**Key**" and "**Secret**" fields.

# Configuring Pressbooks with a Tool Consumer
While the steps for configuring LTI providers differ among different tool consumers (like Learning Management Systems), a typical registration process will require a key/secret pair and a launch URL. The key/secret pair can be obtained following the manual "Adding LTI Consumer" form instructions above. The launch URL can be either the URL for the network itself, i.e. `https://yourinstitution.pressbooks.pub` or the URL for a particular book, i.e. `https://yourinstitution.pressbooks.pub/mybook`.

Setting the launch URL to the root domain for the network will mean that the LTI configuration will be valid for all books on that network. Setting the launch URL to a particular book on the network will limit the LTI configuration to that book and its components only.

# Common Cartridge

The Pressbooks LTI Provider plugin (or the "LTI Plugin") exports Common Cartridge ("CC") files. Our LTI plugin supports CC v1.1, CC v1.2, and CC v1.3.

**Exporting a Common Cartridge file in Pressbooks**

Common Cartridge Exports follow the same pattern as regular book exports. There is one export setting, which can be accessed on the LTI Settings page.

1. In the book admin interface, under **Integrations > LTI Settings**, select the Common Cartridge version you would like to export, according to your LMS's specifications, and click the **Save Changes** button.

2. On your book's Export page, select **Common Cartridge** (1)**,** then click on the **Export your book** button (2). Your CC export will appear on the page once it is ready (3).
