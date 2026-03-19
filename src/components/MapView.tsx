import { useCallback, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Area } from "@/types";
import { stations } from "@/data/stations";
import { findNearestStations } from "@/lib/geo";
import { NearestStation } from "@/types";

// Fix default marker icon
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const selectedIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [30, 45],
  iconAnchor: [15, 45],
  popupAnchor: [0, -45],
  shadowSize: [41, 41],
  className: "selected-marker",
});

const defaultIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface MapViewProps {
  areas: Area[];
  selectedArea: Area | null;
  onSelectArea: (area: Area) => void;
  onMapClick: (nearest: NearestStation[], lat: number, lng: number) => void;
}

function FlyToArea({ area }: { area: Area | null }) {
  const map = useMap();
  useEffect(() => {
    if (area) {
      map.flyTo([area.lat, area.lng], 14, { duration: 0.8 });
    }
  }, [area, map]);
  return null;
}

function ClickHandler({ onMapClick }: { onMapClick: MapViewProps["onMapClick"] }) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      const nearest = findNearestStations(lat, lng, stations, 3);
      onMapClick(nearest, lat, lng);
    },
  });
  return null;
}

export default function MapView({ areas, selectedArea, onSelectArea, onMapClick }: MapViewProps) {
  return (
    <MapContainer
      center={[51.505, -0.18]}
      zoom={12}
      className="h-full w-full"
      zoomControl={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FlyToArea area={selectedArea} />
      <ClickHandler onMapClick={onMapClick} />
      {areas.map((area) => (
        <Marker
          key={area.id}
          position={[area.lat, area.lng]}
          icon={selectedArea?.id === area.id ? selectedIcon : defaultIcon}
          eventHandlers={{ click: () => onSelectArea(area) }}
        >
          <Popup>
            <span className="font-medium">{area.name}</span>
            <br />
            <span className="text-xs text-muted-foreground">{area.borough}</span>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
