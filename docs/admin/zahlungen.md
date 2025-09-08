# Zahlungen

<ImageCaption
    src="/zahlungen/grafik.png"
    alt="Übersicht Zahlungen"
    caption="Übersicht Zahlungen"
/>

## Zahlungen-Tabelle

Folgenden Spalten werden in der Zahlungen-Tabelle angezeigt:

- Erstellt am: Datum, an dem die Zahlung erstellt wurde.
- Buchung: zeigt den Namen an (wenn es den nicht gibt, wird die E-Mail angezeigt, sonst die Telefonnummer, sonst das Konto und wenn es den auch nicht gibt, dann der Buchungscode). Mit Verlinkung zu [Buchung Detail](https://www.notion.so/Buchung-Detail-261add09e8738046b43fef46c77e0af3?pvs=21).
- Bezahlt: zeigt das Datum an, wann die Bezahlung durchgeführt wurde.
- Rabattcode: zeigt den Rabattcode an, wenn einer bei der Bezahlung eingelöst wurde.
- Betrag
- Status: entweder “bezahlt” oder “ausstehend”

## Filter

Die Tabelle kann nach folgenden Kriterien gefiltert werden:

- Zeitraum: alle, heute, gestern, letzten 7 Tage, letzte Woche, diesen Monat, dieses Jahr, letzten Monat, letzte 3 Monate, letztes Jahr, benutzerdefiniert.
- Von-Bis Datum: bei Auswahl von "benutzerdefiniert" im Zeitraum-Filter können Start- und Enddatum manuell eingetragen werden.
- Von-Bis Betrag: niedrigster bzw. höchster (jeweils inkl.) Betrag der angezeigt werden soll
- Status: Auswahl von “alle”, “ausstehend” oder “bezahlt”.

## Export

Mit dieser Funktion lässt sich die Tabelle als CSV-Datei exportieren. Es werden nur die Einträge exportiert, die aktuell am Bildschirm angezeigt werden (entsprechend der gesetzten Filter).

<ImageCaption
    src="/zahlungen/grafik1.png"
    alt="CSV Export"
    caption="CSV Export"
/>

Folgenden Spalten werden exportiert:

- Created at (Erstellung der Zahlung)
- Booking ID (Buchungs ID)
- Booking name (Name des Benutzers)
- Booking email (E-Mail des Benutzers)
- Booking phone (Telefonnummer des Benutzers)
- Booking source (Quelle der Buchung)
- Site ID (ID des Standorts)
- Paid at (Datum der Bezahlung)
- State (Status)
- Amount (Betrag)
- Currency (Währung)
- Discount code (Rabatt Code)
- Transaction URL (URL der Transaktion)