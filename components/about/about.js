
export default function About() {
  return (
    <section
      className='py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'
      id="about"
    >
      <div className='lg:col-span-5 relative'>
        <div className='md:pl-8 space-y-6'>
          <h2 className='text-4xl md:text-5xl font-bold tracking-tighter leading-tight'>
            Um pouco <span className='text-primary'>sobre mim</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>
      </div>
      <div className='lg:col-span-7'>
        <div className='bg-white border border-slate-200 p-8 md:p-10 rounded-3xl shadow-sm'>
          <div className='space-y-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed'></div>
          <p className="mb-4">
            Oi, eu sou o Tiago. Cristão, casado com a Letycia, pai do Samuel e trabalho com
            desenvolvimento de apliações e websites há mais de 7 anos. Nesse tempo
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
      </div>
    </section>
  );
}
