import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import About from '../components/about/about';
import CallToAction from '../components/call-to-action/call-to-action';
import Experiences from '../components/experiences/experiences';
import Footer from '../components/footer';
import Header from '../components/header';
import Hero from '../components/hero/hero';
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
    <>
      <Head>
        <title>Tiago Zampieri</title>
        <meta name="description" content="Webdesign - Wordpress - Front-end" />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://www.tiagozampieri.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tiago Zampieri" />
        <meta
          property="og:description"
          content="Webdesign - Wordpress - Front-end"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/portfolio-ae956.appspot.com/o/foto-perfil.jpg?alt=media&token=8a98fc9e-29de-4eb5-b25e-937354e25102"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="tiagozampieri.com" />
        <meta property="twitter:url" content="https://www.tiagozampieri.com/" />
        <meta name="twitter:title" content="Tiago Zampieri" />
        <meta
          name="twitter:description"
          content="Webdesign - Wordpress - Front-end"
        />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/portfolio-ae956.appspot.com/o/foto-perfil.jpg?alt=media&token=8a98fc9e-29de-4eb5-b25e-937354e25102"
        />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Manrope:wght@400;500;700&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-WS5W3GD80E"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: ` window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-WS5W3GD80E', {page_path: window.location.patg});`,
        }}
      />
      <Header />
      <div className="bg-customWhite bg-background-light dark:bg-background-dark px-4">
        <div className='max-w-7xl mx-auto'>
          <Hero />
          <About />
          <Skills />
          <Experiences />
          <CallToAction
            headline="Precisa de ajuda pra fazer sua ideia sair do papel?"
            description="Estou disponível para novos projetos e parcerias. Vamos conversar!"
            buttonText="Fale comigo"
          />
          <Footer />
        </div>
      </div></>
  );
}
