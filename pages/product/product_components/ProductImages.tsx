import { useState } from 'react';
import Image from 'next/image';
import { ProductProps } from '../../../types/layout.types';

export default function ProductImages({ images }: ProductProps) {
  const [selected, setSelected] = useState<string>(images[0].toString());
  return (
    <div className="flex flex-col w-screen lg:w-[50vw]">
      <span className="relative w-[100vw] lg:w-[50vw] h-[50vh]">
        <Image objectFit="contain" layout="fill" src={selected} alt="" />
      </span>
      <div className="flex w-fit mt-6 mx-auto overflow-x-scroll overflow-y-hidden active:cursor-grabbing">
        {images.map((image: string) => (
          <span
            className="relative shrink-0 cursor-pointer active:cursor-grabbing hover:scale-[1.5] transition-transform ease-linear duration-100 hover:z-[200]"
            key={image}
          >
            <Image
              onClick={() => setSelected(image)}
              objectFit="contain"
              height={100}
              width={100}
              src={image}
              alt=""
            />
          </span>
        ))}
      </div>
    </div>
  );
}
