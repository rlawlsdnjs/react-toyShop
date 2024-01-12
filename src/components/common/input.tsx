import React from 'react';
import tw from 'tailwind-styled-components';

interface InputProps {
  title?: string;
  place: string;
  change?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  id?: string;
  getTitle?: (setTitle: string) => void;
}
export const InputBtn = (props: InputProps) => {
  return (
    <div className="my-3" title={props.title}>
      <p className="text-left block text-sm font-medium leading-6 text-gray-900">
        {props.title}
      </p>
      <LoginInput
        type={props.type}
        placeholder={props.place}
        onChange={props.change}
        onFocus={() => {
          if (props.getTitle) {
            props.getTitle!(props.title!);
          }
        }}
        onClick={() => {
          if (props.getTitle) {
            props.getTitle!(props.title!);
          }
        }}
      ></LoginInput>
    </div>
  );
};

const LoginInput = tw.input`
    block 
    text-sm 
    font-medium 
    leading-6 
    text-gray-900
    block w-full 
    rounded-md 
    border-0 
    py-1.5 
    text-gray-900 
    shadow-sm 
    ring-1 
    ring-inset 
    ring-gray-300
    placeholder:text-gray-400
    focus:ring-2 
    focus:ring-inset
    focus:ring-indigo-600 
    sm:text-sm 
    sm:leading-6
    indent-2.5
    
`;
