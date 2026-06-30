"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { DEPOT_LOCATIONS } from "@/lib/content/depots";
import { cn } from "@/lib/utils";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const LABEL_OFFSETS: Record<string, [number, number]> = {
  Ballymena: [-8, -18],
  Larne: [10, -18],
  "Nutts Corner": [-10, 20],
  Dublin: [10, -18],
  Cairnryan: [-10, -18],
  Penrith: [10, -18],
  Heysham: [-10, 20],
  Liverpool: [10, 20],
};

type DepotMapProps = {
  className?: string;
};

export function DepotMap({ className }: DepotMapProps) {
  const [activeDepot, setActiveDepot] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-[color:var(--hairline-dark)] bg-ink grain",
        className,
      )}
    >
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          center: [-4.2, 53.45],
          scale: 5200,
        }}
        width={800}
        height={720}
        className="block h-auto w-full"
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies
              .filter((geo) =>
                ["United Kingdom", "Ireland"].includes(
                  geo.properties?.name as string,
                ),
              )
              .map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="var(--graphite)"
                  stroke="rgba(255,255,255,0.18)"
                  strokeWidth={0.75}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none", fill: "var(--graphite-2)" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
          }
        </Geographies>

        {DEPOT_LOCATIONS.map((depot) => {
          const isActive = activeDepot === depot.name;
          const [labelX, labelY] = LABEL_OFFSETS[depot.name] ?? [10, -18];
          const labelAnchor = labelX < 0 ? "end" : "start";

          return (
            <Marker
              key={depot.name}
              coordinates={depot.coordinates}
              onMouseEnter={() => setActiveDepot(depot.name)}
              onMouseLeave={() => setActiveDepot(null)}
              onFocus={() => setActiveDepot(depot.name)}
              onBlur={() => setActiveDepot(null)}
            >
              <g tabIndex={0} className="cursor-pointer outline-none">
                <circle
                  r={isActive ? 10 : 7}
                  fill="var(--mcb-red)"
                  stroke="white"
                  strokeWidth={2}
                  className="transition-all duration-200"
                />
                <circle r={22} fill="transparent" aria-hidden />
                <text
                  x={labelX}
                  y={labelY}
                  textAnchor={labelAnchor}
                  fill="white"
                  fontSize={13}
                  fontWeight={700}
                  stroke="var(--ink)"
                  strokeWidth={4}
                  paintOrder="stroke"
                  style={{ pointerEvents: "none" }}
                >
                  {depot.name}
                </text>
                {depot.label ? (
                  <text
                    x={labelX}
                    y={labelY + 14}
                    textAnchor={labelAnchor}
                    fill="rgba(255,255,255,0.65)"
                    fontSize={9}
                    fontWeight={600}
                    letterSpacing="0.1em"
                    stroke="var(--ink)"
                    strokeWidth={3}
                    paintOrder="stroke"
                    style={{ pointerEvents: "none" }}
                  >
                    {depot.label.toUpperCase()}
                  </text>
                ) : null}
              </g>
            </Marker>
          );
        })}
      </ComposableMap>

      <div className="absolute inset-x-0 bottom-0 border-t border-[color:var(--hairline-dark)] bg-ink/80 px-6 py-3 backdrop-blur-sm">
        <p className="text-center text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">
          {activeDepot
            ? `${activeDepot}${DEPOT_LOCATIONS.find((d) => d.name === activeDepot)?.label ? ` · ${DEPOT_LOCATIONS.find((d) => d.name === activeDepot)?.label}` : ""}`
            : "Eight depots across the UK & Ireland"}
        </p>
      </div>
    </div>
  );
}
