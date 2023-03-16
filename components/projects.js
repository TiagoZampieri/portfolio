import Card from './card';

export default function Projects() {
  return (
    <section className="container mx-auto flex items-center flex-col py-44">
      <h2 className="text-center text-4xl font-bold mb-8">Projetos</h2>
      <div className="grid gap-4 md:grid-cols-4 grid-cols-1 w-8/12">
        <Card
          image="https://firebasestorage.googleapis.com/v0/b/portfolio-ae956.appspot.com/o/logo-dzamp.png?alt=media&token=d3343f8b-a8c7-4e04-9bd3-d2a11fc5f0a5"
          link="https://dzamp.com.br/"
        ></Card>
        <Card
          image="https://firebasestorage.googleapis.com/v0/b/portfolio-ae956.appspot.com/o/logo-lepap.png?alt=media&token=9991530f-d75c-4a16-8ab4-372f68aca6f7"
          link="https://lepapstore.com/"
        ></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </section>
  );
}
