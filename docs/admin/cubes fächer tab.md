# Cubes/Fächer Tab

<ImageCaption
  src="/cubes-fächer-tab/grafik.png"
  alt="Tabelle Cube Fächer"
  caption="Tabelle Cube Fächer"
/>

## Button Fächer freigeben

Der Button "Fächer freigeben" öffnet [Fächer freigeben](cubes%20fächer%20freigeben.md).

## Tabelle Cube Fächer

Folgende Spalten werden in der Tabelle angezeigt:

- Nummer: die Fachnummer
- Typ: Zeigt Fachgröße an. Standards sind S, M, L, XL - es können aber im Cubeadmin Center manuell Typen konfiguriert werden (zB. Hängefach, Charger, etc.)
- Features: können im Cubeadmin Center eingestellt werden. Mögliche Features: Behindertengerecht, Gekühlt, Gefahrengüter und Ladegerät
- Status: Geschlossen, Offen, Blockiert, Einbruch oder Unbekannt

- Deaktiviert: das deaktiviert sein oder eine Wartung erforderlich sein. Beides kann im Cubeadmin Center (oder am Cube?) eingestellt werden.

<ImageCaption
  src="/cubes-fächer-tab/grafik1.png"
  alt="Oben: Fach ist deaktiviert, unten: Wartung erforderlich"
  caption="Oben: Fach ist deaktiviert, unten: Wartung erforderlich"
/>

- Belegung: Verlinkt mit [Belegung Detail](https://www.notion.so/Belegung-Detail-262add09e873804ba051d5a231f1fd02?pvs=21). Anzeige ist abhängig von
    - wenn "reguläre Buchung": dann gelten folgende Fallbacks, je nachdem was vorhanden ist: Name, Telefonnummer, E-Mail, Buchungscode.
    - wenn Konto: dann gelten folgende Fallbacks, je nachdem was vorhanden ist: Vorname + Nachname, E-Mail, Telefonnummer
    - wenn von den obigen nichts vorhanden ist, dann wird die Belegungs-ID angezeigt

## Alle Fächer öffnen

Unterhalb der Tabelle gibt es die Möglichkeit, alle Fächer zu öffnen. Dies erfolgt nach einer entsprechenden Sicherheitsabfrage. 

<ImageCaption
  src="/cubes-fächer-tab/grafik2.png"
  alt="Sicherheitsabfrage bei “Alle Fächer öffnen”"
  caption="Sicherheitsabfrage bei “Alle Fächer öffnen”"
/>

