import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Users,
  BarChart3,
  HeartPulse,
  BookOpen,
  Home,
  Sprout,
} from 'lucide-react';

const categories = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Kependudukan',
    description: 'Data demografi, struktur usia, dan distribusi penduduk.',
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: 'Ekonomi',
    description:
      'Informasi mata pencaharian, tingkat pendapatan, dan potensi ekonomi.',
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-primary" />,
    title: 'Kesehatan',
    description: 'Akses ke layanan kesehatan, status gizi, dan data sanitasi.',
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: 'Pendidikan',
    description:
      'Tingkat partisipasi sekolah, fasilitas, dan kualitas pendidikan.',
  },
  {
    icon: <Home className="h-8 w-8 text-primary" />,
    title: 'Infrastruktur',
    description:
      'Ketersediaan infrastruktur dasar seperti jalan, listrik, dan air bersih.',
  },
  {
    icon: <Sprout className="h-8 w-8 text-primary" />,
    title: 'Lingkungan & Pertanian',
    description:
      'Data penggunaan lahan, sumber daya alam, dan praktik pertanian.',
  },
];

export default function DataCategories() {
  return (
    <section id="categories" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
              Kategori Data
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Jelajahi Data Desa
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Temukan berbagai macam data sosial yang terorganisir dalam
              kategori untuk memudahkan analisis dan pengambilan keputusan Anda.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((category) => (
            <Card
              key={category.title}
              className="flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border-border/50"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                {category.icon}
                <CardTitle className="font-headline">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{category.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
