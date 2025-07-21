'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Play, Star } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-600/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-600/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/2 w-24 h-24 bg-orange-600/20 rounded-full blur-xl animate-pulse delay-500" />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Your Ultimate
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Movie Experience
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover, review, and share your passion for cinema with our community of film enthusiasts.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search for movies, reviews, or genres..."
                className="pl-12 pr-4 py-6 text-lg bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 rounded-full backdrop-blur-sm"
              />
              <Button 
                size="lg"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full px-8"
              >
                Search
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/movies">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Explore Movies
              </Button>
            </Link>
            <Link href="/blogs">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm"
              >
                <Star className="mr-2 h-5 w-5" />
                Read Reviews
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400">Movies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">1.2K+</div>
              <div className="text-gray-400">Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">850+</div>
              <div className="text-gray-400">Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">4.8★</div>
              <div className="text-gray-400">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}