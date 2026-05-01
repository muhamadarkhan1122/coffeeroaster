// ======================================
// src/components/TemperatureGraph.js
// ======================================

import React from "react";

export function TemperatureGraph({
  tempHistory
}) {
  return (
    <div className="bg-stone-800/60 backdrop-blur border border-stone-700 rounded-2xl p-6">

      <h2 className="text-white text-xl mb-4">
        Temperature Trend
      </h2>

      <div className="h-48 flex items-end gap-1">

        {tempHistory.map((item, index) => (
          <div
            key={index}
            className="flex-1 bg-orange-500 rounded-t"
            style={{
              height:
                (item.drum / 220) * 100 + "%"
            }}
          />
        ))}

      </div>

    </div>
  );
}