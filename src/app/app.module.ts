import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { HeaderOnlyComponent } from './layout/header-only/header-only.component';
import { TopDestinationComponent } from './components/top-destination/top-destination.component';
import { BigHeaderComponent } from './components/big-header/big-header.component';
import { BestToursComponent } from './components/best-tours/best-tours.component';
import { TopArticlesComponent } from './components/top-articles/top-articles.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { DestinationDetailsComponent } from './components/top-destination/destination.details.component';
import { StatsItemComponent } from './components/big-header/stats.item.component';
import { TourCardDetailsComponent } from './components/best-tours/tour.card.details.component';
import { ArticleCardDetailsComponent } from './components/top-articles/article.card.details.component';
import { AppComponent } from './app/app.component';

import { ClickOutsideDirective } from './directives/click-outside.directive';
import { MatSliderModule } from '@angular/material/slider';
import { PriceRangeSliderComponent } from './components/price-range-slider/price-range-slider.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CalenderComponent } from './components/calender/calender.component';
import { TourDetailsComponent } from './pages/tour-details/tour-details.component';
import { ToursComponent } from './pages/tours/tours.component';
import { StarsComponent } from './components/stars/stars.component';
import { ImagesSliderComponent } from './components/images-slider/images-slider.component';
import { SheduleActivityComponent } from './components/shedule-activity/shedule-activity.component';
import { SelectParticipantsComponent } from './components/select-participants/select-participants.component';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';
import { TotalParticipantToStringPipe } from './pipes/total-participant-to-string.pipe';
import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';

@NgModule({
   declarations: [
      HomeComponent,
      HeaderComponent,
      FooterComponent,
      DefaultLayoutComponent,
      HeaderOnlyComponent,
      TopDestinationComponent,
      BigHeaderComponent,
      BestToursComponent,
      TopArticlesComponent,
      RegisterComponent,
      LoginComponent,
      ToursComponent,
      TourDetailsComponent,
      DestinationDetailsComponent,
      StatsItemComponent,
      TourCardDetailsComponent,
      ArticleCardDetailsComponent,
      AppComponent,
      ClickOutsideDirective,
      PriceRangeSliderComponent,
      CalenderComponent,
      StarsComponent,
      ImagesSliderComponent,
      SheduleActivityComponent,
      SelectParticipantsComponent,
      CapitalizeFirstPipe,
      TotalParticipantToStringPipe,
      GoogleMapComponent,
      UploadFileComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      MatSliderModule,
      MatFormFieldModule,
      MatInputModule,
      MatDatepickerModule,
      GoogleMapsModule,
      ReactiveFormsModule,
   ],
   providers: [
      HttpClient,
      provideNativeDateAdapter(),
      provideAnimations(),
      {
         provide: HTTP_INTERCEPTORS,
         useClass: TokenInterceptor,
         multi: true,
      },
   ],
   bootstrap: [
      // AppComponent
      UploadFileComponent,
   ],
})
export class AppModule {}
