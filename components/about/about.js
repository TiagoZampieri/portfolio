import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
import styles from './about.module.scss';

export default function About() {
  return (
    <section
      className={`${styles.aboutBox} container mx-auto flex flex-col items-center justify-center py-42`}
      id="about"
    >
      <div className="md:w-4/12 w-10/12 hide about-section">
        <h2 className="text-center text-4xl font-bold mb-8">Sobre</h2>
        <p className="mb-4">
          Oi, eu sou o Tiago. Cristão, casado com a Letycia e trabalho com
          desenvolvimento de apliações e websites há mais de 5 anos. Nesse tempo
          tive contato com diversos tipos de negócio em diferentes contextos, o
          que me ensinou a me adaptar para poder gerar valor.
        </p>
        <p className="mb-4">
          Um pouco mais pra baixo conto um pouco mais sobre as empresas onde
          trabalhei: ramo de atuação, o tamanho da empresa e quais as minhas
          responsabilidades.
        </p>
        <p>Bora trocar uma ideia?</p>
      </div>
      <a
        href="https://wa.me/5541991896052?text=Fala,%20Tiago"
        target="_blank"
        rel="noreferrer"
        className={`${styles.linkButton}
        rounded-full text-1xl bg-blue text-base px-6 py-3 mt-8 inline-block shadow-sm`}
      >
        <span>Entrar em contato</span>
        <ChatBubbleOvalLeftIcon className={styles.externalLinkIcon} />
      </a>
    </section>
  );
}
