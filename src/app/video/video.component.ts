import { Component, OnInit, Input } from '@angular/core';

interface ISource {
  src: string;
  type: string;
}

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  sources: Array<ISource> = [];


  private vidPlayer: any = null;
  private vidProgressBar: any = null;
  private btnPlayPause: any = null;
  private btnMute: any = null;

  constructor() { }

  ngOnInit() {
    this.initVideoPlayer();
  }

  initVideoPlayer(): void {
    this.vidPlayer = document.getElementById('video-player');
    this.vidPlayer.controls = false;

    this.vidProgressBar = document.getElementById('progress-bar');
    this.btnPlayPause = document.getElementById('play-pause');
    this.btnMute = document.getElementById('mute');

    // Manually setting volume
    this.vidPlayer.volume = 0.5;

    this.sources = [
      {
        src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        type: 'video/mp4'
      }
    ];

  }

  // This toggles the actual pause/play of the video
  togglePlayPause(): void {
    let action: string;

    if (this.vidPlayer.paused || this.vidPlayer.ended) {
      action = 'pause';
      this.vidPlayer.play();
    } else {
      action = 'play';
      this.vidPlayer.pause();
    }

    this.changeBtnType(this.btnPlayPause, action);

  }

  // Video API stop is the same as pause -- Simulated
  toggleStop(): void {
    this.vidPlayer.pause();
    this.vidPlayer.currentTime = 0;

    // Reset the play button
    this.changeBtnType(this.btnPlayPause, 'play');
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
        this.changeBtnType(this.btnMute, 'mute');
        this.vidPlayer.muted = false;
      } else {
        this.changeBtnType(this.btnMute, 'unmute');
        this.vidPlayer.muted = true;
      }

  }

  // Event listener for Play/Pause on the video control
  onPlayStatusChanged(target: any, action: string): void {
    this.changeBtnType(target, action);
  }

  onVolumeChanged(target: any): void {
    if (this.vidPlayer.muted || this.vidPlayer.volume === 0) {
        this.changeBtnType(target, 'unmute');
    }

  }

  // Changes the Button Control type/text
  changeBtnType(btn: any, action: any): void {
    btn.title = action;
    btn.innerHTML = action;
    btn.className = action;
  }

}
