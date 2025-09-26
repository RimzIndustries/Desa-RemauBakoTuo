'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Breadcrumb from "@/components/Breadcrumb";

const KalenderPangan = () => {
    return (
        <div className="container mx-auto px-4 py-8 mt-16 mb-20">
            <Breadcrumb
                items={[
                    { title: "Aktivitas", path: "/aktivitas" },
                    { title: "Kalender Pangan" }
                ]}
            />
            <Card>
                <CardHeader>
                    <CardTitle>Kalender Pangan</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Informasi mengenai kalender pangan dan ketahanan pangan desa.</p>
                </CardContent>
            </Card>
        </div>
    );
}

export default KalenderPangan;
