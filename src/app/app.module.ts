import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NebularModule } from "./modules/nebular/nebular.module";
import { NbIconModule, NbThemeModule} from "@nebular/theme";
import { HeaderComponent } from './components/UI/header/header.component';
import { MainComponent } from './pages/main/main.component';
import {NbEvaIconsModule} from "@nebular/eva-icons";
import {HttpClientModule} from "@angular/common/http";
import {NbAuthModule, NbAuthSimpleToken, NbDummyAuthStrategy} from "@nebular/auth";
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ProfileComponent
  ],
  imports: [
    NbThemeModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    NebularModule,
    NbEvaIconsModule,
    NbIconModule,
    HttpClientModule,
    NbAuthModule.forRoot({
      strategies: [ NbDummyAuthStrategy.setup({
        name: 'email',
        alwaysFail: false,
        token: {
          class: NbAuthSimpleToken,
        },
        delay: 0,
      })],
      forms: {},


    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
