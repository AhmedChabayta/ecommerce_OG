import { Bars3Icon } from '@heroicons/react/24/solid';
import { useFocusTrap } from '@mantine/hooks';
import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import sidebarState from '../atoms/sidebarState';
import Account from '../components/Account';
import Cart from '../components/Cart';
import { useCart } from '../context/CartContext';

const sidebarContainerStyle = `
flex 
flex-col 
h-screen
w-screen
relative
md:w-[30vw]
md:min-w-[400px]
min-h-fit
bg-black
overflow-y-scroll 
scrollbar-hide
snap-y 
snap-mandatory 
border-l-2 
border-gray-700
shadow-xl
shadow-gray-700
transition-all
duration-200
`;

const sectionContainerStyle = `
min-h-screen
h-full
snap-start
relative
`;
const buttonStyle = `
content-center
btn
bg-primary
font-black
rounded-none
text-2xl
text-center
w-full
`;
export default function Sidebar() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [showSidebar, setShowSidebar] = useRecoilState(sidebarState);
  const focusTrapRef = useFocusTrap();

  const cartRef = useRef<HTMLDivElement>(null);
  const { cartQuantity } = useCart();

  useEffect(() => {
    if (cartQuantity > 0) {
      cartRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  }, []);

  return (
    <div ref={focusTrapRef} className={sidebarContainerStyle}>
      <div className={sectionContainerStyle}>
        <Account />
        <button
          onClick={() => setShowSidebar(false)}
          type="button"
          className="absolute top-0 right-0 z-[600]"
        >
          <Bars3Icon className="w-8" />
        </button>
      </div>
      <div
        style={{ paddingLeft: '10px', paddingTop: '10px' }}
        ref={cartRef}
        className={sectionContainerStyle}
      >
        <Cart />
        <button
          onClick={() => setShowSidebar(false)}
          type="button"
          className="absolute top-0 right-0 z-[600]"
        >
          <Bars3Icon className="w-8" />
        </button>
      </div>
      <div className={sectionContainerStyle}>
        <button type="button" className={buttonStyle}>
          Departments
        </button>
        <button
          onClick={() => setShowSidebar(false)}
          type="button"
          className="absolute top-0 right-0 z-[600]"
        >
          <Bars3Icon className="w-8" />
        </button>
      </div>
    </div>
  );
}
