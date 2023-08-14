import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { detail } from 'src/app/shared/constansMock/detailMock';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  data:any= detail;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.data = detail

  }
  segundosAMinutos(data:string) {
    var minutos = Math.floor(parseInt(data) / 60);
    var segundosRestantes = parseInt(data) % 60;
    return minutos + " minutos y " + segundosRestantes + " segundos";
  }
  

}
