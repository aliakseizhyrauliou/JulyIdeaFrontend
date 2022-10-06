export interface IMessage{
    id: number;
    senderId: number;
    receiverId: number;
    text: string;
    dateOfSending: Date;
    isViewed: boolean;
    receiverUserName: string;
    senderUserName: string;
}