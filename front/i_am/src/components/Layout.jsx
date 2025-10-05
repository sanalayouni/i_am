// src/components/Layout.jsx
import SidePanel from "./SidePanel";

const Layout = ({ children, user }) => {
  return (
    <div className="flex min-h-screen">
      {/* Left Side Panel */}
      <SidePanel user={user} />

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        {children}
      </main>
    </div>
  );
};

export default Layout;
