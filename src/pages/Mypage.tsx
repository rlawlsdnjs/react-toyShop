import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { LoginState, User } from '../recoil/sign/atoms/loginState';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const MyPage = () => {
  const loginState = useRecoilValue(LoginState);
  const userState = useRecoilValue(User);
  // const location = useLocation();
  // const { userId } = location.state;
  // console.log(userId);
  console.log(loginState);
  const navigate = useNavigate();

  useEffect(() => {
    loginState ? null : navigate('../login');
  });

  return <div>{userState.userId} gd</div>;
};
