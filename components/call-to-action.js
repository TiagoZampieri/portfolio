export default function CallToAction(props) {
  return (
    <section className="flex flex-col items-center justify-center bg-white py-16">
      <h2 className="text-black text-4xl font-bold text-center">
        {props.headline}
      </h2>
      <a
        href="https://wa.me/5541991896052?text=Fala,%20Tiago"
        className="rounded-full text-1xl bg-blue text-base px-6 py-3 mt-8 inline-block shadow-sm"
      >
        {props.buttonText}
      </a>
    </section>
  );
}
