import { Area, NearestStation, Station } from "@/types";
import { stations } from "@/data/stations";
import { councilTax } from "@/data/councilTax";
import { ExternalLink, MapPin, Train, X } from "lucide-react";

const TUBE_LINE_COLORS: Record<string, string> = {
  "Bakerloo": "bg-[hsl(25,76%,42%)]",
  "Central": "bg-[hsl(0,87%,46%)]",
  "Circle": "bg-[hsl(48,100%,50%)] text-foreground",
  "District": "bg-[hsl(140,56%,36%)]",
  "Hammersmith & City": "bg-[hsl(334,60%,52%)]",
  "Jubilee": "bg-[hsl(0,0%,62%)]",
  "Metropolitan": "bg-[hsl(330,45%,30%)]",
  "Northern": "bg-[hsl(0,0%,15%)]",
  "Piccadilly": "bg-[hsl(230,60%,40%)]",
  "Victoria": "bg-[hsl(200,90%,50%)]",
  "Elizabeth": "bg-[hsl(265,50%,45%)]",
  "DLR": "bg-[hsl(170,60%,40%)]",
  "Overground": "bg-[hsl(25,100%,50%)]",
  "Tramlink": "bg-[hsl(120,50%,40%)]",
  "South Western Railway": "bg-[hsl(210,30%,45%)]",
  "National Rail": "bg-[hsl(0,0%,35%)]",
};

function LineBadge({ line }: { line: string }) {
  const colorClass = TUBE_LINE_COLORS[line] || "bg-muted";
  return (
    <span className={`inline-block rounded px-2 py-0.5 text-xs font-medium text-primary-foreground ${colorClass}`}>
      {line}
    </span>
  );
}

interface AreaPanelProps {
  area: Area | null;
  nearestStations: NearestStation[] | null;
  clickedCoords: { lat: number; lng: number } | null;
  onClose: () => void;
}

export default function AreaPanel({ area, nearestStations, clickedCoords, onClose }: AreaPanelProps) {
  const areaStations: Station[] = area
    ? area.stationIds
        .map((id) => stations.find((s) => s.id === id))
        .filter(Boolean) as Station[]
    : [];

  const allLines = area
    ? [...new Set(areaStations.flatMap((s) => s.lines))].sort()
    : [];

  const tax = area ? councilTax[area.borough] : null;

  if (!area && !nearestStations) {
    return (
      <div className="flex h-full items-center justify-center p-6 text-muted-foreground">
        <div className="text-center">
          <MapPin className="mx-auto mb-3 h-10 w-10 opacity-40" />
          <p className="text-sm">Click a marker to view area details</p>
          <p className="mt-1 text-xs">Or click anywhere on the map to find nearby stations</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto">
      {area && (
        <div className="border-b border-border p-5">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-lg font-semibold text-foreground">{area.name}</h2>
              <p className="text-sm text-muted-foreground">{area.borough}</p>
            </div>
            <button
              onClick={onClose}
              className="rounded p-1 hover:bg-accent"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>

          {/* Rightmove link */}
          <div className="mt-4">
            {area.rightmoveUrl ? (
              <a
                href={area.rightmoveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="h-4 w-4" />
                Open Rightmove
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-md bg-muted px-4 py-2 text-sm text-muted-foreground cursor-not-allowed">
                <ExternalLink className="h-4 w-4" />
                Rightmove URL not set
              </span>
            )}
          </div>

          {/* Council Tax */}
          {tax && (
            <div className="mt-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Council Tax (Annual)
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {(["B", "C", "D", "E"] as const).map((band) => (
                  <div key={band} className="rounded-md bg-secondary p-2 text-center">
                    <div className="text-xs text-muted-foreground">Band {band}</div>
                    <div className="text-sm font-semibold text-foreground">£{tax[band].toLocaleString()}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tube Lines */}
          {allLines.length > 0 && (
            <div className="mt-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Tube Lines
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {allLines.map((line) => (
                  <LineBadge key={line} line={line} />
                ))}
              </div>
            </div>
          )}

          {/* Stations */}
          {areaStations.length > 0 && (
            <div className="mt-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Tube Stations
              </h3>
              <div className="space-y-2">
                {areaStations.map((s) => (
                  <div key={s.id} className="rounded-md bg-secondary p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Train className="h-3.5 w-3.5 text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground">{s.name}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {s.lines.map((line) => (
                        <LineBadge key={line} line={line} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Nearest stations from clicked point */}
      {nearestStations && nearestStations.length > 0 && (
        <div className="p-5">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            Nearest Stations from Clicked Point
          </h3>
          {clickedCoords && (
            <p className="text-xs text-muted-foreground mb-3">
              {clickedCoords.lat.toFixed(4)}, {clickedCoords.lng.toFixed(4)}
            </p>
          )}
          <div className="space-y-2">
            {nearestStations.map((ns, i) => (
              <div key={ns.station.id} className="rounded-md bg-secondary p-3">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium text-foreground">{ns.station.name}</span>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">{ns.distanceMiles} mi</span>
                </div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {ns.station.lines.map((line) => (
                    <LineBadge key={line} line={line} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
