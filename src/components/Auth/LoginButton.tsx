import { LoginProps } from '../../types/login';
import { useNavigate } from "react-router-dom";

export const LoginButton = ({ loginFunction, isLogin }: LoginProps) => {
  const navigate = useNavigate();
  if (isLogin) {
    return <button onClick={() => loginFunction(false, '')}>Logout</button>;
  }
  return (
    <>
      <button onClick={() => navigate('/login')}>Login</button>
    </>
  );
};
