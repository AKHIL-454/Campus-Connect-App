
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: number
          user_id: string
          role: 'student' | 'teacher' | 'admin'
          idNumber: string
          phone: string
          address: string
          year?: string
          branch?: string
          domNumber?: string
          hostelBlock?: string
          department?: string
          designation?: string
          specialization?: string
          email: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          user_id: string
          role: 'student' | 'teacher' | 'admin'
          idNumber: string
          phone: string
          address: string
          year?: string
          branch?: string
          domNumber?: string
          hostelBlock?: string
          department?: string
          designation?: string
          specialization?: string
          email: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          user_id?: string
          role?: 'student' | 'teacher' | 'admin'
          idNumber?: string
          phone?: string
          address?: string
          year?: string
          branch?: string
          domNumber?: string
          hostelBlock?: string
          department?: string
          designation?: string
          specialization?: string
          email?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
