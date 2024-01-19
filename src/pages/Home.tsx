import '../App.css';
import { useRecoilValue } from 'recoil';
import { User, LoginState, UserProfile } from '../recoil/sign/atoms/loginState';
import { useRecoilState } from 'recoil';
import { useGetUserData } from '../hooks/auth/getUserData';
import { useEffect } from 'react';
import { Header } from '../layout/header';
import { Login } from './Login';
import { useUserData } from '../hooks/auth/postUserData';

export const Home = () => {
  const [loginState, setLoginState] = useRecoilState(LoginState);
  const [userInfo, setUserInfo] = useRecoilState(User);
  const [profile, setProfile] = useRecoilState(UserProfile);
  const profileName = useRecoilValue(UserProfile);
  const loginAuto = useRecoilValue(LoginState);
  const loginToken = localStorage.getItem('loginToken');
  const id = localStorage.getItem('userId');
  const pw = localStorage.getItem('userPw');

  // 자동 로그인
  const autoSign = async () => {
    setLoginState(true);
    setUserInfo({
      userId: id,
      userPw: pw,
    });
    const url = 'http://192.168.50.26:8096/api/login';

    const type = 'userData';
    const array = { id, pw, url };
    console.log(loginAuto, profile);
    const getUserProfile = await useGetUserData(id);

    setProfile({
      name: getUserProfile.userName,
    });
    if (loginAuto) {
      return;
    } else {
      const userState = await useUserData(array, type);
    }

    localStorage.setItem('loginToken', `${loginToken}`);
  };

  useEffect(() => {
    if (loginToken) {
      autoSign();
    }
  }, [loginAuto]);
  return <Header />;
};
