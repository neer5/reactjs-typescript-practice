import './App.css';
import { Fragments } from './components/Fragments/Fragments';
import { Dashboard } from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ClassExample } from './components/Class/ClassExample';
import { Counter } from './components/Counter/Counter';
import { Filter } from './components/Filter/Filter';
import { RadioColor } from './components/RadioColor/RadioColor';
import { ParentChild } from './components/ParentChild/ParentChild';
import { Login } from './components/Auth/Login';
import { useState } from 'react';
import { LoginButton } from './components/Auth/LoginButton';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');
  const loginFunction = (loginState: boolean, username?: string) => {
    setIsLogin(loginState)
    setUsername(username || '')
  }
  return (
    <Router>
      <div className="App">
      <LoginButton loginFunction={loginFunction} isLogin={isLogin}/>
        {/* {isLogin ? <button>Logout</button> : <button>Login</button>} */}
        <h1>Welcome {username}</h1>
        <hr />
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li>
              <Link to={'/'} className="nav-link">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to={'/fragments'} className="nav-link">
                Fragments
              </Link>
            </li>
            <li>
              <Link to={'/class'} className="nav-link">
                Class
              </Link>
            </li>
            <li>
              <Link to={'/counter'} className="nav-link">
                Counter
              </Link>
            </li>
            <li>
              <Link to={'/filter'} className="nav-link">
                Filter
              </Link>
            </li>
            <li>
              <Link to={'/radio-color'} className="nav-link">
                Radio Color
              </Link>
            </li>
            <li>
              <Link to={'/parent-child'} className="nav-link">
                Parent Child
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/fragments" element={<Fragments />} />
          <Route
            path="/class"
            element={<ClassExample message="This is test class form" />}
          />
          <Route path="/counter" element={<Counter />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/radio-color" element={<RadioColor />} />
          <Route path="/parent-child" element={<ParentChild />} />
          <Route path="/login" element={<Login loginFunction={loginFunction}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
