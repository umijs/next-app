import React from 'react';
import { useModel } from 'umi';

const WelcomePage = () => {
  const { hello } = useModel('home');
  return <div>Welcome Page,Hello {hello}</div>;
};

export default WelcomePage;
