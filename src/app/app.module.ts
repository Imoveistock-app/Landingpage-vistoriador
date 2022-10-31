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
    CardSwiperComponent
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
    NgxPageScrollModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
