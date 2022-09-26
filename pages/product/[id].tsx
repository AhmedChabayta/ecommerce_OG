/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import sidebarState from '../../atoms/sidebarState';
import { useCart } from '../../context/CartContext';
import { ProductType } from '../../types/layout.types';
import ProductDetails from './product_components/ProductDetails';
import ProductImages from './product_components/ProductImages';

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://dummyjson.com/products');
  const data1 = await res.json();
  const { products } = await data1;
  const paths = await products.map((product: ProductType) => ({
    params: { id: product.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};

export default function Product({ product }: ProductType) {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [showSidebar, setShowSidebar] = useRecoilState(sidebarState);
  const { increaseCartQuantity, cartQuantity } = useCart();
  const { id } = product;

  // eslint-disable-next-line no-shadow
  const handleAddToCart = (id: number) => {
    increaseCartQuantity(id);
    if (cartQuantity === 0) {
      setShowSidebar(true);
    }
  };
  return (
    <div className="flex flex-col lg:flex-row justify-between relative w-screen pb-20 lg:pb-0">
      <span className="absolute -top-10 left-2 ">
        <Link href="/">
          <button className="relative z-[100]" type="button">
            Back to Browse
          </button>
        </Link>
      </span>
      <ProductImages {...product} />
      <ProductDetails {...product} />
      <button
        onClick={() => handleAddToCart(id)}
        type="button"
        className="btn whitespace-nowrap absolute bottom-0 right-0 text-4xl space-x-2"
      >
        <p> ADD TO CART</p> <ShoppingCartIcon className="w-10" />
      </button>
    </div>
  );
}
