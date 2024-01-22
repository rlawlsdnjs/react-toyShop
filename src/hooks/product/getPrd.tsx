import axios from 'axios';

export const useGetPrdData = async () => {
  const url = `http://localhost:3001/products`;
  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error: any) {
    return error.response.status;
  }
};
