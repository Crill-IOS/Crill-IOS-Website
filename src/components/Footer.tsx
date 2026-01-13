import { Github, ExternalLink, Mail, BookText, Book } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Project Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-6 w-6 items-center justify-center rounded hero-gradient">
                {/* <span className="text-xs font-bold text-white">C</span> */}
                <img src="/logo_small_white.png" className="h-5 w-5"></img>
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-coral to-coral-light bg-clip-text text-transparent">
                Crill-IOS
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Ein VS Code Plugin für Cisco IOS Konfigurationen mit Unterstützung des Language Server 
              Protocols (LSP).
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <a
                href="https://github.com/Crill-IOS/Crill-IOS-Scripting"
                className="flex items-center space-x-2 text-muted-foreground hover:text-coral transition-colors text-sm"
              >
                <Github className="h-4 w-4" />
                <span>GitHub Repository</span>
              </a>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=Crill.crill-ios-scripting"
                className="flex items-center space-x-2 text-muted-foreground hover:text-coral transition-colors text-sm"
              >
                <ExternalLink className="h-4 w-4" />
                <span>VS Code Marketplace</span>
              </a>

              <a
                href="https://docs.crillios.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-coral transition-colors text-sm"
              >
                <BookText className="h-4 w-4" />
                <span>Dokumentation</span>
              </a>
            </div>
          </div>

          {/* Kontakt */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Kontakt</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                So erreichst du uns:
                <a 
                href="mailto:team@crillios.com"
                className="text-coral hover:underline text-sm flex items-center space-x-2 text-muted-foreground hover:text-coral transition-colors text-sm mt-2"
              >
                <Mail className="h-4 w-4"></Mail>
                <span>team@crillios.com</span>
              </a>
              
              </p>
            
              <a
                  href="/impressum"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-coral transition-colors text-sm"
                >
                  <Book className="h-4 w-4" />
                <span>Impressum</span>
              </a>
            </div>
            
            
          </div>

          {/* HTL Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">HTL Rennweg</h3>
            <p className="text-muted-foreground text-sm">
              Entwickelt als Diplomarbeit von drei Schülern der HTL Rennweg, Wien.
            </p>
            <p className="text-muted-foreground text-xs">
              © 2025 HTL Rennweg. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;