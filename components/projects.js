import Card from './card';

export default function Projects() {
  return (
    <section className="container mx-auto flex items-center flex-col py-44">
      <h2 className="text-center text-4xl font-bold mb-8">Projetos</h2>
      <div className="grid gap-4 grid-cols-4 w-8/12">
        <Card image="/img/YouTube-logo.png" bgColor="white" link="#"></Card>
        <Card image="/img/dzamp-logo.png" bgColor="black" link="#"></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </section>
  );
}
