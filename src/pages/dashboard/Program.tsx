
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Search, 
  Plus, 
  Filter, 
  MoreVertical, 
  Edit, 
  Trash2, 
  Eye,
  Download
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const Program = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const program = [
    {
      id: 1,
      nama: "Pembangunan Jalan Desa",
      kategori: "Infrastruktur",
      status: "Dalam Pengerjaan",
      progress: 75,
      anggaran: 500000000,
      mulai: "2024-01-01",
      selesai: "2024-06-30",
      lokasi: "Jl. Utama Desa",
      penanggungJawab: "Tim Infrastruktur",
      peserta: 50
    },
    {
      id: 2,
      nama: "Pelatihan UMKM Digital",
      kategori: "Ekonomi",
      status: "Selesai",
      progress: 100,
      anggaran: 100000000,
      mulai: "2024-02-01",
      selesai: "2024-02-28",
      lokasi: "Balai Desa",
      penanggungJawab: "Tim Ekonomi",
      peserta: 30
    },
    {
      id: 3,
      nama: "Posyandu Lansia",
      kategori: "Kesehatan",
      status: "Dalam Pengerjaan",
      progress: 40,
      anggaran: 50000000,
      mulai: "2024-03-01",
      selesai: "2024-12-31",
      lokasi: "Puskesmas Desa",
      penanggungJawab: "Tim Kesehatan",
      peserta: 100
    },
    {
      id: 4,
      nama: "Festival Budaya Desa",
      kategori: "Budaya",
      status: "Perencanaan",
      progress: 20,
      anggaran: 75000000,
      mulai: "2024-07-01",
      selesai: "2024-07-31",
      lokasi: "Lapangan Desa",
      penanggungJawab: "Tim Budaya",
      peserta: 200
    },
    {
      id: 5,
      nama: "Pemberdayaan Perempuan",
      kategori: "Sosial",
      status: "Dalam Pengerjaan",
      progress: 60,
      anggaran: 30000000,
      mulai: "2024-01-15",
      selesai: "2024-06-15",
      lokasi: "Aula Desa",
      penanggungJawab: "Tim Sosial",
      peserta: 75
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Kelola Program</h2>
          <p className="text-muted-foreground">
            Kelola program dan kegiatan desa dari sini
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Tambah Program
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Daftar Program</CardTitle>
              <CardDescription>
                Total program: {program.length} kegiatan
              </CardDescription>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Cari program..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Semua</DropdownMenuItem>
                  <DropdownMenuItem>Infrastruktur</DropdownMenuItem>
                  <DropdownMenuItem>Ekonomi</DropdownMenuItem>
                  <DropdownMenuItem>Kesehatan</DropdownMenuItem>
                  <DropdownMenuItem>Sosial</DropdownMenuItem>
                  <DropdownMenuItem>Dalam Pengerjaan</DropdownMenuItem>
                  <DropdownMenuItem>Selesai</DropdownMenuItem>
                  <DropdownMenuItem>Perencanaan</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama Program</TableHead>
                <TableHead>Kategori</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Anggaran</TableHead>
                <TableHead>Mulai</TableHead>
                <TableHead>Selesai</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {program.map((p) => (
                <TableRow key={p.id}>
                  <TableCell className="font-medium">{p.nama}</TableCell>
                  <TableCell>{p.kategori}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      p.status === 'Selesai' 
                        ? 'bg-green-100 text-green-800' 
                        : p.status === 'Dalam Pengerjaan'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {p.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Progress value={p.progress} className="h-2" />
                    <span className="text-xs text-muted-foreground">{p.progress}%</span>
                  </TableCell>
                  <TableCell>Rp {p.anggaran.toLocaleString()}</TableCell>
                  <TableCell>{p.mulai}</TableCell>
                  <TableCell>{p.selesai}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          Detail
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Hapus
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Program;
