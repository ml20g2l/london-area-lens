/**
 * Council Tax data by London borough (2024/25 approximate annual rates in £).
 * Bands B, C, D, E only.
 */

import { CouncilTaxData } from "@/types";

export const councilTax: CouncilTaxData = {
  "Westminster":             { B: 566, C: 647, D: 727, E: 889 },
  "Hammersmith and Fulham":  { B: 932, C: 1065, D: 1198, E: 1464 },
  "Hounslow":                { B: 1323, C: 1512, D: 1701, E: 2079 },
  "Southwark":               { B: 1172, C: 1340, D: 1507, E: 1842 },
  "Kensington and Chelsea":  { B: 875, C: 1000, D: 1125, E: 1375 },
  "Ealing":                  { B: 1283, C: 1466, D: 1649, E: 2016 },
  "Wandsworth":              { B: 634, C: 725, D: 816, E: 997 },
  "Merton":                  { B: 1291, C: 1476, D: 1661, E: 2030 },
  "Newham":                  { B: 1148, C: 1312, D: 1476, E: 1804 },
  "Lambeth":                 { B: 1198, C: 1369, D: 1540, E: 1882 },
  "Islington":               { B: 1132, C: 1294, D: 1455, E: 1779 },
};
