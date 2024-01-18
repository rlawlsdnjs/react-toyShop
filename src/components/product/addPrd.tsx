import { useEffect, useState } from 'react';
import { Button } from '../common/button';
import Form from '../common/Form';
import { InputBtn } from '../common/input';
import { usePostAllPrdData } from '../../hooks/product/postPrd';
import { useGetPrdData } from '../../hooks/product/getPrd';
export const AddPrd = () => {
  const initialState = {
    imgUrl: '',
    categoryName: '',
    pdDetail: '',
    pdName: '',
    pdPrice: '',
    pdQuantity: '',
    pdSize: '',
    pdStat: '',
    userEmail: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [data, setData] = useState('');
  const getTitle = (setTitle: string) => {
    setData(setTitle);
  };
  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => {
      // 전개 연산자를 사용하여 이전 상태를 복사하고 해당 속성을 업데이트
      return {
        ...prevData,
        [data]: e.target.value,
      };
    });
    console.log(data);
  };

  useEffect(() => {
    setData(data);
    console.log(data);
  }, [data]);
  console.log(formData);

  const addPrdFn = async () => {
    const addPrd = await usePostAllPrdData(formData);
  };

  console.log(formData);

  return (
    <Form>
      {Object.keys(initialState).map((i, idx) => {
        return (
          <InputBtn
            key={idx}
            title={i}
            place={i}
            getTitle={getTitle}
            change={changeText}
          ></InputBtn>
        );
      })}
      <Button click={addPrdFn} title={'Add product'}></Button>
    </Form>
  );
};
