import { StarIcon } from '@heroicons/react/24/solid';
import { useRecoilState } from 'recoil';
import sidebarState from '../atoms/sidebarState';
import { useCart } from '../context/CartContext';
import { ProductProps } from '../types/layout.types';

export default function ProductInfo({
  brand,
  category,
  title,
  rating,
  price,
  stock,
  description,
  id,
  discountPercentage,
}: ProductProps) {
  const [showSidebar, setShowSidebar] = useRecoilState(sidebarState);
  const { getItemQuantity, increaseCartQuantity } = useCart();

  const quantity = getItemQuantity(id);

  const handleAddToCart = (id: number) => {
    increaseCartQuantity(id);
    setShowSidebar(true);
  };
  return (
    <>
      <div>
        <p>{title}</p>
        <div className="flex justify-between text-gray-500 mb-6">
          <p>{category}</p>
          <p>{brand}</p>
        </div>
        <div className="flex space-x-2">
          <p>{rating}</p>
          <StarIcon className="w-4" />
        </div>
        <p>{description}</p>
      </div>

      <div className="flex justify-between items-center">
        <p>${price}</p>

        <p className="text-xs">{stock} LEFT</p>
      </div>
      <div className="mx-auto my-3 w-full space-y-2">
        <button
          className="w-full py-3 rounded hover:scale-[1.2] active:scale-95 transition-all duration-100"
          type="button"
        >
          BUY AT {discountPercentage}% DISCOUNT{' '}
        </button>
        <button
          onClick={() => handleAddToCart(id)}
          className="w-full py-3 rounded hover:scale-[1.2] active:scale-95 transition-all duration-100 "
          type="button"
        >
          ADD TO CART
        </button>
      </div>
    </>
  );
}
