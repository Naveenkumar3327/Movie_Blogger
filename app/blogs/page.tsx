import BlogGrid from '@/components/blogs/blog-grid';
import BlogFilters from '@/components/blogs/blog-filters';
import { Suspense } from 'react';
import { BlogSkeleton } from '@/components/ui/blog-skeleton';

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Movie Reviews & Blogs</h1>
          <p className="text-gray-400">Read the latest reviews and insights from our community</p>
        </div>
        
        <BlogFilters />
        
        <Suspense fallback={<BlogSkeleton />}>
          <BlogGrid />
        </Suspense>
      </div>
    </div>
  );
}