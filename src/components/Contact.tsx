
import React from "react";
import { Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Entre em Contato</h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-xl font-semibold mb-4">Horário de Funcionamento</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Segunda a Sexta</span>
                  <span className="font-medium">08:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado</span>
                  <span className="font-medium">08:00 - 12:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo</span>
                  <span className="font-medium">Fechado</span>
                </li>
              </ul>
            </div>
            
            <h3 className="section-subtitle">Nossa Localização</h3>
            <div className="flex items-start gap-3 mb-6">
              <MapPin className="text-primary mt-1" size={20} />
              <div>
                <p>Atendimento direto no bairro – Sem burocracia</p>
                <p className="text-gray-500 text-sm">Peça a localização pelo WhatsApp</p>
              </div>
            </div>
            
            <h3 className="section-subtitle">WhatsApp para Orçamento</h3>
            <div className="flex items-center gap-3 mb-6">
              <Phone className="text-primary" size={20} />
              <p className="font-semibold">(99) 9284-042</p>
            </div>
            
            <div className="animate-pulse-slow">
              <a 
                href="https://wa.me/5599284042" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 w-full"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="section-subtitle">Envie sua Mensagem</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone/WhatsApp</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Seu telefone"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Serviço Desejado</label>
                <select
                  id="service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="oil">Troca de óleo</option>
                  <option value="maintenance">Revisão básica</option>
                  <option value="chain">Manutenção de corrente/freio</option>
                  <option value="electrical">Reparos elétricos</option>
                  <option value="other">Outro serviço</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Descreva o serviço que você precisa..."
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="bike" className="block text-sm font-medium text-gray-700 mb-1">Modelo da Moto</label>
                <input
                  type="text"
                  id="bike"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Ex: Honda CG 160"
                />
              </div>
              
              <button
                type="submit"
                className="cta-button w-full"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
