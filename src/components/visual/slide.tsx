import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { Autoplay, EffectCube, Navigation } from 'swiper/modules';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { HeaderH } from '../../recoil/common/common';
import img from '../../../public/circle_bg.png';
import { keyframes } from 'styled-components';
import { SlideTitle } from './slideTitle';
import { useState } from 'react';
import { BiSkipPrevious, BiSkipNext, BiPause, BiPlay } from 'react-icons/bi';
import { LineChart } from '../common/chart';
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
      <StickyWrap headerheight={headerH}>
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
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={true}
          navigation={true}
          modules={[Autoplay, EffectCube, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <SlideTitle title={'Eco \n Friendly'}></SlideTitle>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <SlideTitle title={'Sustainable \n Growth'}></SlideTitle>
              <LineChart />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <SlideTitle title={'Sustainable \n Growth'}></SlideTitle>
            </div>
          </SwiperSlide>
        </Swiper>
        <SlideController>
          <button onClick={prevSlide}>
            <BiSkipPrevious />
          </button>
          <button onClick={toggleAutoplay}>
            {isAutoplayPaused ? <BiPlay /> : <BiPause />}
          </button>
          <button onClick={nextSlide}>
            <BiSkipNext />
          </button>
        </SlideController>
      </StickyWrap>
    </SlideSection>
  );
};
interface StyledStickyVisualProps {
  headerheight: number;
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

const StyledStickyWrap = styled.div<StyledStickyVisualProps>`
  position: sticky;
  top: ${({ headerheight }) => `calc( ${headerheight}px)`};
  height: ${({ headerheight }) => `calc(100vh - ${headerheight}px)`};

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: unset;
  margin-top: -65px;
  overflow: hidden;
  & .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StickyWrap = tw(StyledStickyWrap)`
lg:border-r solid border-black
`;

const StyledSlideSection = styled.div``;
const SlideSection = tw(StyledSlideSection)`
lg:w-2/5
md:w-full
box-border

`;

const SlideController = styled.div`
  position: absolute;
  z-index: 40;
  bottom: 30px;
  right: 0;
  width: 100%;
  box-sizing: border-box;
  min-width: 50px;
  & > button {
    padding: 0;
    margin: 0;
    border-radius: 0;
    font-size: 50px;
    opacity: 0.2;
  }
  & > button:last-child {
  }
`;
