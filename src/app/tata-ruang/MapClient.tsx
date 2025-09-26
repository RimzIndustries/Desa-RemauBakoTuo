'use client';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-gray-200 flex items-center justify-center"><p>Loading Map...</p></div>,
});

export default function MapClient() {
  return <Map />;
}
