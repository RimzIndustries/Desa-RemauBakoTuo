'use client';
import dynamic from 'next/dynamic';
import PublicLayout from '@/layouts/PublicLayout';

const TataRuang = dynamic(
  () => import('@/components/pages/landing/TataRuang'),
  { ssr: false }
);

export default function TataRuangPage() {
    return (
        <PublicLayout>
            <TataRuang />
        </PublicLayout>
    )
}
