
import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
const Pricing = () => {
  const whatsappLink = 'https://wa.me/5581986778484'; // WhatsApp link

  const plans = [{
    name: 'Essencial',
    price: 'R$ 600',
    period: '/mês',
    features: ['IA supervisionada por humano', 'Até 10 atendimentos comerciais diários', 'Disponibilidade 24/7', 'Mentoria em grupo para 100k', 'Relatórios semanais'],
    popular: true
  }, {
    name: 'Profissional',
    price: 'R$ 3.500',
    period: '/mês',
    features: ['Tudo do essencial', 'Atendimento comercial ilimitado',
    // Edited as requested
    'Otimização de conversões', 'Relatórios avançados de performance', 'Playbook de vendas', 'Consultoria especializada', 'Implementação de CRM' // Added as requested
    ]
  }, {
    name: 'Exclusivo',
    price: 'R$ 4.997',
    oldPrice: 'R$ 8.600',
    period: '/mês',
    features: ['Tudo do plano Profissional', 'Gestão de redes sociais', 'Criação de conteúdo estratégico', 'Estratégia personalizada', 'Análise de concorrência', 'Business Intelligence (BI)', 'Gestão completa de Tráfego Pago (Meta ADS, Google ADS, TikTok ADS)']
  }];
  const handlePlanClick = () => {
    window.open(whatsappLink, '_blank'); // Open WhatsApp link in a new tab
  };
  return <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Planos e Preços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Investimento transparente para escalar o faturamento da sua clínica
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {plans.map((plan, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} className={`bg-white rounded-2xl p-8 flex flex-col ${plan.popular ? 'ring-2 ring-gray-900 shadow-2xl relative transform scale-105 z-10' : 'shadow-lg border border-gray-100'}`}>
              {plan.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
                    Mais Escolhido
                  </span>
                </div>}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex flex-col">
                  {plan.oldPrice && <span className="text-sm text-gray-400 line-through font-medium">De {plan.oldPrice}</span>}
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm md:text-base">{feature}</span>
                  </li>)}
              </ul>

              <Button onClick={handlePlanClick} className={`w-full py-6 rounded-lg font-semibold transition-all ${plan.popular ? 'bg-gray-900 hover:bg-gray-800 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}>
                Selecionar Plano
              </Button>
            </motion.div>)}
        </div>

        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="max-w-4xl mx-auto bg-white border-2 border-gray-900 rounded-2xl p-8 md:p-10 relative shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="flex-shrink-0 bg-gray-100 p-4 rounded-full">
                    <ShieldCheck className="w-12 h-12 text-gray-900" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Garantia MiniOps
                    </h3>
                    <p className="text-lg text-gray-700 font-medium leading-relaxed">"Sem pegadinhas, sem multa por quebra de contrato e com garantia de cumprimento do planejamento"</p>
                    <p className="text-gray-500 mt-2">
                        Seu resultado é o nosso compromisso.
                    </p>
                </div>
            </div>
        </motion.div>

      </div>
    </section>;
};
export default Pricing;
