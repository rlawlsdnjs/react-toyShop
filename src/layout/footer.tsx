import tw from 'tailwind-styled-components';

export const Footer = () => {
  return (
    <>
      <FooterWrap>
        <FooterCenter>
          <span>copyright footer</span>
        </FooterCenter>
      </FooterWrap>
    </>
  );
};

const FooterWrap = tw.div`

bg-black
text-white
min-h-fit 
py-7 

`;

const FooterCenter = tw.div`
max-w-7xl
m-auto
`;
