// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Overview of my background and research experience.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-phd-defense-complete",
          title: 'PhD Defense Complete 🎉',
          description: "I successfully defended my PhD dissertation.",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-awarded-msca-postdoctoral-fellowship",
          title: 'Awarded MSCA Postdoctoral Fellowship 🎉',
          description: "Awarded MSCA Postdoctoral Fellowship with score 98/100.",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-accepted-to-neurips-2025-instance-level-composed-image-retrieval",
          title: 'Accepted to NeurIPS 2025 — Instance-Level Composed Image Retrieval 🎉',
          description: "Our paper accepted to NeurIPS 2025. Code and preprint available.",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "news-accepted-to-iclr-2026-revisiting-attentive-probing-through-the-lens-of-efficiency",
          title: 'Accepted to ICLR 2026 — Revisiting Attentive Probing Through the Lens of Efficiency...',
          description: "Our paper accepted to ICLR 2026. Code and preprint available.",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_4/";
            },},{id: "news-accepted-to-cvpr-2026-retrieve-and-segment",
          title: 'Accepted to CVPR 2026 — Retrieve and Segment 🎉',
          description: "Our paper accepted to CVPR 2026. Code and preprint available.",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_5/";
            },},{id: "news-accepted-to-eccv-2026-reglue-your-latents",
          title: 'Accepted to ECCV 2026 — REGLUE Your Latents 🎉',
          description: "Our paper accepted to ECCV 2026. Code and preprint available.",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_6/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv_bill_psomas.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%76%61%73%69%6C%65%69%6F%73.%70%73%6F%6D%61%73@%66%65%6C.%63%76%75%74.%63%7A", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qiDVfC4AAAAJ", "_blank");
        },
      },{
        id: 'social-whatsapp',
        title: 'whatsapp',
        section: 'Socials',
        handler: () => {
          window.open("https://wa.me/306984700077", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/billpsomas", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/bill-psomas", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/bill_psomas", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/billpsomas.bsky.social", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-5381-0312", "_blank");
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
