import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {


  search(){
    this.router.navigate(['/search']);
  }
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
