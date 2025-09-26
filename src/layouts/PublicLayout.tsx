'use client';
import { usePathname } from 'next/navigation';
import TopNav from '@/components/TopNav';
import BottomNav from '@/components/BottomNav';
import { useEffect, useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isTataRuangRoute = pathname?.startsWith('/tata-ruang');

  if (isTataRuangRoute) {
    // For the map page, we render it directly with its own layout structure
    // to avoid re-initialization issues with the PublicLayout's main structure.
    return (
      <>
        {children}
        <div className="fixed top-0 left-0 right-0 z-[1000]">
          <TopNav hasNewNews={false} />
        </div>
        <div className="fixed bottom-0 left-0 right-0 z-[1000]">
          <BottomNav />
        </div>
        {isMounted && (
          <>
            <Toaster />
            <Sonner />
          </>
        )}
      </>
    );
  }

  if (!isMounted) {
    // Render a simple version for SSR to avoid hydration errors
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
      </div>
    );
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
      <Toaster />
      <Sonner />
    </div>
  );
};

export default PublicLayout;