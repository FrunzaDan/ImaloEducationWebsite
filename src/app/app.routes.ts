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
    title: 'Home',
  },
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    title: 'Galerie',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact',
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
    title: 'Program',
  },
  {
    path: 'offers',
    component: OffersComponent,
    title: 'Oferte',
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    title: 'Despre Noi',
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
