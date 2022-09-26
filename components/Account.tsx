import { useRef } from 'react';
import Image from 'next/image';
import AccountLinks from './AccountLinks';
import AccountButtons from './AccountButtons';

export default function Account() {
  
  const ref = useRef(null);
  return (
    <div className="grid grid-cols-1 grid-rows-2 h-full">
      <div className="content-center mx-auto border-2 border-white h-fit w-fit mt-4">
        <Image
          height={320}
          width={340}
          objectFit="fill"
          src="/Images/fractalhat.jpg"
          alt=""
        />
      </div>
      <div
        ref={ref}
        className="mx-auto mt-20 xs:mt-10 space-y-5 w-[90%] text-center "
      >
        <AccountLinks />
      </div>
      <div className="btn-group mx-auto mb-8">
        <AccountButtons />
      </div>
    </div>
  );
}
