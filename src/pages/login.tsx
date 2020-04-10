import React, { FC } from 'react';
import { useModel, History } from 'umi';
import { Button } from 'antd';

interface ConnectProps {
  history: History;
}

const LoginPage: FC<ConnectProps> = ({ history }) => {
  const { initialState, setInitialState } = useModel('@@initialState');
  return (
    <div>
      <div>Login Page</div>
      <div>
        <Button
          type="primary"
          onClick={() => {
            setInitialState({ ...initialState, isLogin: true });
            setTimeout(() => {
              history.push('/');
            }, 100);
          }}
        >
          点我模拟登录
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
