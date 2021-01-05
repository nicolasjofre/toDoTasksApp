import { Injectable } from '@angular/core';
import { ListItem } from '../models/list-item.model';

@Injectable({
  providedIn: 'root'
})
export class TodotasksService {

  tasksLists: ListItem[] = [];

  constructor() { 
    this.loadStorage();
  }

  createList(title: string) {
    const newList = new ListItem(title);
    this.tasksLists.push(newList);
    this.saveStorage();

    return newList.id;
  }

  saveStorage() {
    localStorage.setItem('data-items', JSON.stringify(this.tasksLists));
  }

  loadStorage() {
    if (localStorage.getItem('data-items')) {
      this.tasksLists = JSON.parse(localStorage.getItem('data-items'));
    }
  }
}
