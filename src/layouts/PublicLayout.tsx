'use client';
import { usePathname } from 'next/navigation';
import TopNav from '@/components/TopNav';
import BottomNav from '@/components/BottomNav';

const PublicLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  
  const sidebarRoutes = [
    '/profil', 
    '/pembangunan', 
    '/dana-desa', 
    '/indeks', 
    '/layanan', 
    '/ekonomi', 
    '/kelembagaan', 
    '/aktivitas', 
    '/pustaka'
  ];

  const needsSidebar = sidebarRoutes.some(route => pathname.startsWith(route) && pathname !== '/');
  const isTataRuangRoute = pathname === '/tata-ruang';
  
  if (isTataRuangRoute) {
    return (
      <>
        <div className="fixed inset-0 z-0">
          {children}
        </div>
        <header className="fixed top-0 left-0 right-0 z-[1001]">
          <TopNav hasNewNews={false} />
        </header>
        <footer className="fixed bottom-0 left-0 right-0 z-[1001]">
          <BottomNav />
        </footer>
      </>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50">
        <TopNav hasNewNews={false} />
      </header>
      <main className={`flex-grow transition-all duration-300 ease-in-out ${needsSidebar ? 'md:pl-72' : ''}`}>
        <div className="pt-16">
           {children}
        </div>
      </main>
      <footer className="relative z-40">
        <BottomNav />
      </footer>
    </div>
  );
};

export default PublicLayout;
