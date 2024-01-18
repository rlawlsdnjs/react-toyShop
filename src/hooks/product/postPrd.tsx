import axios from 'axios';
export const usePostAllPrdData = async (prd: any) => {
  let url = `http://localhost:3001/products`;
  console.log(prd.categoryName);
  let requestData = {
    imgUrl: prd.imgUrl,
    categoryName: prd.categoryName,
    pdDetail: prd.pdDetail,
    pdName: prd.pdName,
    pdPrice: prd.prdPrice,
    pdQuantity: prd.pdQuantity,
    pdSize: prd.pdSize,
    pdStat: prd.pdStat,
    userEmail: prd.userEmail,
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
