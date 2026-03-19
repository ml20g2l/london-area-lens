/**
 * =============================================
 * LONDON AREA DATA
 * =============================================
 * 
 * HOW TO UPDATE RIGHTMOVE URLS:
 * Each area below has a `rightmoveUrl` field.
 * Replace the URL string with your real Rightmove search URL.
 * Keep the URL inside the quotes.
 * 
 * Example:
 *   rightmoveUrl: "https://www.rightmove.co.uk/property-to-rent/find.html?..."
 * 
 * =============================================
 */

import { Area } from "@/types";

export const areas: Area[] = [
  {
    id: "paddington",
    name: "Paddington",
    borough: "Westminster",
    lat: 51.5154,
    lng: -0.1755,
    rightmoveUrl: "https://www.rightmove.co.uk/property-to-rent/find.html?searchLocation=Paddington%2C+West+London&useLocationIdentifier=true&locationIdentifier=REGION%5E70403&rent=To+rent&radius=0.0&maxPrice=2250&minBedrooms=1&_includeLetAgreed=on&minBathrooms=1&index=0&sortType=6&channel=RENT&transactionType=LETTING&displayLocationIdentifier=Paddington.html&dontShow=student%2ChouseShare&propertyTypes=detached%2Csemi-detached%2Cterraced%2Cflat%2Cbungalow",
    stationIds: ["paddington", "edgware-road-circle", "lancaster-gate"],
  },
  {
    id: "shepherds-bush",
    name: "Shepherd's Bush",
    borough: "Hammersmith and Fulham",
    lat: 51.5046,
    lng: -0.2187,
    rightmoveUrl: "https://www.rightmove.co.uk/property-to-rent/find.html?useLocationIdentifier=true&locationIdentifier=REGION%5E85398&rent=To+rent&maxPrice=2250&minBedrooms=1&_includeLetAgreed=on&minBathrooms=1&index=0&sortType=6&channel=RENT&transactionType=LETTING&displayLocationIdentifier=Shepherds-Bush.html&dontShow=student%2ChouseShare&propertyTypes=detached%2Csemi-detached%2Cterraced%2Cflat%2Cbungalow",
    stationIds: ["shepherds-bush-central", "shepherds-bush-market", "goldhawk-road"],
  },
  {
    id: "white-city",
    name: "White City",
    borough: "Hammersmith and Fulham",
    lat: 51.512,
    lng: -0.2246,
    rightmoveUrl: "https://www.rightmove.co.uk/property-to-rent/find.html?useLocationIdentifier=true&locationIdentifier=REGION%5E85399&rent=To+rent&maxPrice=2250&minBedrooms=1&_includeLetAgreed=on&minBathrooms=1&index=0&sortType=6&channel=RENT&transactionType=LETTING&displayLocationIdentifier=White-City.html&dontShow=student%2ChouseShare&propertyTypes=detached%2Csemi-detached%2Cterraced%2Cflat%2Cbungalow",
    stationIds: ["white-city", "wood-lane", "shepherds-bush-central"],
  },
  {
    id: "chiswick",
    name: "Chiswick",
    borough: "Hounslow",
    lat: 51.4927,
    lng: -0.2596,
    rightmoveUrl: "https://www.rightmove.co.uk/property-to-rent/find.html?useLocationIdentifier=true&locationIdentifier=REGION%5E85345&rent=To+rent&maxPrice=2250&minBedrooms=1&_includeLetAgreed=on&minBathrooms=1&index=0&sortType=6&channel=RENT&transactionType=LETTING&displayLocationIdentifier=Chiswick.html&dontShow=student%2ChouseShare&propertyTypes=detached%2Csemi-detached%2Cterraced%2Cflat%2Cbungalow",
    stationIds: ["turnham-green", "chiswick-park", "gunnersbury"],
  },
  {
    id: "hammersmith",
    name: "Hammersmith",
    borough: "Hammersmith and Fulham",
    lat: 51.4936,
    lng: -0.2251,
    rightmoveUrl: "https://www.rightmove.co.uk/property-to-rent/find.html?useLocationIdentifier=true&locationIdentifier=REGION%5E85329&rent=To+rent&maxPrice=2250&minBedrooms=1&_includeLetAgreed=on&minBathrooms=1&index=0&sortType=6&channel=RENT&transactionType=LETTING&displayLocationIdentifier=Hammersmith.html&dontShow=student%2ChouseShare&propertyTypes=detached%2Csemi-detached%2Cterraced%2Cflat%2Cbungalow",
    stationIds: ["hammersmith", "ravenscourt-park", "goldhawk-road"],
  },
  {
    id: "fulham",
    name: "Fulham",
    borough: "Hammersmith and Fulham",
    lat: 51.4749,
    lng: -0.2,
    rightmoveUrl: "https://www.rightmove.co.uk/property-to-rent/find.html?useLocationIdentifier=true&locationIdentifier=REGION%5E87507&rent=To+rent&maxPrice=2250&minBedrooms=1&_includeLetAgreed=on&minBathrooms=1&index=0&sortType=6&channel=RENT&transactionType=LETTING&displayLocationIdentifier=Fulham.html&dontShow=student%2ChouseShare&propertyTypes=detached%2Csemi-detached%2Cterraced%2Cflat%2Cbungalow",
    stationIds: ["fulham-broadway", "parsons-green", "putney-bridge"],
  },
  {
    id: "canada-water",
    name: "Canada Water",
    borough: "Southwark",
    lat: 51.498,
    lng: -0.0498,
    rightmoveUrl: "https://www.rightmove.co.uk/property-to-rent/find.html?useLocationIdentifier=true&locationIdentifier=REGION%5E93754&rent=To+rent&maxPrice=2250&minBedrooms=1&_includeLetAgreed=on&minBathrooms=1&index=0&sortType=6&channel=RENT&transactionType=LETTING&displayLocationIdentifier=Canada-Water.html&dontShow=student%2ChouseShare&propertyTypes=detached%2Csemi-detached%2Cterraced%2Cflat%2Cbungalow",
    stationIds: ["canada-water", "surrey-quays", "rotherhithe"],
  },
  {
    id: "chelsea",
    name: "Chelsea",
    borough: "Kensington and Chelsea",
    lat: 51.4875,
    lng: -0.1687,
    rightmoveUrl: "https://www.rightmove.co.uk/property-to-rent/find.html?useLocationIdentifier=true&locationIdentifier=REGION%5E87498&rent=To+rent&maxPrice=2250&minBedrooms=1&_includeLetAgreed=on&minBathrooms=1&index=0&sortType=6&channel=RENT&transactionType=LETTING&displayLocationIdentifier=Chelsea.html&dontShow=student%2ChouseShare&propertyTypes=detached%2Csemi-detached%2Cterraced%2Cflat%2Cbungalow",
    stationIds: ["sloane-square", "south-kensington", "fulham-broadway"],
  },
  {
    id: "south-kensington",
    name: "South Kensington",
    borough: "Kensington and Chelsea",
    lat: 51.4941,
    lng: -0.1738,
    rightmoveUrl: "https://www.rightmove.co.uk/property-to-rent/find.html?useLocationIdentifier=true&locationIdentifier=REGION%5E85252&rent=To+rent&maxPrice=2250&minBedrooms=1&_includeLetAgreed=on&minBathrooms=1&index=0&sortType=6&channel=RENT&transactionType=LETTING&displayLocationIdentifier=South-Kensington.html&dontShow=student%2ChouseShare&propertyTypes=detached%2Csemi-detached%2Cterraced%2Cflat%2Cbungalow",
    stationIds: ["south-kensington", "gloucester-road", "sloane-square"],
  },
  {
    id: "acton",
    name: "Acton",
    borough: "Ealing",
    lat: 51.5074,
    lng: -0.271,
    rightmoveUrl: "https://www.rightmove.co.uk/property-to-rent/find.html?useLocationIdentifier=true&locationIdentifier=REGION%5E85314&rent=To+rent&maxPrice=2250&minBedrooms=1&_includeLetAgreed=on&minBathrooms=1&index=0&sortType=6&channel=RENT&transactionType=LETTING&displayLocationIdentifier=Acton.html&dontShow=student%2ChouseShare&propertyTypes=detached%2Csemi-detached%2Cterraced%2Cflat%2Cbungalow",
    stationIds: ["acton-town", "north-acton", "east-acton", "west-acton"],
  },
  {
    id: "putney",
    name: "Putney",
    borough: "Wandsworth",
    lat: 51.4614,
    lng: -0.2165,
    rightmoveUrl: "https://www.rightmove.co.uk/property-to-rent/find.html?useLocationIdentifier=true&locationIdentifier=REGION%5E85244&rent=To+rent&maxPrice=2250&minBedrooms=1&_includeLetAgreed=on&minBathrooms=1&index=0&sortType=6&channel=RENT&transactionType=LETTING&displayLocationIdentifier=Putney.html&dontShow=student%2ChouseShare&propertyTypes=detached%2Csemi-detached%2Cterraced%2Cflat%2Cbungalow",
    stationIds: ["putney-bridge", "east-putney"],
  },
  {
    id: "wimbledon",
    name: "Wimbledon",
    borough: "Merton",
    lat: 51.4214,
    lng: -0.2064,
    rightmoveUrl: "https://www.rightmove.co.uk/property-to-rent/find.html?useLocationIdentifier=true&locationIdentifier=REGION%5E87540&rent=To+rent&maxPrice=2250&minBedrooms=1&_includeLetAgreed=on&minBathrooms=1&index=0&sortType=6&channel=RENT&transactionType=LETTING&displayLocationIdentifier=Wimbledon.html&dontShow=student%2ChouseShare&propertyTypes=detached%2Csemi-detached%2Cterraced%2Cflat%2Cbungalow",
    stationIds: ["wimbledon", "wimbledon-park", "south-wimbledon"],
  },
  {
    id: "kensington",
    name: "Kensington",
    borough: "Kensington and Chelsea",
    lat: 51.5009,
    lng: -0.1925,
    rightmoveUrl: "https://www.rightmove.co.uk/property-to-rent/find.html?useLocationIdentifier=true&locationIdentifier=REGION%5E87517&rent=To+rent&maxPrice=2250&minBedrooms=1&_includeLetAgreed=on&minBathrooms=1&index=0&sortType=6&channel=RENT&transactionType=LETTING&displayLocationIdentifier=Kensington.html&dontShow=student%2ChouseShare&propertyTypes=detached%2Csemi-detached%2Cterraced%2Cflat%2Cbungalow",
    stationIds: ["high-street-kensington", "kensington-olympia", "notting-hill-gate"],
  },
  {
    id: "notting-hill",
    name: "Notting Hill",
    borough: "Kensington and Chelsea",
    lat: 51.5115,
    lng: -0.1985,
    rightmoveUrl: "https://www.rightmove.co.uk/property-to-rent/find.html?useLocationIdentifier=true&locationIdentifier=REGION%5E70331&rent=To+rent&maxPrice=2250&minBedrooms=1&_includeLetAgreed=on&minBathrooms=1&index=0&sortType=6&channel=RENT&transactionType=LETTING&displayLocationIdentifier=Notting-Hill.html&dontShow=student%2ChouseShare&propertyTypes=detached%2Csemi-detached%2Cterraced%2Cflat%2Cbungalow",
    stationIds: ["notting-hill-gate", "ladbroke-grove", "westbourne-park"],
  },
  {
    id: "holland-park",
    name: "Holland Park",
    borough: "Kensington and Chelsea",
    lat: 51.5075,
    lng: -0.2059,
    rightmoveUrl: "https://www.rightmove.co.uk/property-to-rent/find.html?useLocationIdentifier=true&locationIdentifier=REGION%5E85257&rent=To+rent&maxPrice=2250&minBedrooms=1&_includeLetAgreed=on&minBathrooms=1&index=0&sortType=6&channel=RENT&transactionType=LETTING&displayLocationIdentifier=Holland-Park.html&dontShow=student%2ChouseShare&propertyTypes=detached%2Csemi-detached%2Cterraced%2Cflat%2Cbungalow",
    stationIds: ["holland-park", "shepherds-bush-central", "notting-hill-gate"],
  },
  {
    id: "ealing",
    name: "Ealing",
    borough: "Ealing",
    lat: 51.5133,
    lng: -0.3043,
    rightmoveUrl: "https://www.rightmove.co.uk/property-to-rent/find.html?useLocationIdentifier=true&locationIdentifier=REGION%5E87504&rent=To+rent&maxPrice=2250&minBedrooms=1&_includeLetAgreed=on&minBathrooms=1&index=0&sortType=6&channel=RENT&transactionType=LETTING&displayLocationIdentifier=Ealing.html&dontShow=student%2ChouseShare&propertyTypes=detached%2Csemi-detached%2Cterraced%2Cflat%2Cbungalow",
    stationIds: ["ealing-broadway", "ealing-common", "south-ealing"],
  },
  {
    id: "brentford",
    name: "Brentford",
    borough: "Hounslow",
    lat: 51.4878,
    lng: -0.309,
    rightmoveUrl: "https://www.rightmove.co.uk/property-to-rent/find.html?useLocationIdentifier=true&locationIdentifier=STATION%5E1328&rent=To+rent&maxPrice=2250&minBedrooms=1&_includeLetAgreed=on&minBathrooms=1&index=0&sortType=6&channel=RENT&transactionType=LETTING&displayLocationIdentifier=Brentford-Station.html&dontShow=student%2ChouseShare&propertyTypes=detached%2Csemi-detached%2Cterraced%2Cflat%2Cbungalow",
    stationIds: ["brentford", "boston-manor", "osterley"],
  },
  {
    id: "canning-town",
    name: "Canning Town",
    borough: "Newham",
    lat: 51.5147,
    lng: 0.0082,
    rightmoveUrl: "https://www.rightmove.co.uk/property-to-rent/find.html?useLocationIdentifier=true&locationIdentifier=REGION%5E70412&rent=To+rent&maxPrice=2250&minBedrooms=1&_includeLetAgreed=on&minBathrooms=1&index=0&sortType=6&channel=RENT&transactionType=LETTING&displayLocationIdentifier=Canning-Town.html&dontShow=student%2ChouseShare&propertyTypes=detached%2Csemi-detached%2Cterraced%2Cflat%2Cbungalow",
    stationIds: ["canning-town", "royal-victoria", "west-ham"],
  },
  {
    id: "battersea",
    name: "Battersea",
    borough: "Wandsworth",
    lat: 51.4763,
    lng: -0.1486,
    rightmoveUrl: "https://www.rightmove.co.uk/property-to-rent/find.html?useLocationIdentifier=true&locationIdentifier=REGION%5E87492&rent=To+rent&maxPrice=2250&minBedrooms=1&_includeLetAgreed=on&minBathrooms=1&index=0&sortType=6&channel=RENT&transactionType=LETTING&displayLocationIdentifier=Battersea.html&dontShow=student%2ChouseShare&propertyTypes=detached%2Csemi-detached%2Cterraced%2Cflat%2Cbungalow",
    stationIds: ["battersea-power-station", "nine-elms", "clapham-junction"],
  },
  {
    id: "brixton",
    name: "Brixton",
    borough: "Lambeth",
    lat: 51.4613,
    lng: -0.1145,
    rightmoveUrl: "https://www.rightmove.co.uk/property-to-rent/find.html?useLocationIdentifier=true&locationIdentifier=REGION%5E87496&rent=To+rent&maxPrice=2250&minBedrooms=1&_includeLetAgreed=on&minBathrooms=1&index=0&sortType=6&channel=RENT&transactionType=LETTING&displayLocationIdentifier=Brixton.html&dontShow=student%2ChouseShare&propertyTypes=detached%2Csemi-detached%2Cterraced%2Cflat%2Cbungalow",
    stationIds: ["brixton", "oval", "stockwell"],
  },
  {
    id: "islington",
    name: "Islington",
    borough: "Islington",
    lat: 51.536,
    lng: -0.103,
    rightmoveUrl: "https://www.rightmove.co.uk/property-to-rent/find.html?useLocationIdentifier=true&locationIdentifier=REGION%5E87515&rent=To+rent&maxPrice=2250&minBedrooms=1&_includeLetAgreed=on&minBathrooms=1&index=0&sortType=6&channel=RENT&transactionType=LETTING&displayLocationIdentifier=Islington-87515.html&dontShow=student%2ChouseShare&propertyTypes=detached%2Csemi-detached%2Cterraced%2Cflat%2Cbungalow",
    stationIds: ["angel", "highbury-islington", "kings-cross", "old-street"],
  },
];
