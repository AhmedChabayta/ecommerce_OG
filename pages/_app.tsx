import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import dynamic from 'next/dynamic';
import Layout from '../layout/Layout';
import { CartProvider } from '../context/CartContext';

const NoSSR = dynamic(() => import('../components/NoSSR'), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NoSSR>
      <div data-theme="black">
        <CartProvider>
          <RecoilRoot>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RecoilRoot>
        </CartProvider>
      </div>
    </NoSSR>
  );
}

export default MyApp;
