import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  constructor(private readonly messageService: MessageService, private readonly router: Router) { }

  ngOnInit(): void {
  }

  addSingle(): void {
    this.messageService.add({key:'gm', severity:'info', detail: 'this is my single global message'});
  }

  addMultiple(): void {
    this.messageService.addAll([
      {key:'gm', severity:'info', detail: 'this is my single global info message'},
      {key:'gm', severity:'warn', detail: 'this is my single global warn message'}
    ]);
  }

  addSingleLocal(): void {
    this.messageService.add({key:'lm', severity:'info', detail: 'this is my single local message'});
  }

  addMultipleLocal(): void {
    this.messageService.addAll([
      {key:'lm', severity:'info', detail: 'this is my single local info message'},
      {key:'lm', severity:'warn', detail: 'this is my single local warn message'}
    ]);
  }

  clear(): void {
    this.messageService.clear('gm');    
  }

  clearLocal(): void {
    this.messageService.clear('lm');    
  }

  navigateToCreate() {    
    this.clear();    
    this.router.navigate(['/create']);
  }
}
