import tw from 'tailwind-styled-components';
import { ReactNode } from 'react';

interface FormInt {
  children: ReactNode;
}

const Form: React.FC<FormInt> = ({ children }) => {
  return (
    <BoxForm>
      <div>{children}</div>
    </BoxForm>
  );
};

const BoxForm = tw.div`
border-solid 
border
border-slate-300
p-8
mt-10 
sm:mx-auto 
sm:w-full 
sm:max-w-sm
bg-white
`;

export default Form;
