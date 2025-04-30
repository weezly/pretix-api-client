# **pretix API Dokumentation (Version 2025.4.0.dev0)**

## Inhaltsverzeichnis

1. [Einleitung](#einleitung)
2. [Authentifizierung](#authentifizierung)
3. [Ratenbegrenzung der API](#ratenbegrenzung-der-api)
4. [API-Ressourcen](#api-ressourcen)
   - [Veranstaltungen](#veranstaltungen)
   - [Artikel](#artikel)
   - [Artikelvarianten](#artikelvarianten)
   - [Fragen](#fragen)
   - [Frageoptionen](#frageoptionen)
   - [Quoten](#quoten)
   - [Sitzpläne](#sitzpläne)
   - [Bestellungen](#bestellungen)
   - [Gutscheine](#gutscheine)
   - [Rabatte](#rabatte)
   - [Geschenkkarten](#geschenkkarten)
   - [Vertriebskanäle](#vertriebskanäle)
   - [Warteliste](#warteliste)
   - [Check-in-Listen](#check-in-listen)
   - [Check-ins](#check-ins)
   - [Mitgliedschaftstypen](#mitgliedschaftstypen)
   - [Mitgliedschaften](#mitgliedschaften)
   - [Wiederverwendbare Medien](#wiederverwendbare-medien)
   - [Warenkörbe](#warenkörbe)
   - [Teams](#teams)
   - [Geräte](#geräte)
   - [Datenexporteure](#datenexporteure)
   - [Geplante Exporte](#geplante-exporte)
   - [Datenvernichter (Shredders)](#datenvernichter-shredders)
   - [Banküberweisungen](#banküberweisungen)
   - [PDF-Ticketausgabe](#pdf-ticketausgabe)
   - [Ausweise (Badges)](#ausweise-badges)
   - [Geplante E-Mail-Regeln](#geplante-e-mail-regeln)
   - [Automatische Check-in-Regeln](#automatische-check-in-regeln)
   - [Kampagnen](#kampagnen)
   - [Zertifikate](#zertifikate)
   - [Digitaler Inhalt](#digitaler-inhalt)
   - [Aussteller](#aussteller)
   - [Importierte Geheimnisse](#importierte-geheimnisse)
   - [Versandmethoden](#versandmethoden)
   - [Abrechnungsrechnungen](#abrechnungsrechnungen)
   - [Reseller-Abrechnungsvariablen](#reseller-abrechnungsvariablen)
5. [API-Nutzungsleitfäden](#api-nutzungsleitfäden)
   - [Lebenszyklus einer Bestellung](#lebenszyklus-einer-bestellung)
   - [Erstellen eines externen Checkout-Prozesses](#erstellen-eines-externen-checkout-prozesses)
   - [Zahlungsabwicklung](#zahlungsabwicklung)
   - [Verwendung von pretix-Zahlungsanbietern](#verwendung-von-pretix-zahlungsanbietern)
   - [Optionale Warenkorbreservierungen](#optionale-warenkorbreservierungen)

---

## 1. Einleitung

Diese Dokumentation beschreibt die REST API von pretix (Version 2025.4.0.dev0). Sie ermöglicht es Entwicklern, pretix-Funktionen in ihre eigenen Anwendungen zu integrieren und Daten programmatisch abzurufen und zu verwalten.

---

## 2. Authentifizierung

Für den Zugriff auf die meisten Endpunkte der pretix-API ist eine Authentifizierung erforderlich. Es gibt verschiedene Authentifizierungsmethoden:

- **API-Token**: Ein statisches Token, das im Backend generiert werden kann. Dieses Token wird im `Authorization`-Header als `Token <your_token>` übergeben.
- **OAuth 2.0**: Für Anwendungen, die im Namen von pretix-Benutzern agieren müssen, wird OAuth 2.0 empfohlen.
- **Geräteauthentifizierung**: Für Check-in-Geräte oder ähnliche Anwendungen kann eine spezielle Geräteauthentifizierung verwendet werden.
- **Session-Authentifizierung**: Diese Methode ist primär für browserbasierte Interaktionen gedacht und für den direkten externen API-Zugriff nicht offiziell unterstützt.

---

## 3. Ratenbegrenzung der API

Die pretix-API ist ratenbegrenzt, um Missbrauch zu verhindern und die Stabilität des Dienstes zu gewährleisten. Wenn Sie die zulässigen Grenzwerte überschreiten, antwortet die API mit dem HTTP-Statuscode `429 Too Many Requests`.

### Aktuelle Ratenbegrenzungen:

- **Geräteauthentifizierung**: 360 Anfragen pro Minute pro Gerät.
- **Tokenbasierte Authentifizierung**: 360 Anfragen pro Minute pro Organisator-Account.
- **OAuth-Authentifizierung**: 360 Anfragen pro Minute pro Kombination aus Organisator und OAuth-Anwendung.

### Umgang mit Ratenbegrenzungen:

1. **Warten**: Warten Sie eine angemessene Zeit, bevor Sie weitere Anfragen senden.
2. **Retry-Mechanismen implementieren**: Verwenden Sie Logik wie exponentielles Backoff.
3. **Effiziente API-Nutzung**: Minimieren Sie die Anzahl der benötigten Anfragen.

---

## 4. API-Ressourcen

### Veranstaltungen

Eine Veranstaltung repräsentiert ein Event, für das Tickets verkauft werden. Die Veranstaltungsressource enthält Felder wie:

- `slug` (String): Eindeutiger, für Menschen lesbarer Name.
- `name` (Object): Mehrsprachiger Name der Veranstaltung.
- `currency` (String): Währung der Ticketpreise (ISO 4217 Format).
- `date_from` (Date): Startdatum der Veranstaltung.

**Endpunkte:**

- `GET /api/v1/organizers/(organizer)/events/`: Liste aller Veranstaltungen.
- `POST /api/v1/organizers/(organizer)/events/`: Neue Veranstaltung erstellen.

---

### Artikel

Artikel repräsentieren Produkte oder Tickets, die bei einer Veranstaltung verkauft werden können.

- `id` (Integer): Interne ID des Artikels.
- `name` (Object): Mehrsprachiger Name des Artikels.
- `default_price` (Decimal): Standardpreis des Artikels.

**Endpunkte:**

- `GET /api/v1/organizers/(organizer)/events/(event)/items/`: Liste aller Artikel.
- `POST /api/v1/organizers/(organizer)/events/(event)/items/`: Neuen Artikel erstellen.

---

### Artikelvarianten

Artikelvarianten ermöglichen es, verschiedene Ausprägungen eines Artikels anzubieten (z. B. Größen oder Farben).

- `id` (Integer): Interne ID der Variante.
- `name` (Object): Mehrsprachiger Name der Variante.

**Endpunkte:**

- `GET /api/v1/organizers/(organizer)/events/(event)/items/(item_id)/variations/`: Liste aller Varianten.

---

### Fragen

Fragen ermöglichen es, zusätzliche Informationen von Teilnehmern während des Bestellprozesses zu erfassen.

- `id` (Integer): Interne ID der Frage.
- `question` (Object): Mehrsprachiger Fragetext.

**Endpunkte:**

- `GET /api/v1/organizers/(organizer)/events/(event)/questions/`: Liste aller Fragen.

---

### Gutscheine

Gutscheine ermöglichen Rabatte auf Bestellungen.

- `code` (String): Eindeutiger Code des Gutscheins.
- `value` (Decimal): Wert des Gutscheins.

**Endpunkte:**

- `GET /api/v1/organizers/(organizer)/events/(event)/vouchers/`: Liste aller Gutscheine.

---

## 5. API-Nutzungsleitfäden

### Lebenszyklus einer Bestellung

[Inhalt der Seite /dev/api/guides/order_lifecycle.html]

### Erstellen eines externen Checkout-Prozesses

[Inhalt der Seite /dev/api/guides/custom_checkout.html]

---

*Hinweis: Für weitere Details zu den Ressourcen und Endpunkten, siehe die vollständige Dokumentation.*
