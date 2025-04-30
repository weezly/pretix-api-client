export interface PDFExport {
  id: number;
  type: string; // Type of the PDF export (e.g., "invoice", "badge")
  created: string; // ISO 8601 timestamp
  download_url: string; // URL to download the exported PDF
}

export interface PDFExportDetails {
  type: string; // Type of the PDF export
  parameters?: Record<string, any>; // Optional parameters for the export
}