'use client';
import { usePathname } from 'next/navigation';
import TopNav from '@/components/TopNav';
import BottomNav from '@/components/BottomNav';
import { useEffect, useState } from 'react';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="flex flex-col min-h-screen"><main className="flex-grow">{children}</main></div>;
  }
  
  const needsSidebar = (
    pathname?.startsWith('/profil') ||
    pathname?.startsWith('/pembangunan') ||
    pathname?.startsWith('/dana-desa') ||
    pathname?.startsWith('/indeks') ||
    pathname?.startsWith('/layanan') ||
    pathname?.startsWith('/ekonomi') ||
    pathname?.startsWith('/kelembagaan') ||
    pathname?.startsWith('/aktivitas') ||
    pathname?.startsWith('/pustaka')
  );

  return (
    <div className="flex flex-col min-h-screen">
      <TopNav hasNewNews={false} />
      <main className={`flex-grow ${needsSidebar ? 'md:pl-72 pl-12' : ''}`}>
        {children}
      </main>
      <BottomNav />
    </div>
  );
};

export default PublicLayout;
