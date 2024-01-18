import tw from 'tailwind-styled-components';
import { useGetPrdData } from '../../hooks/product/getPrd';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import {
  Products,
  FilterPrd,
  SelectCategory,
} from '../../recoil/products/atoms/products';
import styled from 'styled-components';
import { PrdCategory } from '../product/category';
import { Button } from '../common/button';
interface IntPrdData {
  categoryName: string;
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
export const VisualPrd = () => {
  const prdData = useRecoilValue<IntPrdData[]>(FilterPrd);
  const selectedCate = useRecoilValue(SelectCategory);
  const itemsShow = 4;
  const itemsToLoad = 4;

  const [displayedItems, setDisplayedItems] = useState<IntPrdData[]>([]);
  const [loadMoreCount, setLoadMoreCount] = useState(itemsShow);

  useEffect(() => {
    setLoadMoreCount(itemsShow);
    const slicedData = prdData.slice(0, loadMoreCount);
    setDisplayedItems(slicedData);
  }, [selectedCate]);

  useEffect(() => {
    setDisplayedItems(prdData.slice(0, loadMoreCount));
  }, [prdData, loadMoreCount]);

  const handleLoadMore = () => {
    setLoadMoreCount(loadMoreCount + itemsToLoad);
  };
  return (
    <>
      <VisualAllWrap>
        <PrdCategory />
        <VisualProduct>
          {displayedItems.map((i) => {
            return (
              <VisualPrdItem key={i.id}>
                <VisualPrdItemChild>
                  <img src={`${i.imgUrl}`} alt="product image" />
                  <PrdDescription>
                    <PrdName>{i.pdName}</PrdName>
                    <span>{i.pdDetail}</span>
                  </PrdDescription>
                </VisualPrdItemChild>
              </VisualPrdItem>
            );
          })}
        </VisualProduct>
        {loadMoreCount < prdData.length && (
          <ViewMoreSection>
            <Button click={handleLoadMore} title="View more"></Button>
          </ViewMoreSection>
        )}
      </VisualAllWrap>
    </>
  );
};

const VisualAllWrap = tw.div`
  w-3/5
`;
const VisualStyledPrd = styled.ul`
  width: 100%;
  column-count: 2;
  column-gap: 0;
  column-rule: 1px solid #000;
  position: relative;
  top: -1px;
`;
const VisualProduct = tw(VisualStyledPrd)``;

const VisualPrdItem = styled.li`
  padding: 2em 4em;
  border-top: 1px solid black;
  break-inside: avoid;
`;

const VisualPrdItemChild = styled.div`
  text-align: center;
  text-align: -webkit-center;
  > img {
    max-width: 250px;
  }
`;

const PrdDescription = tw.div`
text-left
border-t
border-slate-400
py-5
px-3
my-5
`;

const PrdName = styled.h3`
  -webkit-text-stroke: 0.7px #000;
  color: transparent;
  font-size: 25px;
`;
const ViewMoreSection = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #000;
  > button {
    max-width: 200px;
  }
`;
