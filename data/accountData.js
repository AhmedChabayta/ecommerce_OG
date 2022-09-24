import {
  UserCircleIcon,
  EnvelopeIcon,
  EnvelopeOpenIcon,
  StarIcon,
  WalletIcon,
  Cog8ToothIcon,
} from '@heroicons/react/24/solid';

const account = {
  name: 'John Smith',
  email: 'example@example.com',
  member_status: 'Member +',
  buttons: ['Wallet', 'Edit Settings'],
};

export const icons = [
  <UserCircleIcon className="w-6" />,
  <EnvelopeIcon className="w-6" />,
  <EnvelopeOpenIcon className="w-6" />,
  <StarIcon className="w-6" />,
  <WalletIcon className="w-6" />,
  <Cog8ToothIcon className="w-6" />,
];

export default account;
