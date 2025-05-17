
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gray-100 pt-10 pb-20">
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
              <a
                href="#contato"
                className="cta-button flex items-center justify-center gap-2"
              >
                Agendar Serviço <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/5599284042"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 hover:border-primary bg-white text-gray-800 hover:text-primary font-semibold py-3 px-8 rounded-md shadow-sm flex items-center justify-center gap-2 transition-all duration-300"
              >
                Fazer Orçamento
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="w-full max-w-md">
              <div className="relative">
                {/* Logo estilizado */}
                <div className="flex flex-col items-center">
                  {/* Imagem da moto no topo */}
                  <div className="relative w-full h-24 mb-2">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-16">
                      <div className="relative w-full h-full">
                        {/* Silhueta da moto estilizada */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <svg width="120" height="60" viewBox="0 0 120 60" className="fill-current">
                            <path d="M20,30 C20,30 35,10 60,10 C85,10 100,30 100,30 C100,30 85,50 60,50 C35,50 20,30 20,30 Z" fill="none" stroke="#ea384c" strokeWidth="3" />
                            <path d="M30,30 L90,30" stroke="#222" strokeWidth="3" />
                            <circle cx="30" cy="30" r="10" fill="#222" />
                            <circle cx="90" cy="30" r="10" fill="#222" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Nome WL MOTOS */}
                  <div className="flex items-center mb-2">
                    <span className="text-primary text-5xl font-bold mr-1">WL</span>
                    <span className="text-gray-900 text-5xl font-bold">MOTOS</span>
                  </div>
                  
                  {/* Subtítulo */}
                  <p className="text-gray-800 text-lg text-center font-medium mb-2">
                    SERVIÇOS, PEÇAS E PREPARAÇÕES
                  </p>
                  
                  {/* Número de telefone */}
                  <p className="text-gray-900 text-xl font-bold mb-4">
                    67 992840420
                  </p>
                  
                  {/* Linha curva na parte inferior */}
                  <div className="w-48 h-8 relative">
                    <div className="absolute w-full h-full top-0 left-0">
                      <svg width="100%" height="100%" viewBox="0 0 100 20" preserveAspectRatio="none">
                        <path d="M0,0 Q50,40 100,0" fill="none" stroke="#222" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
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
    </section>
  );
};

export default Hero;
