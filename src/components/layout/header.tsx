import { Mountain } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
      <Link
        href="#"
        className="flex items-center gap-2 justify-center"
        prefetch={false}
      >
        <Mountain className="h-6 w-6 text-primary" />
        <span className="text-xl font-semibold font-headline text-foreground">
          Data-Desa Spasial
        </span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {/* Future nav links can go here */}
      </nav>
    </header>
  );
}
