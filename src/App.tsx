
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { MapProvider } from "@/contexts/MapContext";
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
import MapPage from "@/pages/MapPage";
import AdminPage from "@/pages/AdminPage";
import GasStationsPage from "@/pages/GasStationsPage";
import StationServicePage from "@/pages/blog/StationServicePage";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <MapProvider>
      <Router>
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
          <Route path="/map" element={<MapPage />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/gas-stations" element={<GasStationsPage />} />
          <Route path="/blog/stations-service-corse" element={<StationServicePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster position="bottom-right" />
      </Router>
    </MapProvider>
  );
}

export default App;
