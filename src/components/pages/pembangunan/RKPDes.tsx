
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Building2, Users, DollarSign } from "lucide-react";

const RKPDes = () => {
  const rkpData = {
    umum: {
      title: "Informasi Umum RKPDes",
      icon: FileText,
      content: {
        tahun: "2024",
        deskripsi: "Rencana Kerja Pemerintah Desa (RKPDes) adalah dokumen perencanaan tahunan yang menjadi pedoman pelaksanaan pembangunan desa, memuat prioritas program dan kegiatan yang didanai oleh berbagai sumber pendapatan desa.",
        status: "Berlaku",
        tanggal_penetapan: "15 Desember 2023"
      }
    },
    program: {
      title: "Program Prioritas dan Kegiatan",
      icon: Building2,
      content: {
        infrastruktur: {
          nama: "Pembangunan Infrastruktur Desa",
          deskripsi: "Meningkatkan kualitas dan jangkauan infrastruktur dasar untuk mendukung mobilitas dan layanan publik.",
          kegiatan: [
            {
              nama: "Pembangunan Jalan Usaha Tani",
              lokasi: "Area Pertanian Dusun I & II",
              anggaran: "Rp 250.000.000",
              sumber: "Dana Desa"
            },
            {
              nama: "Rehabilitasi Jaringan Irigasi Tersier",
              lokasi: "Area Persawahan",
              anggaran: "Rp 150.000.000",
              sumber: "Dana Desa"
            },
            {
              nama: "Pembangunan Sumur Bor dan Jaringan Air Bersih",
              lokasi: "Dusun III",
              anggaran: "Rp 100.000.000",
              sumber: "Alokasi Dana Desa"
            }
          ]
        },
        pemberdayaan: {
          nama: "Pemberdayaan Masyarakat",
          deskripsi: "Meningkatkan kapasitas dan partisipasi masyarakat dalam pembangunan desa.",
          kegiatan: [
            {
              nama: "Pelatihan Pengolahan Hasil Pertanian",
              lokasi: "Balai Desa",
              anggaran: "Rp 50.000.000",
              sumber: "Dana Desa"
            },
            {
              nama: "Peningkatan Kapasitas Kader Posyandu",
              lokasi: "Puskesmas Pembantu",
              anggaran: "Rp 25.000.000",
              sumber: "Alokasi Dana Desa"
            }
          ]
        }
      }
    },
    pendanaan: {
      title: "Sumber Pendanaan RKPDes",
      icon: DollarSign,
      content: {
        dana_desa: {
          nama: "Dana Desa (DD)",
          jumlah: "Rp 800.000.000",
          persentase: "80%"
        },
        pad: {
          nama: "Alokasi Dana Desa (ADD)",
          jumlah: "Rp 150.000.000",
          persentase: "15%"
        },
        bantuan: {
          nama: "Pendapatan Asli Desa (PADes) dan Lainnya",
          jumlah: "Rp 50.000.000",
          persentase: "5%"
        }
      }
    },
    monitoring: {
      title: "Monitoring dan Evaluasi",
      icon: Users,
      content: {
        deskripsi: "Proses monitoring dan evaluasi dilakukan secara berkala untuk memastikan program berjalan sesuai rencana.",
        jadwal: [
          {
            periode: "Evaluasi Triwulan I",
            waktu: "April 2024",
            fokus: "Realisasi fisik dan keuangan program infrastruktur."
          },
          {
            periode: "Evaluasi Triwulan II",
            waktu: "Juli 2024",
            fokus: "Perkembangan program pemberdayaan dan penyerapan anggaran."
          },
          {
            periode: "Laporan Pertanggungjawaban",
            waktu: "Januari 2025",
            fokus: "Laporan akhir pelaksanaan RKPDes tahun 2024."
          }
        ]
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16 mb-20">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">RKPDes {rkpData.umum.content.tahun}</h2>
          <p className="text-muted-foreground">
            Rencana Kerja Pemerintah Desa
          </p>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <FileText className="h-8 w-8 text-primary" />
            <div>
              <CardTitle>{rkpData.umum.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Informasi dasar RKPDes {rkpData.umum.content.tahun}
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Deskripsi</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {rkpData.umum.content.deskripsi}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <span className="font-medium">{rkpData.umum.content.status}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-muted-foreground">Tanggal Penetapan</span>
                    <span className="font-medium">{rkpData.umum.content.tanggal_penetapan}</span>
                </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Building2 className="h-8 w-8 text-primary" />
            <div>
              <CardTitle>{rkpData.program.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Kegiatan pembangunan tahun {rkpData.umum.content.tahun}
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">{rkpData.program.content.infrastruktur.nama}</h4>
                <p className="text-sm text-muted-foreground">
                  {rkpData.program.content.infrastruktur.deskripsi}
                </p>
              </div>
              <div className="space-y-4">
                {rkpData.program.content.infrastruktur.kegiatan.map((kegiatan, index) => (
                  <div key={index} className="p-3 bg-muted/50 rounded-lg">
                    <h5 className="font-medium">{kegiatan.nama}</h5>
                    <div className="grid grid-cols-2 gap-2 text-sm mt-2">
                        <span>Lokasi: {kegiatan.lokasi}</span>
                        <span>Anggaran: {kegiatan.anggaran}</span>
                        <span>Sumber: {kegiatan.sumber}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">{rkpData.program.content.pemberdayaan.nama}</h4>
                <p className="text-sm text-muted-foreground">
                  {rkpData.program.content.pemberdayaan.deskripsi}
                </p>
              </div>
              <div className="space-y-4">
                {rkpData.program.content.pemberdayaan.kegiatan.map((kegiatan, index) => (
                   <div key={index} className="p-3 bg-muted/50 rounded-lg">
                    <h5 className="font-medium">{kegiatan.nama}</h5>
                    <div className="grid grid-cols-2 gap-2 text-sm mt-2">
                        <span>Lokasi: {kegiatan.lokasi}</span>
                        <span>Anggaran: {kegiatan.anggaran}</span>
                        <span>Sumber: {kegiatan.sumber}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <DollarSign className="h-8 w-8 text-primary" />
            <div>
              <CardTitle>{rkpData.pendanaan.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Sumber pendanaan RKPDes {rkpData.umum.content.tahun}
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">{rkpData.pendanaan.content.dana_desa.nama}</span>
                <div className="text-right">
                  <span className="font-medium">{rkpData.pendanaan.content.dana_desa.jumlah}</span>
                  <span className="text-muted-foreground ml-2">({rkpData.pendanaan.content.dana_desa.persentase})</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">{rkpData.pendanaan.content.pad.nama}</span>
                <div className="text-right">
                  <span className="font-medium">{rkpData.pendanaan.content.pad.jumlah}</span>
                  <span className="text-muted-foreground ml-2">({rkpData.pendanaan.content.pad.persentase})</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">{rkpData.pendanaan.content.bantuan.nama}</span>
                <div className="text-right">
                  <span className="font-medium">{rkpData.pendanaan.content.bantuan.jumlah}</span>
                  <span className="text-muted-foreground ml-2">({rkpData.pendanaan.content.bantuan.persentase})</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Users className="h-8 w-8 text-primary" />
            <div>
              <CardTitle>{rkpData.monitoring.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                Jadwal monitoring dan evaluasi RKPDes
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
             <p className="text-sm text-muted-foreground leading-relaxed">
                {rkpData.monitoring.content.deskripsi}
              </p>
            {rkpData.monitoring.content.jadwal.map((jadwal, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold">{jadwal.periode}</h4>
                    <p className="text-sm text-muted-foreground">{jadwal.fokus}</p>
                  </div>
                  <span className="text-muted-foreground">{jadwal.waktu}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RKPDes;
