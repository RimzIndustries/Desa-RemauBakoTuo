import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutUs() {
  const aboutImage = PlaceHolderImages.find((p) => p.id === 'about-us-image');

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm text-foreground">
              Tentang Kami
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Misi Kami untuk Pembangunan Desa
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Data-Desa Spasial lahir dari kebutuhan akan data yang akurat dan
              mudah diakses untuk mendukung perencanaan dan implementasi program
              pembangunan di tingkat desa. Kami percaya bahwa data adalah kunci
              untuk memahami tantangan dan potensi yang ada.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Platform kami melayani pemerintah daerah, akademisi, LSM, dan
              masyarakat umum yang peduli terhadap kemajuan desa. Dengan
              menyediakan data spasial yang terintegrasi, kami berharap dapat
              mendorong terciptanya kebijakan yang lebih tepat sasaran dan
              berdampak positif bagi kesejahteraan masyarakat desa.
            </p>
          </div>
          <div className="flex justify-center">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                width={600}
                height={400}
                alt={aboutImage.description}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg sm:w-full"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
