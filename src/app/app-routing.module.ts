import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home-page/home.component';
import { StatisticComponent } from './pages/statistic-page/statistic.component';
import { ContactComponent } from './pages/contacts-page/contacts.component';
import {ContactDetailsComponent} from './pages/contact-details/contact-details.component'
import { EditComponent } from './pages/contact-edit-page/contact-edit.component';
import { SignupComponent } from 'src/app/pages/signup-page/signup.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'statistic', component: StatisticComponent },
  { path: 'contacts', component: ContactComponent },
  { path: 'contact/details/:id', component: ContactDetailsComponent },
  { path: 'contact/edit/:id', component: EditComponent },
  { path: 'contact/edit', component: EditComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
