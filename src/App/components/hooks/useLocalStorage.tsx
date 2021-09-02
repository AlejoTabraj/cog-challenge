import { useState } from 'react';

export const useLocalStorage = (key : string, value:any) => {
  const [data, setData] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : value;
    } catch (error) {
      return value;
    }
  });

  const setLocalData = (val:any) => {
    try {
      setData(val);
      window.localStorage.setItem(key, JSON.stringify(val));
    } catch (error) {
      console.log(error);
    }
  };

  return [data, setLocalData];
};
