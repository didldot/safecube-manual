# Standorte/Buchung Tab

![grafik.png](assets/standorte%20buchung%20tab/grafik.png)

![grafik.png](assets/standorte%20buchung%20tab/grafik%201.png)

# Buchung aktivieren

Wenn aktiviert, kann man am Cube ein Fach buchen.

Wenn nicht aktiviert, dann erfolgt die Buchung mittels Eingabe der Mobilnummer am Terminal und der Benutzer bekommt den Link für die Online-Buchung via SMS. In diesem Fall können die Menüpunkte “Fächer”, “Preise” und “Zugang” nicht bearbeitet werden, sie sind ausgegraut.

# Belegungen automatisch beenden

Ist nur aktiv, wenn [Buchung aktivieren](https://www.notion.so/Buchung-aktivieren-25cadd09e8738043a1fbd94c5a930be2?pvs=21) aktiv ist.

Die aktuellen Belegungen sind von einer Umstellung nicht betroffen, nur diejenigen, die nach der Umstellung erfolgen. Was für die jeweilige Belegung gilt, sieht man in den [Belegungsdetails](https://www.notion.so/Belegung-Detail-262add09e873804ba051d5a231f1fd02?pvs=21).

- *x h nach Buchungsende:* hier kann in Stunden angegeben werden, wann die Belegung von einem belegten Fach automatisch beendet werden soll, wenn die Gegenstände nicht abgeholt werden.
- *x h vor Beginn der nächsten Zugangszeit:* wenn eine Öffnungszeit eingetragen ist, dann kann in Stunden angegeben werden, wie lange vorher Belegungen automatisch beendet werden sollen.
- *täglich um HH:MM wenn die Buchung länger als x h abgelaufen ist:* es werden die Belegungen automatisch zu einer fix definierten Uhrzeit beendet, wenn die Buchung länger als die eingetragenen Stunden abgelaufen ist.

# Kunden können das automatische Beenden Ihrer Belegungen verhindern

Ist nur aktiv, wenn auch [Buchung aktivieren](https://www.notion.so/Buchung-aktivieren-25cadd09e8738043a1fbd94c5a930be2?pvs=21) und [Belegungen automatisch beenden](https://www.notion.so/Belegungen-automatisch-beenden-25cadd09e873807b8d22f0fd221e96fd?pvs=21) aktiv sind.

x h vor Buchungsende: hier kann in Stunden angegeben werden, wann der Kunde daran erinnert werden soll, dass die Buchung des belegten Faches endet. Je nach hinterlegten Daten erfolgt die Erinnerung via E-Mail und/oder SMS, die einen Link beinhaltet. Mit Klick auf den Link wird die automatische Beendigung der Belegung deaktiviert und somit das Fach nach Buchungsende nicht automatisch frei gegeben. Der Kunde wird vor dem Zugriff auf das Fach nochmal erinnert, die Buchung zu verlängern. 

![grafik.png](assets/standorte%20buchung%20tab/grafik%202.png)

![grafik.png](assets/standorte%20buchung%20tab/grafik%203.png)

# Zurückgeben von Fächern erlauben

Wenn aktiviert, hat der Kunde nach Eingabe des Buchungscodes die Möglichkeiten Fach zu öffnen oder (statt zu öffnen) zurückzugeben.

![grafik.png](assets/standorte%20buchung%20tab/grafik%204.png)

Nach der Zurückgabe des Faches ist eine Wiederherstellung des Faches möglich.

![grafik.png](assets/standorte%20buchung%20tab/grafik%205.png)

# Fach zurückgeben abfragen

Ist nur aktiv, wenn auch [Zurückgeben von Fächern erlauben](https://www.notion.so/Zur-ckgeben-von-F-chern-erlauben-25cadd09e8738018b521ed95815df204?pvs=21) aktiv ist.

Wenn Kunden das Fach öffnen, werden die Möglichkeiten angezeigt Fach “Öffnen und zurückgeben” oder “Öffnen und behalten”.  Damit kann das Fach vor Ende der Buchung zurückgegeben werden oder behalten werden.

![grafik.png](assets/standorte%20buchung%20tab/grafik%206.png)

# Buchung nach der 2. Öffnung beenden

Für das "Simplified Layout" von Balzclub. Beim Buchen wird darauf hingewiesen, dass das Fach nur einmal geöffnet werden darf.

Voraussetzungen für die Anzeige des "Simplified Layout":

- “Einstellungen/Vorausbuchung aktivieren” muss deaktiviert sein
- “Einstellungen/Standortüberprüfung deaktivieren” muss aktiviert sein
- Es darf nur eine Fachgröße geben

![grafik.png](assets/standorte%20buchung%20tab/grafik%207.png)

# Dokumente

Nur aktiv, wenn auch [Buchung aktivieren](https://www.notion.so/Buchung-aktivieren-25cadd09e8738043a1fbd94c5a930be2?pvs=21) aktiv ist.

Hier können jeweils ein Link zu den *Allgemeinen Geschäftsbedingungen* und der *Datenschutzerkärung* eingetragen werden. Der Link muss öffentlich zugänglich sein. Wahlweise kann angegeben werden, ob die Verlinkung in den Emails angezeigt werden soll.

![Beispiel wie die Verlinkung in der Email aussieht](assets/standorte%20buchung%20tab/grafik%208.png)

Beispiel wie die Verlinkung in der Email aussieht

Die Verlinkung wird auch am Terminal (am Cube) und online angezeigt und die AGB’s bzw. Datenschutzerklärung muss akzeptiert werden, damit ein Fach gebucht werden kann.

# Buchung am Cube

Nur aktiv, wenn [Buchung aktivieren](https://www.notion.so/Buchung-aktivieren-25cadd09e8738043a1fbd94c5a930be2?pvs=21) aktiv ist.

Wenn die Fächer kostenpflichtig sind, dann muss der Cube auch über ein Payment Terminal verfügen, damit am Cube gebucht werden kann.

## Der Buchungscode kann angefordert werden per Email, SMS und/oder Anzeige

Sie können festlegen, wie der Buchungscode an Kunden übermittelt wird. Kunden können dann aus den aktivierten Optionen (E-Mail, SMS oder Anzeige) ihre bevorzugte Methode wählen.

Die Option "Anzeige" bedeutet, dass der Kunde den Buchungscode nur einmal am Terminal sieht, nachdem er die anfangs verpixelte Grafik angeklickt hat. Der Kunde wird dabei aufgefordert, den Code zu notieren oder zu fotografieren.

Diese Option sollte mit Vorsicht aktiviert werden, da sie zu häufigeren Supportanfragen führen kann, wenn Kunden den Code vergessen oder verlieren. Zudem kann der Support in diesem Fall weder den Kunden anhand seiner Daten identifizieren noch den Code erneut an seine Kontaktdaten senden.

## Maximaler Zahlungsbetrag

Falls dieser Maximalbetrag bei der Buchung der Fächer überschritten wird, ist keine Buchung möglich.

In Österreich gibt es eine Registrierkassenpflicht. Wenn der Betrag über 25 Euro hinausgeht, muss ein Beleg ausgegeben werden und dieser digital signiert werden.

![grafik.png](assets/standorte%20buchung%20tab/grafik%209.png)

# Buchung Online

Ist nur aktiv, wenn auch [Buchung aktivieren](https://www.notion.so/Buchung-aktivieren-25cadd09e8738043a1fbd94c5a930be2?pvs=21) aktiv ist. 

## Online-Buchung ist verfügbar in diesem Zeitraum

Hier kann der Zeitraum ("von" und "bis" Datum) festgelegt werden, in dem Online-Buchungen möglich sind.

Wenn außerhalb dieses Zeitraums, wird der Standort nicht mehr in der Auswahlliste der Online-Buchung angeboten.

![grafik.png](assets/standorte%20buchung%20tab/grafik%2010.png)

## Geben Sie an, welche persönlichen Daten bei einer Online-Buchung abgefragt werden

Hier kann eingestellt werden, ob Name, Email und Mobilnummer jeweils optional, zwingend oder gar nicht angegeben werden muss.

## Basis-URL für Online-Buchung

Falls die URL von der Standard-URL abweicht, kann diese hier eingetragen werden.

## Unbezahlte Buchung wurde stornieren nach (Minuten)

Wenn gebucht aber nicht bezahlt wurde, dann wird die Buchung nach den eingetragenen Minuten storniert. Falls nichts eingetragen ist, dann passiert dies nach 60 Minuten.

## Kunden an ausstehende Zahlung erinnern

Erinnerungs E-Mail wird automatisch verschickt nach der halben Zeit, die bei [Unbezahlte Buchung wurde stornieren nach (Minuten)](https://www.notion.so/Unbezahlte-Buchung-wurde-stornieren-nach-Minuten-25cadd09e873800192adfb6aa266257b?pvs=21)  eingetragen ist. 

Falls nichts eingetragen ist, dann erfolgt die Erinnerung nach 30 Minuten.

## Kunden über automatische Stornierung informieren

Wenn [Unbezahlte Buchung wurde stornieren nach (Minuten)](https://www.notion.so/Unbezahlte-Buchung-wurde-stornieren-nach-Minuten-25cadd09e873800192adfb6aa266257b?pvs=21)  aktiv ist, dann werden die Kunden per Email informiert, dass die unbezahlte Buchung storniert wurde, zum Zeitpunkt des Stornos.

## Standortüberprüfung über Cube QR-Code aktivieren

Wichtig, wenn für einen Standort mehrere Cubes verwendet werden.

![grafik.png](assets/standorte%20buchung%20tab/grafik%2011.png)

![grafik.png](assets/standorte%20buchung%20tab/grafik%2012.png)