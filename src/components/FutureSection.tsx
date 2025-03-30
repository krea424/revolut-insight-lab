
import { ArrowRight } from "lucide-react";

const recommendations = [
  {
    title: "Focus su Maggiore Penetrazione Retail",
    description: "Sfruttare l'IBAN italiano e ampliare l'offerta con prestiti, conti deposito e carte di credito"
  },
  {
    title: "Espansione Servizi Business",
    description: "Potenziare Revolut Business con funzionalità specifiche per il mercato italiano delle PMI"
  },
  {
    title: "Trading e Investimenti",
    description: "Capitalizzare sulla crescente domanda di servizi di trading di azioni e criptovalute"
  },
  {
    title: "Strategie di Fidelizzazione",
    description: "Implementare programmi di reward e servizi personalizzati per aumentare la retention"
  },
  {
    title: "Innovazione Tecnologica",
    description: "Esplorare blockchain e intelligenza artificiale per migliorare i servizi offerti"
  }
];

const FutureSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-4">Tendenze e Prospettive Future</h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Analisi delle tendenze del mercato finanziario digitale in Italia e raccomandazioni strategiche per il futuro di Revolut
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-revolut-navy">Tendenze del Mercato Italiano</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-revolut-blue mt-1 mr-2 flex-shrink-0" />
                <span>
                  <strong>Continua crescita dei pagamenti digitali</strong> e dell'adozione della mobile banking tra i consumatori italiani
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-revolut-blue mt-1 mr-2 flex-shrink-0" />
                <span>
                  <strong>Crescente interesse per la finanza integrata</strong> e metodi di pagamento innovativi che semplificano la vita quotidiana
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-revolut-blue mt-1 mr-2 flex-shrink-0" />
                <span>
                  <strong>Domanda di servizi finanziari personalizzati</strong> e convenienti che rispondano alle esigenze specifiche degli utenti
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-revolut-blue mt-1 mr-2 flex-shrink-0" />
                <span>
                  <strong>Adozione di tecnologie emergenti</strong> come l'intelligenza artificiale nel settore finanziario per migliorare l'esperienza utente
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-revolut-blue mt-1 mr-2 flex-shrink-0" />
                <span>
                  <strong>Evoluzione normativa continua</strong> che richiede adattabilità e investimenti in compliance da parte degli operatori del settore
                </span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 text-center text-revolut-navy">Raccomandazioni Strategiche</h3>
            <div className="grid grid-cols-1 gap-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <h4 className="font-semibold text-revolut-blue mb-2">{rec.title}</h4>
                  <p className="text-gray-700">{rec.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-revolut-navy to-revolut-blue text-white p-8 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-center">Conclusione</h3>
          <p className="text-center mb-0">
            Revolut ha dimostrato di essere un attore dinamico e in rapida crescita nel mercato italiano dei servizi finanziari digitali,
            con una posizione favorevole per capitalizzare sulla crescente adozione dei servizi bancari digitali in Italia.
            Nonostante la concorrenza agguerrita e le sfide normative, l'introduzione dell'IBAN italiano e l'espansione dell'offerta
            di prodotti rappresentano passi importanti per consolidare la sua presenza come soluzione finanziaria completa
            per un numero sempre maggiore di italiani.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
