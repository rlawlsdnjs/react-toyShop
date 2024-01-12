import axios from 'axios';
export const useGetUserData = async (user: string | null) => {
  let url = `http://192.168.50.26:8096/api/profile?userId=${user}`;
  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
