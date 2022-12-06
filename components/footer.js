import Card from './card';

export default function Footer() {
  return (
    <footer className="container mx-auto flex justify-between items-center py-10">
      <p>tzampieri7@gmail.com</p>
      <div className="grid grid-cols-3 gap-2">
        <div className="w-10 h-10">
          <Card
            link="https://www.linkedin.com/in/tzampieri/"
            image="/img/linkedin-logo.png"
          />
        </div>
        <div className="w-10 h-10">
          <Card
            link="https://medium.com/@tiagozampieri"
            image="/img/medium-logo.png"
          />
        </div>
        <div className="w-10 h-10">
          <Card
            link="https://github.com/TiagoZampieri"
            image="/img/github-logo.png"
          />
        </div>
      </div>
    </footer>
  );
}
