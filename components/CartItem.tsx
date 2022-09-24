import Image from 'next/image';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { productsState } from '../atoms/paginationState';

import { useCart } from '../context/CartContext';

type CartProps = {
  id: number;
  quantity: number;
};

export default function CartItem({ id, quantity }: CartProps) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useCart();

  const productState = useRecoilValue(productsState);
  const { products } = productState;
  const item = products.find((i: undefined | CartProps) => i?.id === id);
  if (item === null) return null;

  return (
    <div className="grid grid-flow-col grid-cols-3 w-full items-center relative">
      <div>
        <Image height={100} width={100} src={item?.thumbnail} alt="" />
      </div>

      <button
        type="button"
        onClick={() => decreaseCartQuantity(id)}
        className="btn btn-primary btn-lg"
      >
        -
      </button>
      <button
        type="button"
        onClick={() => increaseCartQuantity(id)}
        className="btn btn-primary btn-lg"
      >
        +
      </button>
      <div
        className="flex items-center justify-center"
        style={{ width: 100, height: 100 }}
      >
        <button type="button" onClick={() => removeFromCart(id)}>
          remove
        </button>
      </div>
      <div className="absolute bottom-0 right-2">
        {item ? (
          <p>
            ${item?.price} PER and ({quantity}) ${item.price * quantity}
          </p>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
