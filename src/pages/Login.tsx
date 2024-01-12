import tw from 'tailwind-styled-components';
import { Button } from '../components/common/button';
import { InputBtn } from '../components/common/input';
import { Explanation } from '../components/common/logoEx';
import Form from '../components/common/Form';
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
      <div>
        <Form>
          <Explanation description="Sign in to your account" />

          <InputBtn
            title="Email"
            place={'example@email.com'}
            change={changeId}
            type="email"
          />

          <InputBtn
            title="Password"
            place={''}
            change={changePw}
            type="password"
          />
          {confirmUser ? <ConfirmUser /> : null}
          <Button
            click={LoginFn}
            userId={id}
            userPw={pw}
            title={'Login'}
          ></Button>
        </Form>
        <Form>
          <p className="text-left block text-sm font-medium leading-6 text-gray-900 mb-2">
            Not a member?
          </p>
          <Link to={'/sign'}>
            <Button title={'SignUp'}></Button>
          </Link>
        </Form>
      </div>
    </>
  );
};
