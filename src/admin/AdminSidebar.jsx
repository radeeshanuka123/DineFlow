import { NavLink } from "react-router-dom";

function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <h2>DineFlow</h2>
      <p>Admin Panel</p>

      <nav>
        <NavLink to="/admin">Dashboard</NavLink>
        <NavLink to="/admin/foods">Foods</NavLink>
        <NavLink to="/admin/orders">Orders</NavLink>
        <NavLink to="/admin/users">Users</NavLink>
        <NavLink to="/admin/inquiries">Inquiries</NavLink>
        <NavLink to="/admin/sales">Sales</NavLink>
        <NavLink to="/admin/login-details">Login Details</NavLink>
      </nav>
    </aside>
  );
}

export default AdminSidebar;