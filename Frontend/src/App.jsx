import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";

// Public Pages
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

// Dashboards
import UserDashboard from "./pages/dashboard/UserDashboard.jsx";

// Admin Pages
import AdminDashboard from "./pages/dashboard/admin/AdminDashboard.jsx";
import AdminProducts from "./pages/dashboard/admin/AdminProducts.jsx";
import AdminProductForm from "./pages/dashboard/admin/AdminProductForm.jsx";

// Route Guards
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AdminRoute from "./components/AdminRoute.jsx";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* User Dashboard */}
        <Route
          path="/dashboard/user"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        {/* Admin Dashboard */}
        <Route
          path="/dashboard/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />.

        {/* Admin Products */}
        <Route
          path="/dashboard/admin/products"
          element={
            <AdminRoute>
              <AdminProducts />
            </AdminRoute>
          }
        />

        {/* Add/Edit Product */}
        <Route
          path="/dashboard/admin/products/:id"
          element={
            <AdminRoute>
              <AdminProductForm />
            </AdminRoute>
          }
        />

        <Route path="*" element={<h2 style={{ padding: 20 }}>404 Page Not Found</h2>} />
      </Routes>
    </>
  );
}
