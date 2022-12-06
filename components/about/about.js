import styles from './about.module.scss';

export default function About() {
  return (
    <section
      className={`${styles.aboutBox} container min-h-screen mx-auto flex flex-col items-center justify-center py-10`}
    >
      <div className="md:w-4/12 w-8/12  about-section">
        <h2 className="text-center text-4xl font-bold mb-8">Sobre</h2>
        <p className="mb-4">
          Oi, eu sou o Tiago. Casado com a Letycia, sonho em ter meu próprio
          negócio e trabalho com desenvolvimento de apliações há mais de 5 anos.
          Nesse tempo tive contato com diversos tipos de negócio em diferentes
          contextos, o que me ensinou a me adaptar para poder gerar valor.
        </p>
        <p className="mb-4">
          Um pouco mais pra baixo conto um pouco mais sobre as empresas onde
          trabalhei: Qual o ramo de atuação, o tamanho da empresa e quais as
          minhas responsabilidades.
        </p>
        <p>Bora trocar uma ideia?</p>
      </div>
      <a
        className={`${styles.buttonCta}
        inline-block relative
        rounded-full 
        bg-blue 
        text-base 
        px-8 py-4 mt-8 
        shadow-md 
        shadow-white/5
        transition ease-in-out delay-100 
        hover:scale-110 hover:duration-500`}
        href="https://wa.me/5541991896052?text=Fala,%20Tiago"
        target="_blank"
        rel="noreferrer"
      >
        Entrar em contato
      </a>
    </section>
  );
}
