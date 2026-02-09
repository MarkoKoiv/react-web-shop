import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

import Avaleht from "./pages/Avaleht";
import Esindused from "./pages/arrays/Esindused";
import Kinkekaardid from "./pages/Kinkekaardid";
import Ostukorv from "./pages/Ostukorv";
import Seaded from "./pages/Seaded";
import Kalkulaator from "./pages/Kalkulaator";

import ArraysHome from "./pages/arrays/ArraysHome";
import Autod from "./pages/arrays/Autod";
import Hinnad from "./pages/arrays/Hinnad";
import Kasutajad from "./pages/arrays/Kasutajad";
import Tootajad from "./pages/arrays/Tootajad";
import Tooted from "./pages/arrays/Tooted";

import HaldaHome from "./pages/halda/HaldaHome";
import HaldaAutod from "./pages/halda/HaldaAutod";
import HaldaEsindused from "./pages/halda/HaldaEsindused";
import HaldaHinnad from "./pages/halda/HaldaHinnad";
import HaldaKasutajad from "./pages/halda/HaldaKasutajad";
import HaldaTootajad from "./pages/halda/HaldaTootajad";
import HaldaTooted from "./pages/halda/HaldaTooted";

import LisaHome from "./pages/lisa/LisaHome";
import LisaAuto from "./pages/lisa/LisaAuto";
import LisaEsindus from "./pages/lisa/LisaEsindus";
import LisaHind from "./pages/lisa/LisaHind";
import LisaKasutaja from "./pages/lisa/LisaKasutaja";
import LisaTootaja from "./pages/lisa/LisaTootaja";
import LisaToode from "./pages/lisa/LisaToode";

import MuudaAuto from "./pages/muuda/MuudaAuto";
import MuudaEsindus from "./pages/muuda/MuudaEsindus";
import MuudaHind from "./pages/muuda/MuudaHind";
import MuudaKasutaja from "./pages/muuda/MuudaKasutaja";
import MuudaTootaja from "./pages/muuda/MuudaTootaja";
import MuudaToode from "./pages/muuda/MuudaToode";

import YksAuto from "./pages/yks/YksAuto";
import YksHind from "./pages/yks/YksHind";
import YksKasutaja from "./pages/yks/YksKasutaja";
import YksTootaja from "./pages/yks/YksTootaja";
import YksToode from "./pages/yks/YksToode";
import YksEsindus from "./pages/yks/yksEsindus";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Avaleht />} />
          <Route path="kinkekaardid" element={<Kinkekaardid />} />
          {/* <Route path="lisa-toode" element={<LisaToode />} /> */}
          <Route path="ostukorv" element={<Ostukorv />} />
          <Route path="seaded" element={<Seaded />} />
          <Route path="kalkulaator" element={<Kalkulaator />} />

          <Route path="arrays" element={<ArraysHome />} />
          <Route path="autod" element={<Autod />} />
          <Route path="esindused" element={<Esindused />} />
          <Route path="hinnad" element={<Hinnad />} />
          <Route path="kasutajad" element={<Kasutajad />} />
          <Route path="tootajad" element={<Tootajad />} />
          <Route path="tooted" element={<Tooted />} />

          <Route path="halda" element={<HaldaHome />} />
          <Route path="halda-autod" element={<HaldaAutod />} />
          <Route path="halda-esindused" element={<HaldaEsindused />} />
          <Route path="halda-hinnad" element={<HaldaHinnad />} />
          <Route path="halda-kasutajad" element={<HaldaKasutajad />} />
          <Route path="halda-tootajad" element={<HaldaTootajad />} />
          <Route path="halda-tooted" element={<HaldaTooted />} />

          <Route path="lisa" element={<LisaHome />} />
          <Route path="lisa-auto" element={<LisaAuto />} />
          <Route path="lisa-esindus" element={<LisaEsindus />} />
          <Route path="lisa-hind" element={<LisaHind />} />
          <Route path="lisa-kasutaja" element={<LisaKasutaja />} />
          <Route path="lisa-tootaja" element={<LisaTootaja />} />
          <Route path="lisa-toode" element={<LisaToode />} />

          <Route path="muuda-auto" element={<MuudaAuto />} />
          <Route path="muuda-esindus" element={<MuudaEsindus />} />
          <Route path="muuda-hind" element={<MuudaHind />} />
          <Route path="muuda-kasutaja" element={<MuudaKasutaja />} />
          <Route path="muuda-tootaja" element={<MuudaTootaja />} />
          <Route path="muuda-toode" element={<MuudaToode />} />

          <Route path="muuda-auto/:index" element={<MuudaAuto />} />
          <Route path="muuda-esindus/:index" element={<MuudaEsindus />} />
          <Route path="muuda-hind/:index" element={<MuudaHind />} />
          <Route path="muuda-kasutaja/:index" element={<MuudaKasutaja />} />
          <Route path="muuda-tootaja/:index" element={<MuudaTootaja />} />
          <Route path="muuda-toode/:index" element={<MuudaToode />} />

          <Route path="auto/:jrknr" element={<YksAuto />} />
          <Route path="esindus/:esinduse_nimi" element={<YksEsindus />} />
          <Route path="hind/:hind_arvuna" element={<YksHind />} />
          <Route path="kasutaja/:kasutaja_nimi" element={<YksKasutaja />} />
          <Route path="tootaja/:tootaja_nimi" element={<YksTootaja />} />
          <Route path="toode/:jrknr" element={<YksToode />} />


        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
