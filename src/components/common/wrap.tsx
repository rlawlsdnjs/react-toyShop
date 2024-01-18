import tw from 'tailwind-styled-components';
import { ReactNode, useEffect } from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import React from 'react';
import { HeaderH } from '../../recoil/common/common';
interface WrapInt {
  children: ReactNode;
}

export const Wrap: React.FC<WrapInt> = ({ children }) => {
  const headerH = Number(useRecoilValue(HeaderH));

  console.log(typeof headerH);
  return (
    <StyledAllWrap headerHeight={headerH}>
      <div>{children}</div>
    </StyledAllWrap>
  );
};
interface StyledAllWrapProps {
  headerHeight: number;
}
const StyledAllWrap = styled.div<StyledAllWrapProps>`
  height: ${({ headerHeight }) => `calc(100vh - ${headerHeight}px)`};
  display: flex;
  place-items: center;
  justify-content: center;
  align-items: center;
`;
