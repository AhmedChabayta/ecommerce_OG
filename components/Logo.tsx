import Link from 'next/link';

export default function Logo() {
  const LOGO = ['C', 'O', 'N', 'S', 'U', 'M', 'E'];
  return (
    <Link href="/">
      <div
        style={{ userSelect: 'none' }}
        className="flex space-x-2 text-3xl cursor-pointer"
      >
        {LOGO.map((letter) => (
          <p key={letter} className="hover:text-blue-500 ">
            {letter}
          </p>
        ))}
      </div>
    </Link>
  );
}
