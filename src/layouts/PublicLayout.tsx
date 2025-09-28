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
    <div className="flex flex-row min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 md:relative">
        <TopNav hasNewNews={false} />
      </header>
      
      {/* Sidebar Slot */}
      <div className="hidden md:block fixed top-16 left-0 h-[calc(100vh-4rem)] z-40">
         {/* The sidebars from TopNav and BottomNav will be rendered here */}
      </div>

      <div className="flex flex-col flex-1">
        <main className="flex-grow pt-16 md:pt-0">
           {children}
        </main>
        <footer className="relative z-40">
          <BottomNav />
        </footer>
      </div>
    </div>
  );
};

export default PublicLayout;
