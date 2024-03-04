import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cf-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  constructor() { }

  ngOnInit() {
  }
}
