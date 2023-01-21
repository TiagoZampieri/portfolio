import Image from 'next/image';
import { PlusIcon } from '@heroicons/react/24/solid';

export default function Card(props) {
  return (
    <a
      className={`w-12/12 hide aspect-square
      bg-${props.bgColor ?? 'gray-300'} rounded-xl
      flex justify-center items-center 
      shadow-lg 
      hover:shadow-2xl hover:scale-110 hover:duration-500 cursor-pointer 
      transition ease-in-out delay-100`}
      href={props.link ?? 'https://wa.me/5541991896052?text=Fala,%20Tiago'}
      target="_blank"
      rel="noreferrer"
    >
      {props.image ? (
        <Image src={props.image} width={150} height={150} alt="Card image" />
      ) : (
        <PlusIcon className="h-6 w-6 text-black" />
      )}
    </a>
  );
}
