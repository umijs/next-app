export default function (initialState: any) {
  const { username, isLogin = false } = initialState;

  return {
    hasToken: isLogin,
    isUmiDeveloper: username === 'umi developer',
  };
}
