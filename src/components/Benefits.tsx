
import React from "react";
import { MapPin, Phone, Wrench } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <MapPin className="text-primary" size={24} />,
      title: "Atendimento Local",
      description: "Atendemos direto no bairro, sem burocracia e com facilidade de acesso.",
    },
    {
      icon: <Phone className="text-primary" size={24} />,
      title: "Orçamento Rápido",
      description: "Chama no WhatsApp e receba seu orçamento sem compromisso!",
    },
    {
      icon: <Wrench className="text-primary" size={24} />,
      title: "Serviço de Confiança",
      description: "Feito com cuidado por quem realmente entende de moto no dia a dia.",
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Por que escolher a WL Motos?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div>{benefit.icon}</div>
              <div>
                <h3 className="font-semibold mb-1">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="section-subtitle">O que nossos clientes dizem</h3>
              <div className="mb-6">
                <p className="italic mb-2">
                  "O mecânico foi muito honesto, explicou tudo que precisava fazer na minha 
                  Fan 160 e resolveu rápido. Preço justo e atendimento nota 10!"
                </p>
                <p className="font-semibold">— Carlos Silva</p>
              </div>
              <div>
                <p className="italic mb-2">
                  "Minha Factor 150 estava com problemas na partida e eles resolveram no mesmo dia.
                  Bom atendimento e sem aquelas surpresas na hora de pagar."
                </p>
                <p className="font-semibold">— Ana Oliveira</p>
              </div>
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Nossos Diferenciais</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Preços transparentes, sem taxas escondidas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Atendimento personalizado para cada cliente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Diagnósticos precisos e soluções duradouras</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Sem burocracia — atendimento direto e prático</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Moto bem cuidada é moto rodando tranquila!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
