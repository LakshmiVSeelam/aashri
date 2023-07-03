import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home.page/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './pages/about.page/about.component';
import { MediaComponent } from './pages/media.page/media.component';
import { GalleryPageComponent } from './pages/gallery.page/gallery.component';
import { DonateComponent } from './pages/donate.page/donate.component';
import { ContactComponent } from './pages/contact.page/contact.component';
import { HomeBannerComponent } from './shared/home-banner/home-banner.component';
import { HomeAboutComponent } from './shared/home-about/home-about.component';
import { WhatWeDoComponent } from './shared/what-we-do/what-we-do.component';
import { MissionComponent } from './shared/mission/mission.component';
import { VolunteerComponent } from './shared/volunteer/volunteer.component';
import { EventComponent } from './shared/event/event.component';
import { DonationComponent } from './shared/donation/donation.component';
import { TestimonialsComponent } from './shared/testimonials/testimonials.component';
import { BlogComponent } from './shared/blog/blog.component';
import { CausesComponent } from './shared/causes/causes.component';
import { GalleryComponent } from './shared/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    MediaComponent,
    GalleryPageComponent,
    DonateComponent,
    ContactComponent,
    HomeBannerComponent,
    HomeAboutComponent,
    WhatWeDoComponent,
    MissionComponent,
    VolunteerComponent,
    EventComponent,
    DonationComponent,
    TestimonialsComponent,
    BlogComponent,
    CausesComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
