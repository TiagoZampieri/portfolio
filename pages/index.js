import Head from 'next/head';
import { useEffect } from 'react';
import About from '../components/about/about';
import CallToAction from '../components/call-to-action/call-to-action';
import Experiences from '../components/experiences/experiences';
import Footer from '../components/footer';
import Hero from '../components/hero/hero';
import Projects from '../components/projects';
import Skills from '../components/skills';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('hide');
          entry.target.classList.add('show-in');
        }
      });
    });
    const hiddenElements = document.querySelectorAll('.hide');
    hiddenElements.forEach((el) => {
      observer.observe(el);
    });
  });
  return (
    <div className="bg-customWhite">
      <Head>
        <title>Tiago Zampieri</title>
        <meta name="description" content="Front-end - Webdesign" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Skills />
      <CallToAction
        headline="Precisa de ajuda pra fazer sua ideia sair do papel?"
        buttonText="Fale comigo"
      />
      <Footer />
    </div>
  );
}
