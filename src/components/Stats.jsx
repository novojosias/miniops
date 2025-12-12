import React from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: '100+',
      label: 'Clientes Ativos',
      description: 'Clínicas e hospitais confiam em nosso trabalho'
    },
    {
      icon: DollarSign,
      value: 'R$ 3M+',
      label: 'Em Vendas Geradas',
      description: 'Resultados concretos para nossos clientes'
    },
    {
      icon: Award,
      value: '20+',
      label: 'Anos de Experiência',
      description: 'Expertise comprovada no mercado'
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos Números
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Resultados que falam por si
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</div>
              <p className="text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;