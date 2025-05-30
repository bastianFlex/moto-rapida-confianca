
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/4e74b841-7796-48bf-937c-b1c3af8a69cb.png" 
              alt="WL Motos Logo" 
              className="h-14 w-auto"
            />
            <p className="mt-2 text-gray-400">Oficina de motos de confiança</p>
          </div>
          
          <div className="text-center md:text-right">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-4">
              <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
              <a href="#beneficios" className="hover:text-primary transition-colors">Benefícios</a>
              <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
            </div>
            <p className="text-gray-400 text-sm">
              © {currentYear} WL Motos - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
