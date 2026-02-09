import { useState } from "react";
import allUsers from "../../data/kasutajad.json";
import { Link } from "react-router-dom";

function Kasutajad() {
  const [kasutajad, setKasutajad] = useState(allUsers);
  const [otsing, setOtsing] = useState("");

  function reset() {
    setKasutajad(allUsers);
    setOtsing("");
  }

  // --- SORT ---
  function sorteeriNimiAZ() {
    setKasutajad([...kasutajad].sort((a, b) => a.kasutajanimi.localeCompare(b.kasutajanimi)));
  }

  function sorteeriNimiZA() {
    setKasutajad([...kasutajad].sort((a, b) => b.kasutajanimi.localeCompare(a.kasutajanimi)));
  }

  function sorteeriVanusKasv() {
    setKasutajad([...kasutajad].sort((a, b) => a.vanus - b.vanus));
  }

  function sorteeriVanusKahan() {
    setKasutajad([...kasutajad].sort((a, b) => b.vanus - a.vanus));
  }

  // --- FILTER ---
  function filtreeri30Plus() {
    setKasutajad(kasutajad.filter(k => k.vanus >= 30));
  }

  function filtreeriEmailGmail() {
    setKasutajad(kasutajad.filter(k => k.email.toLowerCase().includes("gmail")));
  }

  const kuvatavad = kasutajad.filter(kasutaja =>
    `${kasutaja.kasutajanimi} ${kasutaja.email}`.toLowerCase().includes(otsing.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <div className="flex items-start sm:items-center justify-between gap-3 mb-4 flex-col sm:flex-row">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Kasutajad</h2>
            <p className="text-sm text-gray-600">
              Kokku: <span className="font-medium">{kuvatavad.length}</span>
            </p>
          </div>

          <button
            onClick={reset}
            className="px-3 py-1.5 text-sm rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition"
          >
            Reset
          </button>
        </div>

        {/* Otsing */}
        <div className="mb-4">
          <input
            value={otsing}
            onChange={(e) => setOtsing(e.target.value)}
            placeholder="Otsi kasutajanime või emaili..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>

        {/* Nupud */}
        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
            <div className="text-sm font-semibold text-gray-800 mb-2">Sorteerimine</div>
            <div className="flex flex-wrap gap-2">
              <button onClick={sorteeriNimiAZ} className="px-3 py-1.5 text-sm rounded-md border border-gray-300 hover:bg-white">
                Nimi A–Z
              </button>
              <button onClick={sorteeriNimiZA} className="px-3 py-1.5 text-sm rounded-md border border-gray-300 hover:bg-white">
                Nimi Z–A
              </button>
              <button onClick={sorteeriVanusKasv} className="px-3 py-1.5 text-sm rounded-md border border-gray-300 hover:bg-white">
                Vanus ↑
              </button>
              <button onClick={sorteeriVanusKahan} className="px-3 py-1.5 text-sm rounded-md border border-gray-300 hover:bg-white">
                Vanus ↓
              </button>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
            <div className="text-sm font-semibold text-gray-800 mb-2">Filtreerimine</div>
            <div className="flex flex-wrap gap-2">
              <button onClick={filtreeri30Plus} className="px-3 py-1.5 text-sm rounded-md border border-gray-300 hover:bg-white">
                30+
              </button>
              <button onClick={filtreeriEmailGmail} className="px-3 py-1.5 text-sm rounded-md border border-gray-300 hover:bg-white">
                Email sisaldab “gmail”
              </button>
            </div>
          </div>
        </div>

        {/* List */}
        <div className="space-y-2">
          {kuvatavad.map((kasutaja) => (
            <div
              key={kasutaja.email}
              className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-3"
            >
              <div className="text-left">
                <div className="font-medium text-gray-900">{kasutaja.kasutajanimi}</div>
                <div className="text-sm text-gray-600">{kasutaja.email}</div>
              </div>
              <div className="text-sm text-gray-700">
                Vanus: <span className="font-medium">{kasutaja.vanus}</span>
              </div>
              <Link to={"/kasutaja/" + kasutaja.kasutajanimi}>
                  <button className="px-3 py-1.5 rounded border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
                    Vt lähemalt
                  </button>
                </Link>
            </div>
          ))}

          {kuvatavad.length === 0 && (
            <div className="text-center text-sm text-gray-500 py-8">
              Ühtegi kasutajat ei leitud.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Kasutajad;
