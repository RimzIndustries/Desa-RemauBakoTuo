
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, FileText, Award } from "lucide-react";

const StrukturPemerintah = () => {
  const strukturData = {
    pemerintahan: {
      title: "Pemerintahan Desa",
      icon: Building2,
      content: {
        deskripsi: "Penyelenggaraan urusan pemerintahan di tingkat desa dilaksanakan oleh Pemerintah Desa, yang terdiri dari Kepala Desa dan Perangkat Desa.",
        periode: "2021-2027",
        struktur: [
          {
            jabatan: "Kepala Desa",
            nama: "H. Muhammad Yusuf, S.Pd.",
            periode: "2021-2027",
            tugas: [
              "Memimpin penyelenggaraan Pemerintahan Desa.",
              "Membina kehidupan masyarakat Desa.",
              "Membina perekonomian Desa.",
              "Mengkoordinasikan pembangunan Desa secara partisipatif."
            ]
          },
          {
            jabatan: "Sekretaris Desa",
            nama: "La Ode Abdul Rahman, S.E.",
            periode: "2021-2027",
            tugas: [
              "Membantu Kepala Desa dalam bidang administrasi pemerintahan.",
              "Mengkoordinasikan tugas-tugas Perangkat Desa lainnya.",
              "Menyusun laporan penyelenggaraan pemerintahan Desa."
            ]
          },
          {
            jabatan: "Kepala Urusan Pemerintahan",
            nama: "La Ode Hidayat, S.Sos.",
            periode: "2021-2027",
            tugas: [
              "Melaksanakan manajemen administrasi kependudukan.",
              "Mengelola data profil desa dan monografi.",
              "Membantu pelaksanaan urusan pertanahan."
            ]
          }
        ]
      }
    },
    bpd: {
      title: "Badan Permusyawaratan Desa (BPD)",
      icon: Users,
      content: {
        deskripsi: "BPD adalah lembaga yang melaksanakan fungsi pemerintahan yang anggotanya merupakan wakil dari penduduk desa berdasarkan keterwakilan wilayah dan ditetapkan secara demokratis.",
        periode: "2021-2027",
        struktur: [
          {
            jabatan: "Ketua BPD",
            nama: "La Ode Mustafa",
            periode: "2021-2027",
            tugas: [
              "Memimpin dan mengkoordinasikan seluruh kegiatan BPD.",
              "Membahas dan menyepakati Rancangan Peraturan Desa bersama Kepala Desa.",
              "Melakukan pengawasan terhadap kinerja Kepala Desa."
            ]
          },
          {
            jabatan: "Wakil Ketua BPD",
            nama: "La Ode Rahim",
            periode: "2021-2027",
            tugas: [
              "Membantu Ketua BPD dalam melaksanakan tugas.",
              "Mengkoordinasikan kegiatan komisi-komisi di BPD."
            ]
          },
          {
            jabatan: "Sekretaris BPD",
            nama: "La Ode Jafar",
            periode: "2021-2027",
            tugas: [
              "Melaksanakan administrasi dan persuratan BPD.",
              "Menyusun risalah dan notulensi rapat-rapat BPD."
            ]
          }
        ]
      }
    },
    lembaga: {
      title: "Lembaga Kemasyarakatan Desa (LKD)",
      icon: Award,
      content: {
        deskripsi: "LKD adalah wadah partisipasi masyarakat desa yang dibentuk atas prakarsa masyarakat sebagai mitra Pemerintah Desa.",
        periode: "2021-2027",
        lembaga: [
          {
            nama: "Lembaga Pemberdayaan Masyarakat Desa (LPMD)",
            ketua: "La Ode Hamid",
            tugas: [
              "Menyusun rencana pembangunan secara partisipatif.",
              "Menggerakkan swadaya gotong royong masyarakat.",
              "Membantu dalam perencanaan dan pelaksanaan pembangunan."
            ]
          },
          {
            nama: "Pemberdayaan Kesejahteraan Keluarga (PKK)",
            ketua: "Hj. Aminah",
            tugas: [
              "Melaksanakan 10 Program Pokok PKK.",
              "Menggerakkan partisipasi perempuan dalam pembangunan.",
              "Membina kesejahteraan keluarga."
            ]
          },
          {
            nama: "Karang Taruna",
            ketua: "La Ode Fadli",
            tugas: [
              "Mengembangkan potensi dan kreativitas generasi muda.",
              "Menyelenggarakan kegiatan kepemudaan, olahraga, dan seni budaya.",
              "Membantu penanggulangan masalah sosial."
            ]
          }
        ]
      }
    },
    dokumen: {
      title: "Dokumen Terkait",
      icon: FileText,
      content: {
        dokumen: [
          {
            judul: "Peraturan Desa tentang Struktur Organisasi dan Tata Kerja (SOTK) Pemerintah Desa",
            tahun: "2021",
            status: "Dokumen Resmi"
          },
          {
            judul: "SK Pengangkatan Perangkat Desa dan Pengurus Lembaga Kemasyarakatan",
            tahun: "2021",
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
          <h2 className="text-3xl font-bold tracking-tight">Struktur Pemerintahan Desa</h2>
          <p className="text-muted-foreground">
            Struktur organisasi dan lembaga pemerintahan Desa Remau Bako Tuo
          </p>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Building2 className="h-8 w-8 text-primary" />
            <div>
              <CardTitle>{strukturData.pemerintahan.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Periode {strukturData.pemerintahan.content.periode}
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Deskripsi</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {strukturData.pemerintahan.content.deskripsi}
              </p>
            </div>
            <div className="space-y-6">
              {strukturData.pemerintahan.content.struktur.map((item, index) => (
                <div key={index} className="space-y-4">
                  <div>
                    <h4 className="font-semibold">{item.jabatan}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.nama} ({item.periode})
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {item.tugas.map((tugas, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Building2 className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{tugas}</span>
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
              <CardTitle>{strukturData.bpd.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Periode {strukturData.bpd.content.periode}
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Deskripsi</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {strukturData.bpd.content.deskripsi}
              </p>
            </div>
            <div className="space-y-6">
              {strukturData.bpd.content.struktur.map((item, index) => (
                <div key={index} className="space-y-4">
                  <div>
                    <h4 className="font-semibold">{item.jabatan}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.nama} ({item.periode})
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {item.tugas.map((tugas, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Users className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{tugas}</span>
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
            <Award className="h-8 w-8 text-primary" />
            <div>
              <CardTitle>{strukturData.lembaga.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Periode {strukturData.lembaga.content.periode}
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Deskripsi</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {strukturData.lembaga.content.deskripsi}
              </p>
            </div>
            <div className="space-y-6">
              {strukturData.lembaga.content.lembaga.map((item, index) => (
                <div key={index} className="space-y-4">
                  <div>
                    <h4 className="font-semibold">{item.nama}</h4>
                    <p className="text-sm text-muted-foreground">
                      Ketua: {item.ketua}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {item.tugas.map((tugas, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Award className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{tugas}</span>
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
              <CardTitle>{strukturData.dokumen.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Landasan hukum struktur pemerintahan desa
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {strukturData.dokumen.content.dokumen.map((item, index) => (
              <div key={index} className="space-y-2">
                <h4 className="font-semibold">{item.judul}</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
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

export default StrukturPemerintah;
