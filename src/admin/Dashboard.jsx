function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>

      <div className="admin-stats">
        <div className="stat-card">
          <h3>Total Foods</h3>
          <p>0</p>
        </div>

        <div className="stat-card">
          <h3>Total Orders</h3>
          <p>0</p>
        </div>

        <div className="stat-card">
          <h3>Total Users</h3>
          <p>0</p>
        </div>

        <div className="stat-card">
          <h3>Total Sales</h3>
          <p>Rs. 0</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;