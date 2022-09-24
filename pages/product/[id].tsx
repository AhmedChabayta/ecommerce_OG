/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { StarIcon } from '@heroicons/react/24/solid';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { ProductType } from '../../types/layout.types';

export default function Product({ product }: ProductType) {
  const [selected, setSelected] = useState<string>(
    product.images[0].toString()
  );
  return (
    <div className="flex justify-evenly h-full ">
      <div className="flex flex-col h-full space-x-2 space-y-4 min-w-[50vw] max-w-[50vw] ">
        <Link href="/">
          <button
            type="button"
            className="btn btn-primary w-fit active:bg-green-500"
          >
            Back to Browse
          </button>
        </Link>
        <img
          className="max-w-[30vw] w-[30vw] h-[50vh] min-h-[30vh] object-contain"
          src={selected}
          alt=""
        />
        <div className="flex">
          {product.images.map((image: string) => (
            <img
              onClick={() => setSelected(image)}
              className="object-contain w-20 min-w-20"
              src={image}
              alt=""
            />
          ))}
        </div>
      </div>
      <div className="space-y-8 mt-10">
        <h1 className="text-5xl font-black">{product.title}</h1>
        <div className="flex space-x-2 items-center">
          <p>{product.rating}</p>
          <StarIcon className="w-5" />
        </div>
        <h2 className="text-3xl">{product.brand}</h2>

        <p>{product.description}</p>
        <div className="flex space-x-2">
          <h1 className="text-4xl font-black">${product.price}</h1>
          <p>LIMITED TIME OFFER: %{product.discountPercentage}</p>
        </div>
      </div>
      <p className="absolute bottom-0 right-0">{product.stock} LEFT IN STOCK</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://dummyjson.com/products');
  const data1 = await res.json();
  const { products } = await data1;
  const paths = await products.map((product: any) => ({
    params: { id: product.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id }: any = params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};
