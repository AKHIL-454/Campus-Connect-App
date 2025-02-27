
import { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { ProfileForm } from '@/components/profile/ProfileForm';
import { ProfileData, UserRole } from '@/types/profile';
import { supabase } from '@/lib/supabase';

const Profile = () => {
  const { user } = useUser();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
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
    } else {
      setIsLoading(false);
    }
  }, [user]);

  const loadUserProfile = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user?.id)
        .single();

      if (error) {
        if (error.code !== 'PGRST116') {
          toast({
            title: "Error loading profile",
            description: "There was a problem loading your profile. Please try again.",
            variant: "destructive",
          });
        }
        return;
      }

      if (data) {
        setProfileData(data);
        setRole(data.role);
      }
    } catch (error) {
      console.error('Error loading profile:', error);
      toast({
        title: "Error",
        description: "Failed to load profile data. Please refresh the page.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    if (!user?.id) {
      toast({
        title: "Error",
        description: "You must be logged in to save your profile.",
        variant: "destructive",
      });
      return;
    }

    setIsSaving(true);
    try {
      const updatedProfile = {
        ...profileData,
        role,
        user_id: user.id,
        email: user.primaryEmailAddress?.emailAddress || '',
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
      });

      setIsEditing(false);
      loadUserProfile();
    } catch (error) {
      console.error('Error saving profile:', error);
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50 pt-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 bg-white/80 backdrop-blur-xl shadow-xl">
            <div className="flex items-center justify-center h-64">
              <p className="text-muted-foreground">Loading profile...</p>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50 pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-6 bg-white/80 backdrop-blur-xl shadow-xl">
          <ProfileHeader
            user={user}
            isEditing={isEditing}
            isSaving={isSaving}
            onEditClick={() => setIsEditing(!isEditing)}
          />
          <ProfileForm
            profileData={profileData}
            role={role}
            isEditing={isEditing}
            isSaving={isSaving}
            onRoleChange={setRole}
            onProfileDataChange={(data) => setProfileData({ ...profileData, ...data })}
            onSave={handleSave}
          />
        </Card>
      </div>
    </div>
  );
};

export default Profile;
