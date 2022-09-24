// /* eslint-disable react/jsx-one-expression-per-line */
// import Image from 'next/image';
// import { CurrentPostProps, ProductProps } from '../types/layout.types';
// import BuyAndCartButton from './BuyAndCartButton';
// import ProductInfo from './ProductInfo';

// export default function Products({ currentPost }: CurrentPostProps) {
//   return (
//     <div
//       className={`
//         grid grid-flow-row
//         w-full gap-2
//         grid-cols-1
//         sm:gird-cols-2
//         md:grid-cols-2
//         lg:grid-cols-3
//         xl:grid-cols-5
//         `}
//     >
//       {currentPost?.map((product: ProductProps) => (
//         <div className="grid grid-cols-1 grid-rows-2 h-[600px] w-full pt-2 px-2 rounded-xl border-2 border-gray-600/30 hover:border-gray-600/100 hover:scale-105 transition-transform duration-100 ease-linear">
//           <Image
//             objectFit="cover"
//             height={300}
//             width={300}
//             src={product?.thumbnail}
//             alt=""
//           />
//           <ProductInfo product={product} />
//           <BuyAndCartButton product={product} />
//         </div>
//       ))}
//     </div>
//   );
// }
