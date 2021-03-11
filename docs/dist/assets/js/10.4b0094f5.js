(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{365:function(e,a,s){"use strict";s.r(a);var t=s(45),o=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"validating-with-php-code-sniffer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validating-with-php-code-sniffer"}},[e._v("#")]),e._v(" Validating with PHP Code Sniffer")]),e._v(" "),s("p",[e._v("Instead of reading any of this why not just let the computer nag you? From the Pressbooks plugin directory:")]),e._v(" "),s("ol",[s("li",[s("code",[e._v("composer install")])]),e._v(" "),s("li",[s("code",[e._v("composer standards")])])]),e._v(" "),s("p",[e._v("Bonus: You can sometimes automatically fix errors by running:")]),e._v(" "),s("p",[s("code",[e._v("vendor/bin/phpcbf --standard=phpcs.ruleset.xml /path/to/your/file")])]),e._v(" "),s("h2",{attrs:{id:"pressbooks-coding-standards-mandatory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pressbooks-coding-standards-mandatory"}},[e._v("#")]),e._v(" Pressbooks Coding Standards (Mandatory)")]),e._v(" "),s("p",[e._v("We enforce "),s("a",{attrs:{href:"https://github.com/humanmade/coding-standards",target:"_blank",rel:"noopener noreferrer"}},[e._v("Human Made Coding Standards"),s("OutboundLink")],1),e._v(" with the following small tweaks.")]),e._v(" "),s("ul",[s("li",[e._v("Use "),s("code",[e._v("camelCase")]),e._v(" for class methods & properties, "),s("code",[e._v("UPPERCASE")]),e._v(" for class constants, "),s("code",[e._v("snake_case")]),e._v(" everywhere else.")]),e._v(" "),s("li",[s("a",{attrs:{href:"http://php.net/manual/en/book.session.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("PHP Sessions"),s("OutboundLink")],1),e._v(" are allowed.")])]),e._v(" "),s("h3",{attrs:{id:"write-classes-or-namespaced-functions-stay-out-of-global-space"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#write-classes-or-namespaced-functions-stay-out-of-global-space"}},[e._v("#")]),e._v(" Write Classes or Namespaced functions, stay out of global space!")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://secure.php.net/manual/en/language.namespaces.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("PHP Namespaces"),s("OutboundLink")],1),e._v(" have been available since 2009. Namespaces are not a new concept. We use them.")]),e._v(" "),s("p",[e._v("Our namespace is: "),s("code",[e._v("\\Pressbooks\\")])]),e._v(" "),s("ul",[s("li",[e._v("If your Class isn't an Object like "),s("code",[e._v("\\WP_User")]),e._v(", "),s("code",[e._v("\\WP_Dependencies")]),e._v(", "),s("code",[e._v("\\WP_Query")]),e._v(" etc., write a library of functions.")]),e._v(" "),s("li",[e._v("If your Class is a bunch of Static methods and nothing else, write a library of functions.")]),e._v(" "),s("li",[e._v("Afraid of function name collisions? See "),s("a",{attrs:{href:"https://secure.php.net/manual/en/language.namespaces.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("Namespaces"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("h2",{attrs:{id:"pressbooks-coding-recommendations-optional"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pressbooks-coding-recommendations-optional"}},[e._v("#")]),e._v(" Pressbooks Coding Recommendations (Optional)")]),e._v(" "),s("p",[e._v("Write accurate "),s("a",{attrs:{href:"http://en.wikipedia.org/wiki/PHPDoc",target:"_blank",rel:"noopener noreferrer"}},[e._v("PHPDoc"),s("OutboundLink")],1),e._v(" styled code comments.")]),e._v(" "),s("p",[e._v("Prefix "),s("a",{attrs:{href:"https://developer.wordpress.org/plugins/hooks/",target:"_blank",rel:"noopener noreferrer"}},[e._v("action and filter hook"),s("OutboundLink")],1),e._v(" names with "),s("code",[e._v("pb_")]),e._v(".")]),e._v(" "),s("p",[e._v("Prefix WP Post meta keys with "),s("code",[e._v("pb_")]),e._v(".")]),e._v(" "),s("p",[e._v("Prefix WP User meta keys with "),s("code",[e._v("pb_")]),e._v(".")]),e._v(" "),s("p",[e._v("Prefix WP Option names with "),s("code",[e._v("pressbooks_")]),e._v(".")]),e._v(" "),s("p",[e._v("Theme files are exempt from the above rules, but should still make an effort to follow them.")])])}),[],!1,null,null,null);a.default=o.exports}}]);