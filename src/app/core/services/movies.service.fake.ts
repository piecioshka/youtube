import { of } from 'rxjs';

import { IMovie } from '../interfaces/movie.interface';

const movie: IMovie = {
    id: 'fake-id',
    title: 'fake-title',
    description: 'fake-description',

    year: 0,
    duration: 1,
    rate: 2,

    thumb_url: 'fake-thumb_url',
    movie_url: 'fake-movie_url',
};
const movies = [movie, movie, movie];

export class FakeMoviesService {
    fetchMovies() {
        return of(movies);
    }
    async fetchMovieById() {
        return movie;
    }
    search() {
        return of(movies);
    }

}
