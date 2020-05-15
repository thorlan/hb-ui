import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'home-broken-ui';
  
  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Gráfico comum'  ,fill: false },
    { data: [], label: 'EMA 9'  ,fill: false},
    { data: [], label: 'EMA 12' ,fill: false },
    { data: [], label: 'EMA 26' ,fill: false }
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  
  
  ngOnInit() {
    fetch('http://localhost:8080/abc-hb/api/grafico')
      .then(response =>response.json())
      .then(json => {
        
         json[0].dia.forEach(element => {
          this.lineChartLabels.push(element.date);
          this.lineChartData[0].data.push(element.close);
        });

         json[1].dia.forEach(element => {
          this.lineChartData[1].data.push(element.close);
        });

        json[2].dia.forEach(element => {
          this.lineChartData[2].data.push(element.close);
        });

        json[3].dia.forEach(element => {
          this.lineChartData[3].data.push(element.close);
        });
     
      });
   //fetch('https://hb-abc.herokuapp.com/abc-hb/api/grafico').then(response =>response.json()).then(json => console.log(json))
  };
}

