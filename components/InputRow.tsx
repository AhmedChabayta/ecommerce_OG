/* eslint-disable jsx-a11y/label-has-associated-control */
import { Bars4Icon } from '@heroicons/react/24/solid';
import Input from './Input';
import inputData from '../inputData.json';

const buttons = ['Show all', 'Auction', 'Buy now'];

export default function InputsRow() {
  return (
    <div className="flex flex-col items-center md:flex-row justify-between px-10 mt-10 lg:mt-0">
      <div className="self-center">
        {inputData.map(({ name, options }) => (
          <Input name={name} options={options} key={name} />
        ))}
      </div>
      <div className="flex items-center space-x-4 ">
        <div className="btn-group bg-primary rounded-md text-black min-w-fit">
          {buttons.map((btn) => (
            <button className="btn btn-primary w-fit" type="button" key={btn}>
              {btn}
            </button>
          ))}
        </div>
        <div className="hidden md:flex btn-group bg-primary rounded-md text-black ">
          <button type="button" className="btn btn-primary ">
            <Bars4Icon className="w-8" />
          </button>
          <button type="button" className="btn btn-primary ">
            <Bars4Icon className="w-8" />
          </button>
        </div>
      </div>
    </div>
  );
}
