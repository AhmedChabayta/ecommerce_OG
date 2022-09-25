import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface ProductProps {
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
}

export type ProductType = {
  product: ProductProps;
  products: ProductProps;
  id: number;
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
  currentPost: ProductProps | void;
}
