'use client';
import dynamic from 'next/dynamic';
import PublicLayout from '@/layouts/PublicLayout';

const MapComponent = dynamic(
  () => import('@/components/MapComponent'),
  { ssr: false }
);

export default function TataRuangPage() {
    return (
        <PublicLayout>
            <MapComponent />
        </PublicLayout>
    )
}
