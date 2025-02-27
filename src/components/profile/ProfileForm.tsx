
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { IdCard, School, Building2, BookOpen, Phone, MapPin } from 'lucide-react';
import { ProfileData, UserRole } from '@/types/profile';

interface ProfileFormProps {
  profileData: ProfileData;
  role: UserRole;
  isEditing: boolean;
  isSaving: boolean;
  onRoleChange: (role: UserRole) => void;
  onProfileDataChange: (data: Partial<ProfileData>) => void;
  onSave: () => void;
}

export const ProfileForm = ({
  profileData,
  role,
  isEditing,
  isSaving,
  onRoleChange,
  onProfileDataChange,
  onSave,
}: ProfileFormProps) => {
  return (
    <>
      <Tabs defaultValue={role} className="mb-6" onValueChange={(value) => onRoleChange(value as UserRole)}>
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
                  onChange={(e) => onProfileDataChange({ idNumber: e.target.value })}
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
                  onChange={(e) => onProfileDataChange({ year: e.target.value })}
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
                  onChange={(e) => onProfileDataChange({ branch: e.target.value })}
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
                  onChange={(e) => onProfileDataChange({ domNumber: e.target.value })}
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
                  onChange={(e) => onProfileDataChange({ hostelBlock: e.target.value })}
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
                  onChange={(e) => onProfileDataChange({ idNumber: e.target.value })}
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
                  onChange={(e) => onProfileDataChange({ department: e.target.value })}
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
                  onChange={(e) => onProfileDataChange({ designation: e.target.value })}
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
                  onChange={(e) => onProfileDataChange({ specialization: e.target.value })}
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
                  onChange={(e) => onProfileDataChange({ idNumber: e.target.value })}
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
              onChange={(e) => onProfileDataChange({ phone: e.target.value })}
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
              onChange={(e) => onProfileDataChange({ address: e.target.value })}
              placeholder="Enter address"
            />
          </div>
        </div>
      </div>

      {isEditing && (
        <div className="mt-6 flex justify-end">
          <Button
            onClick={onSave}
            className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90"
            disabled={isSaving}
          >
            {isSaving ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      )}
    </>
  );
};
