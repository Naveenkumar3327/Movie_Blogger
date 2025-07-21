import { Skeleton } from '@/components/ui/skeleton';

export function BlogSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden">
          <Skeleton className="w-full h-48 bg-slate-700" />
          <div className="p-6 space-y-4">
            <Skeleton className="h-6 bg-slate-700" />
            <Skeleton className="h-4 bg-slate-700" />
            <Skeleton className="h-4 w-3/4 bg-slate-700" />
            <div className="flex items-center space-x-3 pt-4">
              <Skeleton className="h-8 w-8 rounded-full bg-slate-700" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-24 bg-slate-700" />
                <Skeleton className="h-3 w-16 bg-slate-700" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}