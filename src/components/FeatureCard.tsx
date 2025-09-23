import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: boolean;
}

const FeatureCard = ({ icon: Icon, title, description, gradient = false }: FeatureCardProps) => {
  return (
    <Card className={`group transition-all duration-300 hover:scale-105 border-0 ${
      gradient ? "hero-gradient text-white coral-shadow" : "soft-shadow hover:warm-shadow"
    }`}>
      <CardContent className="p-6 space-y-4">
        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${
          gradient ? "bg-white/20" : "bg-coral/10"
        }`}>
          <Icon className={`h-6 w-6 ${gradient ? "text-white" : "text-coral"}`} />
        </div>
        <h3 className={`text-lg font-semibold ${gradient ? "text-white" : "text-foreground"}`}>
          {title}
        </h3>
        <p className={`text-sm ${gradient ? "text-white/90" : "text-muted-foreground"}`}>
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;