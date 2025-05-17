import React from "react";
import { Wrench, Settings, Calendar, Bike, ArrowRight } from "lucide-react";
const Services = () => {
  const services = [{
    icon: <Wrench className="service-icon" />,
    title: "Troca de Óleo",
    description: "Troca rápida com óleos de qualidade para todos os modelos de motos."
  }, {
    icon: <Settings className="service-icon" />,
    title: "Revisão Básica",
    description: "Verificação completa dos componentes essenciais para sua segurança."
  }, {
    icon: <Bike className="service-icon" />,
    title: "Corrente e Freios",
    description: "Ajuste de correntes, troca de pastilhas e manutenção do sistema de freios."
  }, {
    icon: <Calendar className="service-icon" />,
    title: "Elétrica e Mecânica",
    description: "Reparos elétricos simples e serviços de mecânica leve para seu veículo."
  }];
  return <section id="servicos" className="py-20 bg-slate-200">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Oferecemos uma variedade de serviços para manter sua moto sempre em perfeitas condições. 
          Trabalhamos com as principais marcas do mercado: Honda, Yamaha, Dafra, Shineray, Suzuki e outras.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => <div key={index} className="service-card">
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-center text-gray-600">{service.description}</p>
            </div>)}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">Mais Serviços Disponíveis</h3>
          <ul className="max-w-lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
            <li className="flex items-center gap-2">
              <ArrowRight className="text-primary" size={18} />
              <span>Vela e embreagem</span>
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="text-primary" size={18} />
              <span>Manutenção preventiva</span>
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="text-primary" size={18} />
              <span>Troca de componentes</span>
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="text-primary" size={18} />
              <span>Diagnóstico de problemas</span>
            </li>
          </ul>

          <div className="mt-8">
            <p className="text-gray-500 italic mb-6">
              Não somos autorizados nem fazemos vistoria, mas somos experientes, 
              honestos e resolvemos o que sua moto precisa sem complicação.
            </p>
            <a href="https://wa.me/5599284042" target="_blank" rel="noopener noreferrer" className="cta-button inline-flex items-center gap-2">
              Ver todos os serviços <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;