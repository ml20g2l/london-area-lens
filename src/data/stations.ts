import { Station } from "@/types";

export const stations: Station[] = [
  // Paddington area
  { id: "paddington", name: "Paddington", lat: 51.5154, lng: -0.1755, lines: ["Bakerloo", "Circle", "District", "Hammersmith & City", "Elizabeth"] },
  { id: "edgware-road-circle", name: "Edgware Road", lat: 51.5199, lng: -0.1679, lines: ["Circle", "District", "Hammersmith & City"] },
  { id: "lancaster-gate", name: "Lancaster Gate", lat: 51.5119, lng: -0.1756, lines: ["Central"] },
  { id: "royal-oak", name: "Royal Oak", lat: 51.519, lng: -0.1884, lines: ["Circle", "Hammersmith & City"] },
  { id: "warwick-avenue", name: "Warwick Avenue", lat: 51.5235, lng: -0.1835, lines: ["Bakerloo"] },
  // Shepherd's Bush / White City
  { id: "shepherds-bush-market", name: "Shepherd's Bush Market", lat: 51.5053, lng: -0.2267, lines: ["Hammersmith & City", "Circle"] },
  { id: "shepherds-bush-central", name: "Shepherd's Bush", lat: 51.5046, lng: -0.2187, lines: ["Central"] },
  { id: "white-city", name: "White City", lat: 51.512, lng: -0.2246, lines: ["Central"] },
  { id: "wood-lane", name: "Wood Lane", lat: 51.5095, lng: -0.2245, lines: ["Circle", "Hammersmith & City"] },
  // Chiswick
  { id: "turnham-green", name: "Turnham Green", lat: 51.4951, lng: -0.2547, lines: ["District", "Piccadilly"] },
  { id: "chiswick-park", name: "Chiswick Park", lat: 51.4946, lng: -0.2678, lines: ["District"] },
  { id: "gunnersbury", name: "Gunnersbury", lat: 51.4915, lng: -0.2754, lines: ["District", "Overground"] },
  // Hammersmith
  { id: "hammersmith", name: "Hammersmith", lat: 51.4936, lng: -0.2251, lines: ["District", "Piccadilly", "Hammersmith & City", "Circle"] },
  { id: "ravenscourt-park", name: "Ravenscourt Park", lat: 51.4942, lng: -0.2366, lines: ["District"] },
  { id: "goldhawk-road", name: "Goldhawk Road", lat: 51.5018, lng: -0.2267, lines: ["Circle", "Hammersmith & City"] },
  // Fulham
  { id: "fulham-broadway", name: "Fulham Broadway", lat: 51.4802, lng: -0.195, lines: ["District"] },
  { id: "parsons-green", name: "Parsons Green", lat: 51.4753, lng: -0.2013, lines: ["District"] },
  { id: "putney-bridge", name: "Putney Bridge", lat: 51.4682, lng: -0.2089, lines: ["District"] },
  // Canada Water
  { id: "canada-water", name: "Canada Water", lat: 51.498, lng: -0.0498, lines: ["Jubilee", "Overground"] },
  { id: "surrey-quays", name: "Surrey Quays", lat: 51.4933, lng: -0.0478, lines: ["Overground"] },
  { id: "rotherhithe", name: "Rotherhithe", lat: 51.501, lng: -0.0525, lines: ["Overground"] },
  // Chelsea
  { id: "sloane-square", name: "Sloane Square", lat: 51.4924, lng: -0.1565, lines: ["Circle", "District"] },
  { id: "south-kensington", name: "South Kensington", lat: 51.4941, lng: -0.1738, lines: ["Circle", "District", "Piccadilly"] },
  // South Kensington
  { id: "gloucester-road", name: "Gloucester Road", lat: 51.4945, lng: -0.1829, lines: ["Circle", "District", "Piccadilly"] },
  // Acton
  { id: "acton-town", name: "Acton Town", lat: 51.5028, lng: -0.2801, lines: ["District", "Piccadilly"] },
  { id: "north-acton", name: "North Acton", lat: 51.5237, lng: -0.2597, lines: ["Central"] },
  { id: "east-acton", name: "East Acton", lat: 51.5168, lng: -0.2474, lines: ["Central"] },
  { id: "west-acton", name: "West Acton", lat: 51.518, lng: -0.2809, lines: ["Central"] },
  // Putney
  { id: "east-putney", name: "East Putney", lat: 51.4593, lng: -0.2112, lines: ["District"] },
  // Wimbledon
  { id: "wimbledon", name: "Wimbledon", lat: 51.4214, lng: -0.2064, lines: ["District", "Tramlink"] },
  { id: "wimbledon-park", name: "Wimbledon Park", lat: 51.4343, lng: -0.1992, lines: ["District"] },
  { id: "south-wimbledon", name: "South Wimbledon", lat: 51.4154, lng: -0.1925, lines: ["Northern"] },
  // Kensington
  { id: "high-street-kensington", name: "High Street Kensington", lat: 51.5009, lng: -0.1925, lines: ["Circle", "District"] },
  { id: "kensington-olympia", name: "Kensington Olympia", lat: 51.4983, lng: -0.2106, lines: ["District", "Overground"] },
  // Notting Hill
  { id: "notting-hill-gate", name: "Notting Hill Gate", lat: 51.5094, lng: -0.1967, lines: ["Central", "Circle", "District"] },
  { id: "ladbroke-grove", name: "Ladbroke Grove", lat: 51.5172, lng: -0.2107, lines: ["Circle", "Hammersmith & City"] },
  { id: "westbourne-park", name: "Westbourne Park", lat: 51.521, lng: -0.2011, lines: ["Circle", "Hammersmith & City"] },
  // Holland Park
  { id: "holland-park", name: "Holland Park", lat: 51.5075, lng: -0.2059, lines: ["Central"] },
  // Ealing
  { id: "ealing-broadway", name: "Ealing Broadway", lat: 51.5152, lng: -0.3017, lines: ["Central", "District", "Elizabeth"] },
  { id: "ealing-common", name: "Ealing Common", lat: 51.5101, lng: -0.2882, lines: ["District", "Piccadilly"] },
  { id: "south-ealing", name: "South Ealing", lat: 51.5011, lng: -0.3072, lines: ["Piccadilly"] },
  // Brentford
  { id: "brentford", name: "Brentford", lat: 51.4878, lng: -0.309, lines: ["South Western Railway"] },
  { id: "boston-manor", name: "Boston Manor", lat: 51.4956, lng: -0.325, lines: ["Piccadilly"] },
  { id: "osterley", name: "Osterley", lat: 51.4813, lng: -0.3522, lines: ["Piccadilly"] },
  // Canning Town
  { id: "canning-town", name: "Canning Town", lat: 51.5147, lng: 0.0082, lines: ["Jubilee", "DLR"] },
  { id: "royal-victoria", name: "Royal Victoria", lat: 51.5091, lng: 0.0181, lines: ["DLR"] },
  { id: "west-ham", name: "West Ham", lat: 51.5287, lng: 0.0056, lines: ["Jubilee", "District", "Hammersmith & City", "DLR"] },
  // Battersea
  { id: "battersea-power-station", name: "Battersea Power Station", lat: 51.4795, lng: -0.1482, lines: ["Northern"] },
  { id: "nine-elms", name: "Nine Elms", lat: 51.4824, lng: -0.1437, lines: ["Northern"] },
  { id: "clapham-junction", name: "Clapham Junction", lat: 51.4641, lng: -0.1703, lines: ["Overground", "National Rail"] },
  // Brixton
  { id: "brixton", name: "Brixton", lat: 51.4627, lng: -0.1145, lines: ["Victoria"] },
  { id: "oval", name: "Oval", lat: 51.4819, lng: -0.1126, lines: ["Northern"] },
  { id: "stockwell", name: "Stockwell", lat: 51.4723, lng: -0.123, lines: ["Northern", "Victoria"] },
  // Islington
  { id: "angel", name: "Angel", lat: 51.5322, lng: -0.1058, lines: ["Northern"] },
  { id: "highbury-islington", name: "Highbury & Islington", lat: 51.546, lng: -0.104, lines: ["Victoria", "Overground"] },
  { id: "kings-cross", name: "King's Cross St. Pancras", lat: 51.5308, lng: -0.1238, lines: ["Victoria", "Northern", "Piccadilly", "Circle", "Hammersmith & City", "Metropolitan"] },
  { id: "old-street", name: "Old Street", lat: 51.5263, lng: -0.0878, lines: ["Northern"] },
];
