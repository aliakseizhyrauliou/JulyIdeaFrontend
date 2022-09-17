import { IdeaCategory } from "./enums/IdeaType";

export interface IIdea{
    id: number;
    userId: number;
    name: string;
    description: string;
    StackFullString: string;
    category: IdeaCategory;
    categoryString : string;
    stack: string[];
    isLikedByCurrentUser: boolean;
}