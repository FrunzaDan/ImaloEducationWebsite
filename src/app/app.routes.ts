import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../app/components/home/home.component').then(
        (comp) => comp.HomeComponent
      ),
    title: 'Bine ați venit la Imalo - Afterschool Germana Sibiu',
  },
  {
    path: 'about-us',
    loadComponent: () =>
      import('../app/components/about-us/about-us.component').then(
        (comp) => comp.AboutUsComponent
      ),
    title: 'Despre Noi - Imalo Afterschool Germana Sibiu',
  },
  {
    path: 'offers',
    loadComponent: () =>
      import('../app/components/offers/offers.component').then(
        (comp) => comp.OffersComponent
      ),
    title: 'Oferte - Imalo Afterschool Germana Sibiu',
  },
  {
    path: 'schedule',
    loadComponent: () =>
      import('../app/components/schedule/schedule.component').then(
        (comp) => comp.ScheduleComponent
      ),
    title: 'Oferte - Imalo Afterschool Germana Sibiu',
  },
  {
    path: 'gallery',
    loadComponent: () =>
      import('../app/components/gallery/gallery.component').then(
        (comp) => comp.GalleryComponent
      ),
    title: 'Galerie - Imalo Afterschool Germana Sibiu',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('../app/components/contact/contact.component').then(
        (comp) => comp.ContactComponent
      ),
    title: 'Oferte - Imalo Afterschool Germana Sibiu',
  },
  {
    path: 'privacy',
    loadComponent: () =>
      import('../app/components/privacy/privacy.component').then(
        (comp) => comp.PrivacyComponent
      ),
    title: 'Politica confidentialitate',
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent,
    title: '404',
  },
];
