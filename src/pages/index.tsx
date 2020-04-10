import React from 'react';
import { useRequest } from 'umi';
import { queryHello } from '@/services/api';

const IndexPage = () => {
  const { data } = useRequest(queryHello);
  return <div>Index Page,Hello {data}</div>;
};

export default IndexPage;
