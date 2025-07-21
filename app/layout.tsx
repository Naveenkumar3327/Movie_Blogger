import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/components/auth/auth-provider';
import Navigation from '@/components/layout/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Movie Blogger - Your Ultimate Movie Review Platform',
  description: 'Discover, review, and discuss your favorite movies with our community of film enthusiasts.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950`}>
        <AuthProvider>
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}