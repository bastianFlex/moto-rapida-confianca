
import React from "react";
import { Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/eab85b93-bd04-4175-a703-b36b5572e4f2.png" 
            alt="WL Motos Logo" 
            className="h-14 w-auto"
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#servicos" className="font-medium hover:text-primary transition-colors">Serviços</a>
          <a href="#beneficios" className="font-medium hover:text-primary transition-colors">Benefícios</a>
          <a href="#contato" className="font-medium hover:text-primary transition-colors">Contato</a>
          <a 
            href="https://wa.me/5599284042" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2 py-2 px-4 rounded-md transition-colors"
          >
            <Phone size={18} />
            <span>99284-042</span>
          </a>
        </div>

        <div className="md:hidden">
          <a 
            href="https://wa.me/5599284042" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2 p-2 rounded-md transition-colors"
          >
            <Phone size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
