# Authentifizierung und Rollen

# Authentifizierung

Man kann sich für den Admin-Bereich unter [https://admin.safecube.io](https://admin.safecube.io) anmelden.

Das System nutzt ausschließlich Basic Authentication. Benutzername und Passwort (verschlüsselt) werden  in der Datenbank gespeichert.

Benutzer mit den Rollen SuperUser und TenantAdmin sind berechtigt, neue Benutzer anzulegen und ihnen Rollen zuzuweisen. Neue Benutzer werden ausschließlich durch diese Administratoren erstellt – eine Selbstregistrierung ist nicht möglich.

![Login für den Admin-Bereich](Authentifizierung%20und%20Rollen/grafik.png)

Login für den Admin-Bereich

# Arten von Rollen

Es gibt folgende Benutzerrollen:

- SuperUser
- TenantAdmin
- TenantUser
- TenantSupport

Die Rolle des aktuell eingeloggten Benutzers wird in der oberen linken Ecke der Benutzeroberfläche angezeigt.

![grafik.png](Authentifizierung%20und%20Rollen/grafik%201.png)

# Berechtigungen Admin-Bereich

SuperUser, TenantAdmin, TenantUser und TenantSupport haben Zugriff auf den Admin-Bereich.

| Hauptmenü | Berechtigung | Keine Berechtigung |
| --- | --- | --- |
| Dashboard | alle |  |
| Buchungen | alle |  |
| Belegungen | alle  |  |
| Standorte | alle |  |
| Cubes | alle |  |
| Konten | alle |  |
| Statistik | alle anderen | - TenantSupport |
| Zahlungen | - SuperUser
- TenantAdmin
- TenantUser | alle anderen |
| Benutzer | - SuperUser
- TenantAdmin | alle anderen |
| Audit | - SuperUser
- TenantAdmin | alle anderen |
| Tenants | - SuperUser | alle anderen |
| Superuser | - SuperUser | alle anderen |

# Andere Rollen

Sollen hier nur kurz erwähnt werden, da sie für den Admin-Bereich keine Rolle spielen.

KeyCardUser, TenantApiUser, TenantPreAuthUser