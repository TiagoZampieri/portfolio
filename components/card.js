import { PlusIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function Card(props) {
  return (
    <a
      className={`text-slate-400 hover:text-primary transition-colors`}
      href={props.link ?? 'https://wa.me/5541991896052?text=Fala,%20Tiago'}
      target="_blank"
      rel="noreferrer"
    >
      {props.image ? (
        <Image className='object-cover grayscale hover:grayscale-0 transition-all duration-700' src={props.image} width={150} height={150} alt="Card image" />
      ) : (
        <PlusIcon className="h-6 w-6 text-black" />
      )}
    </a>
  );
}
