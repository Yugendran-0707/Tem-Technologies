import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input'
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatIconModule } from '@angular/material/icon';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { InterceptorService } from './Interceptor/interceptor.service';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    MatSidenavModule,
    MatIconModule,
    BrowserModule,
    HttpClientModule,
    MatPaginatorModule,
    MatStepperModule,
    MatInputModule,
    MatCheckboxModule,
    MatTabsModule,
    MatFormFieldModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },LoginComponent,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
