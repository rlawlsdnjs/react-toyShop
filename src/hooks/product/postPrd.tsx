import axios from 'axios';
export const usePostAllPrdData = async (prd: any) => {
  let url = `http://localhost:3001/products`;
  console.log(prd.categoryName);
  let requestData = {
    categoryName: prd.categoryName,
    pdDetail: '',
    pdName: '',
    pdPrice: '',
    pdQuantity: '',
    pdSize: '',
    pdStat: '',
    userEmail: '',
  };
  try {
    const response = await axios.post(url, requestData, {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
