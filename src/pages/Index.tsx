import { useState } from "react";
import MapView from "@/components/MapView";
import AreaPanel from "@/components/AreaPanel";
import AreaSearch from "@/components/AreaSearch";
import { areas } from "@/data/areas";
import { Area, NearestStation } from "@/types";

const Index = () => {
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);
  const [nearestStations, setNearestStations] = useState<NearestStation[] | null>(null);
  const [clickedCoords, setClickedCoords] = useState<{ lat: number; lng: number } | null>(null);

  const handleSelectArea = (area: Area) => {
    setSelectedArea(area);
    setNearestStations(null);
    setClickedCoords(null);
  };

  const handleMapClick = (nearest: NearestStation[], lat: number, lng: number) => {
    setNearestStations(nearest);
    setClickedCoords({ lat, lng });
  };

  const handleClose = () => {
    setSelectedArea(null);
    setNearestStations(null);
    setClickedCoords(null);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-background">
      {/* Map */}
      <div className="relative flex-1">
        {/* Search overlay */}
        <div className="absolute left-4 top-4 z-[1000] w-72">
          <AreaSearch areas={areas} onSelect={handleSelectArea} />
        </div>
        <MapView
          areas={areas}
          selectedArea={selectedArea}
          onSelectArea={handleSelectArea}
          onMapClick={handleMapClick}
        />
      </div>

      {/* Side panel */}
      <div className="w-[var(--panel-width)] shrink-0 border-l border-border bg-card">
        <AreaPanel
          area={selectedArea}
          nearestStations={nearestStations}
          clickedCoords={clickedCoords}
          onClose={handleClose}
        />
      </div>
    </div>
  );
};

export default Index;
