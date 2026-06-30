"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Marker,
} from "react-simple-maps";
import { DEPOT_LOCATIONS } from "@/lib/content/depots";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export function DepotMap() {
  const [activeDepot, setActiveDepot] = useState<string | null>(null);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[color:var(--hairline-dark)] bg-ink grain">
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          center: [-4.5, 54.8],
          scale: 1180,
        }}
        width={900}
        height={520}
        className="mx-auto h-auto w-full max-w-5xl"
      >
        <Graticule
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={0.35}
          step={[2, 2]}
        />
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
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth={0.6}
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
                  r={isActive ? 7 : 5}
                  fill="var(--mcb-yellow)"
                  stroke="var(--ink)"
                  strokeWidth={1.5}
                  className="transition-all duration-200"
                />
                <circle
                  r={12}
                  fill="transparent"
                  aria-hidden
                />
                {isActive ? (
                  <foreignObject
                    x={10}
                    y={-18}
                    width={160}
                    height={48}
                    className="pointer-events-none overflow-visible"
                  >
                    <div className="rounded-full border border-[color:var(--hairline-dark)] bg-ink/95 px-3 py-1.5 text-center shadow-[var(--shadow-warm)] backdrop-blur-sm">
                      <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-white">
                        {depot.name}
                      </p>
                      {depot.label ? (
                        <p className="text-[9px] uppercase tracking-[0.12em] text-white/55">
                          {depot.label}
                        </p>
                      ) : null}
                    </div>
                  </foreignObject>
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
            : "Hover a depot pin to explore the network"}
        </p>
      </div>
    </div>
  );
}
