import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ToursComponent } from './pages/tours/tours.component';

import { TourDetailsComponent } from './pages/tour-details/tour-details.component';

const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'tours/:slug', component: TourDetailsComponent },
      { path: 'tours', component: ToursComponent },
];

@NgModule({
      imports: [
            RouterModule.forRoot(routes, {
                  scrollPositionRestoration: 'enabled',
            }),
      ],
      exports: [RouterModule],
})
export class AppRoutingModule {}
