import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMemberProps {
  name: string;
  role: string;
  avatar?: string;
  description?: string;
}

const TeamMember = ({ name, role, avatar, description }: TeamMemberProps) => {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <Card className="group transition-all duration-300 hover:scale-105 soft-shadow hover:coral-shadow border-0">
      <CardContent className="p-6 text-center space-y-4">
        <Avatar className="h-20 w-20 mx-auto">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="bg-coral text-white text-lg font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
          <p className="text-coral font-medium">{role}</p>
          {description && (
            <p className="text-sm text-muted-foreground mt-2">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMember;