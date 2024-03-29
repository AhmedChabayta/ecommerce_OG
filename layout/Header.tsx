import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';
import tabsData from '../tabsData';

const headerContainerStyle = `
flex
flex-col
z-[100]
bg-black
fixed top-0
`;

const navbarStyle = `
navbar
h-[10rem] lg:h-[7rem]
z-10 
flex 
flex-col 
lg:flex-row 
px-10 
space-y-4 
lg:space-y-0 
border-b-2 
border-gray-800
transition-all duration-200
`;
const smallStyle = `
whitespace-nowrap
text-sm
self-center 
ml-10 
hover:underline 
cursor-pointer 
hidden 
lg:inline
`;

const buttonStyle = `
btn 
btn-sm 

`;
const inputStyle = `
input 
input-sm 
w-full 
mx-10 
outline-none 
focus:outline-none
`;

const tabsStyle = `
relative
flex 
smooth-scroll
overflow-x-scroll 
p-2 pr-8 mt-4
scrollbar-hide 
-z-0`;

const tabStyle = `
flex
flex-col 
items-center 
cursor-pointer 
shrink-0 
space-y-2 
min-w-[200px] 
py-2 
rounded
`;

export default function Header() {
  const [isVisible, setIsVisible] = useState<boolean>();

  const headerRef = useRef<HTMLDivElement>(null!);

  const tabsRef = useRef<HTMLDivElement>(null!);

  const transitionNav = () => {
    if (window.scrollY > 400) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', transitionNav);
    return () => window.removeEventListener('scroll', transitionNav);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });
    observer.observe(headerRef?.current);
  }, []);

  const scroll = (scrollOffset: number) => {
    tabsRef.current.scrollLeft += scrollOffset;
  };
  return (
    <motion.div className={headerContainerStyle}>
      <motion.div
        ref={headerRef}
        layout
        transition={{ duration: 0.1 }}
        animate={{
          y: isVisible ? 0 : -200,
          height: isVisible ? '' : 0,
        }}
        exit={{ y: -200 }}
        className={navbarStyle}
      >
        <Logo />
        <small className={smallStyle}>JOIN US</small>

        <input className={inputStyle} />
        <div className="btn-group">
          <button type="button" className={buttonStyle}>
            Sign In
          </button>
          <button type="button" className={buttonStyle}>
            Register
          </button>
        </div>
      </motion.div>

      <div className="scroll-smooth flex items-center w-screen">
        <button
          type="button"
          onClick={() => scroll(1000)}
          className="w-10 opacity-50 hover:opacity-100"
        >
          <ChevronRightIcon className="w-10" />
        </button>
        <div ref={tabsRef} className={tabsStyle}>
          {tabsData.map((tab) => (
            <div className={tabStyle} key={tab.name}>
              <Image height={30} width={30} src={tab.icon.src} alt="" />
              <p>{tab.name}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll(-1000)}
          type="button"
          className="w-10 opacity-50 hover:opacity-100"
        >
          <ChevronLeftIcon className="w-10" />
        </button>
      </div>
    </motion.div>
  );
}
