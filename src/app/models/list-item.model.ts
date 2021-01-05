export class ListItem 
{
    id: number;
    description: string;
    completed: boolean;

    constructor(description: string) {
        this.description = description;
        this.completed = false;
        this.id = new Date().getTime();
    }
}