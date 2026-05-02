// ======================================
// src/components/Header.js
// ======================================

import React from "react";
import { Coffee } from "lucide-react";

export function Header({
  phase,
  isRunning,
  emergencyActive
}) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

      <div className="flex items-center gap-3">

        <Coffee className="w-10 h-10 text-amber-500" />

        <div>
          <h1 className="text-white text-3xl font-bold">
            Coffee Roaster Monitor
          </h1>

          <p className="text-stone-400">
            Dashboard
          </p>
        </div>

      </div>

      <div className="flex gap-3">

        <div className={`px-4 py-2 rounded-xl text-white font-semibold ${phase.color}`}>
          {phase.name}
        </div>

        <div className={`px-4 py-2 rounded-xl text-white font-semibold ${
          emergencyActive
            ? "bg-red-600"
            : isRunning
            ? "bg-green-600"
            : "bg-stone-700"
        }`}>
          {emergencyActive
            ? "EMERGENCY"
            : isRunning
            ? "ACTIVE"
            : "NOT ACTIVE"}
        </div>

      </div>

    </div>
  );
}