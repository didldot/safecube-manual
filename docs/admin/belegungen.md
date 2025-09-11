# Belegungen

<ImageCaption
    src="/belegungen/grafik.png"
    alt="Tabelle Belegungen"
    caption="Tabelle Belegungen"
/>

## Tabelle Belegungen

Folgende Spalten werden in der Tabelle angezeigt:

- Belegung: zeigt den Namen des Entlehners an (wenn es den nicht gibt, wird die E-Mail angezeigt, sonst die Telefonnummer, sonst das Konto und wenn es den auch nicht gibt, dann der Buchungscode). Mit Verlinkung zu [Belegunsdetail](belegung%20detail.md).
- Cube: zeigt die Cube-ID und die Fachnummer an
- Belegt von: Datum wann die Belegung begonnen hat
- Belegt bis: Datum wann die Belegung beendet wurde. Ist dieses Feld leer, dann ist das Fach aktuell belegt.

### Filter für die Tabelle

<ImageCaption
    src="/belegungen/grafik1.png"
    alt="Filter für die Tabelle"
    caption="Filter für die Tabelle"
/>

Der Filter kann mit einem Klick auf das Filtersymbol oder Pfeilchen geöffnet bzw. geschlossen  werden.

Die Tabelle kann nach folgenden Kriterien gefiltert werden:

- Zeitraum: alle, heute, gestern, letzten 7 Tage, letzte Woche, diesen Monat, dieses Jahr, letzten Monat, letzte 3 Monate, letztes Jahr, benutzerdefiniert.
- Von-Bis: Bei Auswahl von "benutzerdefiniert" im Zeitraum-Filter können Start- und Enddatum manuell eingetragen werden.
- Standort: Ohne Auswahl eines Standorts werden Buchungen von allen Standorten des Mandanten angezeigt.
- Belegungs-Status: entweder alle Belegungen oder nur die aktuellen Belegungen anzeigen.

## CSV Exportieren

Mit dieser Funktion lässt sich die Tabelle als CSV-Datei exportieren. Es werden nur die Einträge exportiert, die aktuell am Bildschirm angezeigt werden (entsprechend der gesetzten Filter).

Bevor die Datei erzeugt wird, kann der Benutzer festlegen, welche Trenn- und Dezimalzeichen in der CSV-Datei verwendet werden sollen.

<ImageCaption
    src="/belegungen/grafik_syncblock.png"
    alt="CSV exportieren - Abfrage Trenn- und Dezimalzeichen"
    caption="CSV exportieren - Abfrage Trenn- und Dezimalzeichen"
/>

<ImageCaption
    src="/belegungen/grafik2.png"
    alt="Beispiel für eine CSV-Datei"
    caption="Beispiel für eine CSV-Datei"
/>

Folgende Spalten werden exportiert:

- id (ID der Belegung)
- accessCode (Buchungscode)
- cubeId (ID des Cubes)
- boxNumber (Fachnummer)
- occupiedFrom (Datum wann die Belegung begonnen hat)
- occupiedUntil (Datum wann die Belegung beendet wurde)
- releasedAt (Datum wann das Fach freigegeben wurde)
- openedTimes (wie oft das Fach geöffnet wurde)
- bookingUuid (Buchungs-ID zu der die Belegung gehört)