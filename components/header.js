export default function About() {
  const goto = (section) => {
    const aboutSectionOffset = document.querySelector(`#${section}`).offsetTop - 70;
    window.scrollTo({ top: aboutSectionOffset, behavior: 'smooth' });
  };
  return (
    <header className='sticky px-4 top-0 z-50 w-full border-b border-slate-200 bg-background-light backdrop-blur-md text-slate-900 dark:text-slate-100'>
      <div className='max-w-7xl mx-auto h-16 flex items-center justify-between'>
        <span className='text-xl font-display font-bold tracking-light'>tiago zampieri</span>
        <nav className='hidden md:flex items-center gap-8'>
          <a onClick={() => goto('about')} className='font-medium text-sm hover:text-primary transition-colors cursor-pointer'>Sobre</a>
          <a onClick={() => goto('skills')} className='font-medium text-sm hover:text-primary transition-colors cursor-pointer'>Skills</a>
          <a onClick={() => goto('experiences')} className='font-medium text-sm hover:text-primary transition-colors cursor-pointer'>Experiências</a>
        </nav>
        <a
          href="https://wa.me/5541991896052?text=Fala,%20Tiago" target="_blank"
          rel="noreferrer" className='bg-primary hover:bg-primary/90 text-background-dark px-5 py-2 rounded-lg font-bold text-sm shadow-lg shadow-primary/10 hover:scale-[1.02] transition-transform'>Entre em contato
        </a>
      </div>
    </header>
  )
}