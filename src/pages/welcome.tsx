import React from 'react';
import { useModel } from 'umi';

const WelcomePage = () => {
  const { hello } = useModel('home');
  const { initialState } = useModel('@@initialState');
  return (
    <div>
      <div>Welcome Page,Hello {hello}</div>
      <div>InitState,Data {JSON.stringify(initialState)}</div>
    </div>
  );
};

export default WelcomePage;
