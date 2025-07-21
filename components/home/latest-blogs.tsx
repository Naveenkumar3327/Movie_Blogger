import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Calendar, MessageCircle, Heart } from 'lucide-react';
import Link from 'next/link';

const latestBlogs = [
  {
    id: '1',
    title: 'The Evolution of Superhero Movies: From Comics to Cinema',
    excerpt: 'Exploring how superhero movies have transformed the film industry and captured global audiences.',
    author: 'Sarah Johnson',
    authorInitials: 'SJ',
    date: '2024-01-15',
    readTime: '5 min read',
    likes: 42,
    comments: 12,
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '2',
    title: 'Why Indie Films Deserve More Recognition in 2024',
    excerpt: 'An in-depth look at the independent film scene and why these hidden gems deserve your attention.',
    author: 'Michael Chen',
    authorInitials: 'MC',
    date: '2024-01-12',
    readTime: '7 min read',
    likes: 38,
    comments: 8,
    image: 'https://images.pexels.com/photos/7991580/pexels-photo-7991580.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '3',
    title: 'Analyzing the Visual Effects Revolution in Modern Cinema',
    excerpt: 'How CGI and practical effects are reshaping storytelling and audience experiences in contemporary films.',
    author: 'Emma Rodriguez',
    authorInitials: 'ER',
    date: '2024-01-10',
    readTime: '6 min read',
    likes: 55,
    comments: 15,
    image: 'https://images.pexels.com/photos/7991748/pexels-photo-7991748.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export default function LatestBlogs() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Latest Reviews & Articles</h2>
          <p className="text-gray-400 text-lg">Read insightful reviews and analysis from our community</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestBlogs.map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog.id}`}>
              <Card className="group cursor-pointer bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-white font-bold text-xl mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                      {blog.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3 flex-1">
                      {blog.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs">
                            {blog.authorInitials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-white text-sm font-medium">{blog.author}</p>
                          <p className="text-gray-400 text-xs">{blog.readTime}</p>
                        </div>
                      </div>
                      
                      <div className="text-gray-400 text-xs">
                        {new Date(blog.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700">
                      <div className="flex items-center space-x-4 text-gray-400 text-sm">
                        <div className="flex items-center space-x-1 hover:text-red-400 transition-colors">
                          <Heart className="h-4 w-4" />
                          <span>{blog.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
                          <MessageCircle className="h-4 w-4" />
                          <span>{blog.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blogs">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all hover:shadow-lg">
              View All Articles
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}