import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-task-menu',
  templateUrl: './task-menu.component.html',
  styleUrls: ['./task-menu.component.scss']
})
export class TaskMenuComponent implements OnInit {
  username: string;
  constructor() { }

  ngOnInit() {
    // this.username =JSON.parse(localStorage.getItem('Profile')).user.name;

  }
}
