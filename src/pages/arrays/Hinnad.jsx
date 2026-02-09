import { useState } from "react";
import hinnadFromDb from "../../data/hinnad.json";
import { Link } from "react-router-dom";

function Hinnad() {
  const [hinnad, setHinnad] = useState(hinnadFromDb);

  function reset() {
    setHinnad(hinnadFromDb);
  }

  function sorteeriKasvavalt() {
    setHinnad([...hinnad].sort((a, b) => a.arv - b.arv));
  }

  function sorteeriKahanevalt() {
    setHinnad([...hinnad].sort((a, b) => b.arv - a.arv));
  }

  function filtreeriSuuremadKui50() {
    setHinnad(hinnad.filter((hind) => hind.arv > 50));
  }

  function filtreeriVaiksemadKui100() {
    setHinnad(hinnad.filter((hind) => hind.arv < 100));
  }

  function arvutaKokku() {
    let summa = 0;
    hinnad.forEach((hind) => (summa += hind.arv));
    return summa;
  }

  function otsi(otsitu) {
    const vastus = hinnadFromDb.filter((hind) =>
      hind.sonana.toLowerCase().includes(otsitu.toLowerCase())
    );
    setHinnad(vastus);
  }

  const btnBase =
    "px-3 py-1.5 rounded border border-gray-300 text-gray-700 hover:bg-gray-100 transition text-sm";
  const card =
    "bg-gray-50 border border-gray-200 rounded-lg p-6";

  return (
    <div className="min-h-screen flex justify-center items-start mt-16 px-4">
      <div className="w-full max-w-2xl">
        <div className={card}>
          <h2 className="text-lg font-semibold text-gray-900 mb-2 text-center">
            Hinnad
          </h2>

          <p className="mb-6 text-gray-700 text-center">
            Hindu kokku:{" "}
            <span className="font-semibold text-gray-900">{hinnad.length}</span>{" "}
            tk
          </p>

          {/* Nupud */}
          <div className="flex flex-col gap-3 mb-6">
            <div className="flex flex-wrap gap-2 justify-center">
              <button onClick={reset} className={btnBase} type="button">
                Reset
              </button>
              <button onClick={sorteeriKasvavalt} className={btnBase} type="button">
                Sorteeri kasvavalt
              </button>
              <button onClick={sorteeriKahanevalt} className={btnBase} type="button">
                Sorteeri kahanevalt
              </button>
              <button onClick={filtreeriSuuremadKui50} className={btnBase} type="button">
                &gt; 50
              </button>
              <button onClick={filtreeriVaiksemadKui100} className={btnBase} type="button">
                &lt; 100
              </button>
            </div>

            {/* Otsing */}
            <div className="flex items-center gap-3 justify-center">
              <label className="text-sm text-gray-700">Otsi:</label>
              <input
                onChange={(e) => otsi(e.target.value)}
                type="text"
                className="w-full max-w-xs px-3 py-2 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="nt viiskümmend…"
              />
            </div>
          </div>

          {/* List */}
          <div className="space-y-3">
            {hinnad.map((hind) => (
              <div
                key={hind.arv}
                className="p-4 bg-white border border-gray-200 rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-gray-900 font-semibold text-lg">
                    {hind.arv} €
                  </span>
                  <span className="text-gray-700 text-sm">
                    ({hind.sonana})
                  </span>
                </div>

                <Link to={"/hind/" + hind.arv}>
                  <button className={btnBase} type="button">
                    Vt lähemalt
                  </button>
                </Link>
              </div>
            ))}

            <div className="mt-6 text-right font-semibold text-gray-900">
              Hinnad kokku:{" "}
              <span className="text-gray-700">{arvutaKokku()} €</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hinnad;
