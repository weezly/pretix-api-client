# PretixApiClient

The `PretixApiClient` is a TypeScript class that simplifies interaction with the Pretix API. It provides methods for CRUD operations on various resources such as events, items, orders, vouchers, and more.

## Installation

```bash
npm install pretix-api-client
```

## Usage

```typescript
import PretixApiClient from 'pretix-api-client';

const client = new PretixApiClient('https://your-pretix-instance/api', 'your-api-token');

// Example: Fetching events
const events = await client.getEvents('organizer-slug');
console.log(events);
```

## Resources and Methods

### Events

#### `getEvents(organizerSlug: string): Promise<Event[]>`
Fetches a list of events for the specified organizer.
#### `getEvent(organizerSlug: string, eventSlug: string): Promise<Event>`
Fetches a specific event for the specified organizer.
#### `createEvent(organizerSlug: string, eventData: Event): Promise<Event>`
Creates a new event for the specified organizer.
#### `updateEvent(organizerSlug: string, eventSlug: string, eventData: Event): Promise<Event>`
Updates an existing event for the specified organizer.
#### `deleteEvent(organizerSlug: string, eventSlug: string): Promise<void>`
Deletes an event for the specified organizer.

## Items

#### `getItems(organizerSlug: string, eventSlug: string): Promise<Item[]>`
Fetches a list of items for the specified event.
#### `getItem(organizerSlug: string, eventSlug: string, itemId: number): Promise<Item>`
Fetches a specific item for the specified event.
#### `createItem(organizerSlug: string, eventSlug: string, itemData: Item): Promise<Item>`
Creates a new item for the specified event.
#### `updateItem(organizerSlug: string, eventSlug: string, itemId: number, itemData: Item): Promise<Item>`
Updates an existing item for the specified event.
#### `deleteItem(organizerSlug: string, eventSlug: string, itemId: number): Promise<void>`
Deletes an item for the specified event.

## Item Variations

#### `getItemVariations(organizerSlug: string, eventSlug: string, itemId: number): Promise<ItemVariation[]>`
Fetches a list of item variations for the specified item.
#### `getItemVariation(organizerSlug: string, eventSlug: string, itemId: number, variationId: number): Promise<ItemVariation>`
Fetches a specific item variation for the specified item.
#### `createItemVariation(organizerSlug: string, eventSlug: string, itemId: number, variationData: ItemVariation): Promise<ItemVariation>`
Creates a new item variation for the specified item.
#### `updateItemVariation(organizerSlug: string, eventSlug: string, itemId: number, variationId: number, variationData: ItemVariation): Promise<ItemVariation>`
Updates an existing item variation for the specified item.
#### `deleteItemVariation(organizerSlug: string, eventSlug: string, itemId: number, variationId: number): Promise<void>`
Deletes an item variation for the specified item.

## Orders

#### `getOrders(organizerSlug: string, eventSlug: string): Promise<Order[]>`
Fetches a list of orders for the specified event.
#### `getOrder(organizerSlug: string, eventSlug: string, orderCode: string): Promise<Order>`
Fetches a specific order for the specified event.
#### `createOrder(organizerSlug: string, eventSlug: string, orderData: Order): Promise<Order>`
Creates a new order for the specified event.
#### `updateOrder(organizerSlug: string, eventSlug: string, orderCode: string, orderData: Order): Promise<Order>`
Updates an existing order for the specified event.
#### `deleteOrder(organizerSlug: string, eventSlug: string, orderCode: string): Promise<void>`
Deletes an order for the specified event.

## Vouchers

#### `getVouchers(organizerSlug: string, eventSlug: string): Promise<Voucher[]>`
Fetches a list of vouchers for the specified event.
#### `getVoucher(organizerSlug: string, eventSlug: string, voucherCode: string): Promise<Voucher>`
Fetches a specific voucher for the specified event.
#### `createVoucher(organizerSlug: string, eventSlug: string, voucherData: Voucher): Promise<Voucher>`
Creates a new voucher for the specified event.
#### `updateVoucher(organizerSlug: string, eventSlug: string, voucherCode: string, voucherData: Voucher): Promise<Voucher>`
Updates an existing voucher for the specified event.
#### `deleteVoucher(organizerSlug: string, eventSlug: string, voucherCode: string): Promise<void>`
Deletes a voucher for the specified event.

## Discounts

#### `getDiscounts(organizerSlug: string, eventSlug: string): Promise<Discount[]>`
Fetches a list of discounts for the specified event.
#### `getDiscount(organizerSlug: string, eventSlug: string, discountCode: string): Promise<Discount>`
Fetches a specific discount for the specified event.
#### `createDiscount(organizerSlug: string, eventSlug: string, discountData: Discount): Promise<Discount>`
Creates a new discount for the specified event.
#### `updateDiscount(organizerSlug: string, eventSlug: string, discountCode: string, discountData: Discount): Promise<Discount>`
Updates an existing discount for the specified event.
#### `deleteDiscount(organizerSlug: string, eventSlug: string, discountCode: string): Promise<void>`
Deletes a discount for the specified event.

... (The rest of the content follows the same structure as above for other sections like Seating Plans, Check-In Lists, Media, Teams, Data Exports, Scheduled Exports, Shredders, Bank Transfers, PDF Exports, and Badges.)