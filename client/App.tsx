import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/auth/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Docs from "./pages/Docs";
import Placeholder from "./pages/Placeholder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/docs" element={<Docs />} />
          
          {/* Placeholder routes */}
          <Route path="/demo" element={<Placeholder title="Demo" description="Interactive platform demo coming soon" />} />
          <Route path="/pricing" element={<Placeholder title="Pricing" description="Flexible pricing plans for every team" />} />
          <Route path="/examples" element={<Placeholder title="Examples" description="Browse example projects and templates" />} />
          <Route path="/features" element={<Placeholder title="Features" description="Detailed feature overview" />} />
          <Route path="/changelog" element={<Placeholder title="Changelog" description="Latest updates and improvements" />} />
          <Route path="/help" element={<Placeholder title="Help Center" description="Get support and find answers" />} />
          <Route path="/contact" element={<Placeholder title="Contact" description="Get in touch with our team" />} />
          <Route path="/status" element={<Placeholder title="Status" description="Platform status and uptime" />} />
          <Route path="/community" element={<Placeholder title="Community" description="Join our developer community" />} />
          <Route path="/privacy" element={<Placeholder title="Privacy Policy" description="How we protect your data" />} />
          <Route path="/terms" element={<Placeholder title="Terms of Service" description="Platform terms and conditions" />} />
          <Route path="/security" element={<Placeholder title="Security" description="Security measures and compliance" />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
