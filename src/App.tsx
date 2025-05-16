import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Campaigns from "./pages/Campaigns";
import CampaignDetail from "./components/Campaigns/CampaignDetails";
import Contact from "./pages/Contact";

import { useAppContext } from "./contexts/appContext";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import NewCampaign from "./pages/NewCampaign";
import EditCampaign from "./pages/EditCampaign";
import AdminSignIn from "./pages/AdminSignIn";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useAppContext();
  return isLoggedIn ? <>{children}</> : <Navigate to="/" replace />;
};

function App() {
  return (
    <div>
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        {/* About Us */}
        <Route
          path="/about-us"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
        {/* Campaigns */}
        <Route
          path="/campaigns"
          element={
            <Layout>
              <Campaigns />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/campaigns/:id"
          element={
            <Layout>
              <CampaignDetail />
            </Layout>
          }
        />
        <Route path="/admin-signin" element={<AdminSignIn />} />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <Routes>
                <Route
                  path="/dashboard"
                  element={
                    <AdminLayout>
                      <AdminDashboard />
                    </AdminLayout>
                  }
                />
                <Route
                  path="/new"
                  element={
                    <AdminLayout>
                      <NewCampaign />
                    </AdminLayout>
                  }
                />
                <Route
                  path="/edit-campaign/:id"
                  element={
                    <AdminLayout>
                      <EditCampaign />
                    </AdminLayout>
                  }
                />
                <Route index element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
