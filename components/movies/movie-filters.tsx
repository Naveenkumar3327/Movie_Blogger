'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';

export default function MovieFilters() {
  return (
    <div className="mb-8 bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search movies..."
              className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
            />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Select>
            <SelectTrigger className="w-full sm:w-32 bg-slate-700/50 border-slate-600 text-white">
              <SelectValue placeholder="Genre" />
            </SelectTrigger>
            <SelectContent className="bg-slate-700 border-slate-600">
              <SelectItem value="all" className="text-white">All Genres</SelectItem>
              <SelectItem value="action" className="text-white">Action</SelectItem>
              <SelectItem value="drama" className="text-white">Drama</SelectItem>
              <SelectItem value="comedy" className="text-white">Comedy</SelectItem>
              <SelectItem value="sci-fi" className="text-white">Sci-Fi</SelectItem>
              <SelectItem value="crime" className="text-white">Crime</SelectItem>
            </SelectContent>
          </Select>
          
          <Select>
            <SelectTrigger className="w-full sm:w-32 bg-slate-700/50 border-slate-600 text-white">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent className="bg-slate-700 border-slate-600">
              <SelectItem value="all" className="text-white">All Years</SelectItem>
              <SelectItem value="2020s" className="text-white">2020s</SelectItem>
              <SelectItem value="2010s" className="text-white">2010s</SelectItem>
              <SelectItem value="2000s" className="text-white">2000s</SelectItem>
              <SelectItem value="1990s" className="text-white">1990s</SelectItem>
            </SelectContent>
          </Select>
          
          <Select>
            <SelectTrigger className="w-full sm:w-32 bg-slate-700/50 border-slate-600 text-white">
              <SelectValue placeholder="Rating" />
            </SelectTrigger>
            <SelectContent className="bg-slate-700 border-slate-600">
              <SelectItem value="all" className="text-white">All Ratings</SelectItem>
              <SelectItem value="9+" className="text-white">9.0+</SelectItem>
              <SelectItem value="8+" className="text-white">8.0+</SelectItem>
              <SelectItem value="7+" className="text-white">7.0+</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" className="border-slate-600 text-gray-300 hover:text-white hover:bg-slate-700">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>
    </div>
  );
}