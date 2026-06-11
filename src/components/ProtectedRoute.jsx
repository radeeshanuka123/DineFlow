import { Navigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      if (!user) {
        setIsAdmin(false);
        setChecking(false);
        return;
      }

      const userDoc = await getDoc(doc(db, "users", user.uid));

      if (userDoc.exists() && userDoc.data().role === "admin") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }

      setChecking(false);
    };

    checkAdmin();
  }, [user]);

  if (checking) {
    return <h2 style={{ padding: "30px" }}>Checking access...</h2>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/profile" replace />;
  }

  return children;
}

export default ProtectedRoute;