import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

const movies = [
  {
    id: '1',
    title: 'The Dark Knight',
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: '2008',
    genre: 'Action',
    rating: 9.0,
    duration: '152 min',
  },
  {
    id: '2',
    title: 'Inception',
    poster: 'https://images.pexels.com/photos/7991748/pexels-photo-7991748.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: '2010',
    genre: 'Sci-Fi',
    rating: 8.8,
    duration: '148 min',
  },
  {
    id: '3',
    title: 'Pulp Fiction',
    poster: 'https://images.pexels.com/photos/7991580/pexels-photo-7991580.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: '1994',
    genre: 'Crime',
    rating: 8.9,
    duration: '154 min',
  },
  {
    id: '4',
    title: 'The Matrix',
    poster: 'https://images.pexels.com/photos/7991748/pexels-photo-7991748.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: '1999',
    genre: 'Sci-Fi',
    rating: 8.7,
    duration: '136 min',
  },
  {
    id: '5',
    title: 'Goodfellas',
    poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: '1990',
    genre: 'Crime',
    rating: 8.7,
    duration: '146 min',
  },
  {
    id: '6',
    title: 'The Godfather',
    poster: 'https://images.pexels.com/photos/7991580/pexels-photo-7991580.jpeg?auto=compress&cs=tinysrgb&w=400',
    year: '1972',
    genre: 'Drama',
    rating: 9.2,
    duration: '175 min',
  },
];

export default function MovieGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <Link key={movie.id} href={`/movies/${movie.id}`}>
          <Card className="group cursor-pointer bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={movie.poster} 
                  alt={movie.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    {movie.genre}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span className="text-white text-xs font-medium">{movie.rating}</span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                  {movie.title}
                </h3>
                <div className="flex items-center text-gray-400 text-sm space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{movie.year}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{movie.duration}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}