import { useRef } from 'react';
import Image from 'next/image';
import AccountLinks from './AccountLinks';
import AccountButtons from './AccountButtons';

export default function Account() {
  const ref = useRef(null);
  return (
    <div className="grid grid-cols-1 grid-rows-3">
      <Image
        height={320}
        width={340}
        objectFit="fill"
        src="/Images/fractalhat.jpg"
        alt=""
      />
      <div ref={ref} className="mx-auto h-full mt-10 space-y-5">
        <AccountLinks />
      </div>
      <div className="btn-group mx-auto">
        <AccountButtons />
      </div>
    </div>
  );
}

// <img className="w-44 rounded" src="/Images/fractalhat.jpg" alt="" />
//     <div ref={ref} className="h-full mt-10 space-y-5">
//       <AccountLink
//         Icon={
//           <UserCircleIcon className="w-7 hover:fill-green-500 cursor-pointer hover:scale-105" />
//         }
//         text="Ahmed Chabayta"
//       />
//       <AccountLink
//         Icon={
//           <EnvelopeIcon className="w-7 hover:fill-green-500 cursor-pointer " />
//         }
//         closedEnvelope={
//           <EnvelopeOpenIcon className="w-7 hover:fill-green-500 cursor-pointer " />
//         }
//         text="chabays@gmail.com"
//       />
//       <AccountLink
//         Icon={
//           <StarIcon className="w-7 hover:animate-spin hover:fill-red-500 cursor-pointer" />
//         }
//         text="Member+"
//       />
//     </div>
//     <div className="btn-group h-full mt-20">
//       <button type="button" className="btn btn-md btn-ghost space-x-1">
//         <WalletIcon className="w-7" />
//         <p>Wallet</p>
//       </button>
//       <button type="button" className="btn btn-md btn-ghost space-x-1">
//         <Cog8ToothIcon className="w-7 hover:animate-spin" />
//         <p>Edit settings</p>
//       </button>
//     </div>
