'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Breadcrumb from "@/components/Breadcrumb";

const MPG = () => {
    return (
        <div className="container mx-auto px-4 py-8 mt-16 mb-20">
            <Breadcrumb
                items={[
                    { title: "Layanan", path: "/layanan" },
                    { title: "MPG" }
                ]}
            />
            <Card>
                <CardHeader>
                    <CardTitle>Masyarakat Peduli Gen Z (MPG)</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Informasi mengenai Masyarakat Peduli Gen Z (MPG) akan ditampilkan di sini.</p>
                </CardContent>
            </Card>
        </div>
    );
}

export default MPG;
