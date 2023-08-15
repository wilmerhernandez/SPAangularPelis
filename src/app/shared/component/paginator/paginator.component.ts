import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../service/movies/movies.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.sass']
})
export class PaginatorComponent implements OnInit {

totalPage:any;
  arrayPage:any;

  constructor(private movie: MoviesService) { }

  ngOnInit(): void {
    this.totalPage = this.movie.getTotalPage();
    console.log(this.totalPage);
    this.arrayPage = Array(this.totalPage);
  }


}
