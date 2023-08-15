import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
  @Input() img: any = '';
  @Input() description: any = '';
  @Input() id: any = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  details() {
    console.log(this.id);
    this.router.navigate(['/detail', this.id]);
    console.info('detalles');
  }
}
