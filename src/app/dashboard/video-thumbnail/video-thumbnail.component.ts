import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../types';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.css'],
})
export class VideoThumbnailComponent implements OnInit {
  @Input() video?: Video;
  @Input() selected = false;

  constructor() {}

  ngOnInit(): void {}
}
