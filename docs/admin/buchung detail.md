# Buchung Detail

![grafik.png](assets/buchung%20detail/grafik.png)

# Kopfzeile

In der Kopfzeile werden folgende Daten angezeigt:

- Name (falls es keinen Namen gibt, wird die E-Mail angezeigt, sonst die Telefonnummer, sonst das Konto und wenn es den auch nicht gibt, dann der Buchungscode)
- Link zur Onlinebuchung: befindet sich gleich unter dem Namen
- Status als Chip. Die möglichen Status sind: Bestätigt, Storniert und Ausstehend
- Quelle als Chip. Die möglichen Quellen sind Keycard, Cube, Online und Backend.
- Drucken: bietet eine schnelle Möglichkeit, die Seite auszudrucken
- Buchungsbestätigung senden: damit kann die Buchungsbestätigung an den Kunden gesendet werden.

- Buchung stornieren: damit kann die Buchung gelöscht werden, es sind keine weiteren Belegungen mehr möglich. Rückerstattung der Bezahlung muss manuell über den Bezahldienst vorgenommen werden. Wahlweise kann der Kunde benachrichtigt werden.

![grafik.png](assets/buchung%20detail/grafik%201.png)

# Anzeige als Karten

## Buchungscode

Wird benötigt für die Ein- und Auslagerung.

## Buchungsschlüssel

Hier kann ein Buchungsschlüssel generiert oder eingetragen werden, mit dem auch die Buchung verwaltet werden kann (wie mit dem Buchungscode). Voraussetzung ist, dass der Cube über einen Barcode-Reader verfügt, damit der QR-Code gelesen werden kann. So muss man den Buchungscode nicht eintippen, sondern kann ihn einfach scannen.

Der QR-Code kann ausgedruckt werden, indem man auf “Speichern” klickt.

![grafik.png](assets/buchung%20detail/grafik%202.png)

## Zeitraum

Hier wird der Zeitraum angezeigt, für den das Fach gebucht ist.

An der Farbe des Chips ist schnell zu erkennen, ob sich der Zeitraum in der Vergangenheit (rot), in der Zukunft (grau) befindet oder ob er gerade aktiv (grün) ist.

Eine Änderung des Zeitraums ist nur möglich, wenn der Status der Buchung nicht storniert ist.

![grafik.png](assets/buchung%20detail/grafik%203.png)

![grafik.png](assets/buchung%20detail/grafik%204.png)

![grafik.png](assets/buchung%20detail/grafik%205.png)

## Gebuchte Fächer

Hier werden Typen und Anzahl der gebuchten Fächer angezeigt.

![grafik.png](assets/buchung%20detail/grafik%206.png)

Es ist auch möglich, die Fächer zu ändern. Im folgenden wird beispielsweise ein weiteres Fach dazu gebucht.

![grafik.png](assets/buchung%20detail/grafik%207.png)

Am Terminal am Cube würden dann beide Fächer angeboten werden.

![grafik.png](assets/buchung%20detail/grafik%208.png)

## Belegungen

Hier wird angezeigt, welche gebuchten Fächer belegt sind und wann die Belegung beendet wurde. 

Das von-Datum zeigt immer den Zeitpunkt der Erst-Belegung an (falls das Fach öfters geöffnet und geschlossen wurde).

Man kann auf die jeweilige Belegung klicken, dann kommt man zur Belegung Detailansicht (TODO verlinken)

![grafik.png](assets/buchung%20detail/grafik%209.png)

## Kontaktdaten

Folgenden Daten werden, wenn vorhanden, angezeigt:

- Name
- Email
- Telefonnummer

Diese Daten können ensprechend geändert und ergänzt werden.

![grafik.png](assets/buchung%20detail/grafik%2010.png)

    

## Zahlungen

Hier werden Details zur Bezahlung angezeigt. Man sowohl einen Beleg als auch einen Händler-Beleg ausdrucken. Der Link "Open in Provider Dashboard" öffnet die Webseite des Zahlungsanbieters (zB. Stripe, Wallee).

Falls noch nicht bezahlt wurde, ist “als bezahlt markieren” aktiv. Damit kann die Buchung auf bezahlt gesetzt werden. Es muss dann aber zwingend ein Zahlungshinweis eingetragen werden.

![grafik.png](assets/buchung%20detail/grafik%2011.png)

![Ein Zahlungshinweis muss bei “als bezahlt markieren” angegeben werden.](assets/buchung%20detail/grafik%2012.png)

Ein Zahlungshinweis muss bei “als bezahlt markieren” angegeben werden.

## Rabatt-Code

Wenn bei der Bezahlung ein Rabatt-Code eingetragen wurde, wird dieser hier angezeigt. 

## Verlauf

Hier wird detailliert die Historie angezeigt.

![grafik.png](assets/buchung%20detail/grafik%2013.png)