import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about.page/about.component';
import { ContactComponent } from './pages/contact.page/contact.component';
import { DonateComponent } from './pages/donate.page/donate.component';
import { GalleryPageComponent } from './pages/gallery.page/gallery.component';
import { HomeComponent } from './pages/home.page/home.component';
import { MediaComponent } from './pages/media.page/media.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'media', component: MediaComponent},
  {path: 'gallery', component: GalleryPageComponent},
  {path: 'donate', component: DonateComponent},
  {path: 'contact', component: ContactComponent},
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
