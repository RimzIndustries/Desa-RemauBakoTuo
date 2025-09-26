'use client';
import { usePathname } from 'next/navigation';
import TopNav from '@/components/TopNav';
import BottomNav from '@/components/BottomNav';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isTataRuangRoute = pathname?.startsWith('/tata-ruang');
  const needsSidebar = !isTataRuangRoute && (
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

  if (isTataRuangRoute) {
    return (
      <>
        <div className="fixed inset-0">
          {children}
        </div>
        <div className="fixed top-0 left-0 right-0 z-[1000]">
          <TopNav hasNewNews={false} />
        </div>
        <div className="fixed bottom-0 left-0 right-0 z-[1000]">
          <BottomNav />
        </div>
      </>
    );
  }

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
