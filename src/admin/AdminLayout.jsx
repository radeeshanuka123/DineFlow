import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

function AdminLayout() {
  return (
    <div className="admin-page">
      <AdminSidebar />

      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;