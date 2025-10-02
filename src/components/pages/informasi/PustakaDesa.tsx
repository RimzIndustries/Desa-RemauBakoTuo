
'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PustakaDesa = () => {
    return (
        <div className="container mx-auto px-4 py-8 mt-16 mb-20">
            <Card>
                <CardHeader>
                    <CardTitle>Pustaka Desa</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Selamat datang di Pustaka Desa. Temukan berbagai informasi dan pengetahuan di sini.</p>
                </CardContent>
            </Card>
        </div>
    );
}

export default PustakaDesa;
