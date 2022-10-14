import React, { useState, useEffect } from 'react'

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const jsonValue = window.localStorage.getItem(key);
    if(jsonValue !== null) return JSON.parse(jsonValue);

    return defaultValue;
  });

  useEffect(() => {
    //JSON.stringifyで年齢の値をjson形式に変換
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value, setValue]);

  return [value, setValue];
};

export default useLocalStorage;