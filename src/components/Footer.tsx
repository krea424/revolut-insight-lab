
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-revolut-navy text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Revolut Insight Lab</h2>
            <p className="text-gray-300">FinEu presenta: Analisi del modello di business Revolut nel mercato italiano</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="mt-6 md:mt-0 flex items-center bg-white/10 hover:bg-white/20 transition-colors rounded-full p-3"
          >
            <ArrowUp className="h-6 w-6" />
          </button>
        </div>
        
        <hr className="border-white/10 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} Revolut Insight Lab. Creato per scopi informativi e didattici.
          </p>
          
          <div className="flex space-x-4">
            <a href="#overview" className="text-gray-300 hover:text-white transition-colors">
              Overview
            </a>
            <a href="#business-model" className="text-gray-300 hover:text-white transition-colors">
              Business Model
            </a>
            <a href="#products" className="text-gray-300 hover:text-white transition-colors">
              Prodotti
            </a>
            <a href="#market" className="text-gray-300 hover:text-white transition-colors">
              Mercato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
