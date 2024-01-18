import tw from 'tailwind-styled-components';
import styled from 'styled-components';

interface TitleProps {
  title?: string;
  userId?: string;
  userPw?: string;
  click?: any;
}

export const Button = ({ title, userId, userPw, click }: TitleProps) => {
  return <Btn onClick={click}>{title}</Btn>;
};

const StyledBtn = styled.button`
  -webkit-text-stroke: 1px #dadada;
  color: transparent;
  font-size: 20px;
`;
const Btn = tw(StyledBtn)`
    rounded-md
    bg-slate-800
    w-full
    flex 
    w-full 
    justify-center 
    rounded-md 
    px-3 
    py-3
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
