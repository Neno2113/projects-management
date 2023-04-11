import { FC, useState } from 'react';
import { AuthContext } from './authContext';
import { IRegisterUser, IUserLogin } from '../../interfaces/user';
import projectApi from '../../api/projectM';
import { useToast } from '@chakra-ui/react';
// import { redirect, useNavigate } from 'react-router-dom';

export interface AuthState {
    isChecking: boolean;
    isAuthenticated: boolean;
    isUnauthenticated: boolean;
    user?: IUserLogin
}


export const AuthInitialState: AuthState = {
    isChecking: false,
    isAuthenticated: false,
    isUnauthenticated: true,
    user: undefined
}


interface Props {
    children: JSX.Element | JSX.Element[];
}


export const AuthProvider:FC<Props> = ({ children }) => {

    const [ authState, setAuthState ] = useState( AuthInitialState );
    const toast = useToast();
    // const navigate = useNavigate();

    const doLogin = async( username:string, password:string ) => {
        try {
            const { data } = await projectApi.post<IUserLogin>('/us/auth', {username, password});
            

            if(data.token){
                localStorage.setItem('token', data.token);
                setAuthState({
                    isAuthenticated: true,
                    isChecking: false,
                    isUnauthenticated: false,
                    user: data
                })
                toast({
                    title: 'Sign In .',
                    description: `Welcome back ${username} .`,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
                return;
            }

        } catch (error: any) {
            // console.log(error);
            toast({
                title: 'Error.',
                description: error.response.data.msg,
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
            
        }
    }

    const startRegisterUser = async( userRegister: IRegisterUser , callback: () =>void ) => {

        try {
            const { data } = await projectApi.post<IRegisterUser>('us',  userRegister );
            console.log(data);
            
            if( data.username ){
                toast({
                    title: 'Account created.',
                    description: `We've created an account for ${data.username}.`,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
                // return navigate('/users');
                callback();
            }

        } catch (error: any) {
            toast({
                title: 'Error.',
                description: error.response.data.msg,
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
            
        }
    }


    const checkToken = async() => {
        const token = localStorage.getItem('token') || '';
        setAuthState({
            isAuthenticated:false,
            isChecking: true,
            isUnauthenticated: true
        });

        if( !token ) {
            setAuthState({
                isAuthenticated:false,
                isChecking: false,
                isUnauthenticated: true
            });
            return false;
        }

        try {
            // const { data } = await projectApi.post<IUserLogin>('/us/auth', {username, password});
            
        } catch (error) {
            console.log(error);
            setAuthState({
                isAuthenticated:false,
                isChecking: false,
                isUnauthenticated: true
            });
        }
        
    }


    return (
        <AuthContext.Provider value={{
            ...authState,
            doLogin,
            startRegisterUser

        }} >
            { children }
        </AuthContext.Provider>
       
    )
}
