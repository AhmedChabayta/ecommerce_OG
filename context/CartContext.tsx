import { createContext, ReactNode, useContext, useState } from 'react';

type CartProviderProps = {
  children: ReactNode;
};
type CartItem = {
  id: number;
  quantity: number;
};
type CartContextTypes = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

const CartContext = createContext({} as CartContextTypes);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseCartQuantity(id: number) {
    setCartItems((curItems) => {
      if (curItems.find((item) => item.id === id) == null) {
        return [...curItems, { id, quantity: 1 }];
      }
      return curItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return {
          item,
        };
      });
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
