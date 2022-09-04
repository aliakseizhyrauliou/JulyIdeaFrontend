export interface IChainElement{
    id : number;
    rootIdeaId: number;
    rootIdeaOwnerId: number;
    ownerId: number;
    name: string;
    description: string;
    isConfirmed: boolean;
    dateOfCreating: Date;
}