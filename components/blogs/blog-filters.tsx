'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';

export default function BlogFilters() {
  return (
    <div className="mb-8 bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search blogs and reviews..."
              className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
            />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Select>
            <SelectTrigger className="w-full sm:w-40 bg-slate-700/50 border-slate-600 text-white">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="bg-slate-700 border-slate-600">
              <SelectItem value="all" className="text-white">All Categories</SelectItem>
              <SelectItem value="reviews" className="text-white">Reviews</SelectItem>
              <SelectItem value="analysis" className="text-white">Analysis</SelectItem>
              <SelectItem value="news" className="text-white">News</SelectItem>
              <SelectItem value="interviews" className="text-white">Interviews</SelectItem>
            </SelectContent>
          </Select>
          
          <Select>
            <SelectTrigger className="w-full sm:w-32 bg-slate-700/50 border-slate-600 text-white">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent className="bg-slate-700 border-slate-600">
              <SelectItem value="newest" className="text-white">Newest</SelectItem>
              <SelectItem value="popular" className="text-white">Popular</SelectItem>
              <SelectItem value="most-liked" className="text-white">Most Liked</SelectItem>
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