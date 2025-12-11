import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import AnimatedBackground from '../AnimatedBackground';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
      <Header />
      <main className="flex-grow relative">
        <AnimatedBackground />
        <div className="relative z-10">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
