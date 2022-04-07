import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: [
  ]
})
export class CreateComponent implements OnInit {

  constructor(private readonly messageService: MessageService, private readonly router: Router) { }

  ngOnInit(): void {
  }

  addSingle(): void {
    this.messageService.add({key:'gm', severity:'info', detail: 'this is my single global message'});
    this.router.navigate(['/dashboard']);
  }

  addMultiple(): void {
    this.messageService.addAll([
      {key:'gm', severity:'info', detail: 'this is my single global info message'},
      {key:'gm', severity:'warn', detail: 'this is my single global warn message'}
    ]);
    this.router.navigate(['/dashboard']);
  }

}
