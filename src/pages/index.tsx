import React, { useEffect } from 'react';
import {
  useRequest,
  useModel,
  useAccess,
  Link,
  useIntl,
  getAllLocales,
  getLocale,
  setLocale,
} from 'umi';
import { queryHello } from '@/services/api';
import { Select, DatePicker } from 'antd';

const { Option } = Select;
const IndexPage = () => {
  const { setHello } = useModel('home');
  const { initialState } = useModel('@@initialState');
  const { data } = useRequest(queryHello);
  const access = useAccess();
  const intl = useIntl();
  const locales = getAllLocales();
  const thisLocal = getLocale();
  useEffect(() => {
    setHello(data);
  }, [data]);

  return (
    <div>
      <div>
        Index Page,
        {intl.formatMessage(
          {
            id: 'WELCOME_TO_UMI_WORLD',
            defaultMessage: '你好，旅行者',
          },
          {
            name: data,
          },
        )}
      </div>
      <div>InitState,Data {JSON.stringify(initialState)}</div>
      {access.isUmiDeveloper && (
        <div>你能看到这些文字，说明你是 umi 开发者，这个权限判断写在 src/access </div>
      )}
      <div>如果你想访问welcome页面，那请你模拟登录。这是一个模拟登录之后修改权限校验的过程。</div>
      <Link to="login">点我跳转登录</Link>
      <p></p>
      <Link to="welcome">点我跳转欢迎页</Link>
      <br></br>
      当前语言：
      <Select
        defaultValue={thisLocal}
        style={{ width: 120 }}
        onChange={(value) => setLocale(value, false)}
      >
        {locales.map((locale) => (
          <Option key={locale} value={locale}>
            {locale}
          </Option>
        ))}
      </Select>
      听说日期国际化有问题，测试一下：
      <DatePicker />
    </div>
  );
};

export default IndexPage;
