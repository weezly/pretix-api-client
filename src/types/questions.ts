export interface Question {
  id: number;
  question: Record<string, string>; // Multilingual object for the question text
  type: string; // e.g., "boolean", "text", "choice"
  required: boolean;
  options: QuestionOption[]; // List of options for choice-type questions
  position: number;
}

export interface QuestionOption {
  id: number;
  answer: Record<string, string>; // Multilingual object for the option text
}

export interface QuestionDetails {
  question: Record<string, string>;
  type: string;
  required: boolean;
  options?: Partial<QuestionOption>[]; // Optional for non-choice questions
  position: number;
}