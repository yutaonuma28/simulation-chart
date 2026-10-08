import { useState } from "react";
import SimChart from "./SimChart";
import StillnessChart from "./StillnessChart";

const TABS = [
  { id: "sim",       label: "力・密度診断",    Component: SimChart       },
  { id: "stillness", label: "静止判定 μ比較",  Component: StillnessChart },
];

function App() {
  const [tab, setTab] = useState("sim");
  const { Component } = TABS.find(t => t.id === tab);

  return (
    <>
      <nav style={{
        display: "flex",
        gap: 8,
        padding: "10px 16px",
        background: "#0f0f1a",
        borderBottom: "1px solid #2a2a4a",
      }}>
        {TABS.map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              padding: "6px 20px",
              borderRadius: 20,
              border: "none",
              cursor: "pointer",
              background: tab === t.id ? "#7ecfff33" : "transparent",
              color:       tab === t.id ? "#7ecfff"   : "#555",
              fontWeight: 600,
              fontSize: 13,
              transition: "all 0.2s",
            }}
          >
            {t.label}
          </button>
        ))}
      </nav>
      <Component />
    </>
  );
}

export default App;