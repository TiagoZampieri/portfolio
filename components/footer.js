import Card from './card';

export default function Footer() {
  return (
    <footer className="container mx-auto flex justify-between items-center py-10 max-sm:px-4">
      <p>tzampieri7@gmail.com</p>
      <div className="grid grid-cols-3 gap-2">
        <div className="w-10 h-10">
          <Card
            link="https://www.linkedin.com/in/tzampieri/"
            image="https://firebasestorage.googleapis.com/v0/b/portfolio-ae956.appspot.com/o/linkedin-logo.png?alt=media&token=7b5d7858-da6f-47db-8d37-c033a47fba1c"
          />
        </div>
        <div className="w-10 h-10">
          <Card
            link="https://medium.com/@tiagozampieri"
            image="https://firebasestorage.googleapis.com/v0/b/portfolio-ae956.appspot.com/o/medium-logo.png?alt=media&token=de51dc9f-939d-4c58-8ba0-8a1becc34fa2"
          />
        </div>
        <div className="w-10 h-10">
          <Card
            link="https://github.com/TiagoZampieri"
            image="https://firebasestorage.googleapis.com/v0/b/portfolio-ae956.appspot.com/o/github-logo.png?alt=media&token=6033b685-2d23-4b18-a169-8c8768ea7977"
          />
        </div>
      </div>
    </footer>
  );
}
