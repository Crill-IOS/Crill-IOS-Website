import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FeatureCard from "@/components/FeatureCard";
import TeamMember from "@/components/TeamMember";
import ShrimpAnimation from "@/components/ShrimpAnimation";

import { 
  Code, 
  Zap, 
  Shield, 
  Brain, 
  Terminal, 
  CheckCircle, 
  Download,
  Server,
  Lightbulb,
  X
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Server,
      title: "Language Server Protocol",
      description: "Vollständige LSP Unterstützung für moderne IDE-Features wie Autovervollständigung und Fehlererkennung."
    },
    {
      icon: Code,
      title: "Syntax Highlighting",
      description: "Intelligente Syntaxhervorhebung und semantische Markierungen für bessere Code-Lesbarkeit."
    },
    {
      icon: Shield,
      title: "Echtzeit-Fehlererkennung",
      description: "Sofortige Erkennung von Konfigurationsfehlern wie ungültige IPv4-Adressen oder Banner-Syntax."
    },
    {
      icon: Brain,
      title: "Autovervollständigung",
      description: "Kontextbasierte Vorschläge mit über 100+ Cisco IOS Befehlen in der integrierten Datenbank."
    },
    {
      icon: Lightbulb,
      title: "Best-Practice Vorschläge",
      description: "Intelligente Empfehlungen für optimale Cisco IOS Konfigurationen und Security-Standards."
    },
    {
      icon: Zap,
      title: "Logiküberprüfung",
      description: "Erweiterte Validierung für IP-Konflikte, ungültige Subnetze und Routing-Probleme."
    }
  ];

  const teamMembers = [
    {
      name: "Benjamin Zwettler",
      avatar: "/avatar_beni.png",
      role: "Projektleiter",
      description: "Spezialisierung auf Langium, Language Server Implementation und Autovervollständigung"
    },
    {
      name: "Fabian Ha",
      avatar: "/avatar_fabian.png",
      role: "Scrum Master",
      description: "Entwicklung von Syntaxhighlighting, Best-Practice Vorschläge und Benutzerhandbuch"
    },
    {
      name: "Jonas Felsner",
      avatar: "/avatar_jonas.png",
      role: "Developer",
      description: "Fokus auf Befehlsdatenbank, Fehlererkennung und ausführliches Testen"
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 subtle-gradient">
        <ShrimpAnimation />
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center space-y-8 animate-fade-in-up">
            <Badge variant="outline" className="border-coral text-coral">
              HTL Rennweg Diplomarbeit 2025/26
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-coral via-coral-light to-orange-warm bg-clip-text text-transparent">
                Crill-IOS
              </span>
              <br />
              <span className="text-foreground">VS Code Plugin</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Revolutioniere deine Cisco IOS Konfiguration mit intelligentem Language Server, 
              Echtzeit-Fehlererkennung und kontextbasierter Autovervollständigung.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" variant="hero" className="text-lg px-8">
                <a href="/playground">
                  Live Demo ausprobieren
                </a>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  VS Code Marketplace
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating animation element */}
        <div className="absolute top-20 right-10 hidden lg:block">
          <div className="animate-float">
            <Terminal className="h-16 w-16 text-coral/20" />
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 ">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Das Problem</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Cisco IOS Konfigurationen werden oft noch in einfachen Editoren wie Notepad++ geschrieben 
                - ohne jegliche Form von Autokorrektur und Fehlererkennung. Das führt zu fehleranfälligen 
                Eingaben und ineffizientem Arbeiten.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-red-600">
                  <X className="h-5 w-5 mr-3" />
                  Keine Syntax-Validierung
                </div>
                <div className="flex items-center text-red-600">
                  <X className="h-5 w-5 mr-3" />
                  Fehleranfällige manuelle Eingabe
                </div>
                <div className="flex items-center text-red-600">
                  <X className="h-5 w-5 mr-3" />
                  Zeitaufwändige Fehlerbehebung
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Unsere Lösung</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Crill-IOS bringt moderne IDE-Features in die Cisco IOS Konfiguration mit unserem 
                Langium-basierten Language Server. Einfach zu Nutzen mithilfe der Visual Studio Code Extension. Damit wird Netzwerkkonfiguration effizienter, sicherer und fehlerärmer.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-green-600">
                  <CheckCircle className="h-5 w-5 mr-3" />
                  Intelligente Autovervollständigung
                </div>
                <div className="flex items-center text-green-600">
                  <CheckCircle className="h-5 w-5 mr-3" />
                  Echtzeit Fehlererkennung
                </div>
                <div className="flex items-center text-green-600">
                  <CheckCircle className="h-5 w-5 mr-3" />
                  Best-Practice Empfehlungen
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 subtle-gradient">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Entdecke die innovativen Features, die Crill-IOS zum ultimativen Tool für 
              Cisco IOS Konfigurationen machen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={feature.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  gradient={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Unser Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Drei motivierte HTL Rennweg Schüler, die gemeinsam an der Zukunft der 
              Cisco IOS Konfiguration arbeiten.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <TeamMember {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Bereit für intelligentere Cisco IOS Konfiguration?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Installiere Crill-IOS noch heute und erlebe, wie moderne Entwicklungstools 
            deine Netzwerk-Konfiguration revolutionieren.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
