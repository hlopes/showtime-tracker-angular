import { Movie } from '@shared/types/movie'

export type MoviesListResponse = {
  dates: {
    maximum: string
    minimum: string
  }
  page: number
  total_pages: number
  total_results: number
  results: Movie[]
}
