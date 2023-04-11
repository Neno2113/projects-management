import { FC, useContext } from 'react';
import { AuthContext } from '../auth/context';
import { Navigate } from 'react-router-dom';


interface Props {
    children: JSX.Element | JSX.Element[];
}


export const PrivateRoute:FC<Props> = ({ children }) => {


    const { isAuthenticated } = useContext(AuthContext);

    if( isAuthenticated ){
        return <>{ children }</>
    } else {
        return <Navigate to='/auth/login' />
    }

 
}
