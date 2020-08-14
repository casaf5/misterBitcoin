import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFilterComponent } from './components/contact-filter/contact-filter.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { HomeComponent } from './pages/home-page/home.component';
import { ContactComponent } from './pages/contacts-page/contacts.component';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './services/user-service/user.service';
import { ContactService } from './services/contact-service/contact.service';
import { BitcoinService } from './services/bitcoin-service/bitcoin.service';
import { AppheaderComponent } from './components/app-header/app-header.component';
import { FooterComponent } from './components/app-footer/app-footer.component';
import { StatisticComponent } from './pages/statistic-page/statistic.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { EditComponent } from 'src/app/pages/contact-edit-page/contact-edit.component';
import { SignupComponent } from './pages/signup-page/signup.component';
import { MovelistComponent } from './components/move-list/move-list.component';
import { TransferfundComponent } from './components/transfer-fund/transfer-fund.component';
import { FormsModule } from '@angular/forms';


//OTHER:
import { GoogleChartsModule } from 'angular-google-charts';
import { ChartsModule } from 'ng2-charts';
import { AvatarModule } from 'ngx-avatar';

@NgModule({
  declarations: [
    AppComponent,
    ContactFilterComponent,
    ContactListComponent,
    HomeComponent,
    ContactComponent,
    AppheaderComponent,
    FooterComponent,
    StatisticComponent,
    ContactDetailsComponent,
    EditComponent,
    SignupComponent,
    MovelistComponent,
    TransferfundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    FormsModule,
    AvatarModule,
    ChartsModule,
  ],
  providers: [UserService, ContactService, BitcoinService],
  bootstrap: [AppComponent],
})
export class AppModule {}
