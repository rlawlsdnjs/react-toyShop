import tw from 'tailwind-styled-components';
import { Button } from '../components/common/button';
import { InputBtn } from '../components/common/input';
import SignForm from '../components/sign/signForm';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useUserData } from '../hooks/auth/putUserData';
import { useNavigate } from 'react-router-dom';

export const Sign = () => {
  const navigate = useNavigate();
  const [newId, setNewId] = useState('');
  const [newPw, setNewPw] = useState('');
  const [name, setName] = useState('');
  const [code, setCode] = useState('');

  const [emailConfirm, setEmailConfirm] = useState(false);
  const [postMail, setPostMail] = useState(false);
  const [veri, setVeri] = useState(false);
  const changeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewId(e.target.value);
  };
  const changePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPw(e.target.value);
  };
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const changeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const mainFn = async () => {
    const url = 'http://192.168.50.26:8096/api/send-verification-email';

    let id = newId;
    const type = 'postEmail';
    let array = { id, url };
    const userState = await useUserData(array, type);
    userState ? setPostMail(true) : setPostMail(false);
  };
  const verification = async () => {
    const url = 'http://192.168.50.26:8096/api/verify-email';

    let id = newId;
    const type = 'verificationEmail';
    let array = { id, code, url };
    const userState = await useUserData(array, type);
    userState
      ? (() => {
          setVeri(true);
          alert('인증 완료');
        })()
      : setVeri(false);
  };

  const signUp = async () => {
    const url = 'http://192.168.50.26:8096/api/signup';

    let id = newId;
    const type = 'signUp';
    let array = { id, name, newPw, url };
    const userState = await useUserData(array, type);
    userState
      ? (() => {
          console.log('ok'), navigate('/login');
        })()
      : console.log('no');
  };

  return (
    <>
      <SignForm>
        <SignTop>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign up to your account
            </h2>
          </div>
          <InputBtn
            title="Email"
            place={'전화번호, 사용자 이름 또는 이메일'}
            type="email"
            onChange={changeId}
          />

          <Button title={'Send verification code'} click={mainFn}></Button>
          {postMail ? (
            <div>
              <InputBtn title="code" place={'code'} onChange={changeCode} />
              <Button title={'Confirm code'} click={verification}></Button>
            </div>
          ) : null}

          <InputBtn title="Name" place={'성명'} onChange={changeName} />
          <InputBtn
            title="Password"
            place={'비밀번호'}
            type="password"
            onChange={changePw}
          />
          <Button title={'SignUp'} click={signUp}></Button>
        </SignTop>
        <SignBot>
          <Link to={'/login'}>
            <Button title={'Login'}></Button>
          </Link>
        </SignBot>
      </SignForm>
    </>
  );
};

const SignTop = tw.div`
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

const SignBot = tw.div`
    border-solid 
    border
    border-slate-300
    p-8
    bg-white
    mt-3
`;
