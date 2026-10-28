// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "",
    section: "Navigation",
    handler: () => {
      window.location.href = "/equals/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/equals/publications/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/equals/blog/";
          },
        },{id: "nav-team",
          title: "Team",
          description: "The people behind the EQUALS project",
          section: "Navigation",
          handler: () => {
            window.location.href = "/equals/team/";
          },
        },{id: "nav-join-us",
          title: "Join Us",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/equals/joinus/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/equals/contact/";
          },
        },{id: "nav-about-the-pi",
          title: "↗ About the PI",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/equals/pi/";
          },
        },{id: "post-justine-duval-was-awarded-the-prize-l-39-oréal-unesco-for-women-in-science-france-2026",
        
          title: "Justine Duval was awarded the Prize L&#39;Oréal-UNESCO For Women in Science France 2026...",
        
        description: "Draft",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/equals/blog/2026/Loreal/";
          
        },
      },{id: "post-we-convened-a-breakout-group-at-the-friburg-2026-openmod-workshop",
        
          title: "We convened a breakout group at the Friburg 2026 Openmod workshop",
        
        description: "We convene a 3hours interactive workshop at Openmod.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/equals/blog/2026/openmod/";
          
        },
      },{id: "post-open-source-release-of-an-optimization-tool",
        
          title: "Open source release of an optimization tool !",
        
        description: "An open toy model of power system develomment that embeds planetary boundaries and energy justice.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/equals/blog/2026/Cairn-wise_released/";
          
        },
      },{id: "post-we-convened-a-breakout-group-at-the-2026-future-earth-conference",
        
          title: "We convened a breakout group at the 2026 Future Earth conference",
        
        description: "We convene a 1.5 hours interactive workshop at Openmod.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/equals/blog/2026/FutureEarth/";
          
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
