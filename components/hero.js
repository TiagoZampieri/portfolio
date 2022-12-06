import Image from 'next/image';

export default function Hero() {
  return (
    <main className="min-h-screen py-4 flex flex-col justify-center items-center">
      <Image
        alt="Tiago Zampieri"
        className="rounded-full"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
        width={150}
        height={150}
        style={{ height: '150px' }}
      />
      <h1 className="text-5xl font-bold mt-8 mb-4">Tiago Zampieri</h1>
      <span>Front-end - Wordpress - Mobile</span>
      <a
        className="rounded-full bg-blue text-base px-8 py-4 mt-8 inline-block shadow-md shadow-white/5"
        href="https://wa.me/5541991896052?text=Fala,%20Tiago"
        target="_blank"
        rel="noreferrer"
      >
        Entrar em contato
      </a>
    </main>
  );
}
