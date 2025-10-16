import BusinessCard from "../components/personneCard";
import SidePanel from "../components/SidePanel";
import { useState, useRef, useEffect } from "react";
function PersonneCardPage() {
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const panelRef = useRef(null);

  // Hide panel when clicking outside it
  useEffect(() => {
    function handleClickOutside(event) {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsPanelOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex h-screen m-0 p-0 relative">
      {/* Main content */}
      <div className="flex-1 flex items-center justify-center">
        <BusinessCard />
      </div>

      {/* Side panel */}
      <div
        ref={panelRef}
        className={`fixed top-0 right-0 h-full w-64 bg-gray-100 shadow-lg transform transition-transform duration-300 ${
          isPanelOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <SidePanel />
      </div>

      {/* Hover zone to reopen the panel */}
      <div
        onMouseEnter={() => setIsPanelOpen(true)}
        className="fixed top-0 right-0 h-full w-2 cursor-pointer"
      ></div>
    </div>
  );
}

export default PersonneCardPage;