import { UserRole } from "./enums/UserRole";

export interface IUser{
    id: number;
    firstName : string;
    lastName: string;
    userName: string;
    email: string;
    roles : UserRole;
    age: number;
}