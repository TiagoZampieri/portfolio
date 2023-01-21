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
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-3948a.appspot.com/o/IMG_4585-quadrado.jpg?alt=media&token=f6f20d8c-ce85-4017-9b75-6f3fecb5cfd2"
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
