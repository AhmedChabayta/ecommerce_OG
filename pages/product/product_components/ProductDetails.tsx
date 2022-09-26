import { StarIcon } from '@heroicons/react/24/solid';
import { ProductProps } from '../../../types/layout.types';

export default function ProductDetails({
  brand,
  title,
  rating,
  price,
  discountPercentage,
  description,
  stock,
}: ProductProps) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <div className="flex flex-col w-[100vw] lg:w-[50vw] px-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl">{brand}</h1>
          <h1 className="text-5xl font-black">{title}</h1>
        </div>

        <div className="flex items-center text-5xl font-black">
          <StarIcon className="w-12" />
          <p> {rating}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-3xl ">${price}</p>
        <h1>
          <span className="text-5xl">%{discountPercentage}</span>
          <br />
          LIMITED TIME OFFER{' '}
        </h1>
      </div>
      <p className="text-3xl max-w-sm">{description}</p>
      {stock} LEFT IN STOCK
    </div>
  );
}
