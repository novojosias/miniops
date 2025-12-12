
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
const Hero = () => {
  const whatsappLink = 'https://wa.me/5581986778484'; // WhatsApp link

  const handleCTAClick = () => {
    window.open(whatsappLink, '_blank'); // Open WhatsApp link in a new tab
  };
  return <section className="relative min-h-[calc(100vh-64px)] flex flex-col justify-center bg-white overflow-hidden py-16 md:py-24 lg:pt-8 lg:pb-0"> {/* Adjusted min-h, added flex-col and justify-center, adjusted vertical padding */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 py-8 lg:py-16"> {/* Adjusted padding */}
        {/* Logo at the very top */}
        <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="text-center mb-10 md:mb-12 lg:mb-16">
          <img src="https://horizons-cdn.hostinger.com/f559ee9c-5b09-40b9-addb-e0be24a34526/whatsapp-image-2025-12-02-at-14.47.20-ECcda.png" alt="MiniOps Logo" className="h-20 md:h-24 w-auto mx-auto" // Slightly larger logo for prominence
        />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"> {/* Changed items-center to items-start */}
          {/* Text Content */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transformamos <span className="text-gray-700">Cliques</span> em <span className="text-gray-700">Pacientes</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl lg:max-w-none mx-auto">Especialistas em marketing e vendas 360º para clínicas e hospitais. Aumente sua visibilidade online e conquiste mais pacientes com estratégias comprovadas.</p>
            
            <Button onClick={handleCTAClick} size="lg" className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-6 text-lg rounded-lg group transition-all">
              Falar com Especialista
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Image Content */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="relative flex justify-center lg:justify-end">
            <div className="relative max-w-md md:max-w-lg lg:max-w-full w-full"> 
              <img alt="Profissional de saúde usando tecnologia digital" className="rounded-2xl shadow-2xl w-full h-auto object-cover" src="https://images.unsplash.com/photo-1666886573301-b5d526cfd518" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <p className="text-3xl font-bold text-gray-900">100+</p>
                <p className="text-gray-600">Clientes Atendidos</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;
