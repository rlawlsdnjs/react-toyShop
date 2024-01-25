import { useRecoilState, useRecoilValue } from 'recoil';
import {
  Category,
  FirstCate,
  SelectCategory,
} from '../../recoil/products/atoms/products';
import tw from 'tailwind-styled-components';
import { HeaderH } from '../../recoil/common/common';
import styled from 'styled-components';
import React, { useRef } from 'react';
export const PrdCategory = () => {
  const cateName = useRecoilValue(Category);
  const headerH = Number(useRecoilValue(HeaderH));
  const firstCategory = useRecoilValue(FirstCate);
  const [selectCategory, setSelectCategory] = useRecoilState(SelectCategory);
  const cateRef = useRef(null);
  const changeCategory = (e: React.MouseEvent<HTMLLIElement>) => {
    const newCategory = e.currentTarget.title;

    // 현재 선택된 카테고리가 클릭한 카테고리와 다를 때에만 업데이트
    if (selectCategory !== newCategory) {
      setSelectCategory(newCategory);
    }
    window.scrollTo({
      top: cateRef.current.offsetParent.offsetTop - headerH,
      behavior: 'smooth',
    });
    // useEffect 사용하여 카테값변경될 때 마다 수행 할 수 있게 refactor
    console.log(cateRef);
  };

  return (
    <CategoryWrap headerheight={headerH}>
      <ul ref={cateRef}>
        {cateName.map((i) => {
          return (
            <CateListItem
              title={i}
              key={i}
              onClick={changeCategory}
              className={selectCategory === i ? 'active' : ''}
            >
              {i}
            </CateListItem>
          );
        })}
      </ul>
    </CategoryWrap>
  );
};
interface StyledStickyVisualProps {
  headerheight: number;
}

const StyledCateWrap = styled.div<StyledStickyVisualProps>`
  position: sticky;
  top: ${({ headerheight }) => `calc( ${headerheight}px)`};
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(3px);
  -webkit-text-stroke: 1px #000;
  color: transparent;
  font-size: 30px;
  z-index: 40;
  > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  > ul > li {
    margin: 0 10px;
  }
`;
const CategoryWrap = tw(StyledCateWrap)`
border-b
border-black   


`;

const styledListItem = styled.li`
  &.active {
    color: black;
    border-bottom: 1px solid #000;
  }
`;
const CateListItem = tw(styledListItem)`
  cursor-pointer
`;
