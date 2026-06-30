export type ServiceContent = {
  slug: string;
  title: string;
  headline: string;
  description: string;
  overview: string;
  image: string;
  problems: string[];
  benefits: string[];
  process: { title: string; description: string }[];
  stats: { value: string; label: string }[];
  faqs: { question: string; answer: string }[];
};

export const SERVICES: ServiceContent[] = [
  {
    slug: "road-haulage",
    title: "Road Haulage",
    headline: "Complete road freight across the UK & Ireland",
    description:
      "Dry, ambient and tailored road haulage with one of Ireland's largest independently owned fleets.",
    overview:
      "McBurney Transport provides all types of transportation — dry, ambient and temperature controlled — with services fully tailored to each customer's requirements. Our fleet travels over 450,000 miles every week, making a delivery on average every few minutes across the UK and Ireland.",
    image:
      "https://www.mcburneytransportgroup.com/wp-content/uploads/bfi_thumb/what-we-do-road-mpa54ue6vzoc0vt2ic4d7qzutej4tdzhcy2ux5ou50.jpg",
    problems: [
      "Inconsistent delivery performance affecting retail and manufacturing schedules.",
      "Limited fleet capacity during peak demand periods.",
      "Fragmented suppliers creating complexity across UK and Ireland routes.",
      "Difficulty maintaining compliance and equipment standards at scale.",
    ],
    benefits: [
      "290 articulated tractor units and 80 rigid body vehicles across the group.",
      "Six-year tractor replacement and eight-year trailer replacement policies.",
      "Recognised market leader within the UK and Ireland transport industry.",
      "Family-owned responsiveness with the resources of a major logistics group.",
    ],
    process: [
      {
        title: "Understand your requirements",
        description:
          "We assess routes, volumes, handling needs and service levels to design the right solution.",
      },
      {
        title: "Deploy the right fleet",
        description:
          "From tautliners and box vans to double deckers and flat beds — matched to your cargo.",
      },
      {
        title: "Integrate with your operations",
        description:
          "Real-time visibility through our IT systems, bespoke reporting and POD access.",
      },
      {
        title: "Deliver consistently",
        description:
          "Over £50 million invested in equipment to ensure reliability, compliance and performance.",
      },
    ],
    stats: [
      { value: "450,000", label: "Miles covered weekly" },
      { value: "370+", label: "Vehicles across the group" },
      { value: "£50M+", label: "Capital investment in fleet" },
      { value: "8", label: "Depots across UK & Ireland" },
    ],
    faqs: [
      {
        question: "What types of road haulage does McBurney Transport provide?",
        answer:
          "We provide dry, ambient and temperature-controlled road haulage throughout the UK and Ireland, including articulated, rigid and specialist trailer configurations.",
      },
      {
        question: "How does McBurney maintain fleet reliability?",
        answer:
          "The group operates a six-year replacement policy for tractor units and an eight-year policy for trailers, with over £50 million invested in modern, compliant equipment.",
      },
      {
        question: "Can McBurney integrate with our existing logistics processes?",
        answer:
          "Yes. Our bespoke IT infrastructure supports real-time visibility, automatic bespoke reports and scanned POD access for customers.",
      },
    ],
  },
  {
    slug: "temperature-controlled",
    title: "Temperature Controlled Transport & Warehousing",
    headline: "Chilled and frozen logistics with cold storage",
    description:
      "End-to-end temperature-controlled transport and warehousing through McBurney Refrigeration Ltd.",
    overview:
      "McBurney Refrigeration Ltd was established to meet the growing demand for chilled and frozen product haulage. Strengthened by a Liverpool acquisition adding 30,000 pallet cold storage on a 12-acre site, the company delivers a complete temperature-controlled package across the UK and Ireland from depots in Liverpool and Dublin.",
    image:
      "https://www.mcburneytransportgroup.com/wp-content/uploads/bfi_thumb/what-we-do-temp-mpa54z3du5urmxm8qw5i27t5sbvyvvi51lcabjhv9w.jpg",
    problems: [
      "Cold chain breaks risking product quality and compliance.",
      "Limited refrigerated capacity for high-volume food and drink supply chains.",
      "Need for UK foothold for Irish producers and reverse for UK exporters.",
      "Warehousing accreditation requirements for food sector customers.",
    ],
    benefits: [
      "700 refrigerated trailers including 120 high-cube units with 52-pallet capacity.",
      "30,000 pallet cold storage facility in Liverpool with BRC accreditation.",
      "Named Chilled Operator of the Year — recognised industry excellence.",
      "Strategic Liverpool and Dublin depots bridging Irish Sea supply chains.",
    ],
    process: [
      {
        title: "Assess temperature requirements",
        description:
          "We define chilled or frozen parameters, handling protocols and delivery windows.",
      },
      {
        title: "Allocate refrigerated assets",
        description:
          "High-cube and standard refrigerated trailers deployed from our dedicated fleet.",
      },
      {
        title: "Store where needed",
        description:
          "Cold storage at Liverpool supports producers needing a UK distribution foothold.",
      },
      {
        title: "Monitor throughout",
        description:
          "Integrated IT systems provide visibility from collection through to proof of delivery.",
      },
    ],
    stats: [
      { value: "700", label: "Refrigerated trailers" },
      { value: "30,000", label: "Pallet cold storage capacity" },
      { value: "BRC", label: "Accredited Liverpool operation" },
      { value: "2", label: "Dedicated cold chain depots" },
    ],
    faqs: [
      {
        question: "What temperature ranges can McBurney Refrigeration handle?",
        answer:
          "The company covers the full range of temperature-controlled transport and warehousing for chilled and frozen products across the UK and Ireland.",
      },
      {
        question: "Where are McBurney Refrigeration depots located?",
        answer:
          "McBurney Refrigeration operates from depots in Liverpool and Dublin, with Liverpool also hosting a major cold storage facility.",
      },
      {
        question: "Is the Liverpool warehousing operation accredited?",
        answer:
          "Yes. The Liverpool logistics and warehousing operation has received full BRC accreditation.",
      },
    ],
  },
  {
    slug: "warehousing-distribution",
    title: "Warehousing, Groupage & Distribution",
    headline: "Storage and distribution tailored to your network",
    description:
      "Comprehensive warehousing, groupage and distribution through Bondelivery and group depots.",
    overview:
      "Bondelivery has been an integral part of the McBurney Transport Group for 25 years, providing groupage, distribution and warehousing throughout Ireland. With 30,000 sq m of warehousing at Nutts Corner, a fleet of 80 vehicles and an extensive depot network with UK and Irish partners, Bondelivery delivers bespoke, cost-effective and secure distribution and storage solutions.",
    image:
      "https://www.mcburneytransportgroup.com/wp-content/uploads/bfi_thumb/what-we-do-warehouse-mpa55e4svifcsp0eb2nj640jahtub15ufns1zyvkic.jpg",
    problems: [
      "Need for flexible storage without long-term fixed overhead.",
      "Complex last-mile distribution across Ireland and the UK.",
      "Consolidation requirements for multi-drop and groupage efficiency.",
      "Security and service consistency across a fragmented network.",
    ],
    benefits: [
      "30,000 sq m warehousing at Nutts Corner depot.",
      "80-vehicle Bondelivery fleet with extensive partner network.",
      "Irish Logistics Service Provider of the Year 2014 — proven excellence.",
      "Integrated with McBurney Transport for end-to-end logistics packages.",
    ],
    process: [
      {
        title: "Design your distribution model",
        description:
          "We map storage, consolidation and delivery requirements across your network.",
      },
      {
        title: "Utilise strategic depots",
        description:
          "Eight group depots positioned across the UK and Ireland support efficient flow.",
      },
      {
        title: "Execute groupage and distribution",
        description:
          "Bondelivery's fleet and partners deliver secure, tailored distribution solutions.",
      },
      {
        title: "Report and optimise",
        description:
          "Customer-specific reporting and real-time system access support continuous improvement.",
      },
    ],
    stats: [
      { value: "30,000", label: "Sq m warehousing at Nutts Corner" },
      { value: "80", label: "Bondelivery vehicles" },
      { value: "25", label: "Years as part of the group" },
      { value: "8", label: "Group depot locations" },
    ],
    faqs: [
      {
        question: "What warehousing capacity does Bondelivery offer?",
        answer:
          "Bondelivery provides 30,000 sq m of warehousing space at its Nutts Corner depot, supporting distribution throughout Ireland.",
      },
      {
        question: "Can warehousing be combined with McBurney road haulage?",
        answer:
          "Yes. The group's strategy is to provide a complete transport and logistics package, integrating warehousing, groupage and road freight.",
      },
      {
        question: "Does Bondelivery serve both Ireland and the UK?",
        answer:
          "Bondelivery operates throughout Ireland with an extensive depot network and UK and Irish partners for comprehensive distribution coverage.",
      },
    ],
  },
  {
    slug: "irish-sea-shipping",
    title: "Irish Sea Shipping",
    headline: "High-volume ferry logistics connecting markets",
    description:
      "Over 114,000 loads shipped across the Irish Sea every year — a cornerstone of group operations.",
    overview:
      "The McBurney Transport Group's strategy has established the business as a major Irish Sea logistics provider. With depots at Cairnryan, Larne, Heysham and Liverpool among others, we connect producers and distributors across the UK and Ireland through high-volume, reliable ferry logistics.",
    image:
      "https://www.mcburneytransportgroup.com/wp-content/uploads/bfi_thumb/ferry-b-qx8jsc1z2cm8k79mmgw48wf13ogced3620stxeop78.jpg",
    problems: [
      "Unreliable ferry connections disrupting cross-border supply chains.",
      "Complex customs and documentation for UK–Ireland movements.",
      "Need for port-adjacent depots to minimise handling and delay.",
      "Volume fluctuations requiring scalable shipping capacity.",
    ],
    benefits: [
      "114,000+ loads shipped across the Irish Sea annually.",
      "Port-adjacent depots at Cairnryan, Larne, Heysham and Liverpool.",
      "Export & Freight European Haulier of the Year 2015 recognition.",
      "Integrated road and ferry solution from a single logistics partner.",
    ],
    process: [
      {
        title: "Plan cross-sea movements",
        description:
          "Route and ferry scheduling aligned to your delivery windows and product requirements.",
      },
      {
        title: "Coordinate port operations",
        description:
          "Strategic depot network minimises handling at Cairnryan, Larne, Heysham and Liverpool.",
      },
      {
        title: "Execute combined road and sea legs",
        description:
          "Seamless transition from collection through ferry crossing to final delivery.",
      },
      {
        title: "Provide full visibility",
        description:
          "Real-time tracking and reporting through our integrated IT systems.",
      },
    ],
    stats: [
      { value: "114,000+", label: "Annual Irish Sea loads" },
      { value: "4", label: "Port-adjacent depot locations" },
      { value: "450,000", label: "Weekly fleet miles" },
      { value: "2015", label: "European Haulier of the Year" },
    ],
    faqs: [
      {
        question: "How many loads does McBurney ship across the Irish Sea?",
        answer:
          "The group ships over 114,000 loads across the Irish Sea every year.",
      },
      {
        question: "Which ports does McBurney operate near?",
        answer:
          "Group depots are strategically placed at Cairnryan, Larne, Heysham and Liverpool among eight locations across the UK and Ireland.",
      },
      {
        question: "Is Irish Sea shipping integrated with road haulage?",
        answer:
          "Yes. McBurney provides a complete transport package combining ferry logistics with UK and Ireland road delivery.",
      },
    ],
  },
  {
    slug: "value-added",
    title: "Value Added Services",
    headline: "Bespoke logistics support beyond transport",
    description:
      "Tailored services that extend our complete transport package for individual business requirements.",
    overview:
      "McBurney Transport's main objective is to provide a complete transport package. Beyond core haulage, shipping and warehousing, our value added services are fully tailored to meet each business's individual requirements — supported by bespoke IT integration, real-time reporting and an in-house programming team.",
    image:
      "https://www.mcburneytransportgroup.com/wp-content/uploads/bfi_thumb/mcb-refrigeration02-mpagmlylbk38pgsfeot8au5gih4s4vlukwaf12715g.jpg",
    problems: [
      "Standard logistics offerings failing to match unique operational needs.",
      "Poor visibility into transport and warehousing performance.",
      "Manual reporting slowing decision-making.",
      "Inability to integrate logistics data with internal systems.",
    ],
    benefits: [
      "Bespoke IT infrastructure tailored to group and customer requirements.",
      "24/7 online access with real-time transport and warehousing information.",
      "Automatic customer-specific reports and scanned POD access.",
      "In-house programming team for rapid bespoke development.",
    ],
    process: [
      {
        title: "Identify additional requirements",
        description:
          "We work with your team to define services beyond standard transport.",
      },
      {
        title: "Configure systems integration",
        description:
          "Our IT infrastructure can network directly with customer systems.",
      },
      {
        title: "Deploy bespoke reporting",
        description:
          "Automatic reports configured to the metrics that matter to your business.",
      },
      {
        title: "Continuously adapt",
        description:
          "Our in-house team responds quickly to changing requirements.",
      },
    ],
    stats: [
      { value: "24/7", label: "Customer system access" },
      { value: "Real-time", label: "Transport visibility" },
      { value: "Bespoke", label: "Report configuration" },
      { value: "In-house", label: "Programming team" },
    ],
    faqs: [
      {
        question: "What value added services does McBurney offer?",
        answer:
          "Services include bespoke IT integration, real-time transport and warehousing visibility, automatic customer-specific reporting, scanned POD access and bespoke drivers app integration.",
      },
      {
        question: "Can McBurney connect to our IT systems?",
        answer:
          "Yes. The group's powerful IT infrastructure can be tailored to network directly with customer IT systems.",
      },
      {
        question: "How quickly can bespoke requirements be implemented?",
        answer:
          "With an in-house programming team, the group can react to changes and new reporting requirements quickly.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}

export function getServiceSummaries() {
  return SERVICES.map(({ slug, title, description, image }) => ({
    slug,
    title,
    description,
    image,
    href: `/services/${slug}`,
  }));
}
