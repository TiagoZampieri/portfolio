import Image from 'next/image';

export default function Hero() {
  return (
    <main className="min-h-screen py-4 flex flex-col justify-center items-center">
      <Image
        alt="Tiago Zampieri"
        className="rounded-full"
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-3948a.appspot.com/o/IMG_4585-quadrado.jpg?alt=media&token=f6f20d8c-ce85-4017-9b75-6f3fecb5cfd2"
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
