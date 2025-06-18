
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import Acteurs from "./pages/Acteurs";
import Forum from "./pages/Forum";
import CooperativeDetails from "./pages/CooperativeDetails";
import CooperativeDetailPage from "./pages/CooperativeDetailPage";
import CategoryActivities from "./pages/CategoryActivities";
import ActivityDetailPage from "./pages/ActivityDetailPage";
import CategoryPage from "./pages/CategoryPage";
import SubCategoryPage from "./pages/SubCategoryPage";
import CategoryProductsPage from "./pages/CategoryProductsPage";
import Auth from "./pages/Auth";
import ProductsPage from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import OffersPage from "./pages/OffersPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import HelpCenter from "./pages/HelpCenter";
import Contact from "./pages/Contact";
import Partners from "./pages/Partners";
import SellWithUs from "./pages/SellWithUs";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import ChefchaouenPage from "./pages/ChefchaouenPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/acteurs" element={<Acteurs />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/cooperatives/:slug" element={<CooperativeDetails />} />
            <Route path="/cooperative/:id" element={<CooperativeDetailPage />} />
            <Route path="/category/:profile/:category/:activity" element={<CategoryActivities />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/subcategory/:categoryId/:subCategoryId" element={<SubCategoryPage />} />
            <Route path="/products/:category" element={<ProductsPage />} />
            <Route path="/products/:category/:subcategory" element={<CategoryProductsPage />} />
            <Route path="/services/:category" element={<ServicesPage />} />
            <Route path="/services/:category/:subcategory" element={<CategoryProductsPage />} />
            <Route path="/offers/:category" element={<OffersPage />} />
            <Route path="/offers/:category/:subcategory" element={<CategoryProductsPage />} />
            <Route path="/activity/:id" element={<ActivityDetailPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/service/:id" element={<ProductDetailPage />} />
            <Route path="/offer/:id" element={<ProductDetailPage />} />
            <Route path="/morocco/chefchaouen" element={<ChefchaouenPage />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partners" element={<SellWithUs />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
