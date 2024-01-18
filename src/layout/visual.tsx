import tw from 'tailwind-styled-components';
import { Slide } from '../components/visual/slide';
import { VisualPrd } from '../components/visual/visualPrd';
import { useRecoilState } from 'recoil';
import { Products } from '../recoil/products/atoms/products';
import { useEffect } from 'react';
import { useGetPrdData } from '../hooks/product/getPrd';

export const Visual = () => {
  const [prdData, setPrdData] = useRecoilState(Products);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await useGetPrdData();
        setPrdData(res);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);
  return (
    <div>
      <VisualSection>
        <Slide></Slide>
        <VisualPrd></VisualPrd>
      </VisualSection>
      <div style={{ height: '600px' }}></div>
    </div>
  );
};

const VisualSection = tw.div`
flex
items-stretch
border-b
border-black
border-solid
`;
