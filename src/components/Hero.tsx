
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section 
      className="text-white min-h-screen flex items-center justify-center pt-16 relative"
      style={{
        backgroundImage: "url('/lovable-uploads/86e51c87-ce4f-45e7-99fb-66dde1cae9b0.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
            <img 
              src="/logo_fineu.png" 
              alt="FinEu Logo" 
              className="h-56 mx-auto"
            />
            <h2 className="text-2xl md:text-3xl font-semibold mt-4 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
              presenta
            </h2>
          </div>
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
