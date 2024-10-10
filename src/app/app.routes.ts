import { Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Bine ați venit la Imalo Education - Afterschool Sibiu',
  },
  {
    path: '',
    component: HomeComponent,
    title: 'Bine ați venit la Imalo Education - Afterschool Sibiu',
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    title: 'Galerie - Imalo Afterschool Sibiu',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact - Imalo Afterschool Sibiu',
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
    title: 'Program - Imalo Afterschool Sibiu',
  },
  {
    path: 'offers',
    component: OffersComponent,
    title: 'Oferte - Imalo Afterschool Sibiu',
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    title: 'Despre Noi - Imalo Afterschool Sibiu',
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
    title: 'Politica confidentialitate',
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent,
    title: '404',
  },
];
