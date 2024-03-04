import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'cf-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit{
  res: string = "Successfully Logout"
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  username: string;

  constructor(private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    // this.username =JSON.parse(localStorage.getItem('Profile')).name;
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  fnlogout(){
    // localStorage.clear();
    this.router.navigate(['login']);
  }
}
