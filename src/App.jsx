import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onDone={() => setLoading(false)} />}
      <div style={{ visibility: loading ? "hidden" : "visible" }}>
        {/* <Toaster /> */}
      </div>
      <div className="app-root">
        <Navbar />
        {/* <ScrollToTop /> */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
