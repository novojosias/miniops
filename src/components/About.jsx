
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, TrendingUp } from 'lucide-react';
const About = () => {
  const milestones = [{
    icon: Calendar,
    title: 'Nossa Fundação',
    description: 'Fundada em maio de 2025, nascemos com a missão de revolucionar o marketing digital na área da saúde.'
  }, {
    icon: Award,
    title: 'Especialização',
    description: 'Focados exclusivamente em clínicas e hospitais, desenvolvemos expertise única no setor médico.'
  }, {
    icon: TrendingUp,
    title: 'Crescimento',
    description: 'Já ajudamos mais de 100 clientes a transformarem sua presença digital em resultados reais.'
  }];
  return <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre Nós
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Com executivos egressos de grandes empresas de marketing digital, a MiniOps é uma agência especializada em transformar a presença digital de clínicas e hospitais em resultados tangíveis. Desde maio de 2025, temos ajudado profissionais da saúde a conquistarem mais pacientes através de estratégias de marketing digital comprovadas.
            </p>
            {/* Added the new text here as there was no direct "20+ anos de experiência" to replace. */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Com nossa expertise, garantimos uma taxa de redução média de 20% nos custos comerciais dos nossos clientes, otimizando seus investimentos em marketing.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nossa abordagem combina conhecimento profundo do setor de saúde com as mais avançadas técnicas de marketing digital, garantindo que cada clique se transforme em um paciente real para sua clínica.
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="space-y-6">
            {milestones.map((milestone, index) => <div key={index} className="flex items-start bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <milestone.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>)}
          </motion.div>
        </div>
      </div>
    </section>;
};
export default About;
