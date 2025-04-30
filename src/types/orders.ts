export interface Order {
    code: string;
    event: string;
    status: 'p' | 'c' | 'e' | 'n';
    require_approval: boolean;
    order_date: Date;
    expires?: Date;
    total: number;
    payment_method?: string;
    sales_channel: string;
    customer?: string;
    invoice_address?: string;
    shipping_address?: string;
    email?: string;
    locale: string;
    positions: OrderPosition[];
    fees: OrderFee[];
    payments: OrderPayment[];
    refunds: OrderRefund[];
    invoices: OrderInvoice[];
    downloads: OrderDownload[];
}

export interface OrderPosition {
    id: number;
    order: string;
    item: number;
    variation?: number;
    price: number;
    count: number;
    attendee_name?: string;
    attendee_email?: string;
    answers: Answer[];
    subevent?: number;
    seat?: number;
}

export interface OrderFee {
    id: number;
    name: string;
    amount: number;
}

export interface OrderPayment {
    id: number;
    amount: number;
    method: string;
    date: Date;
}

export interface OrderRefund {
    id: number;
    amount: number;
    reason: string;
    date: Date;
}

export interface OrderInvoice {
    id: number;
    amount: number;
    date: Date;
}

export interface OrderDownload {
    id: number;
    url: string;
    filename: string;
}

export interface Answer {
    question_id: number;
    value: string;
}