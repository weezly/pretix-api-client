# PretixApiClient

Der `PretixApiClient` ist eine TypeScript-Klasse, die die Interaktion mit der Pretix-API erleichtert. Sie bietet Methoden für CRUD-Operationen auf verschiedenen Ressourcen wie Veranstaltungen, Artikel, Bestellungen, Gutscheine und mehr.

## Installation

```bash
npm install pretix-api-client
```
## Verwendung

```typescript
import PretixApiClient from 'pretix-api-client';

const client = new PretixApiClient('https://your-pretix-instance/api', 'your-api-token');

// Beispiel: Veranstaltungen abrufen
const events = await client.getEvents('organizer-slug');
console.log(events);
```
## Ressourcen und Methoden

### Veranstaltungen

#### `getEvents(organizerSlug: string): Promise<Event[]>`
Ruft eine Liste von Veranstaltungen für den angegebenen Organisator ab.
#### `getEvent(organizerSlug: string, eventSlug: string): Promise<Event>`
Ruft eine bestimmte Veranstaltung für den angegebenen Organisator ab.
#### `createEvent(organizerSlug: string, eventData: Event): Promise<Event>`
Erstellt eine neue Veranstaltung für den angegebenen Organisator.
#### `updateEvent(organizerSlug: string, eventSlug: string, eventData: Event): Promise<Event>`
Aktualisiert eine bestehende Veranstaltung für den angegebenen Organisator.
#### `deleteEvent(organizerSlug: string, eventSlug: string): Promise<void>`
Löscht eine Veranstaltung für den angegebenen Organisator.

## Artikel 
#### `getItems(organizerSlug: string, eventSlug: string): Promise<Item[]>`
Ruft eine Liste von Artikeln für die angegebene Veranstaltung ab.
#### `getItem(organizerSlug: string, eventSlug: string, itemId: number): Promise<Item>`
Ruft einen bestimmten Artikel für die angegebene Veranstaltung ab.
#### `createItem(organizerSlug: string, eventSlug: string, itemData: Item): Promise<Item>`
Erstellt einen neuen Artikel für die angegebene Veranstaltung.
#### `updateItem(organizerSlug: string, eventSlug: string, itemId: number, itemData: Item): Promise<Item>`
Aktualisiert einen bestehenden Artikel für die angegebene Veranstaltung.
#### `deleteItem(organizerSlug: string, eventSlug: string, itemId: number): Promise<void>`
Löscht einen Artikel für die angegebene Veranstaltung.

## Artikelvarianten
#### `getItemVariations(organizerSlug: string, eventSlug: string, itemId: number): Promise<ItemVariation[]>`
Ruft eine Liste von Artikelvarianten für den angegebenen Artikel ab.
#### `getItemVariation(organizerSlug: string, eventSlug: string, itemId: number, variationId: number): Promise<ItemVariation>`
Ruft eine bestimmte Artikelvariante für den angegebenen Artikel ab.
#### `createItemVariation(organizerSlug: string, eventSlug: string, itemId: number, variationData: ItemVariation): Promise<ItemVariation>`
Erstellt eine neue Artikelvariante für den angegebenen Artikel.
#### `updateItemVariation(organizerSlug: string, eventSlug: string, itemId: number, variationId: number, variationData: ItemVariation): Promise<ItemVariation>`
Aktualisiert eine bestehende Artikelvariante für den angegebenen Artikel.
#### `deleteItemVariation(organizerSlug: string, eventSlug: string, itemId: number, variationId: number): Promise<void>`

## Bestellungen

#### `getOrders(organizerSlug: string, eventSlug: string): Promise<Order[]>`
Ruft eine Liste von Bestellungen für die angegebene Veranstaltung ab.
#### `getOrder(organizerSlug: string, eventSlug: string, orderCode: string): Promise<Order>`
Ruft eine bestimmte Bestellung für die angegebene Veranstaltung ab.
#### `createOrder(organizerSlug: string, eventSlug: string, orderData: Order): Promise<Order>`
Erstellt eine neue Bestellung für die angegebene Veranstaltung.
#### `updateOrder(organizerSlug: string, eventSlug: string, orderCode: string, orderData: Order): Promise<Order>`
Aktualisiert eine bestehende Bestellung für die angegebene Veranstaltung.
#### `deleteOrder(organizerSlug: string, eventSlug: string, orderCode: string): Promise<void>`
Löscht eine Bestellung für die angegebene Veranstaltung.

## Gutscheine

#### `getVouchers(organizerSlug: string, eventSlug: string): Promise<Voucher[]>`
Ruft eine Liste von Gutscheinen für die angegebene Veranstaltung ab.	
#### `getVoucher(organizerSlug: string, eventSlug: string, voucherCode: string): Promise<Voucher>`
Ruft einen bestimmten Gutschein für die angegebene Veranstaltung ab.
#### `createVoucher(organizerSlug: string, eventSlug: string, voucherData: Voucher): Promise<Voucher>`
Erstellt einen neuen Gutschein für die angegebene Veranstaltung.
#### `updateVoucher(organizerSlug: string, eventSlug: string, voucherCode: string, voucherData: Voucher): Promise<Voucher>`
Aktualisiert einen bestehenden Gutschein für die angegebene Veranstaltung.
#### `deleteVoucher(organizerSlug: string, eventSlug: string, voucherCode: string): Promise<void>`
Löscht einen Gutschein für die angegebene Veranstaltung.

## Rabatte

#### `getDiscounts(organizerSlug: string, eventSlug: string): Promise<Discount[]>`
Ruft eine Liste von Rabatten für die angegebene Veranstaltung ab.
#### `getDiscount(organizerSlug: string, eventSlug: string, discountCode: string): Promise<Discount>`
Ruft einen bestimmten Rabatt für die angegebene Veranstaltung ab.
#### `createDiscount(organizerSlug: string, eventSlug: string, discountData: Discount): Promise<Discount>`
Erstellt einen neuen Rabatt für die angegebene Veranstaltung.
#### `updateDiscount(organizerSlug: string, eventSlug: string, discountCode: string, discountData: Discount): Promise<Discount>`
Aktualisiert einen bestehenden Rabatt für die angegebene Veranstaltung.
#### `deleteDiscount(organizerSlug: string, eventSlug: string, discountCode: string): Promise<void>`
Löscht einen Rabatt für die angegebene Veranstaltung.

## Sitzpläne

#### `getSeatingPlans(organizerSlug: string, eventSlug: string): Promise<SeatingPlan[]>`
Ruft eine Liste von Sitzplänen für die angegebene Veranstaltung ab.
#### `getSeatingPlan(organizerSlug: string, eventSlug: string, seatingPlanId: number): Promise<SeatingPlan>`
Ruft einen bestimmten Sitzplan für die angegebene Veranstaltung ab.
#### `createSeatingPlan(organizerSlug: string, eventSlug: string, seatingPlanData: SeatingPlan): Promise<SeatingPlan>`
Erstellt einen neuen Sitzplan für die angegebene Veranstaltung.
#### `updateSeatingPlan(organizerSlug: string, eventSlug: string, seatingPlanId: number, seatingPlanData: SeatingPlan): Promise<SeatingPlan>`
Aktualisiert einen bestehenden Sitzplan für die angegebene Veranstaltung.
#### `deleteSeatingPlan(organizerSlug: string, eventSlug: string, seatingPlanId: number): Promise<void>`
Löscht einen Sitzplan für die angegebene Veranstaltung.

## Check-In-Listen

#### `getCheckinLists(organizerSlug: string, eventSlug: string): Promise<CheckinList[]>`
Ruft eine Liste von Check-In-Listen für die angegebene Veranstaltung ab.
#### `getCheckinList(organizerSlug: string, eventSlug: string, checkinListId: number): Promise<CheckinList>`
Ruft eine bestimmte Check-In-Liste für die angegebene Veranstaltung ab.
#### `createCheckinList(organizerSlug: string, eventSlug: string, checkinListData: CheckinList): Promise<CheckinList>`
Erstellt eine neue Check-In-Liste für die angegebene Veranstaltung.
#### `updateCheckinList(organizerSlug: string, eventSlug: string, checkinListId: number, checkinListData: CheckinList): Promise<CheckinList>`
Aktualisiert eine bestehende Check-In-Liste für die angegebene Veranstaltung.
#### `deleteCheckinList(organizerSlug: string, eventSlug: string, checkinListId: number): Promise<void>`
Löscht eine Check-In-Liste für die angegebene Veranstaltung.

## Medien

#### `getMedia(organizerSlug: string, eventSlug: string): Promise<Media[]>`
Ruft eine Liste von Medien für die angegebene Veranstaltung ab.
#### 'uploadMedia(organizerSlug: string, eventSlug: string, file: File): Promise<Media>'
Lädt eine Datei hoch und erstellt ein neues Medium für die angegebene Veranstaltung.
#### `deleteMedia(organizerSlug: string, eventSlug: string, mediaId: number): Promise<void>`

## Teams

#### `getTeams(organizerSlug: string): Promise<Team[]>`
Ruft eine Liste von Teams für den angegebenen Organisator ab.
#### `getTeam(organizerSlug: string, teamId: number): Promise<Team>`
Ruft ein bestimmtes Team für den angegebenen Organisator ab.
#### `createTeam(organizerSlug: string, teamData: Team): Promise<Team>`
Erstellt ein neues Team für den angegebenen Organisator.
#### `updateTeam(organizerSlug: string, teamId: number, teamData: Team): Promise<Team>`
Aktualisiert ein bestehendes Team für den angegebenen Organisator.
#### `deleteTeam(organizerSlug: string, teamId: number): Promise<void>`
Löscht ein Team für den angegebenen Organisator.

## Datenexporte

#### `getDataExporters(organizerSlug: string, eventSlug: string): Promise<DataExporter[]>`
Ruft eine Liste von Datenexporteuren für die angegebene Veranstaltung ab.
#### `createDataExport(organizerSlug: string, eventSlug: string, exportData: DataExportDetails): Promise<DataExport>`
Erstellt einen neuen Datenexporteur für die angegebene Veranstaltung.
#### `getDataExport(organizerSlug: string, eventSlug: string, exportId: number): Promise<DataExport>`
Ruft einen bestimmten Datenexporteur für die angegebene Veranstaltung ab.

## Geplante Exporte

#### `getScheduledExports(organizerSlug: string, eventSlug: string): Promise<ScheduledExport[]>`
Ruft eine Liste von geplanten Exporten für die angegebene Veranstaltung ab.
#### `createScheduledExport(organizerSlug: string, eventSlug: string, exportData: ScheduledExport): Promise<ScheduledExport>`
Erstellt einen neuen geplanten Exporteur für die angegebene Veranstaltung.
#### `updateScheduledExport(organizerSlug: string, eventSlug: string, exportId: number, exportData: Partial<ScheduledExportDetails>): Promise<ScheduledExport>`
Aktualisiert einen bestehenden geplanten Exporteur für die angegebene Veranstaltung.
#### `deleteScheduledExport(organizerSlug: string, eventSlug: string, exportId: number): Promise<void>`
Löscht einen geplanten Exporteur für die angegebene Veranstaltung.

## Shredder

#### `getShredders(organizerSlug: string, eventSlug: string): Promise<Shredder[]>`
Ruft eine Liste von Shreddern für die angegebene Veranstaltung ab.
#### `executeShredder(organizerSlug: string, eventSlug: string, shredderId: number): Promise<void>`
Führt einen Shredder für die angegebene Veranstaltung aus.

## Banküberweisungen

#### `getBankTransfers(organizerSlug: string, eventSlug: string): Promise<BankTransfer[]>`
Ruft eine Liste von Banküberweisungen für die angegebene Veranstaltung ab.
#### `createBankTransfer(organizerSlug: string, eventSlug: string, transferData: BankTransfer): Promise<BankTransfer>`
Erstellt eine neue Banküberweisung für die angegebene Veranstaltung.
#### `updateBankTransfer(organizerSlug: string, eventSlug: string, transferId: number, transferData: BankTransfer): Promise<BankTransfer>`
Aktualisiert eine bestehende Banküberweisung für die angegebene Veranstaltung.
#### `deleteBankTransfer(organizerSlug: string, eventSlug: string, transferId: number): Promise<void>`
Löscht eine Banküberweisung für die angegebene Veranstaltung.

## PDF-Exporte

#### `getPdfExports(organizerSlug: string, eventSlug: string): Promise<PdfExport[]>`
Ruft eine Liste von PDF-Exporten für die angegebene Veranstaltung ab.
#### `createPdfExport(organizerSlug: string, eventSlug: string, exportData: PdfExport): Promise<PdfExport>`
Erstellt einen neuen PDF-Exporteur für die angegebene Veranstaltung.
#### `getPDFExport(organizerSlug: string, eventSlug: string, exportId: number): Promise<PdfExport>`
Ruft einen bestimmten PDF-Exporteur für die angegebene Veranstaltung ab.

## Ausweise

#### `getBadges(organizerSlug: string, eventSlug: string): Promise<Badge[]>`
Ruft eine Liste von Ausweisen für die angegebene Veranstaltung ab.
#### `createBadge(organizerSlug: string, eventSlug: string, badgeData: Badge): Promise<Badge>`
Erstellt einen neuen Ausweis für die angegebene Veranstaltung.
#### `updateBadge(organizerSlug: string, eventSlug: string, badgeId: number, badgeData: Badge): Promise<Badge>`
Aktualisiert einen bestehenden Ausweis für die angegebene Veranstaltung.
#### `deleteBadge(organizerSlug: string, eventSlug: string, badgeId: number): Promise<void>`
Löscht einen Ausweis für die angegebene Veranstaltung.

