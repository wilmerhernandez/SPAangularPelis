import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../service/movies/movies.service';
import { listCardsMock } from '../../constansMock/listCardsMock';
import { Store } from '@ngrx/store';
import { loadMovies } from '../../state/actions/actionGames';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  subscribe: any;
  listCard: any;
  totalPages: any;

  constructor(
    private servicesMovies: MoviesService,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.filterVideo('movie');
  }

  changeInput() {
    const miSelect = document.getElementById('Select') as HTMLSelectElement;
    console.log(miSelect.value);
    this.servicesMovies.getFilterMovies('', '', miSelect.value).subscribe(
      (response: any) => {
        console.log(response);
        this.store.dispatch(loadMovies({ movies: response.medias }));
      },
      (error) => {
        console.error(error);
        this.listCard = listCardsMock;
      }
    );
  }

  filterVideo(data: string) {
    this.servicesMovies.getFilterMovies('', data, '').subscribe(
      (response: any) => {
        console.log(response);
        this.totalPages = response.totalPage;
        this.store.dispatch(loadMovies({ movies: response.medias }));
      },
      (error) => {
        console.error(error);
        this.listCard = listCardsMock;
      }
    );
  }

  getpageTotal() {
    return this.totalPages;
  }
}
