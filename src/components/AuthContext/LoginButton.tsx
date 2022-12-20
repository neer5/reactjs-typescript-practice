import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext, LoginContext } from './Context';
import { LoginParam } from '../../types/login';

export const ContextLoginButton = () => {
  const { loginParam, setLoginParam } = useContext(LoginContext);
  const navigate = useNavigate();
  if (loginParam?.isLogin) {
    return (
      <>
      <button onClick={() => setLoginParam({} as LoginParam)}>Logout</button>
      </>
    );
  }
  return (
    <AuthContext>
      <button
        onClick={() => navigate('/context-login')}
      >
        Login
      </button>
      </AuthContext>
  );
};
