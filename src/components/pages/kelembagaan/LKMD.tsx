
'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Breadcrumb from "@/components/Breadcrumb";

const LKMD = () => {
    return (
        <div className="container mx-auto px-4 py-8 mt-16 mb-20">
            <Breadcrumb
                items={[
                    { title: "Kelembagaan", path: "/kelembagaan" },
                    { title: "LKMD" }
                ]}
            />
            <Card>
                <CardHeader>
                    <CardTitle>Lembaga Ketahanan Masyarakat Desa (LKMD)</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Informasi mengenai Lembaga Ketahanan Masyarakat Desa (LKMD) akan ditampilkan di sini.</p>
                </CardContent>
            </Card>
        </div>
    );
}

export default LKMD;
