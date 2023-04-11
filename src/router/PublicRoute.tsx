import { FC, useContext } from 'react';
import { AuthState } from '../auth/context/AuthProvider';
import { AuthContext } from '../auth/context';
import { Navigate } from 'react-router-dom';


interface Props {
    children: JSX.Element | JSX.Element[];
}


export const PublicRoute:FC<Props> = ({ children }) => {


    const { isAuthenticated } = useContext(AuthContext);

    // console.log( isAuthenticated )

    if( isAuthenticated ){
        return <Navigate to='/' />
    } else {
        return <>{ children }</>
    }

 
}
