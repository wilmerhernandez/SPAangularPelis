import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  data:any;
  resolvedData: any;
  constructor(private route: ActivatedRoute) { 
    this.data = this.route.snapshot.data.resolvedData;
    console.log(this.data);
  }

  ngOnInit(): void {

  }
  segundosAMinutos(data:string) {
    var minutos = Math.floor(parseInt(data) / 60);
    var segundosRestantes = parseInt(data) % 60;
    return minutos + " minutos y " + segundosRestantes + " segundos";
  }
  

}
