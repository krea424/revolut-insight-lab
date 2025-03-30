
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useEffect, useRef } from 'react';

const MarketSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.animate-on-scroll');
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animate-fade-in');
              el.classList.remove('opacity-0');
            }, index * 200);
          });
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const userGrowthData = [
    { year: '2020', Revolut: 0.8, N26: 0.5, Wise: 0.3 },
    { year: '2021', Revolut: 1.2, N26: 0.7, Wise: 0.5 },
    { year: '2022', Revolut: 1.5, N26: 0.9, Wise: 0.7 },
    { year: '2023', Revolut: 1.8, N26: 1.1, Wise: 0.9 },
    { year: '2024', Revolut: 2.0, N26: 1.2, Wise: 1.0 },
    { year: '2025E', Revolut: 4.0, N26: 1.5, Wise: 1.2 },
  ];

  return (
    <section id="market" className="section bg-white" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-4">Posizionamento nel Mercato Italiano</h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Analisi della posizione di Revolut nel competitivo panorama fintech italiano e confronto con altri operatori
        </p>

        <div className="opacity-0 animate-on-scroll mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-revolut-navy text-center">Crescita Utenti in Italia (milioni)</h3>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={userGrowthData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Revolut" stroke="#0666eb" strokeWidth={3} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="N26" stroke="#26a6d1" strokeWidth={2} />
                <Line type="monotone" dataKey="Wise" stroke="#71c7ec" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          <div className="card card-hover opacity-0 animate-on-scroll">
            <h3 className="text-xl font-semibold mb-4 text-revolut-blue">Revolut</h3>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-medium">Caratteristiche:</span> Conti multivaluta, cambio valuta competitivo, trading di criptovalute e azioni, pagamenti P2P</li>
              <li><span className="font-medium">Prezzi:</span> Piano Standard gratuito, piani a pagamento da 3,99 €/mese a 45 €/mese</li>
              <li><span className="font-medium">Forza:</span> Ampia gamma di servizi, costi competitivi, innovazione tecnologica</li>
              <li><span className="font-medium">Debolezza:</span> Dipendenza da licenze bancarie, sfide nella fidelizzazione</li>
            </ul>
          </div>
          
          <div className="card card-hover opacity-0 animate-on-scroll">
            <h3 className="text-xl font-semibold mb-4 text-[#26a6d1]">N26</h3>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-medium">Caratteristiche:</span> Conti correnti, carte, bonifici, funzionalità di risparmio</li>
              <li><span className="font-medium">Prezzi:</span> Piano Standard gratuito, piani a pagamento da 4,90 €/mese</li>
              <li><span className="font-medium">Forza:</span> Interfaccia utente intuitiva, licenza bancaria UE</li>
              <li><span className="font-medium">Debolezza:</span> Minore ampiezza di servizi rispetto a Revolut</li>
            </ul>
          </div>
          
          <div className="card card-hover opacity-0 animate-on-scroll">
            <h3 className="text-xl font-semibold mb-4 text-[#71c7ec]">Wise</h3>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-medium">Caratteristiche:</span> Conti multivaluta, trasferimenti internazionali, carta di debito</li>
              <li><span className="font-medium">Prezzi:</span> Nessun costo di abbonamento, commissioni trasparenti per transazioni</li>
              <li><span className="font-medium">Forza:</span> Commissioni di cambio valuta competitive, trasparenza dei costi</li>
              <li><span className="font-medium">Debolezza:</span> Gamma di servizi più limitata rispetto a Revolut e N26</li>
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="section-subtitle text-center mb-8">Preferenze dei Consumatori Italiani</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="opacity-0 animate-on-scroll">
              <h4 className="text-lg font-medium mb-3 text-revolut-navy">Tendenze nel Mercato Italiano</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 66% degli italiani utilizza almeno un canale digitale bancario</li>
                <li>• 57% preferisce il mobile banking rispetto ad altri canali</li>
                <li>• Forte crescita nei pagamenti innovativi tramite smartphone</li>
                <li>• Alta preferenza per i pagamenti contactless</li>
              </ul>
            </div>
            
            <div className="opacity-0 animate-on-scroll">
              <h4 className="text-lg font-medium mb-3 text-revolut-navy">Strategie di Revolut per il Mercato Locale</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Introduzione di IBAN italiano per maggiore integrazione</li>
                <li>• Lancio di prestiti personali per rispondere alle esigenze locali</li>
                <li>• Potenziale introduzione di conti deposito con interessi</li>
                <li>• Focus sui servizi di trading e investimento in forte crescita</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
