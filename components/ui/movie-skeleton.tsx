import { Skeleton } from '@/components/ui/skeleton';

export function MovieSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden">
          <Skeleton className="w-full h-64 bg-slate-700" />
          <div className="p-4 space-y-3">
            <Skeleton className="h-6 bg-slate-700" />
            <div className="flex space-x-4">
              <Skeleton className="h-4 w-16 bg-slate-700" />
              <Skeleton className="h-4 w-20 bg-slate-700" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}