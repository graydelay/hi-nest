import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let movieService: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    movieService = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(movieService).toBeDefined();
  });

  describe('getAll()', () => {
    it('should return an array', () => {
      const result = movieService.getAll();

      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne()', () => {
    it('should return a movie', () => {
      movieService.create({
        title: 'Test Move',
        genres: ['test'],
        year: 2020,
      });
      const movie = movieService.getOne(1);

      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    });

    it('should throw a NotFoundException', () => {
      try {
        movieService.getOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Movie with ID 999 not found.');
      }
    });
  });

  describe('deleteOne()', () => {
    it('deletes a movie', () => {
      movieService.create({
        title: 'Test Move',
        genres: ['test'],
        year: 2020,
      });
      const beforeDelete = movieService.getAll().length;
      movieService.deleteOne(1);
      const afterDelete = movieService.getAll().length;

      expect(afterDelete).toBeLessThan(beforeDelete);
    });

    it('should throw a NotFoundException', () => {
      try {
        movieService.deleteOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Movie with ID 999 not found.');
      }
    });
  });

  describe('create()', () => {
    it('should create a movie', () => {
      const beforeCreate = movieService.getAll().length;
      movieService.create({
        title: 'Test Move',
        genres: ['test'],
        year: 2020,
      });
      const afterCreate = movieService.getAll().length;

      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });

  describe('update()', () => {
    it('should update a movie', () => {
      movieService.create({
        title: 'Test Move',
        genres: ['test'],
        year: 2020,
      });

      movieService.update(1, { title: 'Updated Test' });
      const movie = movieService.getOne(1);

      expect(movie.title).toEqual('Updated Test');
    });

    it('should throw a NotFoundException', () => {
      try {
        movieService.update(999, {});
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Movie with ID 999 not found.');
      }
    });
  });
});
