import { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Home, Register, Login, Activity, Promotion, Wallet, Account, AboutUs, Language, Notification, CustomerService, BeginnerGuide, Download, Games } from "./pages";
import { Loader, Header, Footer, PageContainer } from "./components";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";

const LayoutHandler = () => {
  const [showLayout, setShowLayout] = useState(true);

  const { isAuthenticated } = useSelector((store) => store.userData);

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const shouldHideLayout = ["/register", "/login"].some((route) =>
      location.pathname.startsWith(route)
    );
    setShowLayout(!shouldHideLayout);

    const hashPath =
      window.location.href[window.location.href.length - 1] === "#"
        ? true
        : false;

    if (hashPath) {
      navigate("/");
    }
  }, [location, navigate]);

  return (
    <>
      {showLayout && <Header />}
      <PageContainer>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Normal Routes for All Visitors */}
          <Route path="/" element={<Home />} />

          {/* Protected Routes for Authentication */}
          <Route
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                isUserAllowed={false}
              />
            }
          >
          </Route>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />

          {/* Protected Routes for Logged Users */}
          <Route
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                isUserAllowed={true}
              />
            }
          >
              <Route path="/activity" element={<Activity />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/promotion" element={<Promotion />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/account" element={<Account />} />
              <Route path="/language" element={<Language />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/customer-service" element={<CustomerService />} />
              <Route path="/beginner-guide" element={<BeginnerGuide />} />
              <Route path="/download" element={<Download />} />
              <Route path="/games" element={<Games />} />
          </Route>
        </Routes>
      </Suspense>
      </PageContainer>
      {showLayout && <Footer />}
    </>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  });

  return isLoading ? (
    <Loader />
  ) : (
    <Router>
      <LayoutHandler />
    </Router>
  );
};

export default App;
