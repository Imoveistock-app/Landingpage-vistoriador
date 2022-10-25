import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule } from 'ngx-mask';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AbouteComponent } from './landing-page/aboute/aboute.component';
import { WantToBePartComponent } from './landing-page/want-to-be-part/want-to-be-part.component';
import { WhyAdvertiseComponent } from './landing-page/why-advertise/why-advertise.component';
import { PaymentDetailComponent } from './landing-page/payment-detail/payment-detail.component';
import { HowToAdvertiseComponent } from './landing-page/how-to-advertise/how-to-advertise.component';
import { WantToBePart2Component } from './landing-page/want-to-be-part2/want-to-be-part2.component';
import { IndicateNowComponent } from './landing-page/indicate-now/indicate-now.component';
import { CommonQuestionsComponent } from './landing-page/common-questions/common-questions.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    LandingPageComponent,
    AbouteComponent,
    WantToBePartComponent,
    WhyAdvertiseComponent,
    PaymentDetailComponent,
    HowToAdvertiseComponent,
    WantToBePart2Component,
    IndicateNowComponent,
    CommonQuestionsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
