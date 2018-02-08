import { Component, OnInit, Input } from '@angular/core';
import { FullscreenDirective } from '../../directives/fullscreen.directive';
import { VidVolumeComponent } from '../vid-volume/vid-volume.component';

interface ISource {
  src: string;
  type: string;
}

interface IVideoSize {
    width: string;
    height: string;
}

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit {

  sources: Array<ISource> = [];
  vidSize: IVideoSize = {width: '480px', height: '320px'};
  vidPlayer: any = null;
  
  private vidProgressBar: any = null;
  private btnPlayPause: any = null;

  private isFullScreen = false;

  constructor() { }

  ngOnInit() {
    this.initVideoPlayer();
  }

  initVideoPlayer(): void {
    this.vidPlayer = document.getElementById('video-player');
    this.vidPlayer.controls = false;

    this.vidProgressBar = document.getElementById('progress-bar');
    this.btnPlayPause = document.getElementById('play-pause');

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

  toggleFullScreen(): void {
    this.isFullScreen = !this.isFullScreen;
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
