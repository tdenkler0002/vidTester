import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VideoComponent } from './components/video/video.component';
import { FullscreenDirective } from './directives/fullscreen.directive';
import { VidVolumeComponent } from './components/vid-volume/vid-volume.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    FullscreenDirective,
    VidVolumeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
