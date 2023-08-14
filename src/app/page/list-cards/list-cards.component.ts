import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { listCardsMock } from 'src/app/shared/constansMock/listCardsMock';
import { MoviesService } from 'src/app/shared/service/movies/movies.service';
import { showmovie } from 'src/app/shared/state/actions/actionGames';
import { selectormovies } from 'src/app/shared/state/selectors/game.selector';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.sass'],
})
export class ListCardsComponent implements OnInit {
  listCard: any;
  subscribe: any;
  constructor(private store: Store<any>) {}

  ngOnInit(): void {

    this.store.dispatch(showmovie())
    this.listCard=this.store.select(selectormovies);

  }
}
