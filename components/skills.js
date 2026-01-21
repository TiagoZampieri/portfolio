import Image from 'next/image';
import styles from './skills.module.scss';

export default function Skills() {
  return (
    <section className="space-y-8 py-12" id="skills">
      <div className="flex flex-col items-center text-center gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Tech Stack &amp; Skills</h2>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className={`${styles.bentoCard} flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark p-8 items-center text-center`}>
          <div className="size-16 rounded-full bg-pink-500/10 flex items-center justify-center">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-ae956.appspot.com/o/angular_icon_gradient.gif?alt=media&token=ca42a9cf-37db-4c0f-9385-f899de31daaa"
              width="64"
              height="64"
              alt="Logo Angular"
            />
          </div>
          <div>
            <h3 className="font-bold text-xl">Angular</h3>
            <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest font-bold">Enterprise Apps</p>
          </div>
        </div>
        <div className={`${styles.bentoCard} flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark p-8 items-center text-center`}>
          <div className="size-16 rounded-full bg-black-500/10 flex items-center justify-center">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-ae956.appspot.com/o/nextjs-icon-dark-background.png?alt=media&token=4340ec50-0e57-46d4-8916-c779a076cab9"
              width="64"
              height="64"
              alt="Logo NextJS"
            />
          </div>
          <div>
            <h3 className="font-bold text-xl">NextJS</h3>
            <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest font-bold">SSR & SEO</p>
          </div>
        </div>
        <div className={`${styles.bentoCard} flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark p-8 items-center text-center`}>
          <div className="size-16 rounded-full bg-blue-500/10 flex items-center justify-center">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-ae956.appspot.com/o/wordpress-logo.png?alt=media&token=5538d56e-db6b-4fa5-a1b4-5c8e47c99942"
              width="64"
              height="64"
              alt="Logo Wordpress"
            />
          </div>
          <div>
            <h3 className="font-bold text-xl">Wordpress</h3>
            <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest font-bold">CMS & Websites</p>
          </div>
        </div>
        <div className={`${styles.bentoCard} flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark p-8 items-center text-center`}>
          <div className="size-16 rounded-full bg-green-500/10 flex items-center justify-center">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-ae956.appspot.com/o/nodejs-icon.png?alt=media&token=b40092ee-a8bb-4d8a-a1a5-44c8bfab53dc"
              width="64"
              height="64"
              alt="Logo Node"
            />
          </div>
          <div>
            <h3 className="font-bold text-xl">NodeJS</h3>
            <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest font-bold">Enterprise Apps</p>
          </div>
        </div>
      </div>
    </section>
  );
}
