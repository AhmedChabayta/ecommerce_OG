import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const cartContext = atom({
  key: 'cartItems',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
