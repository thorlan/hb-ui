import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'home-broken-ui';
  ngOnInit() {
    fetch('https://hb-abc.herokuapp.com/abc-hb/api/grafico').then(response =>response.json()).then(json => console.log(json))
  };
}
