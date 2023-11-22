import { Component, inject, OnInit } from '@angular/core'
import { MoviesService } from '@shared/services/movies.service'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { Movie } from '@shared/types'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'stt-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgOptimizedImage],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  moviesService = inject(MoviesService)

  movies?: Movie[]

  ngOnInit(): void {
    this.moviesService
      .getNowPlayingMovies()
      .subscribe((movies) => (this.movies = movies))
  }

  getBackdrop(movie: Movie) {
    return `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`
  }

  getPoster(movie: Movie) {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`
  }
}
