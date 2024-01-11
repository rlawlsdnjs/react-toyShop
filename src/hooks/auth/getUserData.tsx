import axios from 'axios';
import { useRecoilValue, useRecoilState } from 'recoil';
import { User, UserProfile } from '../../recoil/sign/atoms/loginState';
export const useGetUserData = async (user: string) => {
  let url = `http://192.168.50.26:8096/api/profile?userId=${user}`;
  try {
    const response = await axios.get(url);

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
