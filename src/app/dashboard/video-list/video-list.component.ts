import { Component, Input } from '@angular/core';
import { Video } from '../types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
})
export class VideoListComponent {
  @Input() videoList: Video[] | undefined;
  selectedVideo: Video | undefined;

  constructor() {}

  selectVideo(video: Video) {
    this.selectedVideo = video;
  }
}
