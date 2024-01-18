import { RecoilValue, atom, selector, useRecoilValue } from 'recoil';
interface IntPrdData {
  categoryName: '신발';
  id: string;
  imgUrl: string;
  pdDetail: string;
  pdName: string;
  pdPrice: string;
  pdQuantity: string;
  pdSize: string;
  pdStat: string;
  userEmail: string;
}
export const Products: RecoilValue<IntPrdData[]> = atom({
  key: 'ProductsState',
  default: [],
});

export const Category = selector({
  key: `CategoryState`,
  get: ({ get }) => {
    const products = get(Products);
    const uniqueCategories = Array.from(
      new Set(products.map((product) => product.categoryName))
    );
    const all = 'All';
    const unshiftCategory = [all, ...uniqueCategories];
    console.log(unshiftCategory);

    return unshiftCategory;
  },
});

export const FirstCate = selector({
  key: `FirstCateState`,
  get: ({ get }) => {
    const firstCate = get(Category);
    return firstCate[0];
  },
});

export const SelectCategory = atom<string | null>({
  key: `SelectCategoryState`,
  default: FirstCate,
});

export const FilterPrd = selector({
  key: `FilterPrdState`,
  get: ({ get }) => {
    const selectedCate = get(SelectCategory);
    const allPrd = get(Products);
    const filterPrd = allPrd.filter(
      (product) => product.categoryName === selectedCate
    );
    return selectedCate == 'All' ? allPrd : filterPrd;
  },
});
