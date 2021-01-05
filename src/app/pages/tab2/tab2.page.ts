import { Component } from '@angular/core';
import { TodotasksService } from 'src/app/services/todotasks.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private service: TodotasksService) {}

}
