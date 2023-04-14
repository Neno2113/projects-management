import { FC, useEffect, useState, useCallback } from 'react';
import { AuthContext } from './authContext';
import { IRegisterUser, IUser, IUserLogin } from '../interfaces/user';
import projectApi from '../../api/projectM';
import { Heading, useToast } from '@chakra-ui/react';
import { LoadingPage } from '../page/LoadingPage';
// import { redirect, useNavigate } from 'react-router-dom';

export interface AuthState {
    isChecking: boolean;
    isAuthenticated: boolean;
    isUnauthenticated: boolean;
    isaAuthenticating: boolean;
    user?: IUserLogin
}


export const AuthInitialState: AuthState = {
    isChecking: false,
    isAuthenticated: false,
    isUnauthenticated: true,
    isaAuthenticating: false,
    user: undefined
}


interface Props {
    children: JSX.Element | JSX.Element[];
}


export const AuthProvider:FC<Props> = ({ children }) => {

    const [ authState, setAuthState ] = useState( AuthInitialState );
    const toast = useToast();


    useEffect(() => {
        checkToken();
    }, [])

    if( authState.isChecking){
        return <LoadingPage />
    }
    
    // const navigate = useNavigate();

    const doLogin = async( username:string, password:string ) => {
        setAuthState({
            ...authState,
            isaAuthenticating: true,
        })

        try {
            const { data } = await projectApi.post<IUserLogin>('/us/auth', {username, password}, { timeout: 6000});
            

            if(data.token){
                localStorage.setItem('token', data.token);
                setAuthState({
                    isAuthenticated: true,
                    isChecking: false,
                    isUnauthenticated: false,
                    isaAuthenticating: false,
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
            setAuthState({
                ...authState,
                isaAuthenticating: false,
            })
    

            if( error.code === "ECONNABORTED"){
                toast({
                    title: 'Error.',
                    description: "Error de comunicacion.",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })
            }
            if( error.response.data.msg){
                toast({
                    title: 'Error.',
                    description: error.response.data.msg,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })

            }
            
        }
    }

    const updateUser = async( user: IUser, callback: () =>void) => {
        try {
            const { data } = await projectApi.put(`/us/${user.id}`, user);

            console.log(data);
            toast({
                title: 'Usuario Actualizado.',
                description: "Usuario actualizado correctamente.",
                status: 'info',
                duration: 5000,
                isClosable: true,
            })
            
            callback();
        } catch (error:any) {
            console.log(error);
            toast({
                title: 'Error.',
                description: "Ocurrio error actualizando el usuario.",
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
            
        
    }

    const deleteUser = async( id: string ) => {
        try {
            const { data } = await projectApi.delete<IUser>(`/us/${id}`);

            if( data.username){
                toast({
                    title: 'Usuario Eliminado.',
                    description: `Usuario ${data.username} eliminado.`,
                    status: 'info',
                    duration: 5000,
                    isClosable: true,
                })
            }
            
            
        } catch (error) {
            console.log(error);
            toast({
                title: 'Error.',
                description: "Ocurrio error Eliminando este usuario.",
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
        const token = localStorage.getItem('token');
        setAuthState({
            isAuthenticated:false,
            isChecking: true,
            isUnauthenticated: true,
            isaAuthenticating: false,
        });

        if( !token ) {
            setAuthState({
                isAuthenticated:false,
                isChecking: false,
                isUnauthenticated: true,
                isaAuthenticating: false,
            });
            return false;
        }

        try {
            const { data } = await projectApi.get<IUserLogin>('/us/isauth');
            if( data.token ) {
                localStorage.setItem('token', data.token);
                setAuthState({
                    isAuthenticated: true,
                    isChecking: false,
                    isUnauthenticated: false,
                    isaAuthenticating: false,
                    user: data
                })
                return true;
            }

            setAuthState({
                isAuthenticated:false,
                isChecking: false,
                isUnauthenticated: true,
                isaAuthenticating: false,
            });
            return false

            
        } catch (error) {
            // console.log(error);
            setAuthState({
                isAuthenticated:false,
                isChecking: false,
                isUnauthenticated: true,
                isaAuthenticating: false,
            });
            return false;
        }   
        
    }


    const logout = (  ) => {
        localStorage.removeItem("token");
        setAuthState({
            isAuthenticated:false,
            isChecking: false,
            isUnauthenticated: true,
            isaAuthenticating: false,
        });


    }


    return (
        <AuthContext.Provider value={{
            ...authState,
            doLogin,
            startRegisterUser,
            logout,
            updateUser,
            deleteUser,

        }} >
            { children }
        </AuthContext.Provider>
       
    )
}
