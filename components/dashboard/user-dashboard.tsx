'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/components/auth/auth-provider';
import { Film, MessageSquare, Heart, Eye, Plus, Edit } from 'lucide-react';

const userStats = [
  { title: 'My Reviews', value: '23', icon: MessageSquare, color: 'from-blue-500 to-blue-600' },
  { title: 'Movies Watched', value: '156', icon: Film, color: 'from-green-500 to-green-600' },
  { title: 'Total Likes', value: '342', icon: Heart, color: 'from-red-500 to-red-600' },
  { title: 'Profile Views', value: '1,234', icon: Eye, color: 'from-purple-500 to-purple-600' },
];

const recentReviews = [
  { movie: 'The Dark Knight', rating: 5, excerpt: 'A masterpiece of superhero cinema...', date: '2024-01-15' },
  { movie: 'Inception', rating: 4, excerpt: 'Mind-bending thriller that keeps you guessing...', date: '2024-01-12' },
  { movie: 'Pulp Fiction', rating: 5, excerpt: 'Tarantino at his absolute best...', date: '2024-01-10' },
];

export default function UserDashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">My Dashboard</h1>
          <p className="text-gray-400">Welcome back, {user?.name}! Ready to discover more great movies?</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {userStats.map((stat, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-gradient-to-r ${stat.color}`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <Card className="bg-slate-800/50 border-slate-700 mb-6">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Write New Review
                </Button>
                <Button variant="outline" className="w-full border-slate-600 text-gray-300 hover:text-white hover:bg-slate-700">
                  <Film className="h-4 w-4 mr-2" />
                  Browse Movies
                </Button>
                <Button variant="outline" className="w-full border-slate-600 text-gray-300 hover:text-white hover:bg-slate-700">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Recommendation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <img 
                    src="https://images.pexels.com/photos/7991748/pexels-photo-7991748.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Recommended movie"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Recommended for You</h4>
                    <p className="text-gray-400 text-sm">Based on your viewing history</p>
                  </div>
                  <Button size="sm" className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                    Watch Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Reviews */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">My Recent Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReviews.map((review, index) => (
                    <div key={index} className="p-4 bg-slate-700/30 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-semibold">{review.movie}</h4>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i}
                              className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                            >
                              ⭐
                            </div>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm mb-2">{review.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-xs">{review.date}</span>
                        <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                          Edit Review
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}