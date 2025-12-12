import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  const clients = [
    'Dra Paola Cabbia',
    'Clínica Dra Janaína Pinheiro',
    'Odontológicus',
    'Hospital São Marcos',
    'Hospital Primavera'
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Confiado por clínicas e hospitais de referência
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <p className="text-lg font-semibold text-gray-900">{client}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;