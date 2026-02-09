import { useState } from "react";
import allProducts from "../../data/Tooted.json";
import ostukorvFailist from "../../data/ostukorv.json";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

function Tooted() {
  const [tooted, setTooted] = useState(allProducts);

  const eur = (value) =>
    new Intl.NumberFormat("et-EE", { style: "currency", currency: "EUR" }).format(
      value
    );

  function reset() {
    setTooted(allProducts);
  }

  // --- SORTEERIMINE ---
  function sorteeriAZ() {
    setTooted([...tooted].sort((a, b) => a.nimi.localeCompare(b.nimi)));
  }
  function sorteeriZA() {
    setTooted([...tooted].sort((a, b) => b.nimi.localeCompare(a.nimi)));
  }
  function sorteeriTahedKasvavalt() {
    setTooted([...tooted].sort((a, b) => a.nimi.length - b.nimi.length));
  }
  function sorteeriTahedKahanevalt() {
    setTooted([...tooted].sort((a, b) => b.nimi.length - a.nimi.length));
  }
  function sorteeriTeineTahtAZ() {
    setTooted(
      [...tooted].sort((a, b) =>
        (a.nimi[1] || "").localeCompare(b.nimi[1] || "")
      )
    );
  }

  // --- FILTREERIMINE ---
  function filtreeriKuni6Tahte() {
    setTooted(tooted.filter((t) => t.nimi.length <= 6));
  }
  function filtreeriTapselt6Tahte() {
    setTooted(tooted.filter((t) => t.nimi.length === 6));
  }
  function filtreeriALoppevad() {
    setTooted(tooted.filter((t) => t.nimi.toLowerCase().endsWith("a")));
  }
  function filtreeriYLoppevad() {
    setTooted(tooted.filter((t) => t.nimi.toLowerCase().endsWith("y")));
  }
  function filtreeriPaarisTahte() {
    setTooted(tooted.filter((t) => t.nimi.length % 2 === 0));
  }

  function lisaOstukorvi(klikitudToode) {
    ostukorvFailist.push(klikitudToode);
    toast.success("Ostukorvi lisatud!");
  }

  const btnBase =
    "px-3 py-1.5 rounded border border-gray-300 text-gray-700 hover:bg-gray-100 transition text-sm";
  const btnPrimary =
    "px-3 py-1.5 rounded bg-slate-400 text-white hover:bg-gray-800 transition text-sm";
  const sectionTitle = "text-sm font-semibold text-gray-900 text-center";
  const sectionBox = "bg-white border border-gray-200 rounded-lg p-4";

  return (
    <div className="min-h-screen flex justify-center items-start mt-16 px-4">
      <div className="w-full max-w-3xl">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 text-center">
            Tooted
          </h2>

          <p className="mt-2 text-gray-700 text-center">
            Kokku tooteid:{" "}
            <span className="font-semibold text-gray-900">{tooted.length}</span>
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
              </div>
            </div>
          </div>

          {/* Filtreerimine */}
          <div className="mt-4">
            <div className={sectionBox}>
              <div className={sectionTitle}>Filtreerimine</div>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                <button
                  onClick={filtreeriKuni6Tahte}
                  className={btnBase}
                  type="button"
                >
                  ≤ 6 tähti
                </button>
                <button
                  onClick={filtreeriTapselt6Tahte}
                  className={btnBase}
                  type="button"
                >
                  Täpselt 6
                </button>
                <button
                  onClick={filtreeriALoppevad}
                  className={btnBase}
                  type="button"
                >
                  Lõppeb “a”
                </button>
                <button
                  onClick={filtreeriYLoppevad}
                  className={btnBase}
                  type="button"
                >
                  Lõppeb “y”
                </button>
                <button
                  onClick={filtreeriPaarisTahte}
                  className={btnBase}
                  type="button"
                >
                  Paaris tähed
                </button>
              </div>
            </div>
          </div>

          {/* Toodete list */}
          <div className="mt-6 space-y-3">
            {tooted.map((toode, jrknr) => (
              <div
                key={toode.id}
                className="p-4 bg-white border border-gray-200 rounded-lg grid grid-cols-[1fr_auto_auto] items-center gap-4"

              >
                <div className="min-w-0">
                  <div className="font-medium text-gray-900 truncate">
                    {toode.nimi}
                  </div>
                  <div className="text-sm text-gray-700">{eur(toode.hind)}</div>
                </div>
                 <Link to={"/toode/" + jrknr }>
                  <button className="mx-2 px-3 py-1.5 rounded border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
                    Vt lähemalt
                  </button>
                </Link>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => lisaOstukorvi(toode)}
                    className={btnPrimary}
                    type="button"
                  >
                    Lisa ostukorvi
                  </button>

                  <img
                    src={toode.pilt}
                    alt={toode.nimi}
                    className="w-10 h-10 rounded object-cover border border-gray-200"
                  />
                </div>
              </div>
            ))}
          </div>

          <ToastContainer position="bottom-center" autoClose={4000} theme="light" />
        </div>
      </div>
    </div>
  );
}

export default Tooted;
