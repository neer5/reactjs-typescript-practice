import React, { createContext, useState } from 'react';
import { ContextProviderProps } from '../../types/common';
import { LoginContextType, LoginParam } from '../../types/login';
import { ContextLoginButton } from './LoginButton';

export const LoginContext = createContext({} as LoginContextType);

export const AuthContext = ({ children }: ContextProviderProps) => {
  const [loginParam, setLoginParam] = useState<LoginParam>({} as LoginParam);
  const setloginContext = (loginParamData: LoginParam) => setLoginParam(loginParamData);
  if (children) {
    return (
      <LoginContext.Provider
        value={{ loginParam, setLoginParam: setloginContext }}
      >
        {children}
      </LoginContext.Provider>
    );
  }
  return (
    <LoginContext.Provider
      value={{ loginParam, setLoginParam: setloginContext }}
    >
      <ContextLoginButton />
      <h1>Welcome {loginParam?.username}</h1>
    </LoginContext.Provider>
  );
};
