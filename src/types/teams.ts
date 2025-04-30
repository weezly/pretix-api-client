export interface Team {
  id: number;
  name: string;
  organizer: string; // Organizer slug
  members: string[]; // List of user emails
  permissions: string[]; // List of permissions assigned to the team
}

export interface TeamDetails {
  name: string;
  members: string[];
  permissions: string[];
}