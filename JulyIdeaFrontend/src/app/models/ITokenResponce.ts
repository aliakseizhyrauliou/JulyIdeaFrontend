import { ITokenBody } from "./ITokenBody";

export interface ITokenResponce{
    isSuccess : Boolean;
    result: ITokenBody;
    errorMessages: string[];
}