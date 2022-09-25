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
  const focusTrapRef = useFocusTrap();

  const cartRef = useRef(null);
  return (
    <div ref={focusTrapRef} className={sidebarContainerStyle}>
      <div className={sectionContainerStyle}>
        <Account />
      </div>
      <div
        style={{ paddingLeft: '10px', paddingTop: '10px' }}
        ref={cartRef}
        className={sectionContainerStyle}
      >
        <Cart />
      </div>
      <div className={sectionContainerStyle}>
        <button type="button" className={buttonStyle}>
          Departments
        </button>
      </div>
    </div>
  );
}
