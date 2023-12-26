import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Ogretmendetay = React.lazy(() => import("pages/Ogretmendetay"));
const Ogretmenler = React.lazy(() => import("pages/Ogretmenler"));
const MedwiseEgitimciKayit = React.lazy(
  () => import("pages/MedwiseEgitimciKayit"),
);
const MedwiseKursFiyatlandirma = React.lazy(
  () => import("pages/MedwiseKursFiyatlandirma"),
);
const MedwiseKurs = React.lazy(() => import("pages/MedwiseKurs"));
const Magaza = React.lazy(() => import("pages/Magaza"));
const Anasayfa = React.lazy(() => import("pages/Anasayfa"));
const MedwiseKursDetay = React.lazy(() => import("pages/MedwiseKursDetay"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<MedwiseKursDetay />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/anasayfa" element={<Anasayfa />} />
          <Route path="/magaza" element={<Magaza />} />
          <Route path="/medwisekurs" element={<MedwiseKurs />} />
          <Route
            path="/medwisekursfiyatlandirma"
            element={<MedwiseKursFiyatlandirma />}
          />
          <Route
            path="/medwiseegitimcikayit"
            element={<MedwiseEgitimciKayit />}
          />
          <Route path="/ogretmenler" element={<Ogretmenler />} />
          <Route path="/ogretmendetay" element={<Ogretmendetay />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
