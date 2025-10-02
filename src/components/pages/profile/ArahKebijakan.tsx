
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Compass, Target, ArrowRight, FileText } from "lucide-react";

const ArahKebijakan = () => {
  const arahKebijakanData = {
    arah: {
      title: "Arah Kebijakan Pembangunan Desa",
      icon: Compass,
      content: {
        deskripsi: "Arah kebijakan pembangunan desa dirancang sebagai pedoman strategis untuk mewujudkan visi dan misi desa dalam periode RPJMDes.",
        periode: "2021-2027",
        poin: [
          "Peningkatan Kualitas Sumber Daya Manusia.",
          "Penguatan Ekonomi Lokal yang Berdaya Saing.",
          "Pembangunan Infrastruktur yang Merata dan Berwawasan Lingkungan.",
          "Reformasi Tata Kelola Pemerintahan Desa.",
          "Pemeliharaan Kerukunan Sosial dan Budaya."
        ]
      }
    },
    prioritas: {
      title: "Prioritas Pembangunan",
      icon: Target,
      content: {
        prioritas: [
          {
            judul: "Sektor Pendidikan dan Kesehatan",
            deskripsi: "Meningkatkan akses dan mutu layanan pendidikan dan kesehatan sebagai fondasi utama pembangunan manusia.",
            program: [
              "Rehabilitasi gedung sekolah dan posyandu.",
              "Pemberian beasiswa bagi siswa berprestasi dan kurang mampu.",
              "Program desa siaga sehat dan pencegahan stunting."
            ]
          },
          {
            judul: "Sektor Ekonomi Kerakyatan",
            deskripsi: "Menggerakkan potensi ekonomi lokal untuk meningkatkan pendapatan dan kesejahteraan masyarakat.",
            program: [
              "Penguatan BUMDes dengan unit usaha baru.",
              "Pelatihan digital marketing bagi pelaku UMKM.",
              "Pengembangan produk unggulan desa."
            ]
          },
          {
            judul: "Sektor Infrastruktur Dasar",
            deskripsi: "Memenuhi kebutuhan infrastruktur dasar untuk mendukung konektivitas dan aktivitas warga.",
            program: [
              "Pembangunan jalan usaha tani dan jalan lingkungan.",
              "Perluasan jaringan air bersih perpipaan.",
              "Pembangunan sarana olahraga dan ruang terbuka hijau."
            ]
          }
        ]
      }
    },
    dokumen: {
      title: "Dokumen Kebijakan",
      icon: FileText,
      content: {
        dokumen: [
          {
            judul: "RPJMDes 2021-2027",
            tahun: "2021",
            status: "Dokumen Induk Perencanaan"
          },
          {
            judul: "RKPDes Tahunan",
            tahun: "Setiap Tahun",
            status: "Dokumen Operasional Tahunan"
          }
        ]
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16 mb-20">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Arah Kebijakan Desa</h2>
          <p className="text-muted-foreground">
            Arah kebijakan dan prioritas pembangunan Desa Remau Bakotuo
          </p>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Compass className="h-8 w-8 text-primary" />
            <div>
              <CardTitle>{arahKebijakanData.arah.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Periode {arahKebijakanData.arah.content.periode}
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Deskripsi</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {arahKebijakanData.arah.content.deskripsi}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Lima Pilar Kebijakan</h4>
              <ul className="space-y-2">
                {arahKebijakanData.arah.content.poin.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Compass className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Target className="h-8 w-8 text-primary" />
            <div>
              <CardTitle>{arahKebijakanData.prioritas.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Fokus utama pembangunan desa
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {arahKebijakanData.prioritas.content.prioritas.map((item, index) => (
              <div key={index} className="space-y-4">
                <div>
                  <h4 className="font-semibold">{item.judul}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.deskripsi}
                  </p>
                </div>
                <ul className="space-y-2">
                  <h5 className="font-medium text-sm text-foreground">Contoh Program:</h5>
                  {item.program.map((program, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Target className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{program}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <FileText className="h-8 w-8 text-primary" />
            <div>
              <CardTitle>{arahKebijakanData.dokumen.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Landasan hukum perencanaan pembangunan
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {arahKebijakanData.dokumen.content.dokumen.map((item, index) => (
              <div key={index} className="space-y-2">
                <h4 className="font-semibold">{item.judul}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Keterangan</span>
                    <span className="font-medium">{item.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Frekuensi</span>
                    <span className="font-medium">{item.tahun}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ArahKebijakan;
