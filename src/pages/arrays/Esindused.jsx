import { useState } from "react";
import esindusedDb from "../../data/esindused.json";
import { Link } from "react-router-dom";

const DATA = {
  tallinn: esindusedDb,
  tartu: ["Raatuse", "Lõunakeskus"],
  narva: ["Fama Keskus"],
  parnu: ["Port Artus 2"],
};

const LABELS = {
  tallinn: "Tallinn",
  tartu: "Tartu",
  narva: "Narva",
  parnu: "Pärnu",
};

function Esindused() {
  const [linn, setLinn] = useState("tallinn");
  const [esindused, setEsindused] = useState(esindusedDb);

  function sorteeriAZ() {
    esindused.sort((a, b) => a.nimi.localeCompare(b.nimi));
    setEsindused(esindused.slice());
  }
  function sorteeriZA() {
    esindused.sort((a, b) => b.nimi.localeCompare(a.nimi));
    setEsindused(esindused.slice());
  }
  function sorteeriAadressAZ() {
    esindused.sort((a, b) => a.aadress.localeCompare(b.aadress));
    setEsindused(esindused.slice());
  }
  function sorteeriAadressZA() {
    esindused.sort((a, b) => b.aadress.localeCompare(a.aadress));
    setEsindused(esindused.slice());
  }

  function arvutaKokku() {
    let summa = 0;
    esindused.forEach((place) => (summa += place.nimi.length));
    return summa;
  }

  function otsi(otsitu) {
    const vastus = esindusedDb.filter(
      (esindus) =>
        esindus.nimi.toLowerCase().includes(otsitu.toLowerCase()) ||
        esindus.aadress.toLowerCase().includes(otsitu.toLowerCase())
    );
    setEsindused(vastus);
  }

  const btnBase =
    "px-3 py-1.5 rounded border border-gray-300 text-gray-700 hover:bg-gray-100 transition";
  const tabBase =
    "px-4 py-2 rounded-lg border transition text-sm font-medium";
  const tabActive = "bg-gray-900 text-white border-gray-900";
  const tabIdle = "bg-white text-gray-700 border-gray-300 hover:bg-gray-50";

  return (
    <div className="min-h-screen flex justify-center items-start mt-16 px-4">
      <div className="w-full max-w-2xl">
        <h2 className="text-lg font-semibold mb-6 text-gray-900">
          Hetkel aktiivne linn:{" "}
          <span className="text-gray-700">{LABELS[linn]}</span>
        </h2>

        {/* linnanupud */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {Object.keys(DATA).map((city) => (
            <button
              key={city}
              onClick={() => setLinn(city)}
              className={`${tabBase} ${linn === city ? tabActive : tabIdle}`}
              type="button"
            >
              {LABELS[city]}
            </button>
          ))}
        </div>

        {/* kaart */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          {/* sort + otsing */}
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex flex-wrap gap-2 justify-center">
              <button className={btnBase} onClick={sorteeriAZ} type="button">
                Sorteeri A-Z
              </button>
              <button className={btnBase} onClick={sorteeriZA} type="button">
                Sorteeri Z-A
              </button>
              <button className={btnBase} onClick={sorteeriAadressAZ} type="button">
                Aadress A-Z
              </button>
              <button className={btnBase} onClick={sorteeriAadressZA} type="button">
                Aadress Z-A
              </button>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <label className="text-sm text-gray-700">Otsing:</label>
              <input
                onChange={(e) => otsi(e.target.value)}
                type="text"
                className="w-full max-w-xs px-3 py-2 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="nimi või aadress…"
              />
            </div>
          </div>

          <h3 className="font-semibold text-lg mb-4 text-gray-900 text-center">
            Esindused
          </h3>

          {/* list */}
          <ul className="space-y-3">
            {esindused.map((place, i) => (
              <li
                key={i}
                className="p-4 bg-white border border-gray-200 rounded-lg flex flex-col gap-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="text-gray-900 font-medium">{place.nimi}</div>
                  <div className="text-gray-700 text-sm">{place.aadress}</div>
                </div>

                <div className="flex gap-2">
                  <Link
                    to={
                      "/esindus/" +
                      place.nimi.toLowerCase().replaceAll(" ", "-")
                    }
                  >
                    <button className={btnBase} type="button">
                      Vt kontaktandmeid
                    </button>
                  </Link>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-right font-semibold text-gray-900">
            Tähed kokku: <span className="text-gray-700">{arvutaKokku()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Esindused;
