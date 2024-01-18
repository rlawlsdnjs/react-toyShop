import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { Autoplay, EffectCube, Pagination } from 'swiper/modules';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { HeaderH } from '../../recoil/common/common';
import img from '../../../public/circle_bg.png';
import { keyframes } from 'styled-components';
import { SlideTitle } from './slideTitle';
export const Slide = () => {
  const headerH = Number(useRecoilValue(HeaderH));
  const bgImg = img;
  return (
    <SlideSection>
      <StickyWrap headerHeight={headerH}>
        <BgWrap>
          <BgImg src={bgImg} />
        </BgWrap>
        <Swiper
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            shadow: false,
            slideShadows: false,
            shadowOffset: 20,
            shadowScale: 0.1,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={true}
          // modules={[Autoplay, EffectCube, Pagination]}
          modules={[EffectCube, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <SlideTitle title={'Friendly Eco'}></SlideTitle>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div></div>
          </SwiperSlide>
          <SwiperSlide>
            <div></div>
          </SwiperSlide>
          <SwiperSlide>
            <div></div>
          </SwiperSlide>
        </Swiper>
      </StickyWrap>
    </SlideSection>
  );
};
interface StyledStickyVisualProps {
  headerHeight: number;
}
const BgWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  filter: blur(70px);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const BgImg = styled.img`
  position: absolute;
  max-width: 70%;
  animation: ${rotate} 10s linear infinite;
`;

const StickyWrap = styled.div<StyledStickyVisualProps>`
  position: sticky;
  top: ${({ headerHeight }) => `calc( ${headerHeight}px)`};
  height: ${({ headerHeight }) => `calc(100vh - ${headerHeight}px)`};

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: unset;
  margin-top: -65px;
  overflow: hidden;
  border-right: 1px solid #000;
  & .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const StyledSlideSection = styled.div``;
const SlideSection = tw(StyledSlideSection)`
w-2/5
box-border

`;
