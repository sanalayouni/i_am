
import SidePanel from '../components/SidePanel';

export default function SidebarPage() {
  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <div className="min-h-screen flex bg-[#0A1D3A] text-white">
      {/* Sidebar: full height */}
      <div className="h-screen">
        <SidePanel userName="Nadia Martin" onLogout={handleLogout} />
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-3xl font-bold">Sidebar Test Page</h1>
      </div>
    </div>
  );
}
export { SidebarPage };