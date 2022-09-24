import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export type ProductProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  products: ProductProps;
};

export type ProductType = {
  product: ProductProps;
  products: ProductProps;
};

export type ProductPageProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export interface CurrentPostProps {
  currentPost: ProductProps | void | any;
}
