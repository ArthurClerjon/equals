// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-equals",
    title: "EQUALS",
    section: "Navigation",
    handler: () => {
      window.location.href = "/equals/";
    },
  },{id: "nav-team",
          title: "Team",
          description: "The people behind the EQUALS project",
          section: "Navigation",
          handler: () => {
            window.location.href = "/equals/team/";
          },
        },{id: "nav-publications-amp-communications",
          title: "Publications &amp; Communications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/equals/publications/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/equals/news/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/equals/contact/";
          },
        },{id: "nav-join-us",
          title: "Join Us",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/equals/joinus/";
          },
        },{id: "nav-arthur-clerjon",
          title: "↗ Arthur Clerjon",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/equals/pi/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/equals/books/the_godfather/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%72%74%68%75%72.%63%6C%65%72%6A%6F%6E@%63%65%61.%66%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ArthurClerjon", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ArthurClerjon", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-9545-988X", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Arthur-Clerjon/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=X0s6r3QAAAAJ", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/equals/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
