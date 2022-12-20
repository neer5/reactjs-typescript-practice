
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { LoginContext } from "./Context";

export const LoginContextForm = () => {
  const [loginUsername, setLoginUsername] = useState<string>('');
  const { setLoginParam } = useContext(LoginContext);
  const navigate = useNavigate();
  const setLogin = () => {
    setLoginParam({isLogin: true, username:loginUsername});
    navigate('/');
  }

  return (
    <form>
      <label>
        <p>Context Username</p>
        <input type="text" 
        onChange={(e) => setLoginUsername(e.target.value)}/>
      </label>
      <div>
        <button type="submit" onClick={setLogin}>Submit</button>
      </div>
    </form>
  )
}
