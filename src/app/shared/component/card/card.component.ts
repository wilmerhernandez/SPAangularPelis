import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() img: any ="";
  @Input() description: any ="";
  @Input() isLike: any ="";

  constructor() { }

  ngOnInit(): void {
  }

}
