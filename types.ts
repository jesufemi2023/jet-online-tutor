
export enum Subject {
  Math = 'Mathematics',
  Physics = 'Physics',
  Chemistry = 'Chemistry',
  Coding = 'Coding',
  Biology = 'Biology'
}

export enum Grade {
  Grade7 = 'Grade 7',
  Grade8 = 'Grade 8',
  Grade9 = 'Grade 9',
  Grade10 = 'Grade 10',
  Grade11 = 'Grade 11',
  Grade12 = 'Grade 12'
}

export interface Tutor {
  id: string;
  name: string;
  specialties: Subject[];
  bio: string;
  experience: number;
  rating: number;
  imageUrl: string;
  availability: string;
  approach: string;
}

export interface CounselingRequest {
  studentAge: number;
  subject: Subject;
  challengeDescription: string;
}
