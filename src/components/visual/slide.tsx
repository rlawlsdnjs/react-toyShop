import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { Autoplay, EffectCube, Navigation, Pagination } from 'swiper/modules';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { HeaderH } from '../../recoil/common/common';
import img from '../../../public/circle_bg.png';
import { keyframes } from 'styled-components';
import { SlideTitle } from './slideTitle';
import { useState } from 'react';
import { Button } from '../common/button';
export const Slide = () => {
  const headerH = Number(useRecoilValue(HeaderH));
  const bgImg = img;
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  const toggleAutoplay = () => {
    setIsAutoplayPaused((prev) => !prev);
    isAutoplayPaused ? playSlide() : pauseSlide();
  };
  const [swiperRef, setSwiperRef] = useState<{} | any>(null);
  const playSlide = () => {
    swiperRef?.autoplay.start();
  };
  const pauseSlide = () => {
    swiperRef?.autoplay.stop();
  };
  const prevSlide = () => {
    swiperRef?.slidePrev();
  };
  const nextSlide = () => {
    swiperRef?.slideNext();
  };
  return (
    <SlideSection>
      <StickyWrap headerHeight={headerH}>
        <BgWrap>
          <BgImg src={bgImg} />
        </BgWrap>
        <Swiper
          onSwiper={setSwiperRef}
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
          navigation={true}
          modules={[Autoplay, EffectCube, Navigation]}
          // modules={[EffectCube, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <SlideTitle title={'Eco \n Friendly'}></SlideTitle>
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
        <SlideController>
          <button onClick={prevSlide}>이전</button>
          <button onClick={toggleAutoplay}>
            {isAutoplayPaused ? 'Play' : 'Pause'}
          </button>
          <button onClick={nextSlide}>다음</button>
        </SlideController>
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

const SlideController = styled.div`
  position: absolute;
  z-index: 40;
  bottom: 30px;
  right: 0;
  width: 100%;
  box-sizing: border-box;
  & > button {
    padding: 0;
    margin: 0;
    border-radius: 0;
  }
  & > button:last-child {
  }
`;
