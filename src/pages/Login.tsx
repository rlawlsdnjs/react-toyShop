import tw from 'tailwind-styled-components';
import { Button } from '../components/common/button';
import { InputBtn } from '../components/common/input';
import SignForm from '../components/sign/signForm';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ConfirmUser } from '../components/sign/confirmUser';
import { useUserData } from '../hooks/auth/putUserData';
import {
  LoginSession,
  LoginState,
  User,
  UserSession,
} from '../recoil/sign/atoms/loginState';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Login = () => {
  const navigate = useNavigate();
  const [loginState, setLoginState] = useRecoilState(LoginState);
  const [userInfo, setUserInfo] = useRecoilState(User);
  const userVal = useRecoilValue(User);
  const loginVal = useRecoilValue(LoginState);
  const loginSaveVal = useRecoilValue(LoginSession);
  const userSaveVal = useRecoilValue(UserSession);
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [confirmUser, setConfirmUser] = useState(false);

  useEffect(() => {
    !loginVal ? null : navigate('/');
  });

  const changeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const changePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };
  const LoginFn = async () => {
    const url = 'http://192.168.50.26:8096/api/login';

    const type = 'userData';
    const array = { id, pw, url };

    const userState = await useUserData(array, type);
    userState
      ? (() => {
          setConfirmUser(false);
          setLoginState(true);
          setUserInfo({ userId: id, userPw: pw });
          navigate('/my', { state: { userId: id } });
          localStorage.setItem('loginToken', `${userState?.data.token}`);
        })()
      : (() => {
          setConfirmUser(true);
          setLoginState(false);
        })();
  };

  return (
    <>
      <SignForm>
        <LoginTop>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <InputBtn
            title="Email"
            place={'example@email.com'}
            onChange={changeId}
            type="email"
          />

          <InputBtn
            title="Password"
            place={''}
            onChange={changePw}
            type="password"
          />
          {confirmUser ? <ConfirmUser /> : null}
          <Button
            click={LoginFn}
            userId={id}
            userPw={pw}
            title={'Login'}
          ></Button>
        </LoginTop>
        <LoginBot>
          <p className="text-left block text-sm font-medium leading-6 text-gray-900 mb-2">
            Not a member?
          </p>
          <Link to={'/sign'}>
            <Button title={'SignUp'}></Button>
          </Link>
        </LoginBot>
      </SignForm>
    </>
  );
};

const LoginTop = tw.div`
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

const LoginBot = tw.div`
    border-solid 
    border
    border-slate-300
    p-8
    bg-white
    mt-3
`;
