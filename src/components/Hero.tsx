import React from "react";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  return <section className="relative pt-10 pb-20 bg-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Oficina de Moto, Rápida e de Confiança
            </h1>
            <p className="text-lg mb-6 text-gray-700">
              Para sua Honda, Yamaha e muito mais! Tem moto e precisa de uma manutenção boa, rápida e que cabe no bolso? Aqui é o lugar certo!
            </p>
            <p className="mb-8 text-gray-600">
              A gente cuida da sua moto com atenção de verdade, sem enrolação e com aquele preço justo que todo motociclista gosta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contato" className="cta-button flex items-center justify-center gap-2">
                Agendar Serviço <ArrowRight size={18} />
              </a>
              <a href="https://wa.me/556792840420" target="_blank" rel="noopener noreferrer" className="border border-gray-300 hover:border-primary bg-white text-gray-800 hover:text-primary font-semibold py-3 px-8 rounded-md shadow-sm flex items-center justify-center gap-2 transition-all duration-300">
                Fazer Orçamento
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="w-full max-w-md flex justify-center items-center">
              <img
  src="/lovable-uploads/4e74b841-7796-48bf-937c-b1c3af8a69cb.png"
  alt="WL Motos Logo"
  className="w-full max-w-xs h-auto opacity-15 md:opacity-100"
/>

            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-primary/10 to-primary/5 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between gap-4 text-center md:text-left">
            <div className="px-4">
              <p className="font-semibold">Atendimento Rápido</p>
              <p className="text-sm text-gray-600">Sem esperas desnecessárias</p>
            </div>
            <div className="px-4">
              <p className="font-semibold">Preço Justo</p>
              <p className="text-sm text-gray-600">Sem surpresas na conta</p>
            </div>
            <div className="px-4">
              <p className="font-semibold">Mecânicos Experientes</p>
              <p className="text-sm text-gray-600">Confiança e qualidade</p>
            </div>
            <div className="px-4">
              <p className="font-semibold">Várias Marcas</p>
              <p className="text-sm text-gray-600">Honda, Yamaha, Suzuki e mais</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;