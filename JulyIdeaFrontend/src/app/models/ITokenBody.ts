import { UserRole } from "./enums/UserRole";

export interface ITokenBody{
    accessToken:string;
    refreshToken:string;
    userName: string; 
    userId: number;
    userRoles: UserRole;
}
