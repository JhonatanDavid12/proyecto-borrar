import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard } from './service/auth.guard';
import { AppComponent } from './app.component';
import { PropertiesComponent } from './properties/properties.component';
import { CreateEditPropertyComponent } from './create-edit-property/create-edit-property.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [authGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'properties', component: PropertiesComponent },
  { path: 'properties/new', component: CreateEditPropertyComponent },
  { path: 'properties/edit/:id', component: CreateEditPropertyComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



