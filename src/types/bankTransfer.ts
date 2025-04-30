export interface BankTransfer {
  id: number;
  reference: string; // Reference code for the transfer
  amount: number; // Amount transferred
  date: string; // ISO 8601 date string
  status: 'pending' | 'completed' | 'failed'; // Status of the transfer
}

export interface BankTransferDetails {
  reference: string;
  amount: number;
  date: string;
}