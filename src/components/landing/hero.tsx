import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-background');

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center text-center">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-white drop-shadow-md">
            Membuka Wawasan Desa Melalui Data Spasial
          </h1>
          <p className="text-lg md:text-xl text-gray-200 drop-shadow">
            Platform terpadu untuk mengakses dan menganalisis data sosial
            pedesaan, memberdayakan pembangunan yang lebih baik dan
            berkelanjutan.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="px-8 text-lg">
              <Link href="#">Akses Data</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
