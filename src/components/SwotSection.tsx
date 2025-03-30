
import { TrendingUp, AlertTriangle, Sun, Cloud } from "lucide-react";

const SwotSection = () => {
  return (
    <section id="swot" className="section second-gradient-bg text-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-12 text-white">Analisi SWOT</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <TrendingUp className="h-10 w-10 text-revolut-green mr-4" />
              <h3 className="text-2xl font-semibold">Punti di Forza</h3>
            </div>
            <ul className="space-y-3 text-gray-100">
              <li>• <span className="font-medium">Innovazione Tecnologica:</span> Piattaforma proprietaria e approccio agile allo sviluppo</li>
              <li>• <span className="font-medium">Ampia Gamma di Servizi:</span> Offerta completa per diverse esigenze finanziarie</li>
              <li>• <span className="font-medium">Struttura dei Costi Competitiva:</span> Commissioni inferiori alle banche tradizionali</li>
              <li>• <span className="font-medium">Forte Crescita:</span> Significativo aumento della base clienti in Italia</li>
              <li>• <span className="font-medium">IBAN Italiano:</span> Facilita l'accettazione come conto principale</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <AlertTriangle className="h-10 w-10 text-revolut-pink mr-4" />
              <h3 className="text-2xl font-semibold">Punti di Debolezza</h3>
            </div>
            <ul className="space-y-3 text-gray-100">
              <li>• <span className="font-medium">Dipendenza da Licenze:</span> Operatività vincolata al possesso di licenze in diversi paesi</li>
              <li>• <span className="font-medium">Fidelizzazione Clienti:</span> Difficoltà nel mantenere la fedeltà nel competitivo mercato fintech</li>
              <li>• <span className="font-medium">Redditività:</span> Sfide passate nel raggiungere la sostenibilità finanziaria</li>
              <li>• <span className="font-medium">Percezione del Brand:</span> Potenziali percezioni negative da passate controversie</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <Sun className="h-10 w-10 text-yellow-400 mr-4" />
              <h3 className="text-2xl font-semibold">Opportunità</h3>
            </div>
            <ul className="space-y-3 text-gray-100">
              <li>• <span className="font-medium">Crescente Adozione dei Servizi Bancari Digitali:</span> Rapida crescita nel mercato italiano</li>
              <li>• <span className="font-medium">Espansione dell'Offerta:</span> Potenziale per nuovi prodotti come mutui e servizi localizzati</li>
              <li>• <span className="font-medium">Trading Online:</span> Crescente interesse degli italiani per investimenti digitali</li>
              <li>• <span className="font-medium">Partnership Strategiche:</span> Collaborazioni con aziende e fornitori locali</li>
              <li>• <span className="font-medium">Licenza Bancaria Italiana:</span> Maggiore fiducia e ampliamento dei servizi</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <Cloud className="h-10 w-10 text-gray-300 mr-4" />
              <h3 className="text-2xl font-semibold">Minacce</h3>
            </div>
            <ul className="space-y-3 text-gray-100">
              <li>• <span className="font-medium">Concorrenza:</span> Altre fintech e banche tradizionali con offerte digitali migliorate</li>
              <li>• <span className="font-medium">Evoluzione Normative:</span> Continui cambiamenti nelle regolamentazioni finanziarie</li>
              <li>• <span className="font-medium">Sicurezza Informatica:</span> Necessità di proteggere dati e fondi degli utenti</li>
              <li>• <span className="font-medium">Condizioni Economiche:</span> Potenziali recessioni potrebbero influenzare spesa e investimenti</li>
              <li>• <span className="font-medium">Nuovi Entranti:</span> Possibile ingresso di nuovi competitor nel mercato italiano fintech</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwotSection;
