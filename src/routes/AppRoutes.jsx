import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from '../components/layout/AdminLayout';
import Dashboard from '../pages/admin/Dashboard';
import Rooms from '../pages/admin/Rooms';
import Receptionists from '../pages/admin/Receptionists';
import Bookings from '../pages/admin/Bookings';
import Customers from '../pages/admin/Customers';
import Payments from '../pages/admin/Payments';
import Coupons from '../pages/admin/Coupons';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="receptionists" element={<Receptionists />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="customers" element={<Customers />} />
        <Route path="payments" element={<Payments />} />
        <Route path="coupons" element={<Coupons />} />
      </Route>
    </Routes>
  );
}