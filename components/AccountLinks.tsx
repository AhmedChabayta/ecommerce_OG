import {
  EnvelopeIcon,
  EnvelopeOpenIcon,
  StarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid';
import AccountLink from './AccountLink';

export default function AccountLinks() {
  return (
    <>
      <AccountLink
        Icon={
          <UserCircleIcon className="w-7 hover:fill-green-500 cursor-pointer hover:scale-105" />
        }
        text="Ahmed Chabayta"
      />
      <AccountLink
        Icon={
          <EnvelopeIcon className="w-7 hover:fill-green-500 cursor-pointer " />
        }
        closedEnvelope={
          <EnvelopeOpenIcon className="w-7 hover:fill-green-500 cursor-pointer " />
        }
        text="chabays@gmail.com"
      />
      <AccountLink
        Icon={
          <StarIcon className="w-7 hover:animate-spin hover:fill-red-500 cursor-pointer" />
        }
        text="Member+"
      />
    </>
  );
}
