// ======================================
// src/components/DurationCard.js
// ======================================

import React from "react";
import { Clock } from "lucide-react";

export function DurationCard({
  duration
}) {
  return (
    <div className="bg-stone-800/60 backdrop-blur border border-stone-700 rounded-2xl p-6">

      <div className="flex items-center gap-3 mb-4">

        <Clock className="w-6 h-6 text-blue-500" />

        <h2 className="text-stone-300 text-lg">
          Duration
        </h2>

      </div>

      <div className="text-white text-6xl font-bold">
        {duration}
      </div>

    </div>
  );
}