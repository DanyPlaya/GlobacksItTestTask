import { baseApi } from "@/shared/api/baseApi"
import { ReqGetUserByName, ResGetAllUsers } from '../types/types'
import { useQuery } from "react-query"
export const useGetAllUsers = () => {
    const fetcher = async () => (await baseApi.get<ResGetAllUsers>('/')).data
    const queryResult = useQuery({
        queryFn: fetcher,
        queryKey: ['Users']
    })
    return queryResult
}
export const useGetUserByName = ({ name }: ReqGetUserByName) => {
    const fetcher = async () => (await baseApi.get<ResGetAllUsers>(`/?term=${name}`)).data
    const queryResult = useQuery({
        queryFn: fetcher,
        queryKey: ['User']
    })
    return queryResult
}