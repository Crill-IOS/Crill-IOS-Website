import MonacoEditor from "@/components/MonacoEditor";
//import { ErrorBoundary } from "@/components/ErrorBoundary";

const Playground  = () => {

    return (
      <section id="live-demo" className="py-20">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Playground</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Teste Crill-IOS direkt im Browser! Probiere Autovervollständigung, 
              Syntax-Highlighting und Echtzeit-Validierung aus.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="border rounded-lg shadow-lg" style={{ height: '600px' }}>
                <MonacoEditor className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>
);
}

export default Playground;