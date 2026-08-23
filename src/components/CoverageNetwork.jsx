import React, { useState } from 'react';
import { SOUTH_INDIA_NETWORK, COVERAGE_SECTION } from '../data/contentData';
import { MapPin, ArrowUpRight, CheckCircle2, Shield } from 'lucide-react';
import { MotionSection } from './MotionWrapper';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet's default icon path issues
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export const CoverageNetwork = ({ onOpenQuote }) => {
  const [selectedCity, setSelectedCity] = useState(SOUTH_INDIA_NETWORK[0]);

  return (
    <MotionSection id="coverage" dataTheme="light" className="py-24 relative overflow-hidden bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0 border-b border-slate-200 pb-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-blue-700 font-bold">
              <MapPin className="w-3.5 h-3.5" />
              <span>{COVERAGE_SECTION.label}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              {COVERAGE_SECTION.heading}
            </h2>
          </div>
          <p className="text-slate-700 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            {COVERAGE_SECTION.description}
          </p>
        </div>

        {/* Network Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Map Column */}
          <div className="lg:col-span-12 h-[500px] rounded-3xl overflow-hidden border border-slate-200 shadow-xl z-0 relative">
            <MapContainer 
              center={[12.9716, 77.5946]} // Centered around Bangalore
              zoom={6} 
              scrollWheelZoom={false} 
              className="w-full h-full z-0"
              style={{ zIndex: 0 }}
            >
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              />
              
              {/* Markers for core cities */}
              {SOUTH_INDIA_NETWORK.map((city, idx) => {
                // Approximate coordinates for the main cities
                const coords = {
                  "Bangalore": [12.9716, 77.5946],
                  "Chennai": [13.0827, 80.2707],
                  "Hyderabad": [17.3850, 78.4867],
                  "Kochi": [9.9312, 76.2673],
                  "Trivandrum": [8.5241, 76.9366],
                  "Vijayawada": [16.5062, 80.6480]
                };
                
                const position = coords[city.city] || [12.9716, 77.5946];
                
                return (
                  <Marker position={position} key={idx}>
                    <Popup className="font-sans">
                      {city.city === "Kerala" ? (
                        <div className="font-bold text-slate-900">Kerala — State-wide Coverage</div>
                      ) : (
                        <>
                          <div className="font-bold text-slate-900">{city.city}</div>
                          <div className="text-xs text-slate-500">{city.state}</div>
                        </>
                      )}
                      <div className="text-[10px] text-blue-600 font-bold mt-1 uppercase tracking-wider">Operational Coverage</div>
                    </Popup>
                  </Marker>
                );
              })}

              {/* Coverage Highlight Circles */}
              <Circle center={[15.3173, 75.7139]} radius={250000} pathOptions={{ color: '#2563EB', fillColor: '#3B82F6', fillOpacity: 0.1 }} /> {/* Karnataka */}
              <Circle center={[11.1271, 78.6569]} radius={200000} pathOptions={{ color: '#2563EB', fillColor: '#3B82F6', fillOpacity: 0.1 }} /> {/* TN */}
              <Circle center={[17.1232, 79.2088]} radius={180000} pathOptions={{ color: '#2563EB', fillColor: '#3B82F6', fillOpacity: 0.1 }} /> {/* Telangana */}
              <Circle center={[15.9129, 79.7400]} radius={200000} pathOptions={{ color: '#2563EB', fillColor: '#3B82F6', fillOpacity: 0.1 }} /> {/* AP */}
              <Circle center={[10.8505, 76.2711]} radius={120000} pathOptions={{ color: '#2563EB', fillColor: '#3B82F6', fillOpacity: 0.1 }} /> {/* Kerala */}
            </MapContainer>
            
            {/* Overlay Panel */}
            <div className="absolute top-6 right-6 z-[1000] bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-slate-100 max-w-sm pointer-events-auto">
              <h3 className="font-extrabold text-lg text-slate-900 mb-2">South India Core</h3>
              <p className="text-sm text-slate-600 mb-4">Strong execution capabilities across Karnataka, AP, Telangana, Tamil Nadu, and Kerala.</p>
              <div className="flex flex-wrap gap-2">
                {SOUTH_INDIA_NETWORK.map((c, i) => (
                  <span key={i} className="px-2.5 py-1 bg-blue-100 text-blue-800 rounded text-[10px] font-bold tracking-wider uppercase">
                    {c.city}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* PAN India Section */}
        <div className="mt-20 pt-16 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              {COVERAGE_SECTION.panIndiaHeading}
            </h2>
            <p className="text-slate-700 text-sm sm:text-base whitespace-pre-line leading-relaxed">
              {COVERAGE_SECTION.panIndiaContent}
            </p>
          </div>
          <div className="flex justify-end">
             <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl w-full max-w-sm">
                <div className="text-xs font-mono text-slate-500 font-bold mb-4 uppercase tracking-widest">Available Nationwide</div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3"><CheckCircle2 className="w-5 h-5 text-blue-600"/> <span className="text-sm font-bold text-slate-700">Metro Cities</span></div>
                  <div className="flex items-center space-x-3"><CheckCircle2 className="w-5 h-5 text-blue-600"/> <span className="text-sm font-bold text-slate-700">Tier-2 Markets</span></div>
                  <div className="flex items-center space-x-3"><CheckCircle2 className="w-5 h-5 text-blue-600"/> <span className="text-sm font-bold text-slate-700">Tier-3 Locations</span></div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </MotionSection>
  );
};
