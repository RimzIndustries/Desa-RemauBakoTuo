
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Building2, Users, Leaf, DollarSign, ArrowUpDown, Wallet } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

const KeuanganDesa = () => {
  const keuanganData = {
    pendapatan: {
      title: "Pendapatan",
      icon: ArrowUpDown,
      content: {
        total: "Rp 2.000.000.000",
        sumber: [
          {
            nama: "Dana Desa",
            jumlah: "Rp 1.000.000.000",
            persentase: "50%"
          },
          {
            nama: "PADes",
            jumlah: "Rp 500.000.000",
            persentase: "25%"
          },
          {
            nama: "Bantuan",
            jumlah: "Rp 500.000.000",
            persentase: "25%"
          }
        ]
      }
    },
    belanja: {
      title: "Belanja",
      icon: DollarSign,
      content: {
        total: "Rp 1.800.000.000",
        jenis: [
          {
            nama: "Pembangunan",
            jumlah: "Rp 1.000.000.000",
            persentase: "55.56%"
          },
          {
            nama: "Pemberdayaan",
            jumlah: "Rp 500.000.000",
            persentase: "27.78%"
          },
          {
            nama: "Operasional",
            jumlah: "Rp 300.000.000",
            persentase: "16.67%"
          }
        ]
      }
    },
    pembiayaan: {
      title: "Pembiayaan",
      icon: Wallet,
      content: {
        total: "Rp 200.000.000",
        jenis: [
          {
            nama: "Sisa Tahun Lalu",
            jumlah: "Rp 200.000.000",
            persentase: "100%"
          }
        ]
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { title: "Program", path: "/program" },
          { title: "Keuangan Desa" }
        ]}
      />
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Keuangan Desa</h2>
          <p className="text-muted-foreground">
            Laporan keuangan desa tahun 2023
          </p>
        </div>

        <Tabs defaultValue="pendapatan" className="space-y-4">
          <TabsList>
            <TabsTrigger value="pendapatan">Pendapatan</TabsTrigger>
            <TabsTrigger value="belanja">Belanja</TabsTrigger>
            <TabsTrigger value="pembiayaan">Pembiayaan</TabsTrigger>
          </TabsList>

          <TabsContent value="pendapatan" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <ArrowUpDown className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>{keuanganData.pendapatan.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Total: {keuanganData.pendapatan.content.total}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {keuanganData.pendapatan.content.sumber.map((sumber, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{sumber.nama}</span>
                    <div className="text-right">
                      <span className="font-medium">{sumber.jumlah}</span>
                      <span className="text-muted-foreground ml-2">({sumber.persentase})</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="belanja" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <DollarSign className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>{keuanganData.belanja.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Total: {keuanganData.belanja.content.total}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {keuanganData.belanja.content.jenis.map((jenis, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{jenis.nama}</span>
                    <div className="text-right">
                      <span className="font-medium">{jenis.jumlah}</span>
                      <span className="text-muted-foreground ml-2">({jenis.persentase})</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pembiayaan" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Wallet className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>{keuanganData.pembiayaan.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Total: {keuanganData.pembiayaan.content.total}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {keuanganData.pembiayaan.content.jenis.map((jenis, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{jenis.nama}</span>
                    <div className="text-right">
                      <span className="font-medium">{jenis.jumlah}</span>
                      <span className="text-muted-foreground ml-2">({jenis.persentase})</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default KeuanganDesa;
