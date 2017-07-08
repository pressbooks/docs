---
ID: 86
post_title: Workflow
author: Ned Zimmerman
post_excerpt: ""
layout: page
permalink: https://docs.pressbooks.org/workflow/
published: true
post_date: 2017-07-07 22:29:32
---
These are our branches:

*   **[master][1]** is our stable branch, and you'll find it running on [pressbooks.com][2] (and reflected in our [latest release][3]).
*   **[dev][4]** is a general-purpose work-in-progress branch. It is merged with `master` when a new release is forthcoming.
*   **[hotfix][5]** is for emergency patches. It exists solely to avoid conflicts with `dev`.
*   Any other branches you find are for feature development prior to merging into `dev`. Use at your own risk.
*   [Tags][6] represent releases, but if you are downloading a release for installation, you should download the package from [releases][7] as opposed to the source code.

 [1]: https://github.com/pressbooks/pressbooks/tree/master
 [2]: https://pressbooks.com
 [3]: https://github.com/pressbooks/pressbooks/releases/latest/
 [4]: https://github.com/pressbooks/pressbooks/tree/dev
 [5]: https://github.com/pressbooks/pressbooks/tree/hotfix
 [6]: https://github.com/pressbooks/pressbooks/tags
 [7]: https://github.com/pressbooks/pressbooks/releases/