"use client";
import {useState, useRef, useEffect} from "react";

export default function MatchStage({ setStage, setAnswers, currentAnswers }) {
  // Define descriptions and its correct zone
  const[items, setItems] = useState([
    {
      id: 1,
      text: "Early 802.11, 802.11b, 802.11a, and 802.11g standards; useful foundation, but limited by speed, interference, and compatibility issues.",
      correctZone: "Wi-Fi 0-3"
    },
    {
      id: 2,
      text: "802.11n generation that introduced MIMO, wider 40 MHz channels, and support for both 2.4 GHz and 5 GHz bands.",
      correctZone: "Wi-Fi 4"
    },
    {
      id: 3,
      text: "802.11ac generation focused on faster 5 GHz performance through wider channels, beamforming, and MU-MIMO.",
      correctZone: "Wi-Fi 5"
    },
    {
      id: 4,
      text: "802.11ax generation built for crowded networks with OFDMA, better multi-device efficiency, and a 6 GHz extension through Wi-Fi 6E.",
      correctZone: "Wi-Fi 6"
    },
    {
      id: 5,
      text: "802.11be generation that uses Multi-Link Operation so devices can coordinate multiple links for higher capacity and lower latency.",
      correctZone: "Wi-Fi 7"
    }
  ]);

  // Declare the zones
  const [zones, setZones] = useState({
    "WiFi 0-3": [],
    "WiFi 4": [],
    "WiFi 5": [],
    "WiFi 6": [],
    "WiFi 7": []
  });

  // Store item being dragged (PC)
  const [draggedItem, setDraggedItem] = useState(null);
  const draggedItemRef = useRef(null);

  // Store item being selected (Mobile)
  const [selectedItem, setSelectedItem] = useState(null);

  const placeItem = (item, zoneName) => {
    // Remove from source list
    setItems(prev => prev.filter(i => i.id !== item.id));

    // Check if answer is correct
    const isCorrect = item.correctZone === zoneName;

    // Add to target zone
    setZones(prev => ({
      ...prev,
      [zoneName]: [...prev[zoneName], { ...item, assignedZone: zoneName, isCorrect }]
    }));

    setSelectedItem(null);
  };

  // PC layout (Drag)
  const handleDragStart = (e, item) => {
    setDraggedItem(item);
    draggedItemRef.current = item;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", "");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, zoneName) => {
    e.preventDefault();
    const item = draggedItem || draggedItemRef.current;
    if (!item) return;

    placeItem(item, zoneName);
    setDraggedItem(null);
    draggedItemRef.current = null;
  };

  // Mobile Layout (Click)
  const handleItemClick = (item, e) => {
    e.stopPropagation();

    if (selectedItem?.id === item.id) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
  };

  const handleZoneClick = (zoneName, e) => {
    e.stopPropagation();
    if (!selectedItem) return;
    placeItem(selectedItem, zoneName);
  };

  // Move item back to list
  const moveBack = (item, zone, e) => {
    e.stopPropagation();
    setZones(prev => ({
      ...prev,
      [zone]: prev[zone].filter(i => i.id !== item.id)
    }));
    setItems(prev => [...prev, { id: item.id, text: item.text, correctZone: item.correctZone }]);
  };

  // Save results and go to next stage
  const goToMCQ = () => {
    const allMatches = [
      ...zones["Wi-Fi 0-3"],
      ...zones["Wi-Fi 4"],
      ...zones["Wi-Fi 5"],
      ...zones["Wi-Fi 6"],
      ...zones["Wi-Fi 7"]
    ];
    const allResults = [
      ...allMatches,
      ...items.map(item => ({
        ...item,
        assignedZone: "Not Answered",
        isCorrect: false
      }))
    ];
    setAnswers({ ...currentAnswers, matchResults: allResults });
    setStage("mcq");
  };

  return (
    <div>
      <div style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {items.map(item => (
            <div
              key={item.id}
              draggable="true"
              onDragStart={(e) => handleDragStart(e, item)}
              onClick={(e) => handleItemClick(item, e)}
              style={{
                padding: "12px 14px",
                background: selectedItem?.id === item.id ? "#bbdefb" : "#e3f2fd",
                border: selectedItem?.id === item.id ? "1px solid #1976d2" : "1px solid #002270a7",
                borderRadius: "8px",
                width: "100%",
                maxWidth: "100%",
                minHeight: "44px",
                cursor: "pointer",
                touchAction: "pan-y"
              }}
            >
              {item.text}
              {selectedItem?.id === item.id && <span style={{ marginLeft: 8, fontSize: 12, color: "#0d47a1" }}>Selected</span>}
            </div>
          ))}
        </div>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))",
        gap: "16px"
      }}>
        {[
          { key: "WiFi 0-3", label: "WiFi 0-3" },
          { key: "WiFi 4", label: "WiFi 4" },
          { key: "WiFi 5", label: "WiFi 5" },
          { key: "WiFi 6", label: "WiFi 6" },
          { key: "WiFi 7", label: "WiFi 7" }
        ].map(zone => (
          <div
            key={zone.key}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, zone.key)}
            onClick={(e) => handleZoneClick(zone.key, e)}
            className="drop-zone"
            style={{
              minHeight: "140px",
              padding: "14px",
              border: selectedItem ? "2px solid #64b5f6" : "2px dashed #999",
              borderRadius: "8px",
              background: selectedItem ? "#e3f2fd" : "#f9f9f9",
              cursor: "pointer"
            }}
          >
            <h4 style={{ marginTop: 0, fontSize: "17px" }}>{zone.label}</h4>
            {zones[zone.key].map(item => (
              <div
                key={item.id}
                style={{
                  padding: "8px 10px",
                  margin: "6px 0",
                  borderRadius: "4px",
                  background: "#002170",
                  border: "1px solid #002170",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: "#fff"
                }}
              >
                <span>{item.text}</span>
                <button
                  onClick={(e) => moveBack(item, zone.key, e)}
                  style={{
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    fontSize: "18px",
                    color: "#fff"
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>

      <button
        onClick={goToMCQ}
        style={{
          marginTop: "24px",
          padding: "10px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "6px",
          background: "#002170",
          color: "white",
          cursor: "pointer",
          width: "100%",
          maxWidth: "200px"
        }}
      >
        Next →
      </button>
    </div>
  );
}