// React and modules imports
import { useState } from "react";


const SegmentedControl = () => {
    const [selected, setSelected] = useState("weight");

    return (
        <div style={{ display: "flex", border: "1px solid #ccc", borderRadius: "8px", overflow: "hidden" }}>
            {["weight", "volume", "quantity"].map((option) => (
                <button
                    key={option}
                    onClick={() => setSelected(option)}
                    style={{
                        flex: 1,
                        padding: "10px",
                        background: selected === option ? "#007bff" : "#f8f9fa",
                        color: selected === option ? "white" : "black",
                        border: "none",
                        cursor: "pointer"
                    }}
                >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
            ))}
        </div>
    );
};

export { SegmentedControl };
