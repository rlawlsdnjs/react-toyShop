import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import tw from 'tailwind-styled-components';
import { useRecoilValue, useRecoilState, useResetRecoilState } from 'recoil';
import { LoginState, User, UserProfile } from '../recoil/sign/atoms/loginState';

import { Button } from '../components/common/button';
import { useEffect } from 'react';
import { useUserData } from '../hooks/auth/postUserData';
import { useRef } from 'react';
import { HeaderH } from '../recoil/common/common';
import React from 'react';
import styled from 'styled-components';
export const Header = () => {
  const headHeight = React.useRef<any>();
  const [headerHeight, setHeaderHeight] = useRecoilState(HeaderH);

  useEffect(() => {
    setHeaderHeight(headHeight.current.offsetHeight);
  }, []);
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
    <HeaderSection ref={headHeight}>
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
                {profile.name}
                <span>님</span>
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
    </HeaderSection>
  );
};
const HeaderSection = tw.header`
    w-full
    flex
    justify-between
    px-9
    py-3
    border-b
    border-black
    border-solid
    bg-white
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
