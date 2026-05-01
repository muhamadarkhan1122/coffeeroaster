// ======================================
// src/components/AlertWarning.js
// ======================================

import React from "react";
import { AlertTriangle } from "lucide-react";

export function AlertWarning({
  show
}) {
  if (!show) return null;

  return (
    <div className="bg-red-900/50 border border-red-500 rounded-2xl p-4 flex items-center gap-3">

      <AlertTriangle className="w-6 h-6 text-red-500" />

      <div>

        <div className="text-red-200 font-semibold">
          High Temperature Warning
        </div>

        <div className="text-red-300 text-sm">
          Temperature approaching critical level
        </div>

      </div>

    </div>
  );
}