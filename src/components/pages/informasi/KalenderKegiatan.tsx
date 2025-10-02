
'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const KalenderKegiatan = () => {
    return (
        <div className="container mx-auto px-4 py-8 mt-16 mb-20">
            <Card>
                <CardHeader>
                    <CardTitle>Kalender Kegiatan</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Kalender kegiatan desa akan ditampilkan di sini.</p>
                </CardContent>
            </Card>
        </div>
    );
}

export default KalenderKegiatan;
