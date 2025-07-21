import HeroSection from '@/components/home/hero-section';
import FeaturedMovies from '@/components/home/featured-movies';
import LatestBlogs from '@/components/home/latest-blogs';
import StatsSection from '@/components/home/stats-section';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedMovies />
      <LatestBlogs />
      <StatsSection />
    </div>
  );
}