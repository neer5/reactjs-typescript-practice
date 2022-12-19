import { LoginProps } from "../../types/login";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = ({ loginFunction }: LoginProps) => {
  const [username, setUsername] = useState<string>('');
  const navigate = useNavigate();
  const setLogin = () => {
    loginFunction(true, username);
    navigate('/');
  }
  return (
    <form>
      <label>
        <p>Username</p>
        <input type="text" 
        onChange={(e) => setUsername(e.target.value)}/>
      </label>
      <div>
        <button type="submit" onClick={setLogin}>Submit</button>
      </div>
    </form>
  )
}
