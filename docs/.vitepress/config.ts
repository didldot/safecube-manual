import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Safecube User Manual",
  description: "User Manual for Safecube Users",
  base: '/safecube-manual/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/safecube_logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Admin', link: '/admin/authentifizierung und rollen'}
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Admin',
        items: [
          { text: 'Authentifizierung und Rollen', link: 'admin/authentifizierung und rollen' },
          { text: 'Buchungen', link: 'admin/buchungen' },
          { text: 'Buchung erstellen', link: 'admin/buchung erstellen' },
          { text: 'Buchung Detail', link: 'admin/buchung detail' },
          { text: 'Belegungen', link: 'admin/belegungen' },
          { text: 'Belegung Detail', link: 'admin/belegung detail' },
          { text: 'Standorte', link: 'admin/standorte' },
          { text: 'Standort anlegen (= Einstellungen Tab)', link: 'admin/standort%20anlegen%20(=%20einstellungen%20tab)'},
          { text: 'Standorte Cubes Tab', link: 'admin/standorte%20cubes%20tab' },
          { text: 'Standorte Buchung Tab', link: 'admin/standorte%20buchung%20tab' },
          { text: 'Standorte Fächer Tab', link: 'admin/standorte%20fächer%20tab' },
          { text: 'Standorte Preise Tab', link: 'admin/standorte%20preise%20tab' },
          { text: 'Standorte Zugang Tab', link: 'admin/standorte%20zugang%20tab' },
          { text: 'Standorte Text Tab', link: 'admin/standorte%20text%20tab' },
          { text: 'Standorte Änderungshistorie Tab', link: 'admin/standorte%20änderungshistorie%20tab' },
        ]
      }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
