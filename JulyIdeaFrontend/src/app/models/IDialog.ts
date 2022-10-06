import { IMessage } from "./IMessage";

export interface IDialog{
    ownerId: number;
    userId: number;
    lastMessage: IMessage;
    userName: string;
}