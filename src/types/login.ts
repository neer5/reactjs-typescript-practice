export type LoginProps = {
  loginFunction: (loginState: boolean, username?: string) => void;
  isLogin?: boolean;
};

export type LoginParam = {
  isLogin: boolean;
  username: string;
};

export type LoginContextType = {
  loginParam: LoginParam;
  setLoginParam: (LoginParam: LoginParam) => void; // React.Dispatch<React.SetStateAction<LoginParam>>;
};

export type LoginContextProviderProps = {
  children?: React.ReactNode;
};
