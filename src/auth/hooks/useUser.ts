import { useQuery } from "react-query";
import projectApi from "../../api/projectM"
import { IUser } from "../interfaces/user"


export const getUser = async( id: string ):Promise<IUser> => {

    const { data } = await projectApi.get<IUser>(`/us/${id}`);

    return data;
}



export const useUser = (id: string) => {

    const userQuery = useQuery(
        ['user', id],
        () => getUser(id),
    )

    return {
        userQuery,
    }
}
