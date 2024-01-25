import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { Wrap } from '../components/common/wrap';
export const Detail = () => {
  const location = useLocation();
  const { products } = location.state;

  return (
    <Wrap>
      <DetailWrap>
        <h2 className="text-left font-bold">Detail product</h2>

        <DetailForm>
          <div>
            <PrdImg src={`${products.imgUrl}`}></PrdImg>
          </div>
          <div>
            <h3>{products.pdName}</h3>
            <p>{products.pdPrice}</p>
            <p>{products.pdDetail}</p>
          </div>
        </DetailForm>
      </DetailWrap>
    </Wrap>
  );
};
const DetailWrap = styled.div`
  max-width: 1200px;
  text-align: left;
  > h2 {
    backdrop-filter: blur(3px);
    -webkit-text-stroke: 1px #000;
    color: transparent;
    font-size: 30px;
    z-index: 40;
    border-bottom: 2px solid #000;
    padding-bottom: 15px;
  }
  & h3 {
    -webkit-text-stroke: 0.7px #000;
    color: black;
    font-size: 25px;
  }
`;
const DetailForm = tw.div`
    flex
    my-5
    
`;
const PrdImg = tw.img`
    max-w-96
`;
