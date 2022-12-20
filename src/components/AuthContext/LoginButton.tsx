import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from './Context';
import { LoginParam } from '../../types/login';

export const ContextLoginButton = () => {
  const { loginParam, setLoginParam } = useContext(LoginContext);

  const setLogin = () => {
    setLoginParam({ isLogin: true, username: 'Nirali' });
    navigate('/');
  };
  const navigate = useNavigate();
  if (loginParam?.isLogin) {
    return (
      <>
      <button onClick={() => setLoginParam({} as LoginParam)}>Logout</button>
      <h1>Welcome {loginParam.username}</h1>
      </>
    );
  }
  return (
    <>
      <button
        onClick={setLogin}
        // onClick={() => navigate('/context-login')}
      >
        Login
      </button>
      <h1>Welcome {loginParam?.username || 'Guest'}</h1>
    </>
  );
};
