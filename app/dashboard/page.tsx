'use client';

import { useAuth } from '@/components/auth/auth-provider';
import AdminDashboard from '@/components/dashboard/admin-dashboard';
import UserDashboard from '@/components/dashboard/user-dashboard';
import { Card, CardContent } from '@/components/ui/card';
import { Film } from 'lucide-react';

export default function DashboardPage() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <Card className="bg-slate-800/50 border-slate-700 p-8">
          <CardContent className="flex items-center space-x-4">
            <Film className="h-8 w-8 text-blue-400 animate-pulse" />
            <p className="text-white text-lg">Loading dashboard...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <Card className="bg-slate-800/50 border-slate-700 p-8">
          <CardContent className="text-center">
            <p className="text-white text-lg">Please log in to access the dashboard</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return user.role === 'admin' ? <AdminDashboard /> : <UserDashboard />;
}