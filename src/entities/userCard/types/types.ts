export type UserData = {
    id: number,
    name: string,
    phone: string,
    email: string,
    address: string,
    position_name: string,
    department: string,
    hire_date: string,
}

export type ReqGetUserById = {
    id: number | undefined
}
export type ResGetAllUsers = Pick<UserData, 'name' | 'email' | 'phone' | 'id'>[]
export type ReqGetUserByName = {
    name: string
}
export type ResGetUserById = UserData