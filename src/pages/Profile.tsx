
import { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserRound, Mail, Phone, Home, IdCard, School, Building2, BookOpen, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://vdutgmjaseepqntdnkzh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkdXRnbWphc2VlcHFudGRua3poIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1OTMwMTcsImV4cCI6MjA1NjE2OTAxN30.gcsavtMbrrPdFPVMfQMuEbz_d6MjFwJK5FjQjxaYy74'
);

type UserRole = 'student' | 'teacher' | 'admin';

interface ProfileData {
  role: UserRole;
  idNumber: string;
  phone: string;
  address: string;
  // Student specific fields
  year?: string;
  branch?: string;
  domNumber?: string;
  hostelBlock?: string;
  // Teacher specific fields
  department?: string;
  designation?: string;
  specialization?: string;
}

const Profile = () => {
  const { user } = useUser();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [role, setRole] = useState<UserRole>('student');
  const [profileData, setProfileData] = useState<ProfileData>({
    role: 'student',
    idNumber: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    if (user?.id) {
      loadUserProfile();
    }
  }, [user]);

  const loadUserProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user?.id)
        .single();

      if (error) {
        console.error('Error loading profile:', error);
        return;
      }

      if (data) {
        setProfileData(data);
        setRole(data.role);
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const updatedProfile = {
        ...profileData,
        role,
        user_id: user?.id,
        email: user?.primaryEmailAddress?.emailAddress,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase
        .from('profiles')
        .upsert([updatedProfile], {
          onConflict: 'user_id',
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Profile updated successfully!",
        duration: 3000,
      });

      setIsEditing(false);
    } catch (error) {
      console.error('Error saving profile:', error);
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50 pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-6 bg-white/80 backdrop-blur-xl shadow-xl">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-center gap-6 border-b pb-6 mb-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src={user?.imageUrl} />
              <AvatarFallback>
                <UserRound className="w-12 h-12 text-muted-foreground" />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-bold text-indigo-900">{user?.fullName}</h1>
              <p className="text-muted-foreground">{user?.primaryEmailAddress?.emailAddress}</p>
            </div>
            <Button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90"
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </Button>
          </div>

          {/* Role Selection */}
          <Tabs defaultValue="student" className="mb-6" onValueChange={(value) => setRole(value as UserRole)}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="student">Student</TabsTrigger>
              <TabsTrigger value="teacher">Teacher</TabsTrigger>
              <TabsTrigger value="admin">Admin</TabsTrigger>
            </TabsList>

            {/* Student Profile */}
            <TabsContent value="student">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Student ID</label>
                  <div className="flex items-center gap-2">
                    <IdCard className="w-5 h-5 text-indigo-600" />
                    <Input
                      disabled={!isEditing}
                      value={profileData.idNumber}
                      onChange={(e) => setProfileData({ ...profileData, idNumber: e.target.value })}
                      placeholder="Enter student ID"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Year</label>
                  <div className="flex items-center gap-2">
                    <School className="w-5 h-5 text-indigo-600" />
                    <Input
                      disabled={!isEditing}
                      value={profileData.year}
                      onChange={(e) => setProfileData({ ...profileData, year: e.target.value })}
                      placeholder="Current year"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Branch</label>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                    <Input
                      disabled={!isEditing}
                      value={profileData.branch}
                      onChange={(e) => setProfileData({ ...profileData, branch: e.target.value })}
                      placeholder="Enter branch"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">DOM Number</label>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-indigo-600" />
                    <Input
                      disabled={!isEditing}
                      value={profileData.domNumber}
                      onChange={(e) => setProfileData({ ...profileData, domNumber: e.target.value })}
                      placeholder="Enter DOM number"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Hostel Block</label>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-indigo-600" />
                    <Input
                      disabled={!isEditing}
                      value={profileData.hostelBlock}
                      onChange={(e) => setProfileData({ ...profileData, hostelBlock: e.target.value })}
                      placeholder="Enter hostel block"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Teacher Profile */}
            <TabsContent value="teacher">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Teacher ID</label>
                  <div className="flex items-center gap-2">
                    <IdCard className="w-5 h-5 text-indigo-600" />
                    <Input
                      disabled={!isEditing}
                      value={profileData.idNumber}
                      onChange={(e) => setProfileData({ ...profileData, idNumber: e.target.value })}
                      placeholder="Enter teacher ID"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Department</label>
                  <div className="flex items-center gap-2">
                    <School className="w-5 h-5 text-indigo-600" />
                    <Input
                      disabled={!isEditing}
                      value={profileData.department}
                      onChange={(e) => setProfileData({ ...profileData, department: e.target.value })}
                      placeholder="Enter department"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Designation</label>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                    <Input
                      disabled={!isEditing}
                      value={profileData.designation}
                      onChange={(e) => setProfileData({ ...profileData, designation: e.target.value })}
                      placeholder="Enter designation"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Specialization</label>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                    <Input
                      disabled={!isEditing}
                      value={profileData.specialization}
                      onChange={(e) => setProfileData({ ...profileData, specialization: e.target.value })}
                      placeholder="Enter specialization"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Admin Profile */}
            <TabsContent value="admin">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Admin ID</label>
                  <div className="flex items-center gap-2">
                    <IdCard className="w-5 h-5 text-indigo-600" />
                    <Input
                      disabled={!isEditing}
                      value={profileData.idNumber}
                      onChange={(e) => setProfileData({ ...profileData, idNumber: e.target.value })}
                      placeholder="Enter admin ID"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Common Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone Number</label>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-indigo-600" />
                <Input
                  disabled={!isEditing}
                  value={profileData.phone}
                  onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                  placeholder="Enter phone number"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Address</label>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-indigo-600" />
                <Input
                  disabled={!isEditing}
                  value={profileData.address}
                  onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                  placeholder="Enter address"
                />
              </div>
            </div>
          </div>

          {isEditing && (
            <div className="mt-6 flex justify-end">
              <Button
                onClick={handleSave}
                className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90"
              >
                Save Changes
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Profile;
