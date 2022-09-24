import { RefObject, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { AnimatePresence, motion } from 'framer-motion';
import sidebarState from '../atoms/sidebarState';
import { LayoutProps } from '../types/layout.types';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({ children }: LayoutProps) {
  const [showSidebar, setShowSidebar] = useRecoilState(sidebarState);

  const picker = useRef<HTMLElement>(null!);

  function assertIsNode(e: EventTarget | null): asserts e is Node {
    if (!e || !('nodeType' in e)) {
      throw new Error('Node Expected');
    }
  }
  const clickSidebar = (event: any) => {
    if (event && event.key === 'ArrowLeft') {
      setShowSidebar(true);
    } else if (event.key === 'ArrowRight') {
      setShowSidebar(false);
    }
  };

  const handleClickOutside = ({ target }: MouseEvent): void => {
    assertIsNode(target);
    const { current } = picker;
    if (current && !current.contains(target)) {
      setShowSidebar(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, true);
    document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', clickSidebar, true);
  }, []);

  return (
    <>
      <div className="h-[30vh] min-h-[30vh]">
        <Header />
      </div>
      {showSidebar && (
        <div className="cloak bg-black/80 fixed top-0 bottom-0 left-0 right-0 min-h-screen min-w-screen z-[100]" />
      )}
      <AnimatePresence>
        {showSidebar && (
          <motion.div
            initial={{ x: 500 }}
            animate={{
              x: 0,
            }}
            exit={{ x: 500 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            ref={picker as RefObject<HTMLDivElement>}
            className="fixed right-0 top-0 bottom-0 z-[200] lg:mt-0 "
          >
            <Sidebar />
          </motion.div>
        )}
      </AnimatePresence>
      <div className={`${showSidebar ? 'hidden md:block' : ''}`}>
        {children}
      </div>
    </>
  );
}
