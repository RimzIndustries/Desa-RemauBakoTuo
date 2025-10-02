
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { History, FileText, Calendar, Users } from "lucide-react";

const SejarahDesa = () => {
  const sejarahData = {
    asal: {
      title: "Asal Usul Desa",
      icon: History,
      content: {
        deskripsi: "Sejarah Desa Remau Bako Tuo berakar dari semangat gotong royong para perintis yang membuka lahan permukiman di tengah alam yang subur. Nama desa ini sendiri memiliki makna filosofis yang mendalam.",
        periode: "Awal Abad ke-20",
        asal: [
          {
            judul: "Pendirian Desa",
            deskripsi: "Didorong oleh keinginan untuk mencari kehidupan yang lebih baik, sekelompok masyarakat perantau memulai permukiman baru yang kini dikenal sebagai Desa Remau Bako Tuo.",
            detail: [
              "Dipimpin oleh tokoh masyarakat yang dihormati.",
              "Membentuk struktur pemerintahan desa sederhana berbasis adat.",
              "Menetapkan batas-batas wilayah secara musyawarah.",
              "Membangun nilai-nilai kebersamaan dan gotong royong."
            ]
          },
          {
            judul: "Makna Nama Desa",
            deskripsi: "Nama 'Remau Bako Tuo' merupakan gabungan kata dari bahasa lokal yang sarat akan harapan dan sejarah.",
            detail: [
              "'Remau' melambangkan kekuatan dan keberanian.",
              "'Bako' merujuk pada pohon bakau yang kokoh di pesisir.",
              "'Tuo' berarti 'tua' atau 'awal', menandakan sebagai permukiman perintis.",
              "Nama ini mencerminkan harapan agar desa menjadi komunitas yang kuat, tangguh, dan sejahtera."
            ]
          }
        ]
      }
    },
    perkembangan: {
      title: "Perkembangan Desa dari Masa ke Masa",
      icon: Calendar,
      content: {
        deskripsi: "Perjalanan Desa Remau Bako Tuo dari sebuah permukiman kecil hingga menjadi desa yang terus berkembang.",
        periode: "1900 - Sekarang",
        perkembangan: [
          {
            periode: "Masa Perintisan (Awal 1900-an)",
            judul: "Fase Pembentukan Komunitas",
            deskripsi: "Fokus utama pada masa ini adalah bertahan hidup, membuka lahan pertanian, dan membangun fondasi sosial masyarakat.",
            peristiwa: [
              "Pembukaan lahan pertanian dan perkebunan secara gotong royong.",
              "Pembangunan rumah-rumah panggung sederhana.",
              "Pengenalan sistem irigasi tradisional.",
              "Pembentukan lembaga adat sebagai pengatur kehidupan sosial."
            ]
          },
          {
            periode: "Masa Pembangunan (Pasca-Kemerdekaan)",
            judul: "Fase Pembangunan Infrastruktur dan Layanan Dasar",
            deskripsi: "Seiring dengan stabilitas nasional, desa mulai membangun fasilitas dasar untuk meningkatkan kualitas hidup warganya.",
            peristiwa: [
              "Pembangunan jalan setapak dan jembatan kayu.",
              "Pendirian sekolah dasar pertama (Sekolah Rakyat).",
              "Pembangunan surau/mushola sebagai pusat kegiatan keagamaan.",
              "Masuknya program pemerintah seperti Bimas dan Inpres Desa."
            ]
          },
          {
            periode: "Masa Modern (2000-an - Sekarang)",
            judul: "Fase Transformasi dan Digitalisasi",
            deskripsi: "Desa mulai beradaptasi dengan kemajuan zaman, memanfaatkan teknologi untuk pelayanan dan pembangunan.",
            peristiwa: [
              "Pengerasan jalan desa dengan aspal dan beton.",
              "Masuknya listrik dan jaringan telekomunikasi.",
              "Pendirian Badan Usaha Milik Desa (BUMDes).",
              "Implementasi Sistem Informasi Desa untuk pelayanan publik."
            ]
          }
        ]
      }
    },
    tokoh: {
      title: "Tokoh-Tokoh Penting",
      icon: Users,
      content: {
        deskripsi: "Beberapa tokoh yang berjasa besar dalam sejarah dan perkembangan desa.",
        tokoh: [
          {
            nama: "Para Tetua Pendiri",
            periode: "Awal 1900-an",
            peran: "Perintis dan Pemimpin Adat",
            kontribusi: [
              "Memimpin migrasi dan pembukaan lahan.",
              "Meletakkan dasar-dasar hukum adat dan norma sosial.",
              "Menjaga kerukunan dan semangat gotong royong."
            ]
          },
          {
            nama: "Generasi Pembangun",
            periode: "1950-2000",
            peran: "Kepala Desa dan Aktivis Pembangunan",
            kontribusi: [
              "Menginisiasi pembangunan sekolah dan tempat ibadah.",
              "Menjalin kerja sama dengan pemerintah untuk program pembangunan.",
              "Memperjuangkan perbaikan infrastruktur desa."
            ]
          }
        ]
      }
    },
    dokumen: {
      title: "Dokumen Sejarah",
      icon: FileText,
      content: {
        dokumen: [
          {
            judul: "Buku Monografi Desa",
            tahun: "Terakhir diperbarui 2023",
            status: "Dokumen Resmi"
          },
          {
            judul: "Arsip Foto dan Catatan Sejarah",
            tahun: "Dikumpulkan secara berkala",
            status: "Arsip Desa"
          }
        ]
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16 mb-20">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Sejarah Desa</h2>
          <p className="text-muted-foreground">
            Perjalanan sejarah dan perkembangan Desa Remau Bako Tuo dari masa ke masa
          </p>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <History className="h-8 w-8 text-primary" />
            <div>
              <CardTitle>{sejarahData.asal.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Sejarah dan asal usul Desa Remau Bako Tuo
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Deskripsi</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {sejarahData.asal.content.deskripsi}
              </p>
            </div>
            <div className="space-y-6">
              {sejarahData.asal.content.asal.map((item, index) => (
                <div key={index} className="space-y-4">
                  <div>
                    <h4 className="font-semibold">{item.judul}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.deskripsi}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {item.detail.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <History className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
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
            <Calendar className="h-8 w-8 text-primary" />
            <div>
              <CardTitle>{sejarahData.perkembangan.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Perkembangan Desa Remau Bako Tuo
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Deskripsi</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {sejarahData.perkembangan.content.deskripsi}
              </p>
            </div>
            <div className="space-y-6">
              {sejarahData.perkembangan.content.perkembangan.map((item, index) => (
                <div key={index} className="space-y-4">
                  <div>
                    <h4 className="font-semibold">{item.judul} ({item.periode})</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.deskripsi}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {item.peristiwa.map((peristiwa, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Calendar className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{peristiwa}</span>
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
            <Users className="h-8 w-8 text-primary" />
            <div>
              <CardTitle>{sejarahData.tokoh.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Tokoh-tokoh penting dalam sejarah desa
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
             <div>
              <h4 className="font-semibold mb-2">Deskripsi</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {sejarahData.tokoh.content.deskripsi}
              </p>
            </div>
            <div className="space-y-6">
              {sejarahData.tokoh.content.tokoh.map((item, index) => (
                <div key={index} className="space-y-4">
                  <div>
                    <h4 className="font-semibold">{item.nama}</h4>
                    <p className="text-sm text-muted-foreground">
                      Peran: {item.peran} ({item.periode})
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {item.kontribusi.map((kontribusi, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Users className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{kontribusi}</span>
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
              <CardTitle>{sejarahData.dokumen.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Dokumen sejarah Desa Remau Bako Tuo
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {sejarahData.dokumen.content.dokumen.map((item, index) => (
              <div key={index} className="space-y-2">
                <h4 className="font-semibold">{item.judul}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sumber</span>
                    <span className="font-medium">{item.status}</span>
                  </div>
                   <div className="flex justify-between">
                    <span className="text-muted-foreground">Keterangan</span>
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

export default SejarahDesa;
