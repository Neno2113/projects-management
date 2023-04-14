import { createContext } from "react";
import { AuthState } from "./AuthProvider";
import { IRegisterUser, IUser, IUserLogin } from "../interfaces/user";


interface Props {
    isChecking: boolean;
    isAuthenticated: boolean;
    isaAuthenticating: boolean;
    isUnauthenticated: boolean;
    user?: IUserLogin;

    doLogin: (username: string, password: string) => Promise<void>;
    startRegisterUser: (userRegister: IRegisterUser, callback: () => void)  => Promise<void>;
    logout: () => void;
    updateUser: (user: IUser, callback: () => void) => Promise<void>
    deleteUser: (id: string) => Promise<void>

}


export const AuthContext = createContext( {} as Props );