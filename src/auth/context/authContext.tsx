import { createContext } from "react";
import { AuthState } from "./AuthProvider";
import { IRegisterUser, IUserLogin } from "../../interfaces/user";


interface Props {
    isChecking: boolean;
    isAuthenticated: boolean;
    isUnauthenticated: boolean;
    user?: IUserLogin;

    doLogin: (username: string, password: string) => Promise<void>;
    startRegisterUser: (userRegister: IRegisterUser, callback: () => void)  => Promise<void>;

}


export const AuthContext = createContext( {} as Props );