import { Component, OnInit } from '@angular/core';
import { listCardsMock } from 'src/app/shared/constansMock/listCardsMock';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.sass']
})
export class ListCardsComponent implements OnInit {
  listCard:any = listCardsMock;
  constructor() { }

  ngOnInit(): void {
  }

}
