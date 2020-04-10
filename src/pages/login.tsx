import React, { FC } from 'react';
import { useModel, History } from 'umi';

interface ConnectProps {
    history: History;
}

const LoginPage: FC<ConnectProps> = ({ history }) => {
    const { initialState, setInitialState } = useModel('@@initialState');
    return (
        <div>
            <div>Login Page</div>
            <div onClick={() => {
                setInitialState({ ...initialState, isLogin: true });
                setTimeout(() => {
                    history.push('/');
                }, 100)
            }}>点我模拟登录</div>
        </div>
    );
};

export default LoginPage;
