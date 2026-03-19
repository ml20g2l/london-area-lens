export interface Area {
  id: string;
  name: string;
  borough: string;
  lat: number;
  lng: number;
  rightmoveUrl: string;
  stationIds: string[];
}

export interface Station {
  id: string;
  name: string;
  lat: number;
  lng: number;
  lines: string[];
}

export interface CouncilTaxBands {
  B: number;
  C: number;
  D: number;
  E: number;
}

export interface CouncilTaxData {
  [borough: string]: CouncilTaxBands;
}

export interface NearestStation {
  station: Station;
  distanceMiles: number;
}
