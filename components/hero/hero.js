import Image from 'next/image';
import { ArrowSmallDownIcon } from '@heroicons/react/24/outline';
import styles from './hero.module.scss';

export default function Hero() {
  const gotoAbout = () => {
    const aboutSectionOffset = document.querySelector('#about').offsetTop - 70;
    window.scrollTo({ top: aboutSectionOffset, behavior: 'smooth' });
  };
  return (
    <main className="min-h-screen py-4 flex flex-col justify-center items-center">
      <Image
        alt="Tiago Zampieri"
        className="rounded-full"
        src="/img/foto-perfil.jpg"
        width={150}
        height={150}
        style={{ height: '150px' }}
      />
      <h1 className="text-5xl font-bold mt-8 mb-4">Tiago Zampieri</h1>
      <span>Front-end - Wordpress - Mobile</span>
      <button
        className={`${styles.linkButton}
        rounded-full text-1xl bg-blue text-base px-6 py-3 mt-8 inline-block shadow-sm`}
        onClick={gotoAbout}
        goto="about"
      >
        <span>Saber mais</span>
        <ArrowSmallDownIcon className={styles.externalLinkIcon} />
      </button>
    </main>
  );
}
