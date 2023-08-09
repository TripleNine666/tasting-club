import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { NebularModule } from "./modules/nebular/nebular.module";
import {
  NbDatepickerModule,
  NbDialogModule,
  NbIconModule,
  NbLayoutModule,
  NbSidebarModule,
  NbThemeModule
} from "@nebular/theme";
import { HeaderComponent } from './components/UI/header/header.component';
import { MainComponent } from './pages/main/main.component';
import {NbEvaIconsModule} from "@nebular/eva-icons";
import {HttpClientModule} from "@angular/common/http";
import {NbAuthModule, NbAuthSimpleToken, NbDummyAuthStrategy} from "@nebular/auth";
import { ProfileComponent } from './pages/profile/profile.component';
import { DrinkItemComponent } from './components/drink-item/drink-item.component';
import { RatingModule } from 'ng-starrating';
import { FilterComponent } from './components/filter/filter.component';
import { FilterItemComponent } from './components/filter/filter-item/filter-item.component';
import { DrinkDetailsComponent } from './pages/drink-details/drink-details.component';
import { DialogDrinkReviewComponent } from './components/dialog-drink-review/dialog-drink-review.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DashboardComponent } from './components/UI/dashboard/dashboard.component';
import { UserGroupsComponent } from './pages/user-groups/user-groups.component';
import { UserEventsComponent } from './pages/user-events/user-events.component';
import { AlertMessageComponent } from './components/UI/alert-message/alert-message.component';
import { GroupCardComponent } from './pages/user-groups/group-card/group-card.component';
import { CreateGroupDialogComponent } from './components/create-group-dialog/create-group-dialog.component';
import {NgpImagePickerModule} from "ngp-image-picker";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ProfileComponent,
    DrinkItemComponent,
    FilterComponent,
    FilterItemComponent,
    DrinkDetailsComponent,
    DialogDrinkReviewComponent,
    DashboardComponent,
    UserGroupsComponent,
    UserEventsComponent,
    AlertMessageComponent,
    GroupCardComponent,
    CreateGroupDialogComponent,
  ],
  imports: [
    NbThemeModule.forRoot({name: 'default'}),
    NbDialogModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    NebularModule,
    NbEvaIconsModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbIconModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
      put204: false
    }),
    NbAuthModule.forRoot({
      strategies: [NbDummyAuthStrategy.setup({
        name: 'email',
        alwaysFail: false,
        token: {
          class: NbAuthSimpleToken,
        },
        delay: 0,
      })],
      forms: {},
    }),
    RatingModule,
    ReactiveFormsModule,
    NbDatepickerModule.forRoot(),
    FormsModule,
    NgpImagePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
