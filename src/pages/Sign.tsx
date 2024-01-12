import tw from 'tailwind-styled-components';
import { Button } from '../components/common/button';
import { InputBtn } from '../components/common/input';
import Form from '../components/common/Form';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useUserData } from '../hooks/auth/putUserData';
import { useNavigate } from 'react-router-dom';
import { Explanation } from '../components/common/logoEx';

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
      <div>
        <Form>
          <Explanation description="Sign up to your account" />
          <InputBtn
            title="Email"
            place={'전화번호, 사용자 이름 또는 이메일'}
            type="email"
            change={changeId}
          />

          <Button title={'Send verification code'} click={mainFn}></Button>
          {postMail ? (
            <div>
              <InputBtn title="code" place={'code'} change={changeCode} />
              <Button title={'Confirm code'} click={verification}></Button>
            </div>
          ) : null}

          <InputBtn title="Name" place={'성명'} change={changeName} />
          <InputBtn
            title="Password"
            place={'비밀번호'}
            type="password"
            change={changePw}
          />
          <Button title={'SignUp'} click={signUp}></Button>
        </Form>
        <Form>
          <Link to={'/login'}>
            <Button title={'Login'}></Button>
          </Link>
        </Form>
      </div>
    </>
  );
};
