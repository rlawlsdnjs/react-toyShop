import axios from 'axios';
export const useUserData = async (array: any, type: string) => {
  console.log(type);
  let requestData;
  switch (type) {
    case 'userData': {
      requestData = {
        email: array.id,
        password: array.pw,
      };
      break;
    }
    case 'postEmail': {
      requestData = {
        email: array.id,
      };
      break;
    }
    case 'verificationEmail': {
      requestData = {
        code: array.code,
        email: array.id,
      };
      break;
    }
    case 'signUp': {
      requestData = {
        email: array.id,
        password: array.newPw,
        username: array.name,
      };
      break;
    }
    default:
      console.log('어떤 type인지 확인 불가');
  }
  // if (type === 'userData') {
  // } else if (type === 'postEmail') {
  //   requestData = {
  //     email: array.id,
  //   };
  // } else if (type === 'verificationEmail') {
  //   requestData = {
  //     code: array.code,
  //     email: array.id,
  //   };
  // } else if (type === 'signUp') {
  //   requestData = {
  //     email: array.id,
  //     password: array.newPw,
  //     username: array.name,
  //   };
  //   console.log(array);
  // } else {
  //   return;
  // }

  try {
    const response = await axios.post(array.url, requestData, {
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
