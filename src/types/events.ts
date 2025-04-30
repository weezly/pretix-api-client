export interface Event {
    id: number;
    slug: string;
    name: Record<string, string>;
    description?: Record<string, string>;
    start: string;
    end: string;
    active: boolean;
    settings: Record<string, any>;
}

export interface EventDetails extends Event {
    ticketsAvailable: number;
    salesChannels: string[];
    addons: number[];
    variations: number[];
}