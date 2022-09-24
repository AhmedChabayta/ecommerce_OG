/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */
interface inputProps {
  name: string;
  options: string[];
}

export default function Input({ name, options }: inputProps) {
  return (
    <div className="dropdown dropdown-hover rounded-md">
      <label tabIndex={0} className="btn m-1 rounded-md bg-primary text-black">
        {name}
      </label>
      <ul className="dropdown-content menu shadow w-fit bg-primary rounded-md">
        {options.map((option) => (
          <li
            key={option}
            className="p-4 hover:bg-white text-black whitespace-nowrap first:rounded-md last:rounded-md"
          >
            <p>{option}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
