export interface DataExporter {
  identifier: string; // Unique identifier for the exporter
  name: string; // Display name of the exporter
  description: string; // Description of what the exporter does
}

export interface DataExport {
  id: number;
  exporter: string; // Identifier of the exporter
  created: string; // ISO 8601 timestamp
  download_url: string; // URL to download the exported data
}

export interface DataExportDetails {
  exporter: string; // Identifier of the exporter
  parameters?: Record<string, any>; // Optional parameters for the export
}