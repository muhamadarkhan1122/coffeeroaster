// ======================================
// src/components/EmergencyButton.js
// ======================================

import React from "react";
import { AlertTriangle, Power } from "lucide-react";

export function EmergencyButton({
  onClick,
  isActive = false
}) {
  return (
    <button
      onClick={onClick}
      disabled={isActive}
      className={`
        w-full rounded-2xl p-6 text-white font-bold text-xl flex items-center justify-center gap-3
        transition-all duration-300
        ${isActive 
          ? "bg-red-900 cursor-not-allowed opacity-75" 
          : "bg-red-600 hover:bg-red-700 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-red-600/30"
        }
      `}
    >

      {isActive ? (
        <Power className="w-8 h-8 animate-pulse" />
      ) : (
        <AlertTriangle className="w-8 h-8" />
      )}

      {isActive ? "EMERGENCY ACTIVE" : "EMERGENCY STOP"}

    </button>
  );
}