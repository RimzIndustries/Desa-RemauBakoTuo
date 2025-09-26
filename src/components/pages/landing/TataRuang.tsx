import React, { useState } from 'react';
import { LatLngTuple } from 'leaflet';
import { Layers, ChevronDown, ChevronRight, Phone, Mail, Globe, Users, Home, Building2, TreePine } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { usePathname, useRouter } from 'next/navigation';
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('@/components/MapComponent'), { ssr: false });

const LAYER_CATEGORIES = {
  wilayah: {
    name: 'Peta Wilayah',
    layers: [
      'Peta Administrasi',
      'Penggunaan Lahan',
      'Bidang Tanah',
      'Infrastruktur Publik',
      'Prasarana Umum'
    ]
  },
  sosial: {
    name: 'Peta Sosial',
    layers: [
      'Demografi',
      'Pendidikan',
      'Kesehatan',
      'Sosial dan Budaya',
      'Partisipasi Publik'
    ]
  },
  ekonomi: {
    name: 'Peta Ekonomi',
    layers: [
      'Tingkat Pendapatan',
      'Seltor Pangan',
      'Perkebunan',
      'Peternakan',
      'Perikanan',
      'Kehutanan',
      'Pertambangan',
      'Pengolahan',
      'Energi'
    ]
  },
  lingkungan: {
    name: 'Peta Lingkungan',
    layers: [
      'Geomorfologi Tanah',
      'Iklim Dan Cuaca',
      'Daerah Aliran Sungai',
      'Keragaman Hayati',
      'Limbah-Sampah',
      'Karateristik Lahan',
      'Lokasi Lahan Bencana'
    ]
  },
  aset: {
    name: 'Peta Aset',
    layers: [
      'Aset Desa',
      'Aset Masyarakat'
    ]
  }
};

interface LayerPanelProps {
  expanded: boolean;
  onToggle: () => void;
  activeLayers: string[];
  onLayerToggle: (layer: string) => void;
}

const LayerPanel: React.FC<LayerPanelProps> = ({ expanded, onToggle, activeLayers, onLayerToggle }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <Sheet open={expanded} onOpenChange={onToggle}>
      <SheetContent
        side="left"
        className="w-[70vw] sm:w-[336px] bg-white/40 backdrop-blur-md backdrop-saturate-200 backdrop-brightness-125 border-r border-white/20 rounded-r-[2rem] top-14 sm:top-20 h-[calc(100vh-7rem)] sm:h-[calc(100vh-10rem)] transition-all duration-300"
        aria-label="Layer Panel"
      >
        <SheetTitle>Layer Controls</SheetTitle>
        <div className="sr-only" id="layer-panel-description">
          Control visibility of different map layers and categories
        </div>
        <ScrollArea className="h-full px-4 py-8">
          <div className="space-y-3 sm:space-y-4">
            {Object.entries(LAYER_CATEGORIES).map(([key, category]) => (
              <div key={key} className="rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleCategory(key)}
                  className={`w-full flex items-center justify-between transition-all py-1.5 sm:py-2 px-2 sm:px-3 text-xs sm:text-sm text-black/90 hover:bg-white/20 ${expandedCategory === key ? 'bg-white/10' : ''
                    }`}
                  aria-expanded={expandedCategory === key}
                  aria-controls={`category-${key}-layers`}
                >
                  {category.name}
                  {expandedCategory === key ? (
                    <ChevronDown className="h-4 w-4 text-black/90" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-black/90" />
                  )}
                </button>
                <div
                  id={`category-${key}-layers`}
                  className={`transition-all duration-200 ${expandedCategory === key
                      ? 'max-h-[500px] opacity-100'
                      : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                >
                  <div className="py-1">
                    {category.layers.map(layer => (
                      <label
                        key={layer}
                        className="flex items-center space-x-2 py-1.5 px-4 hover:bg-white/10 transition-colors cursor-pointer text-black/80"
                      >
                        <input
                          type="checkbox"
                          checked={activeLayers.includes(layer)}
                          onChange={() => onLayerToggle(layer)}
                          className="rounded border-black/30 text-emerald-500 focus:ring-emerald-500 bg-white/20"
                        />
                        <span className="text-xs sm:text-sm">{layer}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

interface LayerInfoProps {
  isOpen: boolean;
  onClose: () => void;
  markerInfo: {
    title: string;
    coordinates?: LatLngTuple;
    description: string;
    type?: 'marker' | 'boundary';
  } | null;
}

const LayerInfo: React.FC<LayerInfoProps> = ({ isOpen, onClose, markerInfo }) => {
  if (!markerInfo) return null;

  const stats = [
    {
      icon: Users,
      label: 'Jumlah Penduduk',
      value: '3,245',
      change: '+125 dari tahun lalu',
      trend: 'up'
    },
    {
      icon: Home,
      label: 'Jumlah KK',
      value: '856',
      change: '+45 dari tahun lalu',
      trend: 'up'
    },
    {
      icon: Building2,
      label: 'Luas Wilayah',
      value: '2,500 Ha',
      subtext: '25 km²'
    },
    {
      icon: TreePine,
      label: 'Luas Hutan',
      value: '850 Ha',
      percentage: '34%'
    }
  ];

  const landUse = [
    { type: 'Pemukiman', percentage: 25 },
    { type: 'Pertanian', percentage: 30 },
    { type: 'Hutan', percentage: 34 },
    { type: 'Lainnya', percentage: 11 }
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="w-[70vw] sm:w-[336px] bg-white/40 backdrop-blur-md backdrop-saturate-200 backdrop-brightness-125 border-l border-white/20 rounded-l-[2rem] top-14 sm:top-20 h-[calc(100vh-7rem)] sm:h-[calc(100vh-10rem)] transition-all duration-300"
        aria-label="Location Information"
      >
        <SheetTitle>{markerInfo.title}</SheetTitle>
        <div className="sr-only" id="location-info-description">
          Detailed information about {markerInfo.title}
        </div>
        <ScrollArea className="h-full px-4 py-8">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              {markerInfo.coordinates && (
                <div className="flex items-center space-x-2 text-black/80">
                  <Layers className="h-4 w-4" />
                  <p className="text-xs sm:text-sm">
                    {markerInfo.coordinates[0]}, {markerInfo.coordinates[1]}
                  </p>
                </div>
              )}
              <p className="text-xs sm:text-sm text-black/80">
                {markerInfo.description}
              </p>
            </div>

            {markerInfo.type === 'boundary' ? (
              <>
                <div className="border-t border-white/20 pt-4">
                  <h4 className="font-medium text-base mb-2 text-black/90">Informasi Batas Wilayah</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-sm font-medium text-black/90 mb-1">Batas Utara</h5>
                      <p className="text-xs sm:text-sm text-black/80">Berbatasan dengan Desa Teluk</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-black/90 mb-1">Batas Selatan</h5>
                      <p className="text-xs sm:text-sm text-black/80">Berbatasan dengan Desa Sungai Rengit</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-black/90 mb-1">Batas Timur</h5>
                      <p className="text-xs sm:text-sm text-black/80">Berbatasan dengan Selat Berhala</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-black/90 mb-1">Batas Barat</h5>
                      <p className="text-xs sm:text-sm text-black/80">Berbatasan dengan Desa Sungai Rambut</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-4">
                  <h4 className="font-medium text-base mb-2 text-black/90">Data Wilayah</h4>
                  <div className="space-y-2">
                    <p className="text-xs sm:text-sm text-black/80">
                      <span className="font-medium text-black/90">Luas Wilayah:</span><br />
                      ± 2.500 hektar
                    </p>
                    <p className="text-xs sm:text-sm text-black/80">
                      <span className="font-medium text-black/90">Jumlah Dusun:</span><br />
                      4 Dusun
                    </p>
                    <p className="text-xs sm:text-sm text-black/80">
                      <span className="font-medium text-black/90">Jumlah RT:</span><br />
                      12 RT
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-4">
                  <h4 className="font-medium text-base mb-2 text-black/90">Status Administratif</h4>
                  <div className="space-y-2">
                    <p className="text-xs sm:text-sm text-black/80">
                      <span className="font-medium text-black/90">Kecamatan:</span><br />
                      Tanjung Jabung Timur
                    </p>
                    <p className="text-xs sm:text-sm text-black/80">
                      <span className="font-medium text-black/90">Kabupaten:</span><br />
                      Tanjung Jabung Timur
                    </p>
                    <p className="text-xs sm:text-sm text-black/80">
                      <span className="font-medium text-black/90">Provinsi:</span><br />
                      Jambi
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Statistics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => {
                    const StatIcon = stat.icon;
                    return (
                      <div
                        key={index}
                        className="bg-white/30 backdrop-blur-sm rounded-lg p-3 space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <StatIcon className="h-4 w-4 text-emerald-600" />
                          <span className="text-xs font-medium text-black/90">{stat.label}</span>
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm font-semibold text-black/90">{stat.value}</div>
                          {stat.change && (
                            <div className={`text-xs ${stat.trend === 'up' ? 'text-emerald-600' : 'text-red-500'}`}>
                              {stat.change}
                            </div>
                          )}
                          {stat.percentage && (
                            <div className="text-xs text-black/60">
                              {stat.percentage} dari total
                            </div>
                          )}
                          {stat.subtext && (
                            <div className="text-xs text-black/60">
                              {stat.subtext}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Land Use Chart */}
                <div className="space-y-4">
                  <h4 className="font-medium text-base text-black/90">Penggunaan Lahan</h4>
                  <div className="space-y-2">
                    {landUse.map((item, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-black/80">{item.type}</span>
                          <span className="text-black/90 font-medium">{item.percentage}%</span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-500/60 rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Layers className="h-4 w-4 text-black/80" />
                    <h4 className="font-medium text-base text-black/90">Jam Operasional</h4>
                  </div>
                  <div className="ml-6 space-y-1">
                    <p className="text-xs sm:text-sm text-black/80">
                      Senin - Jumat: 08.00 - 16.00 WIB<br />
                      Sabtu - Minggu: Tutup
                    </p>
                  </div>
                </div>

                {/* Facilities */}
                <div className="space-y-3">
                  <h4 className="font-medium text-base text-black/90">Fasilitas</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'Ruang pelayanan publik',
                      'Ruang rapat',
                      'Area parkir',
                      'Toilet umum',
                      'Musholla'
                    ].map((facility, index) => (
                      <div
                        key={index}
                        className="bg-white/20 rounded-lg px-3 py-2 text-xs text-black/80"
                      >
                        {facility}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="space-y-3">
                  <h4 className="font-medium text-base text-black/90">Kontak</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-black/80">
                      <Phone className="h-4 w-4" />
                      <span className="text-xs sm:text-sm">(0741) 123456</span>
                    </div>
                    <div className="flex items-center space-x-2 text-black/80">
                      <Mail className="h-4 w-4" />
                      <span className="text-xs sm:text-sm">info@remaubakotuo.desa.id</span>
                    </div>
                    <div className="flex items-center space-x-2 text-black/80">
                      <Globe className="h-4 w-4" />
                      <span className="text-xs sm:text-sm">www.remaubakotuo.desa.id</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};


const TataRuang: React.FC = () => {
  const [activeBaseLayer, setActiveBaseLayer] = useState<string>('satellite');
  const [activeOverlays, setActiveOverlays] = useState<string[]>([]);
  const [layerPanelExpanded, setLayerPanelExpanded] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState<{
    title: string;
    coordinates?: LatLngTuple;
    description: string;
    type?: 'marker' | 'boundary';
  } | null>(null);

  const handleLayerToggle = (layer: string) => {
    setActiveOverlays(prev =>
      prev.includes(layer)
        ? prev.filter(l => l !== layer)
        : [...prev, layer]
    );
  };

  return (
    <div className="fixed inset-0">
      <MapComponent
        activeBaseLayer={activeBaseLayer}
        setActiveBaseLayer={setActiveBaseLayer}
        activeOverlays={activeOverlays}
        setSelectedMarker={setSelectedMarker}
        layerPanelExpanded={layerPanelExpanded}
        setLayerPanelExpanded={setLayerPanelExpanded}
      />
      <LayerPanel
        expanded={layerPanelExpanded}
        onToggle={() => setLayerPanelExpanded(!layerPanelExpanded)}
        activeLayers={activeOverlays}
        onLayerToggle={handleLayerToggle}
      />
      <LayerInfo
        isOpen={!!selectedMarker}
        onClose={() => setSelectedMarker(null)}
        markerInfo={selectedMarker}
      />
    </div>
  );
};

export default TataRuang;
