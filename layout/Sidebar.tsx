import { useFocusTrap } from '@mantine/hooks';
import { useRef } from 'react';
import Account from '../components/Account';
import Cart from '../components/Cart';

const sidebarContainerStyle = `
flex 
flex-col 
h-screen
w-screen
md:w-[30vw]
min-w-[400px]
min-h-screen
bg-black
overflow-y-scroll 
scrollbar-hide
snap-y 
snap-mandatory 
shadow-xl
shadow-gray-500
transition-all
duration-200

`;

const buttonContainerStyle = `
min-h-full
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
py-3
`;
export default function Sidebar() {
  const focusTrapRef = useFocusTrap();

  const cartRef = useRef(null);
  console.log(cartRef);
  return (
    <div ref={focusTrapRef} className={sidebarContainerStyle}>
      <div className={buttonContainerStyle}>
        <button type="button" className={buttonStyle}>
          Account
        </button>
        <Account />
      </div>
      <div ref={cartRef} className={buttonContainerStyle}>
        <button type="button" className={buttonStyle}>
          Cart
        </button>
        <Cart />
      </div>
      <div className={buttonContainerStyle}>
        <button type="button" className={buttonStyle}>
          Departments
        </button>
      </div>
    </div>
  );
}
