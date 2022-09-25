/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { StarIcon } from '@heroicons/react/24/solid';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ProductType } from '../../types/layout.types';

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

export default function Product({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [selected, setSelected] = useState<string>(
    product.images[0].toString()
  );
  return (
    <div className="flex justify-evenly h-full space-x-8">
      <div className="flex flex-col h-full space-x-2 space-y-4 w-[50vw]">
        <Link href="/" passHref>
          <p className="btn btn-primary w-fit active:bg-green-500">
            Back to Browse
          </p>
        </Link>
        <Image
          height={400}
          width={400}
          objectFit="contain"
          src={selected}
          alt=""
        />
        <div className="flex">
          {product.images.map((image: string) => (
            <Image
              key={image}
              height={900}
              width={900}
              onClick={() => setSelected(image)}
              objectFit="contain"
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
      <p className="absolute bottom-0 right-4">{product.stock} LEFT IN STOCK</p>
    </div>
  );
}
