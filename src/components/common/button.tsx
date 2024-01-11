import tw from 'tailwind-styled-components';

interface TitleProps {
  title?: string;
  userId?: string;
  userPw?: string;
  click?: any;
}

export const Button = ({ title, userId, userPw, click }: TitleProps) => {
  return <Btn onClick={click}>{title}</Btn>;
};

const Btn = tw.button`
    rounded-md
    bg-cyan-400
    p-2
    w-full
    flex 
    w-full 
    justify-center 
    rounded-md 
    bg-indigo-600 
    px-3 
    py-1.5 
    text-sm 
    font-semibold 
    leading-6 
    text-white 
    shadow-sm 
    hover:bg-indigo-500 
    focus-visible:outline 
    focus-visible:outline-2 
    focus-visible:outline-offset-2 
    focus-visible:outline-indigo-600
`;
