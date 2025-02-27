
import { User } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserRound } from 'lucide-react';

interface ProfileHeaderProps {
  user: User | null | undefined;
  isEditing: boolean;
  isSaving: boolean;
  onEditClick: () => void;
}

export const ProfileHeader = ({ user, isEditing, isSaving, onEditClick }: ProfileHeaderProps) => {
  return (
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
        onClick={onEditClick}
        className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90"
        disabled={isSaving}
      >
        {isEditing ? 'Cancel' : 'Edit Profile'}
      </Button>
    </div>
  );
};
