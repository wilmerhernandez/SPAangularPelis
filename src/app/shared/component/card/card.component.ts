import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() img: any ="";
  @Input() description: any ="";
  @Input() isLike: any ="";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  details(){
    console.info("detalles")
    this.router.navigate(['/detail']);
  }

}
