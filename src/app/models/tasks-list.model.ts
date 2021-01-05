import { ListItem } from './list-item.model';
export class TasksList {
    id: number;
    title: string;
    dateCreated: Date;
    dateFinished: Date;
    finished: boolean;
    listItems: ListItem[];

    constructor(title: string) {
        this.title = title;
        this.dateCreated = new Date();
        this.finished = false;
        this.listItems = [];
        this.id = new Date().getTime();
    }
}