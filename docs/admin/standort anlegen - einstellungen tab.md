# Standort anlegen (= Einstellungen Tab)

<ImageCaption
    src="/standort-anlegen-einstellungen-tab/grafik.png"
    alt="Übersicht Standort (Teil 1)"
    caption="Übersicht Standort (Teil 1)"
/>
<ImageCaption
    src="/standort-anlegen-einstellungen-tab/grafik1.png"
    alt="Übersicht Standort (Teil 2)"
    caption="Übersicht Standort (Teil 2)"
/>

Um einen Standort anzulegen, müssen der Name, der Slug und die Zeitzone zwingend ausgefüllt werden.

Diese Daten können später hier auch bearbeitet werden.

## Standort aktivieren

Solange der Standort nicht aktiviert ist, ist er nicht öffentlich sichtbar. Buchungen für einen Cube können nur erfolgen, wenn der zugehörige Standort aktiviert wurde.

## Name

Frei zu vergebender Name für den Standort.

## Slug

Eine kurze, lesbare Kennung für diesen Standort. Diese wird automatisch vorgeschlagen, nachdem der Name eingetragen wurde, da beide meist identisch sein sollten. Die Kennung wird als Teil der URL bei der Online-Buchung verwendet.

Beispiel: Wenn bei Slug "foyer" eingetragen ist, könnte die URL zur Online-Buchung so aussehen ("variocube" ist hier der Name des Mandanten): h***s://booking.mydomain.at/variocube/foyer

## Standort-Typ

Es gibt zwei Arten von Standorten:

- Dauerhaft: Der Standort existiert ohne zeitliche Begrenzung.
- Event: Der Standort existiert nur für eine begrenzte Zeit (z.B. ein Musikfestival, das nur an einem Wochenende stattfindet).

Bei einem Event kann entsprechend der Zeitraum (aktiv-von und aktiv-bis) festgelegt werden.

## Vorausbuchungen aktivieren

Ermöglicht das Buchen von Fächern für einen zukünftigen Zeitraum.

(?) Wird aktuell nur beim “Simplified Layout” berücksichtigt.

## Standortüberprüfung deaktivieren

Bei einer aktiven Standortüberprüfung wird bei der Belegung oder Öffnen eines Faches mittels Eingabe des Standortcodes überprüft, ob sich der Kunde auch auf dem richtigen Standort befindet.

<ImageCaption
    src="/standort-anlegen-einstellungen-tab/grafik2.png"
    alt="Standort überprüfen"
    caption="Standort überprüfen"
/>

Den Standortcode findet man rechts oben am Terminal.

<ImageCaption
    src="/standort-anlegen-einstellungen-tab/grafik3.png"
    alt="Terminal mit dem Standortcode “2521” (rechts oben)"
    caption="Terminal mit dem Standortcode “2521” (rechts oben)"
/>

## Kontakt, Adresse

Die eingetragene Telefonnummer und die Adresse werden in den E-Mails angezeigt.

<ImageCaption
    src="/standort-anlegen-einstellungen-tab/grafik4.png"
    alt="Kontaktdaten in E-Mail"
    caption="Kontaktdaten in E-Mail"
/>

## Zeitzone

Diese ist wichtig für die korrekte Berechnung der lokalen Zeit am Standort.