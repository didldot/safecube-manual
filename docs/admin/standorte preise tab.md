# Standorte/Preise Tab

<ImageCaption
    src="/standorte-preise-tab/grafik.png"
    alt="Übersicht Standorte Preise"
    caption="Übersicht Standorte Preise"
/>

## Währung

Bei der Währung können EUR oder CHF ausgewählt werden. Die Auswahlliste des Dropdowns ist nicht konfigurierbar, die beiden Währung sind hardcodiert.

## Steuersatz

Der Steuersatz kann im Textfeld frei eingetragen werden.

## Buchungseinheit und Preismodus

Mittels “Zeile hinzufügen” können neue Preise erstellt werden. Um Zeilen wieder zu löschen, in der Zeile ganz nach rechts scrollen und auf die Mülltonne klicken.

Falls die Buchungen gratis sind, dann bei den Preisen jeweils 0 eintragen.

### Tage oder Stunden / Einheit

Beim Preismodus “Einheit” kann festgelegt werden, dass die Preise pro ausgewählter Buchungseinheit berechnet werden. Dementsprechend können die Kunden auch für Stunden bzw. Tage buchen.

Wieviele Stunden bzw. Tage maximal gebucht werden können, kann frei definiert werden.

<ImageCaption
    src="/standorte-preise-tab/grafik1.png"
    alt="Tage / Einheit"
    caption="Tage / Einheit"
/>

<ImageCaption
    src="/standorte-preise-tab/grafik2.png"
    alt="Stunden / Einheit"
    caption="Stunden / Einheit"
/>



### Tage oder Stunden / Paket

Beim Preismodus "Paket" wird die Anzahl der Buchungseinheiten fix vorgegeben. Der Kunde kann bei der Buchung das gewünschte Paket auswählen.

Die maximal buchbaren Stunden bzw. Tage können hier nicht definiert werden, da diese bereits durch das Paket festgelegt sind.

<ImageCaption
    src="/standorte-preise-tab/grafik3.png"
    alt="Tage / Paket"
    caption="Tage / Paket"
/>

<ImageCaption
    src="/standorte-preise-tab/grafik4.png"
    alt="Stunden / Paket"
    caption="Stunden / Paket"
/>



## Rabatt-Codes

Hier können Rabatte angelegt werden. Dies geschieht durch Definition eines Codes, der, wenn der Kunden diesen bei der Bezahlung eingibt, entsprechend den definierten Prozenten weniger bezahlt.

Im folgenden Beispiel bekommt der Kunde bei Eingabe des Codes “6543” einen Rabatt von 3%.

<ImageCaption
    src="/standorte-preise-tab/grafik5.png"
    alt="Stunden / Paket"
    caption="Stunden / Paket"
/>

Der Rabatt-Code “Westfield Loyalty Service” ist ein Spezialfall. Der Kunde bekommt den Code direkt von Westfield bzw. verwendet eine Kundenkarte. Ein Barcode-Reader am Cube ist dafür notwendig. Bei der Bezahlung wird bei Westfield geprüft, ob der Code gültig ist oder nicht. Die Höhe des Rabatts kann aber hier festgelegt werden. Der Westfield Loyalty Service funktioniert nur am Cube, nicht bei der Online-Buchung!

WICHTIG: Wenn ein Westfield Loyalty Service definiert ist, sind keine anderen Rabatt-Codes zulässig. Das hier gezeigte Beispiel dient nur zur Veranschaulichung!

### Rabatt-Code einlösen

Hier wurde bei der Bezahlung der Online-Buchung erfolgreich ein Rabatt eingelöst:

<ImageCaption
    src="/standorte-preise-tab/grafik6.png"
    alt="Rabatt einlösen"
    caption="Rabatt einlösen"
/>

---

Bezahlung am Terminal mit Westfield Loyalty Service:

<ImageCaption
    src="/standorte-preise-tab/grafik7.png"
    alt="Terminal mit Westfield Loyalty Service"
    caption="Terminal mit Westfield Loyalty Service"
/>

---

Einlösen eines Rabatts mit Code.

Einfach auf den Button "Rabatt-Code?" klicken, dann kann der Code eingegeben werden.

Zuerst auf “Rabatt-Code?” klicken…
<ImageCaption
    src="/standorte-preise-tab/grafik8.png"
    alt="Rabatt-Code Auswahl"
    caption="Rabatt-Code Auswahl"
/>


… dann den Code eingeben.
<ImageCaption
    src="/standorte-preise-tab/grafik9.png"
    alt="Rabatt-Code Eingabe"
    caption="Rabatt-Code Eingabe"
/>
