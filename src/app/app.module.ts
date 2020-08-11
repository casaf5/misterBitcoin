import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFilterComponent } from '../components/ContactFilter/contact-filter.component';
import { ContactListComponent } from '../components/contact-list/contact-list.component';
import { ContactPreviewComponent } from '../components/contact-preview/contact-preview.component';
import { InputComponent } from '../components/input/input.component';
import { HomeComponent } from '../pages/HomePage/home.component';
import { ContactComponent } from '../pages/ContactPage/contact.component';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from '../services/UserService/user.service';
import { ContactService } from '../services/ContactService/contact.service';
import { BitcoinService } from '../services/BitcoinService/bitcoin.service';
import { AppheaderComponent } from '../components/appheader/appheader.component';
import { FooterComponent } from '../components/AppFooter/footer.component';
import { StatisticComponent } from '../pages/StatisticPage/statistic.component';
import { ContactDetailsComponent } from '../pages/Contact-Details/contact-details.component';
import { EditComponent } from '../pages/EditPage/edit.component';
import { SignupComponent } from '../pages/SignupPage/signup.component';
import { MovelistComponent } from '../components/MoveList/movelist.component';
import { TransferfundComponent } from '../components/TransferFund/transferfund.component';
import { FormsModule } from '@angular/forms';

//OTHER:
import { GoogleChartsModule } from 'angular-google-charts';
import { AvatarModule } from 'ngx-avatar';

@NgModule({
  declarations: [
    AppComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    InputComponent,
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
  ],
  providers: [UserService, ContactService, BitcoinService],
  bootstrap: [AppComponent],
})
export class AppModule {}
