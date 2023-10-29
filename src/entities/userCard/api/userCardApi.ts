import { baseApi } from "@/shared/api/baseApi"
import { ReqGetUserById, ReqGetUserByName, ResGetAllUsers, ResGetUserById } from '../types/types'
import { useQuery } from "react-query"
export const useGetUserById = ({ id }: ReqGetUserById) => {
    
    const fetcher = async () => (await baseApi.get<ResGetUserById>(`/user/${id}`)).data
    const queryResult = useQuery({
        queryFn: fetcher,
        queryKey: ['User']
    })
    return queryResult
}
export const useGetUserByName = ({ name }: ReqGetUserByName) => {
    const fetcher = async () => (await baseApi.get<ResGetAllUsers>(`/?term=${name}`)).data
    const queryResult = useQuery({
        queryFn: fetcher,
        queryKey: ['Users']
    })
    return queryResult
}