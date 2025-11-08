import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Playground from "./pages/Playground";
import Impressum from "./pages/Impressum";

const queryClient = new QueryClient();

// Bestimme den basename für React Router basierend auf der URL
// Für Custom Domain (crillios.com): kein basename
// Für GitHub Pages Subpath (/Crill-IOS-Website/): basename = '/Crill-IOS-Website'
const getBasename = () => {
  if (typeof window !== 'undefined') {
    // Prüfe ob wir auf der Custom Domain sind (crillios.com)
    const hostname = window.location.hostname;
    if (hostname === 'crillios.com' || hostname === 'www.crillios.com') {
      return '';
    }
    // Prüfe ob wir im GitHub Pages Subpath sind
    if (window.location.pathname.startsWith('/Crill-IOS-Website/')) {
      return '/Crill-IOS-Website';
    }
  }
  return '';
};

const App = () => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename={getBasename()}>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="*" element={<NotFound />} />
                  <Route path="/playground" element={<Playground />} />
                  <Route path="/impressum" element={<Impressum />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
);

export default App;
