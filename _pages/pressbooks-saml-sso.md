---
ID: 601
post_title: Pressbooks SAML SSO
author: Ned Zimmerman
post_excerpt: ""
layout: page
permalink: >
  https://docs.pressbooks.org/changelogs/pressbooks-saml-sso/
published: true
post_date: 2018-10-02 13:02:51
---
## 0.0.5
### Patches

* [Security] Bump [robrichards/xmlseclibs](https://github.com/robrichards/xmlseclibs) from 3.0.1 to 3.0.2: [#8](https://github.com/pressbooks/pressbooks-shibboleth-sso/pulls/8)

## 0.0.4  
 * New `pb_integrations_multidomain_email` filter  
 * Associate existing users with either mail or eduPersonPrincipalName

## 0.0.3  
* Use certificate to set Valid Until  
* Interoperable SAML 2.0 Web Browser SSO Profile  
* Improve error message when login fails

## 0.0.2  
* Add feature to auto-config from IdP metadata  
* Remove ampersand character from SP entityID

## 0.0.1  
* Initial Release