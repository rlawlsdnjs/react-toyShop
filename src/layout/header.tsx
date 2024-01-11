import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { Button } from '../components/common/button';
import { useRecoilValue, useRecoilState, useResetRecoilState } from 'recoil';
import { LoginState, User, UserProfile } from '../recoil/sign/atoms/loginState';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useGetUserData } from '../hooks/auth/getUserData';

export const Header = () => {
  const useLoginState = useRecoilValue(LoginState);
  const userState = useRecoilValue(User);
  const resetLoginState = useResetRecoilState(LoginState);
  const resetUserState = useResetRecoilState(User);
  const [loginState, setLoginState] = useRecoilState(LoginState);
  const [userInfo, setUserInfo] = useRecoilState(User);
  const [profile, setProfile] = useRecoilState(UserProfile);
  const navigate = useNavigate();

  const logoutFn = () => {
    resetLoginState();
    resetUserState();
    localStorage.removeItem('loginState');
    localStorage.removeItem('userId');
    localStorage.removeItem('userPw');
    localStorage.removeItem('loginToken');
    navigate('/login');
  };

  const loginToken = localStorage.getItem('loginToken');

  const autoSign = async () => {
    if (loginToken) {
      setLoginState(true);
      setUserInfo({
        userId: localStorage.getItem('userId'),
        userPw: localStorage.getItem('userPw'),
      });
      const getUserProfile = await useGetUserData(userState.userId);
      console.log('gd', getUserProfile);
      setProfile({
        name: getUserProfile.userName,
      });
      localStorage.setItem('loginToken', `${loginToken}`);
    } else return;
  };

  useEffect(() => {
    autoSign();
  }, []);

  return (
    <HeaderSection>
      <div>
        <h1>
          {' '}
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </h1>
      </div>
      <div>
        <ul className="flex">
          {useLoginState ? (
            <>
              <li>
                {profile.name}
                <span>님</span>
              </li>
              <li>
                <Link
                  to={'my'}
                  className="rounded-md p-2 flex  w-full  justify-center  bg-white  px-3  py-1.5  text-sm  font-semibold  leading-6 text-indigo-500 shadow-sm  hover:bg-indigo-500 hover:text-white  focus-visible:outline  focus-visible:outline-2  focus-visible:outline-offset-2  focus-visible:outline-indigo-600"
                >
                  Mypage
                </Link>
              </li>
            </>
          ) : null}

          <li>
            {!useLoginState ? (
              <Link
                to="/login"
                className="rounded-md p-2 flex  w-full  justify-center  bg-indigo-600  px-3  py-1.5  text-sm  font-semibold  leading-6 text-white shadow-sm  hover:bg-indigo-500 hover:text-white  focus-visible:outline  focus-visible:outline-2  focus-visible:outline-offset-2  focus-visible:outline-indigo-600"
              >
                Login
              </Link>
            ) : (
              <Button title="Logout" click={logoutFn}></Button>
            )}
          </li>
        </ul>
      </div>
    </HeaderSection>
  );
};
const HeaderSection = tw.header`
    fixed
    w-full
    h-5
    left-0
    top-0
    flex
    justify-between
    px-9
    py-3
`;
