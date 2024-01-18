import styled from 'styled-components';

export const SlideTitle = ({ title }: any) => {
  return <Title>{title}</Title>;
};

const Title = styled.h2`
  -webkit-text-stroke: 3px #585858;
  color: transparent;
  line-height: 0.9;
  font-size: 6vw;
  white-space: pre-line;
`;
