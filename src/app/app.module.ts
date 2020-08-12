import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFilterComponent } from '../app/components/ContactFilter/contact-filter.component';
import { ContactListComponent } from '../app/components/contact-list/contact-list.component';
import { ContactPreviewComponent } from '../app/components/contact-preview/contact-preview.component';
import { HomeComponent } from '../app/pages/HomePage/home.component';
import { ContactComponent } from '../app/pages/ContactPage/contact.component';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from '../app/services/UserService/user.service';
import { ContactService } from '../app/services/ContactService/contact.service';
import { BitcoinService } from '../app/services/BitcoinService/bitcoin.service';
import { AppheaderComponent } from '../app/components/appheader/appheader.component';
import { FooterComponent } from '../app/components/AppFooter/footer.component';
import { StatisticComponent } from '../app/pages/StatisticPage/statistic.component';
import { ContactDetailsComponent } from '../app/pages/Contact-Details/contact-details.component';
import { EditComponent } from '../app/pages/EditPage/edit.component';
import { SignupComponent } from '../app/pages/SignupPage/signup.component';
import { MovelistComponent } from '../app/components/MoveList/movelist.component';
import { TransferfundComponent } from '../app/components/TransferFund/transferfund.component';
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
