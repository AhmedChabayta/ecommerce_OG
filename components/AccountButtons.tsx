import { Cog8ToothIcon, WalletIcon } from '@heroicons/react/24/solid';

export default function AccountButtons() {
  return (
    <>
      <button
        type="button"
        className="btn btn-md btn-ghost space-x-1 hover:bg-green-500 hover:text-black"
      >
        <WalletIcon className="w-7" />
        <p>Wallet</p>
      </button>
      <button
        type="button"
        className="btn btn-md btn-ghost space-x-1 hover:bg-green-500 hover:text-black"
      >
        <Cog8ToothIcon className="w-7 hover:animate-spin" />
        <p>Edit settings</p>
      </button>
    </>
  );
}
