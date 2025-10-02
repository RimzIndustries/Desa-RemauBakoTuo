
'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MonografiDesa = () => {
    return (
        <div className="container mx-auto px-4 py-8 mt-16 mb-20">
            <Card>
                <CardHeader>
                    <CardTitle>Monografi Desa</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Informasi mengenai monografi desa akan ditampilkan di sini.</p>
                </CardContent>
            </Card>
        </div>
    );
}

export default MonografiDesa;
