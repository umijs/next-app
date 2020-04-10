import React from 'react';
import { useRequest, useModel } from 'umi';
import { queryHello } from '@/services/api';

const IndexPage = () => {
  const { setHello } = useModel('home');
  const { data } = useRequest(queryHello);
  setHello(data);
  return <div>Index Page,Hello {data}</div>;
};

export default IndexPage;
