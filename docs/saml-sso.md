---
title: Pressbooks SAML SSO
permalink: /integrations/saml-sso/
---
**Table of Contents**

*   [Installation / Activation](#installation-activation)
*   [Admin interface description](#admin-interface-description)
*   [Details of settings behaviours](#details-of-settings-behaviours)
*   [User identification mechanism](#user-identification-mechanism)

Plugin to integrate Pressbooks with a SAML2 single sign-on service. ([Shibboleth](https://www.shibboleth.net/), [Microsoft ADFS](https://support.zendesk.com/hc/en-us/articles/203663886-Setting-up-single-sign-on-using-Active-Directory-with-ADFS-and-SAML-Professional-and-Enterprise-), Google Apps, Etc.)

_Limitations: This plugin does not enable authentication with multilateral Shibboleth. Use is restricted to non-federated, bilateral configuration with a single IdP only._

This documentation is up to date as of version 1.x of the Pressbooks SAML2 Single Sign-on plugin.

## Installation / Activation

The SAML2 SSO plugin is installed and activated on the network level.

Get the plugin here: https://github.com/pressbooks/pressbooks-saml-sso

Follow the steps in [the README file](https://github.com/pressbooks/pressbooks-saml-sso/blob/master/README.md). Be sure to correctly install, configure, and secure the security certificates.

## Admin interface description

Upon activation of the plugin, a submenu item (“SAML2”) is added to the Network Admin interface under “Integrations”. This leads to the SAML2 settings page:

![Screenshot 1](https://raw.githubusercontent.com/pressbooks/pressbooks-saml-sso/master/screenshot-1.png)

Your metadata XML can be downloaded from the hyperlink that appears at the top of this settings page:

![Screenshot 2](https://raw.githubusercontent.com/pressbooks/pressbooks-saml-sso/master/screenshot-2.png)

## Required Settings:

To configure SAML2 the following information is needed:

*   EntityID
*   SingleSignOnService
*   X509Certificate

Decide the response if the SAML2 user does not have a Pressbooks account: **Refuse Access** OR **Add New User**


**Note**: If the Network Setting for "Allow New Registrations" is set to "No Registrations Allowed", the SAML2 "Add New User" setting will bypass the Network Settings and register new users. For detailed behaviour on new user handling, see the section **[Details of settings behaviour: Add New user / Refuse access behaviour](#add-new-user-refuse-access-behaviour)** below.

## Optional settings:

*   **SingleLogoutService**: URL Location of the IdP where SLO Request will be sent.
*   **[Bypass](#bypass-domains-behaviour)**: Bypass the "Limited Email Registrations" and "Banned Email Domains" lists under Network Settings.
*   **[Forced redirection](#forced-redirection-behaviour)**: Hide the Pressbooks login page and go directly to the insitutions's SAML2 login page.
*   [**Customize Button Text**:](#customize-button-text) Customize the label of the "Connect via SAML2" button in the Pressbooks login page. If Forced Redirection is checked, then this field is disabled.

Out of the box, the plugin requires the Assertion elements of the Response to be both encrypted and signed.
[These settings can be changed]((https://github.com/onelogin/php-saml/#settings)) using a filter, example:

```php
add_filter( 'pb_saml_auth_settings', function( $config ) {
	$config['security']['wantAssertionsEncrypted'] = false;
	$config['security']['wantAssertionsSigned'] = false;
	return $config		
} ); 
``` 

# Details of settings behaviours:

### **Bypass domains behaviour:**

If the Bypass option is **OFF**: Pressbooks' Network settings for both authorized and banned email domains will be applied and enforced.

If the Bypass option is **ON**: The "Limited Email Registrations" and "Banned Email Domains" lists will not be applied or enforced in the case of SAML2 logins. For example, even if the email domain entered in SAML2 settings matches a Banned Email Domain, a user will still be created.

### **Forced Redirection behaviour:**

If Forced Redirection is **OFF**, the "Sign In" link from the network website homepage brings the user to the Pressbooks login page, where a "Connect via SAML2" button will appear in the login form. Clicking on this button will bring the user to the institution's SAML2 login page.

If Forced Redirection is **ON**, the "Sign In" link will bring the user directly to the institution's SAML2 login page.

### **Add New User / Refuse Access behaviour:**

1. If no Pressbooks user exists for this SAML2 user
  * If SAML2 is configured to "Add New User" AND SAML2 login is successful       
    * a Pressbooks user is created with username = uid and email = mail
    * user logs into Pressbooks successfully
  * If SAML2 is configured to "Refuse Access" AND SAML2 login is successful
    * an "Unable to log in" error message appears in the Pressbooks login form (if Forced Redirection is OFF) or in its own page (if Forced Redirection is ON)
    * **NOTE**: Once the user has had this error, any subsequent clicks on "Connect via SAML2" directly in the login form will generate this error message again, as the user is already authenticated in SAML2. Every time they click "Connect via SAML2", SAML2 recognizes them as authenticated, but Pressbooks is refusing access. To log out, the user must either go to the SAML2 logout page or close the browser, terminating the SAML2 session.
2. If there is an existing Pressbooks user for this SAML2 user
  * User logs into Pressbooks successfully (no matter if SAML2 is configured to "Add new User" or "Refuse access")   

### Customize Button Text

The button can accept multiple lines of text. Add a `<br />` tag in the button text to insert a line break.

# User identification mechanism

When a user logs into Pressbooks via SAML2, the SAML2 plugin will attempt to find an existing user corresponding to the user who is logging in. If it does not find the user, the SAML2 plugin will either create a new user (if the SAML2 setting is set to "Create new user") or refuse access (if the SAML2 setting is set to "Refuse access").

The plugin looks for the following Attributes in the Response: (For compatibility with a broader range of IdPs we use the FriendlyName parameter.)

+ Requires: `uid` (urn:oid:0.9.2342.19200300.100.1.1, samAccountName, or equivalent)
+ Strongly recommends: `mail` (urn:oid:0.9.2342.19200300.100.1.3, email-address, or equivalent) If no value is available we fall back to `uid@127.0.0.1`
+ Optional: `eduPersonPrincipalName` (urn:oid:1.3.6.1.4.1.5923.1.1.1.6, or equivalent) Upon the first launch for a given user, if mail cannot match an existing person, and this value is present, we'll try to use it.

The mechanism to match the SAML2 user with the Pressbooks user is the following:

1.  Plugin tries to find a user `where wp_usermeta.meta_key = pressbooks_saml_identity and wp_usermeta.meta_value = uid`
      * Where `uid` is a unique ID sent by the Identity Provider
      * This allows us to, if we wanted to, manually assign any uid to any user with an imaginary mass import script, a new doesn't yet exist interface, etc.
        * The email can be filtered, example: `add_filter( 'pb_integrations_multidomain_email', function( $email, $uid, $plugin ) { /* Custom use case, return $email */ }, 10, 3 );`
2.  If uid is not found, try to match a user by mail or eduPersonPrincipalName
      * wp_usermeta.meta_key and wp_usermeta.meta_value are set by the SAML2 plugin upon first user matching; subsequent logins follow case #1 above.
3.  If neither #1 or #2 are found, create a new user.
      * `wp_usermeta.meta_key` and `wp_usermeta.meta_value` are set by the SAML2 plugin upon user creation; subsequent logins follow case #1 above.

Network admins who have manually created or plan to manually create new users in Pressbooks should take care to use the correct user email address for these manually created accounts so that the SAML2 plugin can properly match this manually-created user if/when they subsequently attempt to log in via SAML2.

Note: the username is not used for matching purposes.
