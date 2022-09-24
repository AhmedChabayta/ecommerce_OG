import { atom } from 'recoil';

const sidebarState = atom({
  key: 'sidebar',
  default: false,
});

export default sidebarState;
