import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TaskComponent } from './task/task.component';


const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'task',
    loadChildren: () => import('./task/task.module').then((TS) => TS.TaskModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
