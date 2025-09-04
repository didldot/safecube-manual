# Cubes/Fächer Tab

![Tabelle Cube Fächer](assets/cubes%20f%C3%A4cher%20tab/grafik.png)

Tabelle Cube Fächer

# Button Fächer freigeben

Der Button “Fächer freigeben” öffnet [Fächer freigeben](https://www.notion.so/Cubes-F-cher-freigeben-263add09e8738008a5eade351f598c9f?pvs=21).

# Tabelle Cube Fächer

Folgenden Spalten werden in der Tabelle angezeigt:

- Nummer: die Fachnummer
- Typ: Zeigt Fachgröße an. Standards sind S, M, L, XL - es können aber im Cubeadmin Center manuell Typen konfiguriert werden (zB. Hängefach, Charger, etc.)
- Features: können im Cubeadmin Center eingestellt werden. Mögliche Features: Behindertengerecht, Gekühlt, Gefahrengüter und Ladegerät
- Status: Geschlossen, Offen, Blockiert, Einbruch oder Unbekannt

- Deaktiviert: das deaktiviert sein oder eine Wartung erforderlich sein. Beides kann im Cubeadmin Center (oder am Cube?) eingestellt werden.

![Oben: Fach ist deaktiviert, unten: Wartung erforderlich](assets/cubes%20f%C3%A4cher%20tab/grafik%201.png)

Oben: Fach ist deaktiviert, unten: Wartung erforderlich

- Belegung: Verlinkt mit [Belegung Detail](https://www.notion.so/Belegung-Detail-262add09e873804ba051d5a231f1fd02?pvs=21). Anzeige ist abhängig von
    - wenn “reguläre Buchung”: dann gelten folgende Fallbacks, je nachdem was vorhanden ist: Name, Telefonnumer, E-Mail, Buchungscode.
    - wenn Konto: dann gelten folgende Fallbacks, je nachdem was vorhanden ist: Vorname + Nachname, E-Mail, Telefonnummer
    - wenn von den obigen nichts vorhanden ist, dann wird die Belegungs-ID angezeigt

# Alle Fächer öffnen

Unterhalb der Tabelle gibt es die Möglichkeit, alle Fächer zu öffnen. Dies erfolgt nach einer entsprechenden Sicherheitsabfrage. 

![Sicherheitsabfrage bei “Alle Fächer öffnen”](assets/cubes%20f%C3%A4cher%20tab/grafik%202.png)

Sicherheitsabfrage bei “Alle Fächer öffnen”