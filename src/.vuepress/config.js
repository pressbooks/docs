module.exports = {
  title: "Pressbooks Documentation",
  description: "User and Developer Documentation",
  base: '/docs/',
  head: [
    ['link', { rel: 'icon', type: "image/svg+xml", href: '/icon.svg' }]
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "User Guides",
        items: [
          { text: "Installation", link: "/installation/" },
          { text: "Integrations", link: "/integrations/" },
          { text: "Debugging", link: "/debugging/" }
        ]
      },
      {
        text: "Developer Guides",
        items: [
          { text: "Coding Standards", link: "/coding-standards/" },
          { text: "Local Development", link: "/local-development/" },
          { text: "Workflow", link: "/workflow/" },
          { text: "Theme Development", link: "/theme-development/" },
          { text: "Unit Testing", link: "/unit-testing/" }
        ]
      },
      { text: "REST API", link: "/rest-api/" },
      { text: "Changelogs", link: "/changelogs/" },
      { text: "Contributors", link: "/contributors/" }
    ]
  }
};
