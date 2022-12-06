import Image from 'next/image';

export default function Timeline(props) {
  return (
    <div className="timeline-item grid grid-cols-7">
      <div className="col-span-3"></div>
      <div className="item-photo relative col-span-1">
        <Image
          className="rounded-full h-20 w-20 mx-auto"
          src={
            props.logo ??
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
          }
          width={80}
          height={80}
          alt="Logo da empresa"
        />
      </div>
      <div className="item-body col-span-3">
        <div className="my-6">
          <h3 className="text-2xl">{props.companyName}</h3>
          <span>
            <small className="text-sm text-slate-300">
              {props.startDate} - {props.endDate ?? 'o momento'}
            </small>
          </span>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
