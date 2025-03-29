import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RoutesModule } from './routes.module';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent,DashboardComponent],
  imports: [
    CommonModule,
    RoutesModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
