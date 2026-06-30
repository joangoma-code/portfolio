"use client";

import { useState } from "react";

export default function ClickProbe() {
  const [pressed, setPressed] = useState(false);

  return (
    <button
      type="button"
      onPointerDown={() => {
        setPressed(true);
        alert("test-button-click");
      }}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      className={`fixed left-4 top-20 z-9999 rounded-full px-4 py-2 text-white ${pressed ? "bg-green-600" : "bg-red-500"}`}
    >
      {pressed ? "Pressed" : "Test click"}
    </button>
  );
}
