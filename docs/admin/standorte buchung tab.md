# Standorte/Buchung Tab

<ImageCaption
    src="/standorte-buchung-tab/grafik.png"
    alt="Übersicht Standorte Buchung (Teil 1)"
    caption="Übersicht Standorte Buchung (Teil 1)"
/>
<ImageCaption
    src="/standorte-buchung-tab/grafik1.png"
    alt="Übersicht Standorte Buchung (Teil 2)"
    caption="Übersicht Standorte Buchung (Teil 2)"
/>

## Buchung aktivieren

Wenn aktiviert, kann man am Cube ein Fach buchen.

Wenn nicht aktiviert, dann erfolgt die Buchung mittels Eingabe der Mobilnummer am Terminal und der Benutzer bekommt den Link für die Online-Buchung via SMS. In diesem Fall können die Menüpunkte “Fächer”, “Preise” und “Zugang” nicht bearbeitet werden, sie sind ausgegraut.

## Belegungen automatisch beenden

Ist nur aktiv, wenn [Buchung aktivieren](#buchung-aktivieren) aktiv ist.

Die aktuellen Belegungen sind von einer Umstellung nicht betroffen, nur diejenigen, die nach der Umstellung erfolgen. Was für die jeweilige Belegung gilt, sieht man in den [Belegungsdetails](https://www.notion.so/Belegung-Detail-262add09e873804ba051d5a231f1fd02?pvs=21).

- *x h nach Buchungsende:* hier kann in Stunden angegeben werden, wann die Belegung von einem belegten Fach automatisch beendet werden soll, wenn die Gegenstände nicht abgeholt werden.
- *x h vor Beginn der nächsten Zugangszeit:* wenn eine Öffnungszeit eingetragen ist, dann kann in Stunden angegeben werden, wie lange vorher Belegungen automatisch beendet werden sollen.
- *täglich um HH:MM wenn die Buchung länger als x h abgelaufen ist:* es werden die Belegungen automatisch zu einer fix definierten Uhrzeit beendet, wenn die Buchung länger als die eingetragenen Stunden abgelaufen ist.

## Kunden können das automatische Beenden Ihrer Belegungen verhindern

Ist nur aktiv, wenn auch [Buchung aktivieren](#buchung-aktivieren) und [Belegungen automatisch beenden](#belegungen-automatisch-beenden) aktiv sind.

x h vor Buchungsende: hier kann in Stunden angegeben werden, wann der Kunde daran erinnert werden soll, dass die Buchung des belegten Faches endet. Je nach hinterlegten Daten erfolgt die Erinnerung via E-Mail und/oder SMS, die einen Link beinhaltet. Mit Klick auf den Link wird die automatische Beendigung der Belegung deaktiviert und somit das Fach nach Buchungsende nicht automatisch frei gegeben. Der Kunde wird vor dem Zugriff auf das Fach nochmal erinnert, die Buchung zu verlängern. 

<ImageCaption
    src="/standorte-buchung-tab/grafik2.png"
    alt="Buchung verlängern am Terminal"
    caption="Buchung verlängern am Terminal"
/>

<ImageCaption
    src="/standorte-buchung-tab/grafik3.png"
    alt="Anzeige des Links und QR-Codes zum Verlängern der Buchung"
    caption="Anzeige des Links und QR-Codes zum Verlängern der Buchung"
/>

## Zurückgeben von Fächern erlauben

Wenn aktiviert, hat der Kunde nach Eingabe des Buchungscodes die Möglichkeiten Fach zu öffnen oder (statt zu öffnen) zurückzugeben.

<ImageCaption
    src="/standorte-buchung-tab/grafik4.png"
    alt="Terminal: Fach öffnen oder zurückgeben"
    caption="Terminal: Fach öffnen oder zurückgeben"
/>

Nach der Zurückgabe des Faches ist eine Wiederherstellung des Faches möglich.

<ImageCaption
    src="/standorte-buchung-tab/grafik5.png"
    alt="Terminal: Wiederherstellung des Faches"
    caption="Terminal: Wiederherstellung des Faches"
/>

## Fach zurückgeben abfragen

Ist nur aktiv, wenn auch [Zurückgeben von Fächern erlauben](#zurückgeben-von-fächern-erlauben) aktiv ist.

Wenn Kunden das Fach öffnen, werden die Möglichkeiten angezeigt Fach "Öffnen und zurückgeben" oder "Öffnen und behalten".
Damit kann das Fach vor Ende der Buchung zurückgegeben werden oder behalten werden.

<ImageCaption
    src="/standorte-buchung-tab/grafik6.png"
    alt="Terminal: Öffnen und zurückgeben oder behalten"
    caption="Terminal: Öffnen und zurückgeben oder behalten"
/>

## Buchung nach der 2. Öffnung beenden

Für das "Simplified Layout". Beim Buchen wird darauf hingewiesen, dass das Fach nur einmal geöffnet werden darf.

Voraussetzungen für die Anzeige des "Simplified Layout":

- “Einstellungen/Vorausbuchung aktivieren” muss deaktiviert sein
- “Einstellungen/Standortüberprüfung deaktivieren” muss aktiviert sein
- Es darf nur eine Fachgröße geben

<ImageCaption
    src="/standorte-buchung-tab/grafik7.png"
    alt="Hinweis nur 1x öffnen möglich"
    caption="Hinweis nur 1x öffnen möglich"
/>

## Dokumente

Nur aktiv, wenn auch [Buchung aktivieren](#buchung-aktivieren) aktiv ist.

Hier können jeweils ein Link zu den *Allgemeinen Geschäftsbedingungen* und der *Datenschutzerkärung* eingetragen werden. Der Link muss öffentlich zugänglich sein. Wahlweise kann angegeben werden, ob die Verlinkung in den Emails angezeigt werden soll.

<ImageCaption
    src="/standorte-buchung-tab/grafik8.png"
    alt="VBeispiel wie die Verlinkung in der Email aussieht"
    caption="Beispiel wie die Verlinkung in der Email aussieht"
/>

Die Verlinkung wird auch am Terminal (am Cube) und online angezeigt und die AGB’s bzw. Datenschutzerklärung muss akzeptiert werden, damit ein Fach gebucht werden kann.

## Buchung am Cube

Nur aktiv, wenn [Buchung aktivieren](#buchung-aktivieren) aktiv ist.

Wenn die Fächer kostenpflichtig sind, dann muss der Cube auch über ein Payment Terminal verfügen, damit am Cube gebucht werden kann.

### Der Buchungscode kann angefordert werden per E-Mail, SMS und/oder Anzeige

Sie können festlegen, wie der Buchungscode an Kunden übermittelt wird. Kunden können dann aus den aktivierten Optionen (E-Mail, SMS oder Anzeige) ihre bevorzugte Methode wählen.

Die Option "Anzeige" bedeutet, dass der Kunde den Buchungscode nur einmal am Terminal sieht, nachdem er die anfangs verpixelte Grafik angeklickt hat. Der Kunde wird dabei aufgefordert, den Code zu notieren oder zu fotografieren.

Diese Option sollte mit Vorsicht aktiviert werden, da sie zu häufigeren Supportanfragen führen kann, wenn Kunden den Code vergessen oder verlieren. Zudem kann der Support in diesem Fall weder den Kunden anhand seiner Daten identifizieren noch den Code erneut an seine Kontaktdaten senden.

### Maximaler Zahlungsbetrag

Falls dieser Maximalbetrag bei der Buchung der Fächer überschritten wird, ist keine Buchung möglich.

In Österreich gibt es eine Registrierkassenpflicht. Wenn der Betrag über 25 Euro hinausgeht, muss ein Beleg ausgegeben werden und dieser digital signiert werden.

<ImageCaption
    src="/standorte-buchung-tab/grafik9.png"    
    alt="Terminal: Maximaler Zahlungsbetrag"
    caption="Terminal: Maximaler Zahlungsbetrag"
/>

## Buchung Online

Ist nur aktiv, wenn auch [Buchung aktivieren](#buchung-aktivieren) aktiv ist. 

### Online-Buchung ist verfügbar in diesem Zeitraum

Hier kann der Zeitraum ("von" und "bis" Datum) festgelegt werden, in dem Online-Buchungen möglich sind.

Wenn außerhalb dieses Zeitraums, wird der Standort nicht mehr in der Auswahlliste der Online-Buchung angeboten.

<ImageCaption
    src="/standorte-buchung-tab/grafik10.png"    
    alt="Auswahlliste der Standorte bei Online-Buchung"
    caption="Auswahlliste der Standorte bei Online-Buchung"
/>

### Geben Sie an, welche persönlichen Daten bei einer Online-Buchung abgefragt werden

Hier kann eingestellt werden, ob Name, Email und Mobilnummer jeweils optional, zwingend oder gar nicht angegeben werden muss.

### Basis-URL für Online-Buchung

Falls die URL von der Standard-URL abweicht, kann diese hier eingetragen werden.

### Unbezahlte Buchung wurde storniert nach (Minuten)

Wenn gebucht aber nicht bezahlt wurde, dann wird die Buchung nach den eingetragenen Minuten storniert. Falls nichts eingetragen ist, dann passiert dies nach 60 Minuten.

### Kunden an ausstehende Zahlung erinnern

Erinnerungs E-Mail wird automatisch verschickt nach der halben Zeit, die bei [Unbezahlte Buchung wurde storniert nach (Minuten)](#unbezahlte-buchung-wurde-storniert-nach-minuten)  eingetragen ist. 

Falls nichts eingetragen ist, dann erfolgt die Erinnerung nach 30 Minuten.

### Kunden über automatische Stornierung informieren

Wenn [Unbezahlte Buchung wurde storniert nach (Minuten)](#unbezahlte-buchung-wurde-storniert-nach-minuten)  aktiv ist, dann werden die Kunden per Email informiert, dass die unbezahlte Buchung storniert wurde, zum Zeitpunkt des Stornos.

### Standortüberprüfung über Cube QR-Code aktivieren

Wichtig, wenn für einen Standort mehrere Cubes verwendet werden.

<ImageCaption
    src="/standorte-buchung-tab/grafik11.png" 
    alt="Buchung am Handy"
    caption="Buchung am Handy"
/>

<ImageCaption
    src="/standorte-buchung-tab/grafik12.png"
    alt="Buchung am Handy - Standortcode"
    caption="Buchung am Handy - Standortcode"
/>
