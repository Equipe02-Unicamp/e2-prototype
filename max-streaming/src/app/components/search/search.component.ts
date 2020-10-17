import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  openAudio(){
    document.getElementById('id01').style.display='block';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
