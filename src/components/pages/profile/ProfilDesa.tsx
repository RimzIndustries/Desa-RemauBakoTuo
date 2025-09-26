
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Users, MapPin, FileText } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

const ProfilDesa = () => {
  const profilData = {
    umum: {
      title: "Profil Umum",
      icon: Home,
      content: {
        deskripsi: "Desa Remau Bako Tuo adalah sebuah desa yang terletak di Kecamatan Sadu, Kabupaten Tanjung Jabung Timur, Jambi. Desa ini memiliki luas wilayah 12.000 hektar dan berpenduduk 2.900 jiwa.",
        data: [
          {
            label: "Nama Desa",
            value: "Remau Bako Tuo"
          },
          {
            label: "Kecamatan",
            value: "Sadu"
          },
          {
            label: "Kabupaten",
            value: "Tanjung Jabung Timur"
          },
          {
            label: "Provinsi",
            value: "Jambi"
          }
        ]
      }
    },
    demografi: {
      title: "Demografi",
      icon: Users,
      content: {
        deskripsi: "Data kependudukan Desa Remau Bako Tuo",
        data: [
          {
            label: "Jumlah Penduduk",
            value: "2.900 Jiwa"
          },
          {
            label: "Jumlah Laki-laki",
            value: "1.500 Jiwa"
          },
          {
            label: "Jumlah Perempuan",
            value: "1.400 Jiwa"
          },
          {
            label: "Jumlah KK",
            value: "800 KK"
          }
        ]
      }
    },
    geografi: {
      title: "Geografi",
      icon: MapPin,
      content: {
        deskripsi: "Letak geografis dan batas wilayah Desa Remau Bako Tuo",
        data: [
          {
            label: "Batas Utara",
            value: "Desa Labuhan Pering"
          },
          {
            label: "Batas Selatan",
            value: "Desa Sungai Cemara"
          },
          {
            label: "Batas Barat",
            value: "Desa Sungai Itik"
          },
          {
            label: "Batas Timur",
            value: "Laut Cina Selatan"
          }
        ]
      }
    },
    dokumen: {
      title: "Dokumen Profil",
      icon: FileText,
      content: {
        dokumen: [
          {
            judul: "Profil Desa 2024",
            tahun: "2024",
            status: "Dokumen Resmi"
          },
          {
            judul: "Data Statistik Desa 2024",
            tahun: "2024",
            status: "Dokumen Resmi"
          }
        ]
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16 mb-20">
      <Breadcrumb
        items={[
          { title: "Profil Desa", path: "/profil/profil-desa" },
          { title: "Profil Desa" }
        ]}
      />
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Profil Desa</h2>
          <p className="text-muted-foreground">
            Informasi umum mengenai Desa Remau Bako Tuo
          </p>
        </div>

        <Tabs defaultValue="umum" className="space-y-4">
          <TabsList>
            <TabsTrigger value="umum">Profil Umum</TabsTrigger>
            <TabsTrigger value="demografi">Demografi</TabsTrigger>
            <TabsTrigger value="geografi">Geografi</TabsTrigger>
            <TabsTrigger value="dokumen">Dokumen</TabsTrigger>
          </TabsList>

          <TabsContent value="umum">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Home className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Profil Umum</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Informasi dasar mengenai Desa Remau Bako Tuo
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Deskripsi</h4>
                  <p className="text-sm text-muted-foreground">
                    {profilData.umum.content.deskripsi}
                  </p>
                </div>
                <div className="space-y-2">
                  {profilData.umum.content.data.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm font-medium">{item.label}</span>
                      <span className="text-sm text-muted-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="demografi">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Demografi</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Data kependudukan Desa Remau Bako Tuo
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Deskripsi</h4>
                  <p className="text-sm text-muted-foreground">
                    {profilData.demografi.content.deskripsi}
                  </p>
                </div>
                <div className="space-y-2">
                  {profilData.demografi.content.data.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm font-medium">{item.label}</span>
                      <span className="text-sm text-muted-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="geografi">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <MapPin className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Geografi</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Letak geografis Desa Remau Bako Tuo
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Deskripsi</h4>
                  <p className="text-sm text-muted-foreground">
                    {profilData.geografi.content.deskripsi}
                  </p>
                </div>
                <div className="space-y-2">
                  {profilData.geografi.content.data.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm font-medium">{item.label}</span>
                      <span className="text-sm text-muted-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dokumen">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <FileText className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Dokumen Profil</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Dokumen terkait profil Desa Remau Bako Tuo
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {profilData.dokumen.content.dokumen.map((item, index) => (
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfilDesa;

    