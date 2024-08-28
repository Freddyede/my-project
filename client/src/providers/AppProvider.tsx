import {useState} from "react";
import {AuthContext} from "../context/AuthContext";
import {IUser} from "../interface/auth.ts";
import {fetchesServices} from "../constants";

export const AuthProvider = ({ children }: any) => {
  const [userAuth, setUserAuth]: any = useState({
    token: '',
    authenticated: false
  });

  const loginAction = async (user: IUser) => {
    fetchesServices.uri = '/auth/login';
    const response = await fetchesServices.postDatas(user);
    console.log(response);
    setUserAuth({token: response.token, authenticated: true});
    localStorage.setItem('token', response.token);
    window.location.href = '/dashboard';
  };

  const logOut = () => {
    setUserAuth({token: '', authenticated: false});
    localStorage.clear();
    window.location.href = '';
  };

  return (
    <AuthContext.Provider value={{ userAuth, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );

};
