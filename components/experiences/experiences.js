import { BriefcaseIcon } from '@heroicons/react/24/outline';
import styles from './experiences.module.scss';

export default function Experiences() {
  return (
    <section className="space-y-12 py-12" id="experiences">
      <div className="flex flex-col items-center text-center gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Experiências</h2>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>
      <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-slate-300 dark:before:via-slate-800 before:to-transparent">
        <div className={`${styles.experience} relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}>
          <div className={`${styles.experienceIcon} md:absolute flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background-light dark:bg-background-dark text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}>
            <BriefcaseIcon className='text-primary w-6'></BriefcaseIcon>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="font-bold text-xl">Senior Front-end Developer</h3>
                <p className="text-primary font-medium">Doutor Finanças</p>
              </div>
              <time className="px-3 py-1 bg-slate-100 dark:bg-background-dark rounded text-xs font-bold text-slate-500 uppercase tracking-wider">Abr 2025 - o momento</time>
            </div>
            <p className='text-slate-600 dark:text-slate-400 text-sm'>
              Startup baseada em Lisboa-PT, que oferece soluções financeiras para pessoas físicas. Minha função é desenvolver a plataforma web que possibilita aos usuários gerenciar os processos de análise de crédito e dados pessoais. Realizo análise e refinamentos técnicos das novas ações do negócio e de soluções para problemas técnicos e de usabilidade. Também presto manutenção para a o backend da aplicação, escrito em PHP.
            </p>
          </div>
        </div>
        <div className={`${styles.experience} relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}>
          <div className={`${styles.experienceIcon} md:absolute flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark text-slate-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}>
            <BriefcaseIcon className='text-slate-400 w-6'></BriefcaseIcon>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="font-bold text-xl">Front-end Developer</h3>
                <p className="text-primary font-medium">Mobi7</p>
              </div>
              <time className="px-3 py-1 bg-slate-100 dark:bg-background-dark rounded text-xs font-bold text-slate-500 uppercase tracking-wider">Ago 2022 - Mar 2025</time>
            </div>
            <p className='text-slate-600 dark:text-slate-400 text-sm'>
              Empresa focada em telemetria para frotas de veículos leveSs. Com pouco tempo de existência foi comprada pela Localiza, e ajuda a gerenciar a frota de várias unidades de negócio do grupo. Minha função é desenvolver a plataforma que possibilitam a plataforma a gerenciar suas frotas, trabalhar junto com o time a estimar e realizar refinamentos técnicos das novas features e das atividades em backlog para medir os esforços a ser empreendidos, e também participar das cerimônias do scrum.
            </p>
          </div>
        </div>
        <div className={`${styles.experience} relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}>
          <div className={`${styles.experienceIcon} md:absolute flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark text-slate-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}>
            <BriefcaseIcon className='text-slate-400 w-6'></BriefcaseIcon>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="font-bold text-xl">Senior Front-end Developer</h3>
                <p className="text-primary font-medium">NTT Data</p>
              </div>
              <time className="px-3 py-1 bg-slate-100 dark:bg-background-dark rounded text-xs font-bold text-slate-500 uppercase tracking-wider">Jun 2021 - Jul 2022</time>
            </div>
            <p className=' text-slate-600 dark:text-slate-400 text-sm'>
              Consultor de desenvolvimento de software para o banco Itaú, um dos maiores do Brasil, meu papel era não só escrever código mas também auxiliar na análise de soluções. Conquistar a confinça do cliente através da qualidade e a transparência era importante para alcançar os objetivos da empresa. No período em que estive lá, pude contribuir também com o desenvolvimento da carreira de alguns colegas que estvam inicando através do ensino e mentoria de tecnologias.
            </p>
          </div>
        </div>
        <div className={`${styles.experience} relative flex items-center md:justify-center md:odd:flex-row-reverse group`}>
          <a className="flex items-center gap-2 bg-primary text-background-dark px-8 py-4 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform" href="https://www.linkedin.com/in/tzampieri/"
            target="_blank"
            rel="noreferrer">
            <span>Ver mais</span>
          </a>
        </div>
      </div>
    </section >
  );
}
