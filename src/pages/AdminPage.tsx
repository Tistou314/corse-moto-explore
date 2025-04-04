
import { useEffect } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
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

const AdminPage = () => {
  const navigate = useNavigate();

  // Effet pour vérifier l'authentification (à implémenter plus tard si nécessaire)
  useEffect(() => {
    // Code d'authentification à ajouter ici si nécessaire
  }, [navigate]);

  return (
    <>
      <Helmet>
        <title>Administration | Moto en Corse</title>
      </Helmet>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/posts" element={<PostsList />} />
          <Route path="/posts/new" element={<PostCreate />} />
          <Route path="/posts/edit/:id" element={<PostEdit />} />
          <Route path="/categories" element={<CategoriesList />} />
          <Route path="/categories/new" element={<CategoryCreate />} />
          <Route path="/categories/edit/:id" element={<CategoryEdit />} />
          <Route path="/pages" element={<PagesList />} />
          <Route path="/pages/new" element={<PageCreate />} />
          <Route path="/pages/edit/:id" element={<PageEdit />} />
        </Routes>
      </AdminLayout>
    </>
  );
};

export default AdminPage;
