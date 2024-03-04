import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibonacciSeriesComponent } from './fibonacci-series/fibonacci-series.component';
import { SubstringComponent } from './substring/substring.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskMenuComponent } from './task-menu/task-menu.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { TaskComponent } from './task.component';

const routes: Routes = [
  {
    path: '', component: TaskComponent,
    children: [

      {
        path: 'task-page', component: TaskPageComponent
      },
      {
        path:'task-menu', component: TaskMenuComponent
      },
      {
        path:'fibonacci-series', component: FibonacciSeriesComponent
      },
      {
        path:'substring', component: SubstringComponent
      },
      {
        path:'task-header', component: TaskHeaderComponent
      },
      {
        path: '', redirectTo: '/task/task-page', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
