import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SingUpComponent } from './singup/singup.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'singup', component: SingUpComponent },
  { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
