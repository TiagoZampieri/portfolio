import Image from 'next/image';

export default function Timeline(props) {
  return (
    <div className="timeline-item grid grid-cols-7">
      <div className="md:col-span-3 max-sm:hidden"></div>
      <div className="item-photo relative md:col-span-1 col-span-3">
        <Image
          className="rounded-full hide h-20 w-20 mx-auto"
          src={
            props.logo ??
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
          }
          width={80}
          height={80}
          alt="Logo da empresa"
        />
      </div>
      <div className="item-body md:col-span-3 col-span-4">
        <div className="my-6">
          <h3 className="text-2xl">{props.companyName}</h3>
          <span>
            <small className="text-sm text-slate-600">
              {props.startDate} - {props.endDate ?? 'o momento'}
            </small>
          </span>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
