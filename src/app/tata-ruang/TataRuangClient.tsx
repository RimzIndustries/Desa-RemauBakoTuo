'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/pages/landing/TataRuang'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-gray-200 flex items-center justify-center"><p>Loading Map...</p></div>,
});

export default function TataRuangClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <>{isClient && <Map />}</>;
}
