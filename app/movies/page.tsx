import MovieGrid from '@/components/movies/movie-grid';
import MovieFilters from '@/components/movies/movie-filters';
import { Suspense } from 'react';
import { MovieSkeleton } from '@/components/ui/movie-skeleton';

export default function MoviesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Movie Collection</h1>
          <p className="text-gray-400">Discover and explore our curated collection of movies</p>
        </div>
        
        <MovieFilters />
        
        <Suspense fallback={<MovieSkeleton />}>
          <MovieGrid />
        </Suspense>
      </div>
    </div>
  );
}