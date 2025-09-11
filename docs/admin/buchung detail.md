# Buchung Detail

<ImageCaption
    src="/buchung-detail/grafik.png"
    alt="Übersicht Buchung Detail"
    caption="Übersicht Buchung Detail"
/>

## Kopfzeile in der Buchung Detail Ansicht

In der Kopfzeile werden folgende Daten angezeigt:

- Name (falls es keinen Namen gibt, wird die E-Mail angezeigt, sonst die Telefonnummer, sonst das Konto und wenn es den auch nicht gibt, dann der Buchungscode)
- Link zur Onlinebuchung: befindet sich gleich unter dem Namen
- Status als Chip. Die möglichen Status sind: Bestätigt, Storniert und Ausstehend
- Quelle als Chip. Die möglichen Quellen sind Keycard, Cube, Online und Backend.
- Drucken (Button): bietet eine schnelle Möglichkeit, die Seite auszudrucken
- Buchungsbestätigung senden (Button): damit kann die Buchungsbestätigung an den Kunden gesendet werden.
- Buchung stornieren (Button): damit kann die Buchung gelöscht werden, es sind keine weiteren Belegungen mehr möglich. Rückerstattung der Bezahlung muss manuell über den Bezahldienst vorgenommen werden. Wahlweise kann der Kunde benachrichtigt werden.

<ImageCaption
    src="/buchung-detail/grafik1.png"
    alt="Buchung stornieren"
    caption="Buchung stornieren"
/>

## Anzeige als Karten

### Buchungscode

Wird benötigt für die Ein- und Auslagerung.

### Buchungsschlüssel

Hier kann ein Buchungsschlüssel generiert oder eingetragen werden, mit dem auch die Buchung verwaltet werden kann (wie mit dem Buchungscode). Voraussetzung ist, dass der Cube über einen Barcode-Reader verfügt, damit der QR-Code gelesen werden kann. So muss man den Buchungscode nicht eintippen, sondern kann ihn einfach scannen.

Der QR-Code kann ausgedruckt werden, indem man auf “Speichern” klickt.

<ImageCaption
    src="/buchung-detail/grafik2.png"
    alt="QR-Code"
    caption="QR-Code"
/>

### Zeitraum

Hier wird der Zeitraum angezeigt, für den das Fach gebucht ist.

An der Farbe des Chips ist schnell zu erkennen, ob sich der Zeitraum in der Vergangenheit (rot), in der Zukunft (grau) befindet oder ob er gerade aktiv (grün) ist.

Eine Änderung des Zeitraums ist nur möglich, wenn der Status der Buchung nicht storniert ist.

<ImageCaption
    src="/buchung-detail/grafik3.png"
    alt="Aktive Buchung"
    caption="Aktive Buchung"
/>

<ImageCaption
    src="/buchung-detail/grafik4.png"
    alt="Abgelaufene Buchung"
    caption="Abgelaufene Buchung"
/>

<ImageCaption
    src="/buchung-detail/grafik5.png"
    alt="Buchung in der Zukunft"
    caption="Buchung in der Zukunft"
/>

### Gebuchte Fächer

Hier werden Typen und Anzahl der gebuchten Fächer angezeigt.

<ImageCaption
    src="/buchung-detail/grafik6.png"
    alt="Gebuchte Fächer"
    caption="Gebuchte Fächer"
/>

Es ist auch möglich, die Fächer zu ändern. Im folgenden wird beispielsweise ein weiteres Fach dazu gebucht.

<ImageCaption
    src="/buchung-detail/grafik7.png"
    alt="Fächer ändern"
    caption="Fächer ändern"
/>

Am Terminal am Cube würden dann beide Fächer angeboten werden.

<ImageCaption
    src="/buchung-detail/grafik8.png"
    alt="Terminal am Cube"
    caption="Terminal am Cube"
/>

### Belegungen

Hier wird angezeigt, welche gebuchten Fächer belegt sind und wann die Belegung beendet wurde. 

Das von-Datum zeigt immer den Zeitpunkt der Erst-Belegung an (falls das Fach öfters geöffnet und geschlossen wurde).

Man kann auf die jeweilige Belegung klicken, dann kommt man zur Belegung Detailansicht (TODO verlinken)

<ImageCaption
    src="/buchung-detail/grafik9.png"
    alt="Belegungen"
    caption="Belegungen"
/>

### Kontaktdaten

Folgende Daten werden, wenn vorhanden, angezeigt:

- Name
- Email
- Telefonnummer

Diese Daten können entsprechend geändert und ergänzt werden.

<ImageCaption
    src="/buchung-detail/grafik10.png"
    alt="Kontaktdaten"
    caption="Kontaktdaten"
/>

### Zahlungen

Hier werden Details zur Bezahlung angezeigt. Man sowohl einen Beleg als auch einen Händler-Beleg ausdrucken. Der Link "Open in Provider Dashboard" öffnet die Webseite des Zahlungsanbieters (zB. Stripe, Wallee).

Falls noch nicht bezahlt wurde, ist "als bezahlt markieren" aktiv. Damit kann die Buchung auf bezahlt gesetzt werden. Es muss dann aber zwingend ein Zahlungshinweis eingetragen werden.

<ImageCaption
    src="/buchung-detail/grafik11.png"
    alt="Zahlungen"
    caption="Zahlungen"
/>

<ImageCaption
    src="/buchung-detail/grafik12.png"
    alt="Zahlungshinweis"
    caption="Zahlungshinweis"
/>

### Rabatt-Code

Wenn bei der Bezahlung ein Rabatt-Code eingetragen wurde, wird dieser hier angezeigt. 

### Verlauf

Hier wird detailliert die Historie angezeigt.

<ImageCaption
    src="/buchung-detail/grafik13.png"
    alt="Verlauf"
    caption="Verlauf"
/>