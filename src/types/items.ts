export interface Item {
    id: number;
    event: string;
    name: Record<string, string>;
    slug: string;
    category?: number;
    default_price: number;
    tax_rate?: number;
    admission: boolean;
    active: boolean;
    has_variations: boolean;
    position: number;
    description?: Record<string, string>;
    available_from?: Date;
    available_until?: Date;
    require_voucher: boolean;
    hide_if_available: boolean;
    min_per_order?: number;
    max_per_order?: number;
    addons: number[];
    bundles: Array<{
        main_item: number;
        sub_items: number[];
    }>;
    sales_channels: string[];
}

export interface ItemDetails extends Item {
    variations: ItemVariation[];
}

export interface ItemVariation {
    id: number;
    item: number;
    name: Record<string, string>;
    price?: number;
    active: boolean;
    position: number;
    values: number[];
}