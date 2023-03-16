import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import Timeline from '../timeline';
import styles from './experiences.module.scss';

export default function Experiences() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center min-h-screen py-32">
      <h2 className="text-center text-4xl font-bold mb-8">Experiências</h2>
      <div className="md:w-8/12 w-10/12">
        <div className="timeline">
          <Timeline
            logo="https://firebasestorage.googleapis.com/v0/b/portfolio-ae956.appspot.com/o/mobi7-logo.png?alt=media&token=99c1c6d7-6e13-4fda-a5d9-773e0dcefb20"
            companyName="Mobi7"
            startDate="agosto de 2022"
            description="Empresa focada em telemetria para frotas de veículos leves. Com pouco tempo de existência foi comprada pela Localiza,
             e ajuda a gerenciar a frota de várias unidades de negócio do grupo. Minha função é desenvolver a plataforma que possibilitam a plataforma
             a gerenciar suas frotas, trabalhar junto com o time a estimar e realizar refinamentos técnicos das novas features e das atividades em 
             backlog para medir os esforços a ser empreendidos, e também participar das cerimônias do scrum."
          />
          <Timeline
            logo="https://firebasestorage.googleapis.com/v0/b/portfolio-ae956.appspot.com/o/ntt-data-logo.jpg?alt=media&token=05b2972d-27ce-4c95-883c-da9e24de1971"
            companyName="NTT Data"
            startDate="junho de 2021"
            endDate="julho de 2022"
            description="Uma das maiores empresas de consultoria em tecnologia do mundo. Consultor de desenvolvimento de software para o banco Itaú,
            um dos maiores do Brasil, meu papel era não só escrever código mas também auxiliar na análise das melhores soluções. Conquistar a confinça do
            cliente através de qualidade de código e transparência era um dos comportamentos importantes para alcançar os objetivos da empresa. No período em que
            estive lá, pude contribuir também com o desenvolvimento da carreira de alguns colegas que estvam inicando como desenvolvedores, através do ensino
            e mentoria de tecnologias do dia a dia."
          />
          <Timeline
            logo="https://firebasestorage.googleapis.com/v0/b/portfolio-ae956.appspot.com/o/leadlovers-logo.png?alt=media&token=cc778606-1b8b-401d-91fe-912696c2dcb8"
            companyName="Leadlovers"
            startDate="setembto de 2019"
            endDate="maio de 2021"
            description="Empresa focada em autmoação de marketing digital. Tive a oportunidade de crescer profissionalmente nessa empresa, desenvolvendo inúmeras
            soluções para usuários que queriam fazer as suas ideias crescerem através do marketing digital. As soluções foram de manutenção de construtor de páginas (drag and drop),
            gerenciador de anúncios online, automatizador de textos para email, gerenciador de ferramenta para criação de curso EAD, entre outras ferramentas. Pude ter contato com
            linguagens de programação para backend como C# e frameworks front-end como AngularJs e Angular 2+."
          />
        </div>
      </div>
      <a
        className={`${styles.linkButton}
          rounded-full 
          bg-blue 
          text-base 
          px-8 
          py-4 
          mt-8 
          inline-block 
          shadow-md 
          shadow-white/5`}
        href="https://www.linkedin.com/in/tzampieri/"
        target="_blank"
        rel="noreferrer"
      >
        <span>Ver mais</span>
        <ArrowTopRightOnSquareIcon className={styles.externalLinkIcon} />
      </a>
    </section>
  );
}
