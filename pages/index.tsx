import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import {
  currentPageState,
  postsPerPageState,
  productsState,
} from '../atoms/paginationState';

import InputsRow from '../components/InputRow';
import ProductInfo from '../components/ProductInfo';

const Home: NextPage = () => {
  const [productState, setProducts] = useRecoilState(productsState);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const [loading, setLoading] = useState<boolean>(false);
  const postsPerPage = useRecoilValue(postsPerPageState);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // eslint-disable-next-line prettier/prettier

  const { products }: any = productState;
  const currentPost = products?.slice(indexOfFirstPost, indexOfLastPost);

  async function fetchProduct() {
    setLoading(true);
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .then(() => setLoading(false));
  }
  useEffect(() => {
    fetchProduct();
  }, []);
  if (loading) {
    return <p>Loading....</p>;
  }
  return (
    <div className="overflow-scroll w-full">
      <InputsRow />
      {/* <Products currentPost={currentPost} /> */}
      <div
        className={`
        mt-10
        grid grid-flow-row
        w-full gap-2
        grid-cols-1
        sm:gird-cols-2
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-5
        `}
      >
        {currentPost?.map((product: any) => (
          <div
            key={product?.title}
            className="grid grid-cols-1 grid-rows-2 h-[600px] w-full pt-2 px-2 rounded-xl border-2 border-gray-600/30 hover:border-gray-600/100 hover:scale-105 transition-transform duration-100 ease-linear"
          >
            {' '}
            <Link href={`/product/${product.id}`}>
              <Image
                objectFit="cover"
                height={300}
                width={300}
                src={product?.thumbnail}
                alt=""
              />
            </Link>
            <ProductInfo {...product} />
          </div>
        ))}
      </div>
      <div className="btn-group flex w-fit mx-auto place-self-center content-center ">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev: number) => prev - 1)}
          type="button"
          className="btn text-2xl"
        >
          -
        </button>
        <button
          disabled={currentPage === 3}
          onClick={() => setCurrentPage((prev: number) => prev + 1)}
          type="button"
          className="btn text-2xl"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Home;
