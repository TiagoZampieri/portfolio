import { ArrowRightIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Hero() {
  const gotoAbout = () => {
    const aboutSectionOffset = document.querySelector('#about').offsetTop - 70;
    window.scrollTo({ top: aboutSectionOffset, behavior: 'smooth' });
  };
  return (
    <main className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
      <div className="lg:col-span-7 flex flex-col gap-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary w-fit">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-wider">Disponível para novos projetos</span>
        </div>
        <h1 className="text-5xl font-bold mb-4 md:text-7xl leading-[1.1] tracking-tighter">Transformando ideias em <span className="text-primary">código</span> de alta performance</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
          Especialista em Angular, Next.js e Node.js focado em entregar soluções escaláveis e de alta performance para o seu negócio através de interfaces intuitivas e robustas.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <button className="flex items-center gap-2 bg-primary text-background-dark px-8 py-4 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform" onClick={gotoAbout}>
            <span>Saiba mais</span>
            <ArrowRightIcon className="w-5 h-5" />
          </button>
          <a className="flex items-center gap-2 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 px-8 py-4 rounded-xl font-bold text-lg text-slate-600 hover:scale-[1.02] transition-transform"
            href="https://wa.me/5541991896052?text=Fala,%20Tiago"
            target="_blank"
            rel="noreferrer">
            Vamos conversar
          </a>
        </div>
      </div>
      <div className="lg:col-span-5 relative group">
        <div className="relative bg-slate-200 dark:bg-surface-dark rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 shadow-2xl">
          <Image
            alt="Tiago Zampieri"
            className="w-full h-full rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-700"
            src="/img/nova-foto-perfil.jpg"
            width={200}
            height={200}
          />
        </div>
        <div className="absolute bottom-6 -left-6 bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 p-4 rounded-xl shadow-xl">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <CheckBadgeIcon className="text-primary w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold">7+ anos de exp.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
