import { useEffect } from 'react';
import { atom, selector } from 'recoil';
interface UserInfo {
  userId: any;
  userPw: any;
}

interface UserProfileInterface {
  name: string;
}

export const LoginState = atom({
  key: 'LoginState',
  default: false,
});

export const User = atom<UserInfo>({
  key: `UserInfo`,
  default: {
    userId: localStorage.getItem('userId'),
    userPw: localStorage.getItem('userPw'),
  },
});

export const UserProfile = atom<UserProfileInterface>({
  key: 'UserProfile',
  default: {
    name: '',
  },
});

export const LoginSession = selector<any>({
  key: 'LoginSession',
  get: ({ get }) => {
    const login = get(LoginState);
    console.log('select', login);
    if (login) {
      localStorage.setItem('loginState', `${login}`);
    }
    return login;
  },
});
export const UserSession = selector({
  key: `UserSession`,
  get: ({ get }) => {
    const user = get(User);
    const saveLocal = get(LoginSession);

    if (saveLocal) {
      Object.entries(user).forEach(([key, value]) => {
        localStorage.setItem(key, value);
      });
    }
    return;
  },
});
