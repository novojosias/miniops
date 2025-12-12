
import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import About from '@/components/About';
import Clients from '@/components/Clients';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>MiniOps - Transformamos Cliques em Pacientes</title>
        <meta name="description" content="Agência especializada em marketing digital para clínicas e hospitais. Transforme sua presença online em resultados reais." />
      </Helmet>
      <Hero />
      <Services />
      <Pricing />
      <About />
      <Clients />
      <Stats />
      <CTA />
    </>
  );
};

export default Home;
