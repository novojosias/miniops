import React from 'react';
import { PhoneIncoming, Users, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: PhoneIncoming,
      title: 'Terceirização de Atendimento',
      description: 'Assumimos o comercial da sua clínica. Nossa equipe especializada atende, qualifica e agenda seus pacientes, permitindo que você foque na medicina.'
    },
    {
      icon: Bot,
      title: 'Tecnologia Híbrida',
      description: 'Unimos o melhor da Inteligência Artificial com a empatia humana. Atendimento rápido, preciso e acolhedor, disponível quando seu paciente precisa.'
    },
    {
      icon: Users,
      title: 'Gestão Comercial',
      description: 'Não apenas atendemos: vendemos. Transformamos leads e curiosos em pacientes particulares através de scripts de alta conversão e follow-up rigoroso.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold tracking-wider text-blue-600 uppercase mb-2 block">
            Nosso Core Business
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terceirização de Atendimento Comercial
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Muito além do marketing: somos o braço comercial da sua clínica. Garantimos que nenhum contato seja perdido e maximizamos sua taxa de agendamento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;