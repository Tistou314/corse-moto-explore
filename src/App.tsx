
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ItinerairesPage from "./pages/ItinerairesPage";
import ItineraryDetailPage from "./pages/ItineraryDetailPage";
import GuidePratiquePage from "./pages/GuidePratiquePage";
import MapPage from "./pages/MapPage";
import BlogPage from "./pages/BlogPage";
import BlogPostDetailPage from "./pages/BlogPostDetailPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import HebergementPage from "./pages/HebergementPage";
import FAQPage from "./pages/FAQPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/itineraires" element={<ItinerairesPage />} />
          <Route path="/itineraires/:id" element={<ItineraryDetailPage />} />
          <Route path="/guide" element={<GuidePratiquePage />} />
          <Route path="/carte" element={<MapPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/hebergements" element={<HebergementPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
