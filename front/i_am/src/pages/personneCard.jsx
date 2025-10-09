import BusinessCard from "../components/personneCard";
import SidePanel from "../components/SidePanel";

function PersonneCardPage() {
  return (
    <div className="flex h-screen m-0 p-0">
      <div className="flex-1 flex items-center justify-center">
        <BusinessCard />
      </div>
      <SidePanel />
    </div>
  );
}

export default PersonneCardPage;