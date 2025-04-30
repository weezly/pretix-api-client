export interface ScheduledExport {
  id: number;
  exporter: string; // Identifier of the exporter
  parameters: Record<string, any>; // Parameters for the export
  interval: string; // Interval for the export (e.g., "daily", "weekly")
  last_run?: string; // ISO 8601 timestamp of the last run
  next_run?: string; // ISO 8601 timestamp of the next run
}

export interface ScheduledExportDetails {
  exporter: string;
  parameters: Record<string, any>;
  interval: string;
}