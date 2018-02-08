import { Component, OnInit, ElementRef } from '@angular/core';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-vid-volume',
  templateUrl: './vid-volume.component.html',
  styleUrls: ['./vid-volume.component.css']
})
export class VidVolumeComponent implements OnInit {
    vidPlayer: any;
    target: any;
    vid: VideoComponent;

    private btnMute: any = null;

  constructor() {
    this.vidPlayer = this.vid.vidPlayer;
   }

  ngOnInit() {

    this.btnMute = document.getElementById('mute');
  }

  // TODO: Rip this out to change
  toggleVolume(volumeToggle: string): void {

    if (volumeToggle === '+') {
        // 1 is the max - so if the volume is 1, level = 0
        this.vidPlayer.volume += this.vidPlayer.volume === 1 ? 0 : 0.1;
    } else {
        // 0 is the min - so if volume is 0, level = 0
        this.vidPlayer.volume -= (this.vidPlayer.volume === 0 ? 0 : 0.1);
    }
    this.vidPlayer.volume = parseFloat(this.vidPlayer.volume).toFixed(1);
    console.log('volume is now: ' + this.vidPlayer.volume);

  }

  toggleMute(): void {
      if (this.vidPlayer.muted) {
        this.vid.changeBtnType(this.btnMute, 'mute');
        this.vidPlayer.muted = false;
      } else {
        this.vid.changeBtnType(this.btnMute, 'unmute');
        this.vidPlayer.muted = true;
      }

  }


}
