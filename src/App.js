// ======================================
// src/App.js
// ======================================

import React, { useEffect, useState } from "react";
import { ref, onValue, set } from "firebase/database";
import { db } from "./firebase";

import { Header } from "./components/Header";
import { TemperatureCard } from "./components/TemperatureCard";
import { DurationCard } from "./components/DurationCard";
import { TemperatureGraph } from "./components/TemperatureGraph";
import { EmergencyButton } from "./components/EmergencyButton";
import { AlertWarning } from "./components/AlertWarning";

export default function App() {

  // ===============================
  // STATE
  // ===============================
  const [drumTemp, setDrumTemp] = useState(0);
  const [beanTemp, setBeanTemp] = useState(0);
  const [duration, setDuration] = useState("00:00");
  const [status, setStatus] = useState("OFF");
  const [emergency, setEmergency] = useState(false);
  const [tempHistory, setTempHistory] = useState([]);

  // ===============================
  // READ FIREBASE
  // ===============================
  useEffect(() => {

    // Baca data sensor
    const sensorRef = ref(db, "sensor");

    onValue(sensorRef, (snapshot) => {

      const data = snapshot.val();

      if (!data) return;

      setDrumTemp(data.suhuDrum || 0);
      setBeanTemp(data.suhuBiji || 0);
      setDuration(data.durasi || "00:00");
      setStatus(data.status || "OFF");

      setTempHistory((prev) => {

        const newData = [
          ...prev,
          {
            drum: data.suhuDrum || 0,
            bean: data.suhuBiji || 0
          }
        ];

        return newData.slice(-20);
      });

    });

    // Baca status emergency dari control (bukan sensor)
    const controlRef = ref(db, "sensor/emergency");

    onValue(controlRef, (snapshot) => {

      const data = snapshot.val();

      if (data && data.emergency !== undefined) {
        setEmergency(data.emergency);
      }

    });

  }, []);

  // ===============================
  // EMERGENCY BUTTON
  // ===============================
  function handleEmergency() {
    // Toggle emergency: jika false -> true, jika true -> false
    const newEmergencyState = !emergency;
    // Tulis ke path terpisah untuk kontrol (bukan sensor)
    set(ref(db, "sensor/emergency"), newEmergencyState);
  }

  // ===============================
  // PHASE COLOR
  // ===============================
  const phase = {
    name: status,
    color:
      emergency
        ? "bg-red-600"
        : status === "ROASTING"
        ? "bg-green-600"
        : "bg-blue-600"
  };

  // ===============================
  // WARNING
  // ===============================
  const showWarning =
    (drumTemp > 215 || beanTemp > 205) &&
    !emergency;

  // ===============================
  // UI
  // ===============================
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 p-8">

      <div className="max-w-7xl mx-auto space-y-6">

        <Header
          phase={phase}
          isRunning={status === "ROASTING"}
          emergencyActive={emergency}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <TemperatureCard
            type="drum"
            temperature={drumTemp}
            target="200-220°C"
            trend="stable"
          />

          <TemperatureCard
            type="bean"
            temperature={beanTemp}
            target="180-200°C"
            trend="stable"
          />

          <DurationCard duration={duration} />

        </div>

        <TemperatureGraph tempHistory={tempHistory} />

        <EmergencyButton onClick={handleEmergency} isActive={emergency} />

        <AlertWarning show={showWarning} />

      </div>

    </div>
  );
}