import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const currentPageState = atom({
  key: 'pageState',
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

export const postsPerPageState = atom({
  key: 'perPageState',
  default: 12,
  effects_UNSTABLE: [persistAtom],
});

export const productsState = atom({
  key: 'productState',
  default: {} as any,
});
