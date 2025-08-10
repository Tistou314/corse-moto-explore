
import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useAuth } from "@/contexts/AuthContext";
import AdminLogin from "@/components/admin/AdminLogin";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminDashboard from "@/components/admin/AdminDashboard";
import PostsList from "@/components/admin/posts/PostsList";
import PostEdit from "@/components/admin/posts/PostEdit";
import PostCreate from "@/components/admin/posts/PostCreate";
import CategoriesList from "@/components/admin/categories/CategoriesList";
import CategoryEdit from "@/components/admin/categories/CategoryEdit";
import CategoryCreate from "@/components/admin/categories/CategoryCreate";
import PagesList from "@/components/admin/pages/PagesList";
import PageEdit from "@/components/admin/pages/PageEdit";
import PageCreate from "@/components/admin/pages/PageCreate";
import AccommodationsList from "@/components/admin/accommodations/AccommodationsList";
import AccommodationEdit from "@/components/admin/accommodations/AccommodationEdit";
import AccommodationCreate from "@/components/admin/accommodations/AccommodationCreate";
import PointsOfInterestList from "@/components/admin/points-of-interest/PointsOfInterestList";
import PointOfInterestEdit from "@/components/admin/points-of-interest/PointOfInterestEdit";
import PointOfInterestCreate from "@/components/admin/points-of-interest/PointOfInterestCreate";
import ItinerariesList from "@/components/admin/itineraries/ItinerariesList";
import ItineraryEdit from "@/components/admin/itineraries/ItineraryEdit";
import ItineraryCreate from "@/components/admin/itineraries/ItineraryCreate";
import GasStationsList from "@/components/admin/gas-stations/GasStationsList";
import GasStationCreate from "@/components/admin/gas-stations/GasStationCreate";
import GasStationEdit from "@/components/admin/gas-stations/GasStationEdit";

const AdminPage = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-corsica-azure"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <>
        <Helmet>
          <title>Connexion Admin | Moto en Corse</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <AdminLogin />
      </>
    );
  }

  return (
    <>
        <Helmet>
          <title>Administration | Moto en Corse</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
      <AdminLayout>
        <Routes>
          <Route index element={<AdminDashboard />} />
          <Route path="posts" element={<PostsList />} />
          <Route path="posts/new" element={<PostCreate />} />
          <Route path="posts/edit/:id" element={<PostEdit />} />
          <Route path="categories" element={<CategoriesList />} />
          <Route path="categories/new" element={<CategoryCreate />} />
          <Route path="categories/edit/:id" element={<CategoryEdit />} />
          <Route path="pages" element={<PagesList />} />
          <Route path="pages/new" element={<PageCreate />} />
          <Route path="pages/edit/:id" element={<PageEdit />} />
          <Route path="accommodations" element={<AccommodationsList />} />
          <Route path="accommodations/new" element={<AccommodationCreate />} />
          <Route path="accommodations/edit/:id" element={<AccommodationEdit />} />
          <Route path="points-of-interest" element={<PointsOfInterestList />} />
          <Route path="points-of-interest/new" element={<PointOfInterestCreate />} />
          <Route path="points-of-interest/edit/:id" element={<PointOfInterestEdit />} />
          <Route path="itineraries" element={<ItinerariesList />} />
          <Route path="itineraries/new" element={<ItineraryCreate />} />
          <Route path="itineraries/edit/:id" element={<ItineraryEdit />} />
          <Route path="gas-stations" element={<GasStationsList />} />
          <Route path="gas-stations/new" element={<GasStationCreate />} />
          <Route path="gas-stations/edit/:id" element={<GasStationEdit />} />
        </Routes>
      </AdminLayout>
    </>
  );
};

export default AdminPage;
