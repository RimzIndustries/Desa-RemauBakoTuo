'use client';

import dynamic from 'next/dynamic';

const DynamicTataRuang = dynamic(() => import('@/components/pages/landing/TataRuang'), {
  ssr: false,
});

export default DynamicTataRuang;
