import { useQuery } from 'react-query';
import projectApi from "../../api/projectM"
import { IUsers } from "../interfaces/user";





export const getUsers = async():Promise<IUsers[]> => {

    const { data } = await projectApi.get('/us');
    return data;
}



export const useUsers = () => {

    const users = useQuery('users', getUsers )

    return { 
        users
    }
}
