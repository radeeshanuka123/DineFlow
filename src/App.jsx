import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Foods from "./pages/Foods";
import FoodDetails from "./pages/FoodDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";
import AdminFoods from "./admin/Foods";
import AddFood from "./admin/AddFood";
import EditFood from "./admin/EditFood";
import Orders from "./admin/Orders";
import Users from "./admin/Users";
import Inquiries from "./admin/Inquiries";
import Sales from "./admin/Sales";
import LoginDetails from "./admin/LoginDetails";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        }
      />
      <Route
  path="/profile"
  element={
    <>
      <Navbar />
      <Profile />
    </>
  }
/>

      <Route
        path="/login"
        element={
          <>
            <Navbar />
            <Login />
            <Footer />
          </>
        }
      />

      <Route
        path="/register"
        element={
          <>
            <Navbar />
            <Register />
            <Footer />
          </>
        }
      />

      <Route
        path="/foods"
        element={
          <>
            <Navbar />
            <Foods />
            <Footer />
          </>
        }
      />

      <Route
        path="/foods/:id"
        element={
          <>
            <Navbar />
            <FoodDetails />
            <Footer />
          </>
        }
      />

      <Route
        path="/cart"
        element={
          <>
            <Navbar />
            <Cart />
            <Footer />
          </>
        }
      />

      <Route
        path="/checkout"
        element={
          <>
            <Navbar />
            <Checkout />
            <Footer />
          </>
        }
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Navbar />
            <AdminLayout />
            <Footer />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="foods" element={<AdminFoods />} />
        <Route path="foods/add" element={<AddFood />} />
        <Route path="foods/edit/:id" element={<EditFood />} />
        <Route path="orders" element={<Orders />} />
        <Route path="users" element={<Users />} />
        <Route path="inquiries" element={<Inquiries />} />
        <Route path="sales" element={<Sales />} />
        <Route path="login-details" element={<LoginDetails />} />
      </Route>
    </Routes>
  );
}

export default App;