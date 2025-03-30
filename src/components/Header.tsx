
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-revolut-navy">Revolut Insight Lab</h1>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#overview" className="text-gray-700 hover:text-revolut-blue font-medium">
            Overview
          </a>
          <a href="#business-model" className="text-gray-700 hover:text-revolut-blue font-medium">
            Business Model
          </a>
          <a href="#products" className="text-gray-700 hover:text-revolut-blue font-medium">
            Products
          </a>
          <a href="#market" className="text-gray-700 hover:text-revolut-blue font-medium">
            Market Analysis
          </a>
          <a href="#swot" className="text-gray-700 hover:text-revolut-blue font-medium">
            SWOT
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 hover:text-revolut-blue"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-6 shadow-md">
          <div className="flex flex-col space-y-4">
            <a 
              href="#overview" 
              className="text-gray-700 hover:text-revolut-blue font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Overview
            </a>
            <a 
              href="#business-model" 
              className="text-gray-700 hover:text-revolut-blue font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Business Model
            </a>
            <a 
              href="#products" 
              className="text-gray-700 hover:text-revolut-blue font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a 
              href="#market" 
              className="text-gray-700 hover:text-revolut-blue font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Market Analysis
            </a>
            <a 
              href="#swot" 
              className="text-gray-700 hover:text-revolut-blue font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              SWOT
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
