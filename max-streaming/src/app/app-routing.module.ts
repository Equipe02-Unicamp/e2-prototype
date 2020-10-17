import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AudioComponent } from './components/audio/audio.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';
import { VideoComponent } from './components/video/video.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'audio', component: AudioComponent },
  { path: 'video', component: VideoComponent },
  { path: 'video-detail', component: VideoDetailComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
