
export type UserRole = 'student' | 'teacher' | 'admin';

export interface ProfileData {
  role: UserRole;
  idNumber: string;
  phone: string;
  address: string;
  year?: string;
  branch?: string;
  domNumber?: string;
  hostelBlock?: string;
  department?: string;
  designation?: string;
  specialization?: string;
  created_at?: string;
  updated_at?: string;
}
