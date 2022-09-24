/* eslint-disable react/jsx-no-useless-fragment */

import { LayoutProps } from '../types/layout.types';

export default function NoSSR({ children }: LayoutProps) {
  return <>{children}</>;
}
