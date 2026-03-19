import { Station, NearestStation } from "@/types";

const EARTH_RADIUS_MILES = 3958.8;

function toRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

export function haversineDistanceMiles(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS_MILES * c;
}

export function findNearestStations(
  lat: number,
  lng: number,
  allStations: Station[],
  count = 3
): NearestStation[] {
  return allStations
    .map((station) => ({
      station,
      distanceMiles: parseFloat(
        haversineDistanceMiles(lat, lng, station.lat, station.lng).toFixed(2)
      ),
    }))
    .sort((a, b) => a.distanceMiles - b.distanceMiles)
    .slice(0, count);
}
