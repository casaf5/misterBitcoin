import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../pages/HomePage/home.component';
import { StatisticComponent } from '../pages/StatisticPage/statistic.component';
import { ContactComponent } from '../pages/ContactPage/contact.component';
import {ContactDetailsComponent} from '../pages/Contact-Details/contact-details.component'
import { EditComponent } from 'src/pages/EditPage/edit.component';
import { SignupComponent } from 'src/pages/SignupPage/signup.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'statistic', component: StatisticComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'details/:id', component: ContactDetailsComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'edit', component: EditComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
