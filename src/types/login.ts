export interface LoginProps {
  loginFunction: (loginState: boolean, username?: string) => void;
  isLogin?: boolean;
}
