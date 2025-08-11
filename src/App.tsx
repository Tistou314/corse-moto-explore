
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { MapProvider } from "@/contexts/MapContext";
import { AuthProvider } from "@/contexts/AuthContext";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Index from "@/pages/Index";
import ContactPage from "@/pages/ContactPage";
import FAQPage from "@/pages/FAQPage";
import HebergementPage from "@/pages/HebergementPage";
import ItinerairesPage from "@/pages/ItinerairesPage";
import ItineraryDetailPage from "@/pages/ItineraryDetailPage";
import GuidePratiquePage from "@/pages/GuidePratiquePage";
import AccommodationDetailPage from "@/pages/AccommodationDetailPage";
import BlogPage from "@/pages/BlogPage";
import BlogPostDetailPage from "@/pages/BlogPostDetailPage";
import AdminPage from "@/pages/AdminPage";
import GasStationsPage from "@/pages/GasStationsPage";
import NotFound from "@/pages/NotFound";
import SerpApiSettingsPage from "@/pages/SerpApiSettingsPage";

function App() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('apiKey');
    if (key) {
      localStorage.setItem('SERP_API_KEY', key);
    }
  }, []);
  return (
    <AuthProvider>
      <MapProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/hebergements" element={<HebergementPage />} />
            <Route path="/itineraires" element={<ItinerairesPage />} />
            <Route path="/itineraires/:id" element={<ItineraryDetailPage />} />
            <Route path="/guide-pratique" element={<GuidePratiquePage />} />
            <Route path="/hebergements/:id" element={<AccommodationDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostDetailPage />} />
            <Route path="/admin/*" element={<AdminPage />} />
            <Route path="/gas-stations" element={<GasStationsPage />} />
            <Route path="/serp-key" element={<SerpApiSettingsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ScrollToTopButton />
          <Toaster position="bottom-right" />
        </Router>
      </MapProvider>
    </AuthProvider>
  );
}

export default App;
