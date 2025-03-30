
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="gradient-bg text-white min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
            Il Modello di Business di Revolut nel Mercato Italiano
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-100 animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
            Un'analisi approfondita della strategia, dei servizi e della posizione competitiva della 
            principale neobank nel panorama finanziario italiano
          </p>
          <div className="flex justify-center animate-fade-in opacity-0" style={{ animationDelay: "0.9s" }}>
            <a 
              href="#overview"
              className="inline-flex items-center bg-white text-revolut-navy px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Esplora l'Analisi
              <ArrowDown className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
