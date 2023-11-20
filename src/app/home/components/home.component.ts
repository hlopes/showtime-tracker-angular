import { Component, inject, OnInit } from '@angular/core'
import { MoviesService } from '@shared/services/movies.service'
import { CommonModule } from '@angular/common'
import { Movie } from '@shared/types'

@Component({
  selector: 't-example',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-container *ngIf="movies">
    <p class="text-4xl antialiased">Example page</p>
    {{ movies[0] | json }}

    <img alt="movie backdrop" [src]="getPoster(movies[0].backdrop_path)" />
  </ng-container>`,
})
export class HomeComponent implements OnInit {
  moviesService = inject(MoviesService)

  movies?: Movie[]

  ngOnInit(): void {
    this.moviesService
      .getNowPlayingMovies()
      .subscribe((movies) => (this.movies = movies))
  }

  getPoster(movieImage: string) {
    return `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movieImage}`
  }
}
