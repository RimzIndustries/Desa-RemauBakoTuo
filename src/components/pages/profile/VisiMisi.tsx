
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, ListChecks, ArrowRight, FileText } from "lucide-react";

const VisiMisi = () => {
  const visiMisiData = {
    visi: {
      title: "Visi Desa",
      icon: Target,
      content: {
        deskripsi: "Visi pembangunan Desa Remau Bako Tuo untuk periode 2021-2027 adalah cita-cita bersama yang ingin diwujudkan oleh seluruh elemen masyarakat dan pemerintah desa.",
        periode: "2021-2027",
        visi: [
          {
            judul: "Visi Utama",
            deskripsi: "“Terwujudnya Desa Remau Bako Tuo yang Maju, Mandiri, dan Sejahtera Berlandaskan Gotong Royong”",
            poin: [
              "Maju dalam pemikiran, pemanfaatan teknologi, dan kualitas sumber daya manusia.",
              "Mandiri secara ekonomi dengan mengoptimalkan potensi lokal.",
              "Sejahtera secara merata bagi seluruh lapisan masyarakat.",
              "Berlandaskan semangat gotong royong sebagai modal sosial utama."
            ]
          }
        ]
      }
    },
    misi: {
      title: "Misi Desa",
      icon: ListChecks,
      content: {
        deskripsi: "Untuk mencapai visi tersebut, dirumuskan beberapa misi sebagai berikut:",
        periode: "2021-2027",
        misi: [
          {
            judul: "Meningkatkan Kualitas Pelayanan Publik",
            deskripsi: "Mewujudkan tata kelola pemerintahan yang baik, transparan, dan akuntabel berbasis teknologi informasi.",
            program: [
              "Reformasi birokrasi dan digitalisasi layanan administrasi.",
              "Peningkatan kapasitas aparatur desa.",
              "Keterbukaan informasi publik terkait anggaran dan program desa."
            ]
          },
          {
            judul: "Mengembangkan Perekonomian Desa",
            deskripsi: "Memperkuat ekonomi lokal melalui pemberdayaan UMKM, BUMDes, dan sektor unggulan desa.",
            program: [
              "Pengembangan BUMDes sebagai motor penggerak ekonomi.",
              "Pelatihan dan pendampingan bagi pelaku UMKM.",
              "Optimalisasi potensi pertanian, perikanan, dan pariwisata."
            ]
          },
          {
            judul: "Membangun Infrastruktur yang Merata dan Berkelanjutan",
            deskripsi: "Meningkatkan kualitas dan kuantitas infrastruktur dasar untuk mendukung aktivitas sosial dan ekonomi masyarakat.",
            program: [
              "Pembangunan dan pemeliharaan jalan desa dan lingkungan.",
              "Peningkatan akses air bersih dan sanitasi layak.",
              "Pengembangan jaringan irigasi untuk pertanian."
            ]
          }
        ]
      }
    },
    dokumen: {
      title: "Dokumen Visi Misi",
      icon: FileText,
      content: {
        dokumen: [
          {
            judul: "Dokumen RPJMDes 2021-2027",
            tahun: "2021",
            status: "Dokumen Resmi"
          }
        ]
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16 mb-20">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Visi dan Misi Desa</h2>
          <p className="text-muted-foreground">
            Visi dan Misi Desa Remau Bako Tuo periode {visiMisiData.visi.content.periode}
          </p>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Target className="h-8 w-8 text-primary" />
            <div>
              <CardTitle>{visiMisiData.visi.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Cita-cita bersama Desa Remau Bako Tuo
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-6">
              {visiMisiData.visi.content.visi.map((item, index) => (
                <div key={index} className="space-y-4">
                  <div>
                    <h4 className="font-semibold">{item.judul}</h4>
                    <blockquote className="mt-2 border-l-2 pl-6 italic text-muted-foreground">
                      {item.deskripsi}
                    </blockquote>
                  </div>
                  <ul className="space-y-2">
                    {item.poin.map((poin, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Target className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{poin}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <ListChecks className="h-8 w-8 text-primary" />
            <div>
              <CardTitle>{visiMisiData.misi.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Langkah-langkah strategis untuk mencapai visi
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-6">
              {visiMisiData.misi.content.misi.map((item, index) => (
                <div key={index} className="space-y-4">
                  <div>
                    <h4 className="font-semibold">{item.judul}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.deskripsi}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {item.program.map((program, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ListChecks className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{program}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <FileText className="h-8 w-8 text-primary" />
            <div>
              <CardTitle>{visiMisiData.dokumen.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Dokumen resmi Visi dan Misi Desa
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {visiMisiData.dokumen.content.dokumen.map((item, index) => (
              <div key={index} className="space-y-2">
                <h4 className="font-semibold">{item.judul}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tahun</span>
                    <span className="font-medium">{item.tahun}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <span className="font-medium">{item.status}</span>
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

export default VisiMisi;
