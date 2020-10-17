import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  showPlayers = false;

  changeEpisode() {
    this.showPlayers = true;
  }

  playVideo() {
    document.getElementById('id01').style.display = 'block';
  }

  backToVideos() {
    this.router.navigate(['/video']);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
