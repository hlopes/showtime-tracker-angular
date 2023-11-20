import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'

import { environment } from '@environments/environment'
import { Movie, MoviesListResponse } from '@shared/types'

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  http = inject(HttpClient)

  getNowPlayingMovies(): Observable<Movie[]> {
    return this.http
      .get<MoviesListResponse>(
        `${environment.apiUrl}/movie/now_playing?language=en-US&page=1`,
      )
      .pipe(map((response) => response.results))
  }
}
