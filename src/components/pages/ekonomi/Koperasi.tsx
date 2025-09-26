'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Breadcrumb from "@/components/Breadcrumb";

const Koperasi = () => {
    return (
        <div className="container mx-auto px-4 py-8 mt-16 mb-20">
            <Breadcrumb
                items={[
                    { title: "Ekonomi", path: "/ekonomi" },
                    { title: "Koperasi" }
                ]}
            />
            <Card>
                <CardHeader>
                    <CardTitle>Koperasi</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Informasi mengenai koperasi di desa akan ditampilkan di sini.</p>
                </CardContent>
            </Card>
        </div>
    );
}

export default Koperasi;
