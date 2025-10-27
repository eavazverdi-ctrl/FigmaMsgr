import { useState } from "react";
import Component1 from "./imports/5";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'linear-gradient(to bottom right, #60a5fa, #93c5fd, #bfdbfe)' }}>
      <div className="w-full max-w-[282px]">
        <Component1 />
      </div>
    </div>
  );
}
