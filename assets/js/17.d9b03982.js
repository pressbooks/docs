(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{372:function(e,t,o){"use strict";o.r(t);var s=o(45),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("** Table of contents **")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#installation"}},[e._v("Installation")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#basic-interfaces"}},[e._v("Basic interfaces")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#behaviour-details"}},[e._v("Behaviour details")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#manually-set-up-a-lti-configuration"}},[e._v("Manually Set up a LTI Configuration")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#common-cartridge"}},[e._v("Common Cartridge")])])]),e._v(" "),o("p",[e._v("This documentation is up to date as of version 1.x of the Pressbooks LTI Provider plugin.")]),e._v(" "),o("h1",{attrs:{id:"installation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),o("p",[e._v("Get the plugin here: "),o("a",{attrs:{href:"https://github.com/pressbooks/pressbooks-lti-provider",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/pressbooks/pressbooks-lti-provider"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("This plugin must be installed and activated on the network level, but has configurations available both at the network and book level.")]),e._v(" "),o("p",[o("strong",[e._v("Note")]),e._v(": If the user's web browser does not allow 3rd Party Cookies, then logins will not work when Pressbooks is in an iframe.")]),e._v(" "),o("p",[o("strong",[e._v("Note")]),e._v(": Please ensure that your web server has correct X-Frame-Options settings, otherwise iframes will refuse to display. More info: "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options"),o("OutboundLink")],1)]),e._v(" "),o("h1",{attrs:{id:"basic-interfaces"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basic-interfaces"}},[e._v("#")]),e._v(" Basic Interfaces")]),e._v(" "),o("p",[e._v('The "Pressbooks LTI Provider" plugin is available from the Plugins menu at the Network level.')]),e._v(" "),o("p",[e._v('When the plugin is active, two submenu items (“LTI Consumers” and "LTI Settings") are added to the Network Admin interface under “Integrations”.')]),e._v(" "),o("p",[e._v('Moreover, on the book level, a submenu item ("LTI Settings") is added to the book admin interface under "Integrations".')]),e._v(" "),o("h2",{attrs:{id:"lti-consumers-network-admin"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#lti-consumers-network-admin"}},[e._v("#")]),e._v(" LTI Consumers (network admin)")]),e._v(" "),o("p",[e._v('The "LTI Consumers" link leads to a page listing the existing, configured LTI connexions with LTI consumers. This page is empty upon first activation of the Pressbooks LTI Provider plugin, and is populated as LTI connections are created, either manually or automatically.')]),e._v(" "),o("p",[o("a",{attrs:{href:"https://pressbooks.org/app/uploads/sites/2/2018/06/pb-lti-consumers.png"}},[o("img",{staticClass:"alignnone size-large wp-image-511",attrs:{src:"https://pressbooks.org/app/uploads/sites/2/2018/06/pb-lti-consumers-1024x366.png",alt:"Screenshot of Pressbooks LTI Consumers configuration page",width:"840",height:"300"}})])]),e._v(" "),o("p",[e._v("The table containing the list of LTI configurations is based on the IMS Global example plugin. It provides a basic overview of the configuration information for each LTI consumer:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Name")]),e._v(": Name of LTI consumer")]),e._v(" "),o("li",[o("strong",[e._v("Base URL")]),e._v(": URL of the specific book for which the configuration applies (automatic configuration only)")]),e._v(" "),o("li",[o("strong",[e._v("Key")]),e._v(": identification key used for the LTI protocol")]),e._v(" "),o("li",[o("strong",[e._v("Version")]),e._v(": LTI protocol version (automatic configuration only)")]),e._v(" "),o("li",[o("strong",[e._v("Last access")]),e._v(": date the LTI consumer last accessed the content")]),e._v(" "),o("li",[o("strong",[e._v("Available:")]),e._v(" Shows whether the content can be accessed via LTI\n"),o("ul",[o("li",[e._v('Unavailable content will be shown with an "X"')]),e._v(" "),o("li",[e._v("Cases where content is unavailable:")]),e._v(" "),o("li",[e._v('It is not marked as "Enabled"')]),e._v(" "),o("li",[e._v('It is marked as "Enabled" but is currently outside of the Enabled date range.')])])]),e._v(" "),o("li",[o("strong",[e._v("Protected")]),e._v(": When turned on, the code will bail with 'A tool consumer GUID must be included in the launch request.' if one is not provided by the LMS.")])]),e._v(" "),o("p",[e._v('The "'),o("strong",[e._v("Add New")]),e._v('" button leads to a form where the network manager can create a new configuration manually. See "'),o("a",{attrs:{href:"#manually-set-up-a-lti-configuration"}},[e._v("Manually Set Up a LTI Configuration")]),e._v('" below for instructions.')]),e._v(" "),o("h2",{attrs:{id:"lti-settings-network-admin"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#lti-settings-network-admin"}},[e._v("#")]),e._v(" LTI Settings (network admin)")]),e._v(" "),o("p",[e._v("The LTI Settings link (on the network admin level) leads to the general, network-level LTI configurations page. This page contains:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("LTI2 Registration Whitelist")]),e._v(": whitelisted domains for automatic registration")]),e._v(" "),o("li",[o("strong",[e._v("Sensible defaults:")]),e._v(" default configuration for book-level settings. These defaults can be overridden at the book level:\n"),o("ul",[o("li",[o("strong",[e._v("Allow books to override...")]),e._v(": option to enable or disable book settings to override the network defaults")]),e._v(" "),o("li",[o("strong",[e._v("Map [Administrator/Staff/Learner] to the following Pressbooks role")]),e._v(": default mapping of LMS user role to Pressbooks user role when the LMS triggers the creation of a new user. (These can be overridden at the book level.)")]),e._v(" "),o("li",[o("strong",[e._v("Appearance")]),e._v(": whether or not to include navigation elements when embedding Pressbooks content in the LMS.")])])]),e._v(" "),o("li",[o("strong",[e._v("Common Cartridge version")]),e._v(": Default Common Cartridge version shown in the exports page for CC exports. Can be overridden at the book level.")])]),e._v(" "),o("p",[o("a",{attrs:{href:"https://pressbooks.org/app/uploads/sites/2/2018/07/ltiNetworkSettings.png"}},[o("img",{staticClass:"aligncenter wp-image-557 size-large",attrs:{src:"https://pressbooks.org/app/uploads/sites/2/2018/07/ltiNetworkSettings-846x1024.png",alt:"Screenshot of LTI network settings page",width:"840",height:"1017"}})])]),e._v(" "),o("h2",{attrs:{id:"lti-settings-book-admin"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#lti-settings-book-admin"}},[e._v("#")]),e._v(" LTI Settings (book admin)")]),e._v(" "),o("p",[e._v("The LTI Settings link (at the book admin level) leads to a configuration page that is specific for the book. The book administrator can then override the network defaults for the following settings:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Map [Administrator/Staff/Learner] to the following Pressbooks role")])]),e._v(" "),o("li",[o("strong",[e._v("Appearance")])]),e._v(" "),o("li",[o("strong",[e._v("Common Cartridge version")])])]),e._v(" "),o("h2",{attrs:{id:"lti-links"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#lti-links"}},[e._v("#")]),e._v(" LTI links")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Each book has an LTI URL in the following format: "),o("strong",[e._v("https://site/book/format/lti/launch")]),e._v("\n(ex: https:‍//university.pressbooks.pub/testbook/"),o("strong",[e._v("format/lti/launch")]),e._v(")")])]),e._v(" "),o("li",[o("p",[e._v("LTI URLs to specific chapters are in the following format: "),o("strong",[e._v("https://site/book/format/lti/launch/part/chapter")]),e._v("\n(ex: https:‍//university.pressbooks.pub/testbook/"),o("strong",[e._v("format/lti/launch")]),e._v("/chapter/chapter-1/)")])])]),e._v(" "),o("h1",{attrs:{id:"behaviour-details"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#behaviour-details"}},[e._v("#")]),e._v(" Behaviour details")]),e._v(" "),o("h2",{attrs:{id:"whitelisting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#whitelisting"}},[e._v("#")]),e._v(" Whitelisting")]),e._v(" "),o("p",[e._v("Whitelisting is necessary in order for an LTI connection to be "),o("strong",[e._v("automatically")]),e._v(" configured.\nWhitelisting is not necessary for manual configurations.\n")]),o("div",{staticStyle:{"background-color":"#fff8e1",padding:"8px"}},[e._v("Note: if the domain was whitelisted while the LTI configuration was initially (automatically) set up and the domain was subsequently removed from the whitelist, the LTI connection "),o("em",[e._v("will still work")]),e._v(".")]),e._v("\nTo disable an LTI connection, go to "),o("strong",[e._v("Network admin > Integrations > LTI Consumers")]),e._v(', select the target connection, and either trash it or uncheck the "'),o("strong",[e._v("Enabled")]),e._v('" box.'),o("p"),e._v(" "),o("p",[o("strong",[e._v("Note:")]),e._v(" Automatic configuration is a feature of the "),o("a",{attrs:{href:"https://www.imsglobal.org/specs/ltiv2p0",target:"_blank",rel:"noopener noreferrer"}},[e._v("LTI 2.0"),o("OutboundLink")],1),e._v(" specification and is not widely supported by Learning Management Systems.")]),e._v(" "),o("h2",{attrs:{id:"user-creation-and-mapping"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#user-creation-and-mapping"}},[e._v("#")]),e._v(" User creation and mapping")]),e._v(" "),o("p",[e._v("When a user accesses Pressbooks content via LTI, it is possible for Pressbooks to automatically create a new user or log a returning user into his Pressbooks account based on information sent by the LMS (user role and ID).")]),e._v(" "),o("p",[e._v("Pressbooks uses the LMS user's email address to identify them.")]),e._v(" "),o("p",[e._v("Mapping settings are available at the network levels and at the book level.")]),e._v(" "),o("ul",[o("li",[e._v("Network-level mappings provide the defaults for all books on the network")]),e._v(" "),o("li",[e._v("Book-level mappings apply to specific books and override network-level default mappings")])]),e._v(" "),o("p",[e._v("By default, all mappings at the network and book levels are set to Anonymous Guest.")]),e._v(" "),o("p",[o("strong",[e._v("Mapping effects on books:")])]),e._v(" "),o("p",[e._v("Newly-created books inherit the default network-level mappings")]),e._v(" "),o("ul",[o("li",[e._v("IF the network defaults are modified AFTER a book has been created\n"),o("ul",[o("li",[e._v("And IF the book mappings have never been changed from the default\n"),o("ul",[o("li",[e._v("The book mappings will be updated according to the new network defaults")])])]),e._v(" "),o("li",[e._v("Otherwise (if the book mappings have been changed)\n"),o("ul",[o("li",[e._v("The book mappings will not be updated.")])])])])])]),e._v(" "),o("p",[o("strong",[e._v("Mapping effects on users/access to Pressbooks content:")])]),e._v(" "),o("p",[e._v("If the mapping is set to:")]),e._v(" "),o("ul",[o("li",[e._v('"'),o("strong",[e._v('Anonymous Guest"')]),e._v(", no user will be created in Pressbooks and the LMS will display the web page as it appears on the open Web\n"),o("ul",[o("li",[e._v('If the book is set to Private, the LMS will display the "Access denied" message')])])]),e._v(" "),o("li",[o("strong",[e._v("any other role")]),e._v(",\n"),o("ul",[o("li",[e._v("a first-time LMS visitor will have a new user automatically created on Pressbooks and added to the book they are trying to access with the specified role")]),e._v(" "),o("li",[e._v("a returning LMS visitor will be logged into Pressbooks; the incoming user will be matched to the existing Pressbooks user based on the email address.\n"),o("ul",[o("li",[e._v("if the user does not exist at the book level, they will be added to the book")]),e._v(" "),o("li",[e._v("at every login, the user role will be verified and updated according to the mapping.\n"),o("ul",[o("li",[e._v("Note: If the user is a super admin, the book role assignment will not impact their super admin privileges.")]),e._v(" "),o("li",[e._v('since the user is now logged in, the LMS will be able to display contents of books set to "private"')])])])])])])])]),e._v(" "),o("p",[o("strong",[e._v("User mapping mechanism")])]),e._v(" "),o("ul",[o("li",[e._v("Get the user role from the LMS. (abstracted as: Anonymous Guest, Learner, Staff, Admin)")]),e._v(" "),o("li",[e._v("Get the email from the LMS.")]),e._v(" "),o("li",[e._v("Get LTI ID from the LMS. [tool_consumer_instance_guid + user_id]")])]),e._v(" "),o("p",[e._v("Sometimes an email is not sent so we create a fake email using the "),o("a",{attrs:{href:"mailto:UserID@127.0.0.1"}},[e._v("UserID@127.0.0.1")]),e._v(". Canvas user ids look like "),o("code",[e._v("967620f91cb9080c633b4e55f561d40ed83924a4")]),e._v(". This behavior mirrors the Candela LTI Plugin.")]),e._v(" "),o("ul",[o("li",[e._v("Try to match a Pressbooks user by LTI ID (Stored in user_meta table.)")]),e._v(" "),o("li",[e._v("If no match, then try to match a Pressbooks user by email.")]),e._v(" "),o("li",[e._v("If there's no match, then check if we should create a user (Anonymous Guest = No, Everything Else = Yes).  When creating a user: Username = email prefix,  email = see above, and the LTI ID will be stored in the user_meta table. A user can have more than one LTI ID (Example: Moodle, Sakai, Canvas, Blackboard all point to the same Book and we can match the user's email).")]),e._v(" "),o("li",[e._v("If the user does not have rights to the book, and role is not Anonymous Guest, then add them to the book with appropriate role and log them in.")])]),e._v(" "),o("p",[e._v("The email can be filtered, example: "),o("code",[e._v("add_filter( 'pb_integrations_multidomain_email', function( $email, $uid, $plugin ) { /* Custom use case, return $email */ }, 10, 3 );")])]),e._v(" "),o("h1",{attrs:{id:"manually-set-up-a-lti-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#manually-set-up-a-lti-configuration"}},[e._v("#")]),e._v(" Manually Set Up a LTI Configuration")]),e._v(" "),o("ol",[o("li",[e._v('Click the Add new button on the LTI Consumers page. You will be brought to the "Adding LTI Consumer" form:\n'),o("a",{attrs:{href:"https://pressbooks.org/app/uploads/sites/2/2018/06/pb-lti-addconsumer.png"}},[o("img",{staticClass:"alignnone size-large wp-image-521",attrs:{src:"https://pressbooks.org/app/uploads/sites/2/2018/06/pb-lti-addconsumer-1024x507.png",alt:"",width:"840",height:"416"}})])]),e._v(" "),o("li",[e._v("Fill in:")])]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Name")]),e._v(": Name of LTI consumer")]),e._v(" "),o("li",[o("strong",[e._v("Key")]),e._v(": identification key used for the LTI protocol; can be any string (though some LMSes will reject a key if it is too long).")]),e._v(" "),o("li",[o("strong",[e._v("Secret")]),e._v(": string used for encryption. A secret is automatically generated when the user opens the form; they may choose to keep it or pick their own secret.")]),e._v(" "),o("li",[o("strong",[e._v("Enabled")]),e._v(": Check to allow the LMS to access content through this connection; Uncheck to prevent LMS from accessing content through this connection.")]),e._v(" "),o("li",[o("strong",[e._v("Enable from/Enable until")]),e._v(': (optional) specify date range during which this connection should be active. Connections outside the date range will be automatically refused.\nNote: the "Enabled" checkbox above takes precedence over this setting: if the connection is not enabled, connections will be refused even if they are within the date range.')]),e._v(" "),o("li",[o("strong",[e._v("Protected")]),e._v(": When turned on, the code will bail with 'A tool consumer GUID must be included in the launch request.' if one is not provided by the LMS. We recommend keeping it on.")])]),e._v(" "),o("p",[o("strong",[e._v("Note")]),e._v(': once a configuration is created, it will not be possible to edit the "'),o("strong",[e._v("Key")]),e._v('" and "'),o("strong",[e._v("Secret")]),e._v('" fields.')]),e._v(" "),o("h1",{attrs:{id:"configuring-pressbooks-with-a-tool-consumer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuring-pressbooks-with-a-tool-consumer"}},[e._v("#")]),e._v(" Configuring Pressbooks with a Tool Consumer")]),e._v(" "),o("p",[e._v('While the steps for configuring LTI providers differ among different tool consumers (like Learning Management Systems), a typical registration process will require a key/secret pair and a launch URL. The key/secret pair can be obtained following the manual "Adding LTI Consumer" form instructions above. The launch URL can be either the URL for the network itself, i.e. '),o("code",[e._v("https://yourinstitution.pressbooks.pub")]),e._v(" or the URL for a particular book, i.e. "),o("code",[e._v("https://yourinstitution.pressbooks.pub/mybook")]),e._v(".")]),e._v(" "),o("p",[e._v("Setting the launch URL to the root domain for the network will mean that the LTI configuration will be valid for all books on that network. Setting the launch URL to a particular book on the network will limit the LTI configuration to that book and its components only.")]),e._v(" "),o("h1",{attrs:{id:"common-cartridge"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#common-cartridge"}},[e._v("#")]),e._v(" Common Cartridge")]),e._v(" "),o("p",[e._v('The Pressbooks LTI Provider plugin (or the "LTI Plugin") exports Common Cartridge ("CC") files. Our LTI plugin supports CC v1.1, CC v1.2, and CC v1.3.')]),e._v(" "),o("p",[o("strong",[e._v("Exporting a Common Cartridge file in Pressbooks")])]),e._v(" "),o("p",[e._v("Common Cartridge Exports follow the same pattern as regular book exports. There is one export setting, which can be accessed on the LTI Settings page.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("In the book admin interface, under "),o("strong",[e._v("Integrations > LTI Settings")]),e._v(", select the Common Cartridge version you would like to export, according to your LMS's specifications, and click the "),o("strong",[e._v("Save Changes")]),e._v(" button.")])]),e._v(" "),o("li",[o("p",[e._v("On your book's Export page, select "),o("strong",[e._v("Common Cartridge")]),e._v(" (1)"),o("strong",[e._v(",")]),e._v(" then click on the "),o("strong",[e._v("Export your book")]),e._v(" button (2). Your CC export will appear on the page once it is ready (3).")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);