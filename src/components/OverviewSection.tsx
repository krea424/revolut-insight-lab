
import React, { useEffect, useRef } from "react";
import { Calendar, Users, LineChart, Globe, CreditCard } from "lucide-react";

const OverviewSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.stat-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-fade-in');
              card.classList.remove('opacity-0');
            }, index * 150);
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
  
  return (
    <section id="overview" className="section bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-12">Panoramica Aziendale</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="stat-card opacity-0">
            <Calendar size={40} className="text-revolut-blue mb-3" />
            <h3 className="text-xl font-bold mb-2">Fondata nel 2015</h3>
            <p className="text-gray-600">Da Nikolay Storonsky e Vlad Yatsenko nel Regno Unito come soluzione per spese internazionali</p>
          </div>
          
          <div className="stat-card opacity-0">
            <Users size={40} className="text-revolut-blue mb-3" />
            <h3 className="text-xl font-bold mb-2">2 Milioni di Clienti</h3>
            <p className="text-gray-600">Raggiunti in Italia nel 2024, con obiettivo di 4 milioni entro la fine del 2025</p>
          </div>
          
          <div className="stat-card opacity-0">
            <LineChart size={40} className="text-revolut-blue mb-3" />
            <h3 className="text-xl font-bold mb-2">+84% Transazioni</h3>
            <p className="text-gray-600">Aumento dei volumi di transazione in Italia nell'ultimo anno</p>
          </div>
          
          <div className="stat-card opacity-0">
            <Globe size={40} className="text-revolut-blue mb-3" />
            <h3 className="text-xl font-bold mb-2">50+ Milioni</h3>
            <p className="text-gray-600">Clienti raggiunti a livello globale con presenza in oltre 35 paesi</p>
          </div>
          
          <div className="stat-card opacity-0">
            <CreditCard size={40} className="text-revolut-blue mb-3" />
            <h3 className="text-xl font-bold mb-2">36 Valute</h3>
            <p className="text-gray-600">Supportate nei conti multivaluta per pagamenti e trasferimenti internazionali</p>
          </div>
          
          <div className="stat-card opacity-0">
            <LineChart size={40} className="text-revolut-blue mb-3" />
            <h3 className="text-xl font-bold mb-2">+470%</h3>
            <p className="text-gray-600">Crescita dei clienti italiani che hanno aperto conti di investimento</p>
          </div>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="section-subtitle text-center">Una Rivoluzione nei Servizi Finanziari</h3>
          <p className="text-gray-700 text-center">
            Revolut ha rapidamente consolidato la sua presenza nel mercato italiano dei servizi finanziari digitali dal suo lancio,
            trasformandosi da semplice soluzione per spese internazionali a piattaforma finanziaria completa,
            con l'ambizione di diventare la prima vera banca globale e una "super-app" finanziaria.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
