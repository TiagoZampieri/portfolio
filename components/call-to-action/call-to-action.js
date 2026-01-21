
export default function CallToAction(props) {
  return (
    <section className="flex flex-col md:flex-row items-center gap-6 md:gap-4 justify-between align-middle bg-slate-900 rounded-3xl px-6 md:px-16 py-8 my-12">
      <div className='flex flex-col gap-1 justify-center'>
        <h2 className="text-white text-4xl font-bold text-center tracking-lighter">
          {props.headline}
        </h2>
        <p className='text-slate-400 text-lg mt-4 md:mt-0'>{props.description}</p>
      </div>
      <div className='flex align-middle'>
        <a
          href="https://wa.me/5541991896052?text=Fala,%20Tiago"
          target="_blank"
          rel="noreferrer"
          className='rounded-2xl whitespace-nowrap text-xl font-black text-background-dark bg-primary px-10 py-5 inline-block shadow-sm hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:scale-[1.02] transition-transform'
        >
          {props.buttonText}
        </a>
      </div>
    </section>
  );
}
