import tw from 'tailwind-styled-components';
import { ReactNode } from 'react';

interface FormInt {
  children: ReactNode;
}

const SignForm: React.FC<FormInt> = ({ children }) => {
  return (
    <LoginForm>
      <div>{children}</div>
    </LoginForm>
  );
};

const LoginForm = tw.div`
    w-screen 
    h-screen
    bg-slate-50
    flex 
    flex-col
    justify-center 
    items-center
`;

export default SignForm;
