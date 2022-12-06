import Head from 'next/head';
import About from '../components/about/about';
import CallToAction from '../components/call-to-action';
import Experiences from '../components/Experiences';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Projects from '../components/projects';
import Skills from '../components/skills';

export default function Home() {
  return (
    <div className="bg-customBlack">
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
        headline="Precisa de um desenvolvedor?"
        buttonText="Fale comigo"
      />
      <Footer />
    </div>
  );
}
