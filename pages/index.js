import Head from 'next/head';
import Script from 'next/script';
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
        <meta property="og:description" content="Front-end - Webdesign" />
        <meta property="og:url" content="https://tiagozampieri.com" />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/portfolio-ae956.appspot.com/o/foto-perfil.jpg?alt=media&token=8a98fc9e-29de-4eb5-b25e-937354e25102"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-WS5W3GD80E"
      />
      <Script
        dangerouslySetInnerHtml={{
          __html: ` window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-WS5W3GD80E');`,
        }}
      />
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
