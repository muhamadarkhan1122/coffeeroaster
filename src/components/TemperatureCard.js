// ======================================
// src/components/TemperatureCard.js
// ======================================

import React from "react";
import { Flame, Coffee } from "lucide-react";

export function TemperatureCard({
  type,
  temperature,
  target
}) {
  const isDrum = type === "drum";

  const Icon = isDrum ? Flame : Coffee;

  return (
    <div className="bg-stone-800/60 backdrop-blur border border-stone-700 rounded-2xl p-6">

      <div className="flex items-center gap-3 mb-4">

        <Icon className={`w-6 h-6 ${
          isDrum
            ? "text-orange-500"
            : "text-amber-500"
        }`} />

        <h2 className="text-stone-300 text-lg">
          {isDrum
            ? "Drum Temperature"
            : "Bean Temperature"}
        </h2>

      </div>

      <div className="text-white text-6xl font-bold mb-2">
        {temperature.toFixed(1)}°
      </div>

      <div className="text-stone-400">
        Target: {target}
      </div>

    </div>
  );
}