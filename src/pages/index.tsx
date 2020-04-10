import React, { useEffect } from 'react';
import { useRequest, useModel, useAccess, Link } from 'umi';
import { queryHello } from '@/services/api';

const IndexPage = () => {
  const { setHello } = useModel('home');
  const { initialState } = useModel('@@initialState');
  const { data } = useRequest(queryHello);
  const access = useAccess();

  useEffect(() => {
    setHello(data);
  }, [data]);

  return (
    <div>
      <div>Index Page,Hello {data}</div>
      <div>InitState,Data {JSON.stringify(initialState)}</div>
      {access.isUmiDeveloper && (
        <div>你能看到这些文字，说明你是 umi 开发者，这个权限判断写在 src/access </div>
      )}
      <div>如果你想访问welcome页面，那请你模拟登录。这是一个模拟登录之后修改权限校验的过程。</div>
      <Link to="login">点我跳转登录</Link>
      <p></p>
      <Link to="welcome">点我跳转欢迎页</Link>
    </div>
  );
};

export default IndexPage;
