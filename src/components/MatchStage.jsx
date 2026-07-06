"use client";
import {useState, useRef, useEffect} from "react";

export default function MatchStage({ setStage, setAnswers, currentAnswers }) {
  const[items, setItems] = useState([
    {id: 1, text: "The first Wi-Fi standard, introducing wireless networking on the 2.4 GHz band with speeds up to 2 Mbps.", correctZone: "IEEE 802.11"},
    {id: 2, text: "An early 2.4 GHz Wi-Fi standard that increased speeds up to 11 Mbps.", correctZone: "IEEE 802.11b"},
    {id: 3, text: "A 5 GHz Wi-Fi standard designed for faster speeds and less interference.", correctZone: "IEEE 802.11a"},
    {id: 4, text: "A 2.4 GHz standard that improved compatibility and became very common in homes.", correctZone: "IEEE 802.11g"},
    {id: 5, text: "A standard that added MIMO and much higher throughput, making Wi-Fi 4 faster and more efficient.", correctZone: "IEEE 802.11n (Wi-Fi 4)"},
    {id: 6, text: "A 5 GHz standard known for major speed improvements and wider channel use.", correctZone: "IEEE 802.11ac (Wi-Fi 5)"},
    {id: 7, text: "A Wi-Fi 6 generation standard focused on efficiency, better performance in crowded networks, and support for 6 GHz in 6E.", correctZone: "IEEE 802.11ax (Wi-Fi 6 / 6E)"},
    {id: 8, text: "The newest generation in this set, designed for even higher throughput, lower latency, and improved multi-device performance.", correctZone: "IEEE 802.11be (Wi-Fi 7)"}
  ]);

  const [zones, setZones] = useState({
    "IEEE 802.11": [],
    "IEEE 802.11b": [],
    "IEEE 802.11a": [],
    "IEEE 802.11g": [],
    "IEEE 802.11n (Wi-Fi 4)": [],
    "IEEE 802.11ac (Wi-Fi 5)": [],
    "IEEE 802.11ax (Wi-Fi 6 / 6E)": [],
    "IEEE 802.11be (Wi-Fi 7)": []
  });

  const [draggedItem, setDraggedItem] = useState(null);
  const draggedItemRef = useRef(null);

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

  useEffect(() => {
    let activeTouchItem = null;

    const handleTouchStart = (e) => {
      const id = Number(e.currentTarget.dataset.id);
      activeTouchItem = items.find(i => i.id === id);
      if (activeTouchItem) e.currentTarget.style.opacity = "0.6";
    };

    const handleTouchEnd = (e) => {
      if (!activeTouchItem) return;
      e.currentTarget.style.opacity = "1";
      const zoneName = e.currentTarget.dataset.zone;
      if (zoneName) placeItem(activeTouchItem, zoneName);
      activeTouchItem = null;
    };

    const itemsEl = document.querySelectorAll(".draggable-item");
    const zonesEl = document.querySelectorAll(".drop-zone");

    itemsEl.forEach(el => el.addEventListener("touchstart", handleTouchStart));
    zonesEl.forEach(el => el.addEventListener("touchend", handleTouchEnd));

    return () => {
      itemsEl.forEach(el => el.removeEventListener("touchstart", handleTouchStart));
      zonesEl.forEach(el => el.removeEventListener("touchend", handleTouchEnd));
    };
  }, [items]);

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
  };

  // Move item back to list
  const moveBack = (item, zone) => {
    setZones(prev => ({
      ...prev,
      [zone]: prev[zone].filter(i => i.id !== item.id)
    }));
    setItems(prev => [...prev, { id: item.id, text: item.text, correctZone: item.correctZone }]);
  };

  // Save results and go to next stage
  const goToMCQ = () => {
    const allMatches = [
      ...zones["IEEE 802.11"],
      ...zones["IEEE 802.11b"],
      ...zones["IEEE 802.11a"],
      ...zones["IEEE 802.11g"],
      ...zones["IEEE 802.11n (Wi-Fi 4)"],
      ...zones["IEEE 802.11ac (Wi-Fi 5)"],
      ...zones["IEEE 802.11ax (Wi-Fi 6 / 6E)"],
      ...zones["IEEE 802.11be (Wi-Fi 7)"]
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
              data-id={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
              className="draggable-item"
              style={{
                padding: "10px 14px",
                background: "#e3f2fd",
                border: "1px solid #002270a7",
                borderRadius: "6px",
                width: "100%",
                maxWidth: "240px",
                cursor: "grab",
                touchAction: "none"
              }}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "16px"
      }}>
        {[
          { key: "IEEE 802.11", label: "IEEE 802.11" },
          { key: "IEEE 802.11b", label: "IEEE 802.11b" },
          { key: "IEEE 802.11a", label: "IEEE 802.11a" },
          { key: "IEEE 802.11g", label: "IEEE 802.11g" },
          { key: "IEEE 802.11n (Wi-Fi 4)", label: "IEEE 802.11n (Wi-Fi 4)" },
          { key: "IEEE 802.11ac (Wi-Fi 5)", label: "IEEE 802.11ac (Wi-Fi 5)" },
          { key: "IEEE 802.11ax (Wi-Fi 6 / 6E)", label: "IEEE 802.11ax (Wi-Fi 6 / 6E)" },
          { key: "IEEE 802.11be (Wi-Fi 7)", label: "IEEE 802.11be (Wi-Fi 7)" }
        ].map(zone => (
          <div
            key={zone.key}
            data-zone={zone.key}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, zone.key)}
            className="drop-zone"
            style={{
              minHeight: "140px",
              padding: "14px",
              border: "2px dashed #999",
              borderRadius: "8px",
              background: "#f9f9f9"
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
                  onClick={() => moveBack(item, zone.key)}
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