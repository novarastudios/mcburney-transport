export type DepotLocation = {
  name: string;
  coordinates: [number, number];
  label?: string;
};

export const DEPOT_LOCATIONS: DepotLocation[] = [
  {
    name: "Ballymena",
    coordinates: [-6.2762, 54.8645],
    label: "Head Office",
  },
  {
    name: "Larne",
    coordinates: [-5.8111, 54.8517],
  },
  {
    name: "Nutts Corner",
    coordinates: [-6.154, 54.645],
  },
  {
    name: "Dublin",
    coordinates: [-6.2603, 53.3498],
  },
  {
    name: "Cairnryan",
    coordinates: [-5.021, 54.971],
    label: "Port",
  },
  {
    name: "Penrith",
    coordinates: [-2.754, 54.664],
  },
  {
    name: "Heysham",
    coordinates: [-2.916, 54.033],
    label: "Port",
  },
  {
    name: "Liverpool",
    coordinates: [-2.9916, 53.4084],
  },
];
