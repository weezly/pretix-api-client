export interface Media {
  id: number;
  file: string; // URL of the media file
  type: string; // MIME type of the file
  name: string; // Name of the file
  created: string; // ISO 8601 timestamp
}

export interface MediaDetails {
  file: File; // File object to upload
  name: string;
}