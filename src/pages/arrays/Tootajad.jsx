import { useState } from "react";
import allNames from "../../data/Tootajad.json";
import { Link } from "react-router-dom";

function Tootajad() {
  const [nimed, setNimed] = useState(allNames);
  

  function reset() {
    setNimed(allNames);
  }

  // --- SORTEERIMINE ---
  function sorteeriAZ() {
    setNimed([...nimed].sort((a, b) => a.eesnimi.localeCompare(b.eesnimi)));
  }
  function sorteeriZA() {
    setNimed([...nimed].sort((a, b) => b.eesnimi.localeCompare(a.eesnimi)));
  }
  function sorteeriTahedKasvavalt() {
    setNimed([...nimed].sort((a, b) => a.eesnimi.length - b.eesnimi.length));
  }
  function sorteeriTahedKahanevalt() {
    setNimed([...nimed].sort((a, b) => b.eesnimi.length - a.eesnimi.length));
  }
  function sorteeriTeineTahtAZ() {
    setNimed(
      [...nimed].sort((a, b) =>
        (a.eesnimi[1] || "").localeCompare(b.eesnimi[1] || "")
      )
    );
  }
  function sorteeriSõnadeArv() {
    setNimed(
      [...nimed].sort(
        (a, b) => a.eesnimi.split(" ").length - b.eesnimi.split(" ").length
      )
    );
  }

  // --- FILTREERIMINE ---
  function filtreeriTäpselt3Tahte() {
    setNimed(nimed.filter((nimi) => nimi.eesnimi.length === 3));
  }
  function filtreeriRohkem5Tahte() {
    setNimed(nimed.filter((nimi) => nimi.eesnimi.length > 5));
  }
  function filtreeriAr() {
    setNimed(nimed.filter((nimi) => nimi.eesnimi.toLowerCase().includes("ar")));
  }
  function filtreeriNeljasTahI() {
    setNimed(nimed.filter((nimi) => nimi.eesnimi[3]?.toLowerCase() === "i"));
  }
  function filtreeriAlgabM() {
    setNimed(nimed.filter((nimi) => nimi.eesnimi[0]?.toUpperCase() === "M"));
  }
  function filtreeriPaarisTähed() {
    setNimed(nimed.filter((nimi) => nimi.eesnimi.length % 2 === 0));
  }
  function filtreeriLoppebA() {
    setNimed(nimed.filter((nimi) => nimi.eesnimi.toLowerCase().endsWith("a")));
  }
  function filtreeriVähemalt4Tahte() {
    setNimed(nimed.filter((nimi) => nimi.eesnimi.length >= 4));
  }
  function filtreeriTäpselt6Tahte() {
    setNimed(nimed.filter((nimi) => nimi.eesnimi.length === 6));
  }
  function filtreeriSisaldabR() {
    setNimed(nimed.filter((nimi) => nimi.eesnimi.toLowerCase().includes("r")));
  }
  function filtreeriKolmasTahI() {
    setNimed(nimed.filter((nimi) => nimi.eesnimi[2]?.toLowerCase() === "i"));
  }

  const btnBase =
    "px-3 py-1.5 rounded border border-gray-300 text-gray-700 hover:bg-gray-100 transition text-sm";

  const sectionTitle = "text-sm font-semibold text-gray-900 text-center";
  const sectionBox = "bg-white border border-gray-200 rounded-lg p-4";

  return (
    <div className="min-h-screen flex justify-center items-start mt-16 px-4">
      <div className="w-full max-w-3xl">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 text-center">
            Töötajad
          </h2>
          <p className="mt-2 text-gray-700 text-center">
            Kokku töötajaid:{" "}
            <span className="font-semibold text-gray-900">{nimed.length}</span>
          </p>

          {/* Reset */}
          <div className="mt-6 flex justify-center">
            <button onClick={reset} className={btnBase} type="button">
              Reset
            </button>
          </div>

          {/* Sorteerimine */}
          <div className="mt-6">
            <div className={sectionBox}>
              <div className={sectionTitle}>Sorteerimine</div>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                <button onClick={sorteeriAZ} className={btnBase} type="button">
                  A-Z
                </button>
                <button onClick={sorteeriZA} className={btnBase} type="button">
                  Z-A
                </button>
                <button
                  onClick={sorteeriTahedKasvavalt}
                  className={btnBase}
                  type="button"
                >
                  Tähed ↑
                </button>
                <button
                  onClick={sorteeriTahedKahanevalt}
                  className={btnBase}
                  type="button"
                >
                  Tähed ↓
                </button>
                <button
                  onClick={sorteeriTeineTahtAZ}
                  className={btnBase}
                  type="button"
                >
                  2. täht A-Z
                </button>
                <button
                  onClick={sorteeriSõnadeArv}
                  className={btnBase}
                  type="button"
                >
                  Sõnade arv
                </button>
              </div>
            </div>
          </div>

          {/* Filtreerimine */}
          <div className="mt-4">
            <div className={sectionBox}>
              <div className={sectionTitle}>Filtreerimine</div>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                <button
                  onClick={filtreeriTäpselt3Tahte}
                  className={btnBase}
                  type="button"
                >
                  Täpselt 3
                </button>
                <button
                  onClick={filtreeriRohkem5Tahte}
                  className={btnBase}
                  type="button"
                >
                  &gt; 5 tähte
                </button>
                <button onClick={filtreeriAr} className={btnBase} type="button">
                  Sisaldab “ar”
                </button>
                <button
                  onClick={filtreeriNeljasTahI}
                  className={btnBase}
                  type="button"
                >
                  4. täht “i”
                </button>
                <button
                  onClick={filtreeriAlgabM}
                  className={btnBase}
                  type="button"
                >
                  Algab M
                </button>
                <button
                  onClick={filtreeriPaarisTähed}
                  className={btnBase}
                  type="button"
                >
                  Paaris tähed
                </button>
                <button
                  onClick={filtreeriLoppebA}
                  className={btnBase}
                  type="button"
                >
                  Lõppeb “a”
                </button>
                <button
                  onClick={filtreeriVähemalt4Tahte}
                  className={btnBase}
                  type="button"
                >
                  ≥ 4 tähte
                </button>
                <button
                  onClick={filtreeriTäpselt6Tahte}
                  className={btnBase}
                  type="button"
                >
                  Täpselt 6
                </button>
                <button
                  onClick={filtreeriSisaldabR}
                  className={btnBase}
                  type="button"
                >
                  Sisaldab “r”
                </button>
                <button
                  onClick={filtreeriKolmasTahI}
                  className={btnBase}
                  type="button"
                >
                  3. täht “i”
                </button>
              </div>
            </div>
          </div>

          {/* Nimekiri */}
          <div className="mt-6 space-y-3">
            {nimed.map((nimi, idx) => (
              <div
                key={`${nimi.eesnimi}-${nimi.perenimi}-${idx}`}
                className="p-4 bg-white border border-gray-200 rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
              >
                <div className="text-gray-900 font-medium">
                  {nimi.eesnimi} {nimi.perenimi}
                </div>

                <div className="text-gray-700 text-sm">
                  {nimi.ametikoht}
                  <span className="mx-6 text-gray-300">•</span>
                  {nimi.telefon}
                  <Link to={`/tootaja/${nimi.eesnimi.toLowerCase()}-${nimi.perenimi.toLowerCase()}`}>
                  <button className="mx-2 px-3 py-1.5 rounded border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
                    Vt lähemalt
                  </button>
                </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tootajad;
