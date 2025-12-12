
import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
const CTA = () => {
  const whatsappLink = 'https://wa.me/5581986778484'; // WhatsApp link

  const handleContactClick = () => {
    window.open(whatsappLink, '_blank'); // Open WhatsApp link in a new tab
  };

  return <section id="cta" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Pronto para Transformar Sua Clínica?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Fale com nossos especialistas e descubra como podemos ajudar você a conquistar mais pacientes através do marketing digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-6 text-lg rounded-lg group" onClick={handleContactClick}>
              Falar com Especialista
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span>(81) 98677-8484</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <span>contato@miniops.com.br</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default CTA;
