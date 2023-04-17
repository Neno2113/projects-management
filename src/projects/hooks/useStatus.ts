import { useQuery } from "react-query";
import projectApi from "../../api/projectM";
import { IStatus } from "../interfaces/status";


export const getStatus = async():Promise<IStatus[]> => {

    const { data } = await projectApi.get<IStatus[]>(`/st`);

    return data;
}


export const useStatus = () => {


    const statusQuery = useQuery(
        ['status'],
        getStatus
    );


    return {
        statusQuery,
    }
}
