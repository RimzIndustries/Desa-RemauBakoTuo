import { Outlet, useLocation } from 'react-router-dom';
import TopNav from '@/components/TopNav';
import BottomNav from '@/components/BottomNav';

const PublicLayout = () => {
  const location = useLocation();
  const isProfileRoute = location.pathname.startsWith('/profil');
  const isPembangunanRoute = location.pathname.startsWith('/pembangunan');
  const isDanaDesaRoute = location.pathname.startsWith('/dana-desa');
  const isIndeksRoute = location.pathname.startsWith('/indeks');
  const isLayananRoute = location.pathname.startsWith('/layanan');
  const isEkonomiRoute = location.pathname.startsWith('/ekonomi');
  const isKelembagaanRoute = location.pathname.startsWith('/kelembagaan');
  const isAktivitasRoute = location.pathname.startsWith('/aktivitas');
  const isPustakaRoute = location.pathname.startsWith('/pustaka');
  const isTataRuangRoute = location.pathname.startsWith('/tata-ruang');
  
  const needsSidebar = isProfileRoute || isPembangunanRoute || isDanaDesaRoute || 
    isIndeksRoute || isLayananRoute || isEkonomiRoute || isKelembagaanRoute || 
    isAktivitasRoute || isPustakaRoute;

  if (isTataRuangRoute) {
    return (
      <>
        <div className="fixed inset-0">
          <Outlet />
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
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default PublicLayout;
