import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule } from 'ngx-mask';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CommonQuestionsComponent } from './landing-page/common-questions/common-questions.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SeePartnerComponent } from './landing-page/see-partner/see-partner.component';
import { ProcessSubComponent } from './landing-page/process-sub/process-sub.component';
import { WhyPartnerComponent } from './landing-page/why-partner/why-partner.component';
import { CardSwiperComponent } from './landing-page/card-swiper/card-swiper.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { TermComponent } from './shared/term/term.component';
import {NgcCookieConsentConfig, NgcCookieConsentModule} from "ngx-cookieconsent";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { CookiesComponent } from './shared/cookies/cookies.component';
import { AboutComponent } from './landing-page/about/about.component';

const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: 'imoveistock.com.br'
  },
  palette: {
    popup: {
      background: '#000000'
    },
    button: {
      background: '#01FF5F',
      border: `#000000`,
      text: `#000000`,
    }
  },
  theme: 'classic',
  type: 'info',
  content:{
    message: 'Nossa plataforma utiliza cookies para otimizar e personalizar sua experiência. Ao continuar navegando, você automaticamente concorda com a nossa',
    link: 'Política de cookies',
    href: 'cookie-policy',
    dismiss:'Aceitar cookies',
  },
};
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    LandingPageComponent,
    CommonQuestionsComponent,
    FooterComponent,
    SeePartnerComponent,
    ProcessSubComponent,
    WhyPartnerComponent,
    CardSwiperComponent,
    TermComponent,
    CookiesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot(),
    NgxPageScrollCoreModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    NgbModule,
    NgxPageScrollModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
