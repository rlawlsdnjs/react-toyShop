import tw from 'tailwind-styled-components';

export const ConfirmUser = () => {
  return (
    <ConfirmM>
      <p>Confirm your Email, Password</p>
    </ConfirmM>
  );
};

const ConfirmM = tw.div`
    text-center 
    block 
    text-sm 
    font-medium 
    leading-6 
    text-red-500 
    mb-5
`;
