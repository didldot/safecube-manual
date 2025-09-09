import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Safecube Benutzerhandbuch",
  description: "User Manual for Safecube Users",
  base: '/safecube-manual/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/safecube_logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Admin', link: '/admin/authentifizierung%20und%20rollen'}
    ],

    sidebar: [
      {
        text: 'Admin',
        items: [
          { text: 'Authentifizierung und Rollen', link: 'admin/authentifizierung und rollen' },
          { text: 'Dashboard', link: 'admin/dashboard' },
          { text: 'Buchungen', link: 'admin/buchungen' },
          { text: 'Buchung erstellen', link: 'admin/buchung erstellen' },
          { text: 'Buchung Detail', link: 'admin/buchung detail' },
          { text: 'Belegungen', link: 'admin/belegungen' },
          { text: 'Belegung Detail', link: 'admin/belegung detail' },
          { text: 'Standorte', link: 'admin/standorte' },
          { text: 'Standort anlegen (= Einstellungen Tab)', link: 'admin/standort%20anlegen%20-%20einstellungen%20tab'},
          { text: 'Standorte Cubes Tab', link: 'admin/standorte%20cubes%20tab' },
          { text: 'Standorte Buchung Tab', link: 'admin/standorte%20buchung%20tab' },
          { text: 'Standorte Fächer Tab', link: 'admin/standorte%20fächer%20tab' },
          { text: 'Standorte Preise Tab', link: 'admin/standorte%20preise%20tab' },
          { text: 'Standorte Zugang Tab', link: 'admin/standorte%20zugang%20tab' },
          { text: 'Standorte Text Tab', link: 'admin/standorte%20text%20tab' },
          { text: 'Standorte Änderungshistorie Tab', link: 'admin/standorte%20änderungshistorie%20tab' },
          { text: 'Cubes', link: 'admin/cubes' },
          { text: 'Cubes Fächer Tab', link: 'admin/cubes%20fächer%20tab' },
          { text: 'Cubes Standorte Tab', link: 'admin/cubes%20standorte%20tab' },
          { text: 'Cubes Codes Tab', link: 'admin/cubes%20codes%20tab' },
          { text: 'Cubes QR-Code Tab', link: 'admin/cubes%20qr-code%20tab' },
          { text: 'Cubes Fächer freigeben', link: 'admin/cubes%20fächer%20freigeben' },
          { text: 'Konten', link: 'admin/konten' },
          { text: 'Konto Detail', link: 'admin/konto%20detail'},
          { text: 'Statistik', link: 'admin/statistik' },
          { text: 'Zahlungen', link: 'admin/zahlungen' },
          { text: 'Benutzer', link: 'admin/benutzer' },
          { text: 'Benutzer Detail', link: 'admin/benutzer%20detail' },
          { text: 'Benutzer erstellen', link: 'admin/benutzer%20erstellen' },
        ]
      }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
