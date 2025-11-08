const Impressum = () => {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-8">Impressum</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Angaben gemäß § 24 MedienG</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Medieninhaber und Herausgeber:</h3>
                  <p className="text-muted-foreground">
                    Diplomarbeitsgruppe Crill-IOS<br />
                    HTL Wien 3 Rennweg<br />
                    Benjamin Zwettler, Fabian Ha, Jonas Felsner<br />
                    Adresse: Rennweg 89b, 1030 Wien, Österreich
                  </p>
                </div>
  
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Kontakt:</h3>
                  <p className="text-muted-foreground">
                    E-Mail: team@crillios.com<br />
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  };
  
  export default Impressum;