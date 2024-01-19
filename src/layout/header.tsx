import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import tw from 'tailwind-styled-components';
import { useRecoilValue, useRecoilState, useResetRecoilState } from 'recoil';
import { LoginState, User, UserProfile } from '../recoil/sign/atoms/loginState';

import { Button } from '../components/common/button';
import { useUserData } from '../hooks/auth/postUserData';
import { HeaderH } from '../recoil/common/common';
import { useLayoutEffect } from 'react';
import React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import { forwardRef } from 'react';
import { ComponentProps } from 'react';
export const Header = () => {
  const headHeight = useRef<HTMLDivElement>(null);
  const [headerheight, setHeaderHeight] = useRecoilState(HeaderH);
  const RefHeader = forwardRef((props: ComponentProps<any>, ref) => {
    return <HeaderSection ref={ref} {...props}></HeaderSection>;
  });
  useLayoutEffect(() => {
    if (headHeight.current) {
      const height = headHeight.current.offsetHeight;
      setHeaderHeight(String(height));
    }
  }, []);
  console.log(headerheight);

  const useLoginState = useRecoilValue(LoginState);
  const userState = useRecoilValue(User);
  const resetLoginState = useResetRecoilState(LoginState);
  const resetUserState = useResetRecoilState(User);
  const [profile, setProfile] = useRecoilState(UserProfile);
  const navigate = useNavigate();

  const logoutFn = async () => {
    const url = 'http://192.168.50.26:8096/api/logout';
    const type = '';
    let array = { url };
    const logoutPut = await useUserData(array, type);
    if (logoutPut) {
      console.log('로그아웃');
    }

    resetLoginState();
    resetUserState();
    localStorage.removeItem('loginState');
    localStorage.removeItem('userId');
    localStorage.removeItem('userPw');
    localStorage.removeItem('loginToken');
    navigate('/login');
  };

  return (
    <RefHeader ref={headHeight}>
      <div>
        <Link to="/">
          <h1>
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </h1>
        </Link>
      </div>
      <div>
        <ul className="flex">
          {useLoginState ? (
            <>
              <HeaderListItem>
                <p>
                  {profile.name}
                  <span>님</span>
                </p>
              </HeaderListItem>
              <HeaderListItem>
                <Link
                  to={'my'}
                  className="    
                  rounded-md
                  bg-slate-800
                  w-full
                  flex 
                  justify-center 
                  px-3 
                  py-2
                  text-sm 
                  font-semibold 
                  leading-6 
                  text-white 
                  shadow-sm 
                  hover:bg-indigo-500 
                  focus-visible:outline 
                  focus-visible:outline-2 
                  focus-visible:outline-offset-2 
                  focus-visible:outline-indigo-600"
                >
                  Mypage
                </Link>
              </HeaderListItem>
            </>
          ) : null}

          <HeaderListItem>
            {!useLoginState ? (
              <Link
                to="/login"
                className="    
                rounded-md
                bg-slate-800
                flex 
                w-full 
                justify-center 
                px-3 
                py-2
                text-sm 
                font-semibold 
                leading-6 
                text-white 
                shadow-sm 
                hover:bg-indigo-500 
                focus-visible:outline 
                focus-visible:outline-2 
                focus-visible:outline-offset-2 
                focus-visible:outline-indigo-600"
              >
                Login
              </Link>
            ) : (
              <Button title="Logout" click={logoutFn}></Button>
            )}
          </HeaderListItem>
        </ul>
      </div>
    </RefHeader>
  );
};

const StyledHeader = styled.div`
  & a {
    background: transparent;
  }
  & button {
    background: transparent;
  }
  & p {
    color: white;
  }
` as React.FC<React.HTMLAttributes<HTMLDivElement>>;
const HeaderSection = tw(StyledHeader)`
    w-full
    flex
    justify-between
    px-9
    py-3
    border-b
    border-black
    border-solid
    bg-black
    sticky
    top-0
    z-50
`;
const StyledListItem = styled.li`
  a {
    -webkit-text-stroke: 0.5px #fff;
    color: transparent;
    font-size: 18px;
  }
`;
const HeaderListItem = tw(StyledListItem)`
  flex
  items-center
  ml-5
  text-sm  
  font-semibold 
`;
