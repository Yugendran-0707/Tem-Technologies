import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskPageComponent } from './task-page/task-page.component';
import { TaskMenuComponent } from './task-menu/task-menu.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TaskComponent } from './task.component';
import { environment } from 'src/environments/environment';
import { FibonacciSeriesComponent } from './fibonacci-series/fibonacci-series.component';
import { SubstringComponent } from './substring/substring.component';
// import { provideStorage } from '@angular/fire/storage'
import { provideStorage } from '@angular/fire/storage';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import {getFirestore,provideFirestore} from '@angular/fire/firestore'
import { getStorage } from 'firebase/storage';
import { provideRouter } from '@angular/router';


@NgModule({
  declarations: [
    TaskComponent,
    TaskPageComponent,
    TaskMenuComponent,
    TaskHeaderComponent,
    FibonacciSeriesComponent,
    SubstringComponent
  ],
  imports: [
    // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    // provideFirestore(() => getFirestore()),
    // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    
    CommonModule,
    TaskRoutingModule,
    MatSidenavModule,
    MatStepperModule,
    MatInputModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    // HttpClientModule,
    MatDialogModule,
    // MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatCardModule
  ],
  providers: [
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
      provideFirestore(() => getFirestore()),
      provideStorage(() => getStorage())
    )

  ]
})


export class TaskModule { }


