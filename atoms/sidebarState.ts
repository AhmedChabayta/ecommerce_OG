import { atom } from 'recoil';

const sidebarState = atom({
  key: 'sidebar',
  default: false as boolean,
});

export default sidebarState;
