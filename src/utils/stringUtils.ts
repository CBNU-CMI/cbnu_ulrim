export const getTitleByPathName = (pathname: string) => {
  switch (pathname) {
    case '/':
      return '청원';
    case '/petition':
      return '청원';
    case '/poll':
      return '투표';
    case '/login':
      return '로그인';
    default:
      return '';
  }
};
