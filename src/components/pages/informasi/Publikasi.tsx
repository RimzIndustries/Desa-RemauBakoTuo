'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Breadcrumb from "@/components/Breadcrumb";

const Publikasi = () => {
    return (
        <div className="container mx-auto px-4 py-8 mt-16 mb-20">
            <Breadcrumb
                items={[
                    { title: "Literasi", path: "/pustaka" },
                    { title: "Publikasi" }
                ]}
            />
            <Card>
                <CardHeader>
                    <CardTitle>Publikasi</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Halaman ini berisi berbagai publikasi yang diterbitkan oleh desa.</p>
                </CardContent>
            </Card>
        </div>
    );
}

export default Publikasi;
