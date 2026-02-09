import { useState } from "react";
import ostukorvFailist from "../data/ostukorv.json";

function Ostukorv() {
  const [tooted, setTooted] = useState(ostukorvFailist);

  const eur = (value) =>
    new Intl.NumberFormat("et-EE", { style: "currency", currency: "EUR" }).format(
      value
    );

  function kustuta(index) {
    const uus = [...tooted];
    uus.splice(index, 1);
    setTooted(uus);
  }

  function tyhjenda() {
    setTooted([]);
  }

  function arvutaKokku() {
    return tooted.reduce((summa, t) => summa + (t.hind || 0), 0);
  }

  return (
    <div className="min-h-screen flex justify-center items-start mt-16 px-4">
      <div className="w-full max-w-3xl">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Ostukorv</h2>
              <p className="text-sm text-gray-700 mt-1">
                Tooteid: <span className="font-semibold text-gray-900">{tooted.length}</span>
              </p>
            </div>

            <button
              onClick={tyhjenda}
              type="button"
              disabled={tooted.length === 0}
              className="px-3 py-1.5 rounded border border-gray-300 text-gray-700 hover:bg-gray-100 transition text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Tühjenda
            </button>
          </div>

          {/* Sisu */}
          <div className="mt-6">
            {tooted.length === 0 ? (
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center text-gray-700">
                Ostukorv on tühi.
              </div>
            ) : (
              <div className="space-y-3">
                {tooted.map((toode, index) => (
                  <div
                    key={`${toode.id ?? toode.nimi}-${index}`}
                    className="p-4 bg-white border border-gray-200 rounded-lg flex items-center justify-between gap-4"
                  >
                    <div className="min-w-0">
                      <div className="font-medium text-gray-900 truncate">
                        {toode.nimi}
                      </div>
                      <div className="text-sm text-gray-700">
                        {eur(toode.hind)}
                      </div>
                    </div>

                    <button
                      onClick={() => kustuta(index)}
                      type="button"
                      className="px-3 py-1.5 rounded border border-gray-300 text-gray-700 hover:bg-gray-100 transition text-sm"
                      aria-label={`Eemalda ${toode.nimi} ostukorvist`}
                      title="Eemalda"
                    >
                      Eemalda
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Kokku */}
          <div className="mt-6 flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4">
            <span className="text-gray-700">Kogusumma</span>
            <span className="text-gray-900 font-semibold">
              {eur(arvutaKokku())}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ostukorv;
