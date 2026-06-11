import { auth } from "../firebase";

function Profile() {
  const user = auth.currentUser;

  return (
    <div className="account-page">
      <div className="account-header">
        <h1>My Account</h1>
        <p>Manage your restaurant account and order details.</p>
      </div>

      <div className="account-layout">
        <div className="account-sidebar-card">
          <img
            src={user?.photoURL || "https://ui-avatars.com/api/?name=Customer"}
            alt="Profile"
            className="account-avatar"
          />

          <h2>{user?.displayName || "Customer"}</h2>
          <p>{user?.email}</p>

          <span className="account-badge">
            {user?.emailVerified ? "Verified Account" : "Not Verified"}
          </span>
        </div>

        <div className="account-details-card">
          <h2>Account Details</h2>

          <div className="details-row">
            <span>Full Name</span>
            <strong>{user?.displayName || "Not provided"}</strong>
          </div>

          <div className="details-row">
            <span>Email Address</span>
            <strong>{user?.email}</strong>
          </div>

          <div className="details-row">
            <span>Login Method</span>
            <strong>
              {user?.providerData[0]?.providerId === "google.com"
                ? "Google"
                : "Email & Password"}
            </strong>
          </div>

          <div className="details-row">
            <span>Member Since</span>
            <strong>
              {user?.metadata?.creationTime
                ? new Date(user.metadata.creationTime).toLocaleDateString()
                : "-"}
            </strong>
          </div>
        </div>
      </div>

      <div className="account-actions">
        <button>My Orders</button>
        <button>Edit Profile</button>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Profile;