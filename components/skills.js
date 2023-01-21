import Image from 'next/image';
import { useState } from 'react';

export default function Skills() {
  const skills = [
    {
      title: 'Angular',
      description: `Framework de desenvolvimento web. Foi um dos primeiro frameworks da nova geração.
       O surgimento dessa ferramenta, juntamente com outras, ajudou a mudar a forma de desenvolver aplicações web. \n\n
       Trabalho com Angular desde a sua primeira versão, o Angularjs, e desde então acompanho sua evolução. \n\n
       É a minha principal ferramenta e foco de estudos dos últimos anos.`,
    },
    {
      title: 'Next.js',
      description: `É um framework de desenvolvimento web baseado em React. Tenho estudado essa ferramenta para diversificar 
        um pouco mais o conhecimento em desenvolvimento front-end.`,
    },
    {
      title: 'Wordpress',
      description: `É uma ferramenta de CMS baseada em PHP, está presente em grande parte da internet e é utilizado para criação de sites e blogs. 
      \r Trabalho com essa ferramenta para criação de sites para clientes, utilizando os diferentes temas e plugins que o ecossistema oferece.`,
    },
    {
      title: 'NodeJs',
      description: `Software que permite a utilização de Javascript fora de um navegador web. 
      Ter um conhecimento básico dessa ferramente é importante para o desenvolvimento web, mas também já tive a oportunidade de utiliza-la
      para desenvolvimento de API's REST.`,
    },
  ];

  const [skill = { title, description }, setSkill] = useState(skills[0]);

  const isSelected = (skillTitle) => {
    return skill.title === skillTitle;
  };
  return (
    <section className="container mx-auto flex items-center flex-col py-10">
      <h2 className="text-center text-4xl font-bold mb-8">Hard skills</h2>
      <div className="w-8/12 grid grid-cols-2 gap-8">
        <div className="hide grid gap-4 grid-cols-2 grid-rows-2">
          <div
            onClick={() => setSkill(skills[0])}
            className={`w-12/12 h-48 
            bg-gray-200 rounded-xl 
            flex justify-center items-center 
            shadow-lg 
            hover:shadow-2xl hover:scale-110 hover:duration-500 cursor-pointer 
            transition ease-in-out delay-100 ${
              isSelected('Angular') ? 'shadow-2xl scale-110' : null
            }`}
          >
            <Image
              src="/img/angular-logo.png"
              width="150"
              height="150"
              alt="skill"
            />
          </div>
          <div
            className={`w-12/12 h-48 
            bg-gray-200 rounded-xl 
            flex justify-center items-center 
            shadow-lg
            hover:shadow-2xl hover:scale-110 hover:duration-500 cursor-pointer 
            transition ease-in-out delay-100 ${
              isSelected('Next.js') ? 'shadow-2xl scale-110' : null
            }`}
            onClick={() => setSkill(skills[1])}
          >
            <Image
              src="/img/next-logo.png"
              width="150"
              height="150"
              alt="skill"
            />
          </div>
          <div
            className={`w-12/12 h-48 
            bg-gray-200 rounded-xl 
            flex justify-center items-center 
            shadow-lg 
            hover:shadow-2xl hover:scale-110 hover:duration-500 cursor-pointer 
            transition ease-in-out delay-100 ${
              isSelected('Wordpress') ? 'shadow-2xl scale-110' : null
            }`}
            onClick={() => setSkill(skills[2])}
          >
            <Image
              src="/img/wordpress-logo.png"
              width="150"
              height="150"
              alt="skill"
            />
          </div>
          <div
            className={`w-12/12 h-48 
            bg-gray-200 rounded-xl 
            flex justify-center items-center 
            shadow-lg 
            hover:shadow-2xl hover:scale-110 hover:duration-500 cursor-pointer 
            transition ease-in-out delay-100 ${
              isSelected('NodeJs') ? 'shadow-2xl scale-110' : null
            }`}
            onClick={() => setSkill(skills[3])}
          >
            <Image
              src="/img/node-logo.png"
              width="150"
              height="150"
              alt="skill"
            />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3">{skill.title}</h3>
          <p>{skill.description}</p>
        </div>
      </div>
    </section>
  );
}
