import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { productsState } from '../atoms/paginationState';
import { useCart } from '../context/CartContext';
import formatCurrency from '../utilities/formatter';
import CartItem from './CartItem';

type I = {
  id: number;
};

export default function Cart() {
  const { cartItems, cartQuantity } = useCart();
  const productState = useRecoilValue(productsState);
  const { products } = productState;

  const CartItems = useMemo(() => cartItems, []);

  const CartQuantity = useMemo(() => cartQuantity, []);

  return (
    <div>
      {cartItems
        ? cartItems.map((item) => <CartItem key={item.id} {...item} />)
        : 'loading'}
      <div />
      <div className="absolute flex justify-between w-full bottom-2 px-2 pr-6">
        <p>
          TOTAL:{' '}
          {CartItems
            ? formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = products.find((i: I) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )
            : 'loading'}
        </p>
        {CartQuantity} ITEM(S)
        <button type="button">Checkout</button>
      </div>
    </div>
  );
}
