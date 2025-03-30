
import { useEffect, useRef } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { CheckCircle } from "lucide-react";

const BusinessModelSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      elements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const revenueData = [
    { name: 'Abbonamenti', value: 45 },
    { name: 'Commissioni', value: 30 },
    { name: 'Interscambio', value: 15 },
    { name: 'Partnership', value: 10 },
  ];

  const COLORS = ['#0666eb', '#191c32', '#ef447c', '#39d98a'];

  const planData = [
    { name: 'Standard', price: '0', users: 50 },
    { name: 'Plus', price: '3.99', users: 20 },
    { name: 'Premium', price: '9.99', users: 15 },
    { name: 'Metal', price: '15.99', users: 10 },
    { name: 'Ultra', price: '45', users: 5 },
  ];

  return (
    <section id="business-model" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-2">Modello di Monetizzazione</h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          La strategia di monetizzazione di Revolut nel mercato italiano si basa su un modello freemium con diversi flussi di entrate
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="opacity-0 animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-6 text-revolut-navy">Principali Fonti di Ricavo</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={revenueData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {revenueData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="opacity-0 animate-on-scroll" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-semibold mb-6 text-revolut-navy">Piani di Abbonamento</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={planData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" stroke="#0666eb" />
                  <YAxis yAxisId="right" orientation="right" stroke="#ef447c" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" name="Prezzo mensile (€)" dataKey="price" fill="#0666eb" />
                  <Bar yAxisId="right" name="% Utenti (stima)" dataKey="users" fill="#ef447c" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="card opacity-0 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl font-semibold mb-4 text-revolut-navy">Commissioni per Servizi Specifici</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-revolut-green mt-0.5 mr-2 flex-shrink-0" />
                <span>
                  <strong>Cambio Valuta:</strong> 0-1% oltre i limiti del piano (€1.000 per Standard, €3.000 per Plus)
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-revolut-green mt-0.5 mr-2 flex-shrink-0" />
                <span>
                  <strong>Trading di Criptovalute:</strong> Da 0% a 0,49% in base al piano sottoscritto e volume
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-revolut-green mt-0.5 mr-2 flex-shrink-0" />
                <span>
                  <strong>Trading di Azioni:</strong> 0-0,25% oltre il limite di operazioni gratuite del piano
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-revolut-green mt-0.5 mr-2 flex-shrink-0" />
                <span>
                  <strong>Prelievi ATM:</strong> 2% oltre i limiti mensili del piano (da €200 a €2.000)
                </span>
              </li>
            </ul>
          </div>
          
          <div className="card opacity-0 animate-on-scroll" style={{ animationDelay: "0.6s" }}>
            <h3 className="text-xl font-semibold mb-4 text-revolut-navy">Altri Flussi di Ricavo</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-revolut-green mt-0.5 mr-2 flex-shrink-0" />
                <span>
                  <strong>Commissioni di Interscambio:</strong> Percentuale sulle transazioni effettuate con carte Revolut
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-revolut-green mt-0.5 mr-2 flex-shrink-0" />
                <span>
                  <strong>Partnership Commerciali:</strong> Accordi con altre aziende per servizi integrati o promozioni
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-revolut-green mt-0.5 mr-2 flex-shrink-0" />
                <span>
                  <strong>Servizi Business:</strong> Conti aziendali con funzionalità avanzate e piani dedicati
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-revolut-green mt-0.5 mr-2 flex-shrink-0" />
                <span>
                  <strong>Servizi a Valore Aggiunto:</strong> Prenotazione viaggi (Stays), assicurazioni e altri servizi premium
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSection;
