export type UserData = {
    name: string,
    phone: string,
    email: string,
    address: string,
    position_name: string,
    department: string,
    hire_date: string,
}
export type ResGetAllUsers = UserData[]
export type ReqGetUserByName = {
    name: string
}
export type ResGetUserByName = UserData