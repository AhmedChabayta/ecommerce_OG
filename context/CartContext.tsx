/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, Dispatch, ReactNode, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

type CartProviderProps = {
  children: ReactNode;
};
type CartItem = {
  id: number;
  quantity: number;
};
type CartContext = {
  openCart: () => void;
  closeCart: () => void;
  dispatch: Dispatch<any>;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

// eslint-disable-next-line no-redeclare
const CartContext = createContext({} as CartContext);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cart', []);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function getItemQuantity(id: number) {
    return (
      (cartItems && cartItems.find((item) => item.id === id)?.quantity) || 0
    );
  }

  function increaseCartQuantity(id: number) {
    setCartItems((curItems) => {
      if (cartItems && curItems.find((item) => item.id === id) == null) {
        return [...curItems, { id, quantity: 1 }];
      }
      return (
        cartItems &&
        curItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return {
            item,
          };
        })
      );
    });
  }
  function decreaseCartQuantity(id: number) {
    setCartItems((curItems) => {
      if (curItems?.find((item) => item.id === id)?.quantity === 1) {
        return curItems.filter((item) => item.id !== id);
      }
      return curItems?.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return {
          item,
        };
      });
    });
  }
  function removeFromCart(id: number) {
    setCartItems((curItems) => curItems.filter((item) => item.id != id));
  }

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
