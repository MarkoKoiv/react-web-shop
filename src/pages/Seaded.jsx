import { useState } from "react";

function Seaded() {
  const [keel, setKeel] = useState("et");

  const btnBase =
    "px-3 py-1.5 rounded border text-sm transition";
  const btnActive =
    "bg-gray-900 text-white border-gray-900";
  const btnInactive =
    "bg-white text-gray-700 border-gray-300 hover:bg-gray-100";

  const keelTekst = {
    et: "Leht on eesti keelne",
    en: "Page is in English",
    ru: "Сайт на русском языке",
    es: "La página está en español",
  };

  return (
    <div className="flex justify-center items-start mt-16 px-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 text-center">
            Seaded
          </h2>

          {/* Keele valik */}
          <div className="mt-6">
            <div className="text-sm font-semibold text-gray-900 text-center mb-3">
              Keel
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setKeel("et")}
                className={`${btnBase} ${
                  keel === "et" ? btnActive : btnInactive
                }`}
                type="button"
              >
                Eesti
              </button>

              <button
                onClick={() => setKeel("en")}
                className={`${btnBase} ${
                  keel === "en" ? btnActive : btnInactive
                }`}
                type="button"
              >
                English
              </button>

              <button
                onClick={() => setKeel("ru")}
                className={`${btnBase} ${
                  keel === "ru" ? btnActive : btnInactive
                }`}
                type="button"
              >
                Русский
              </button>

              <button
                onClick={() => setKeel("es")}
                className={`${btnBase} ${
                  keel === "es" ? btnActive : btnInactive
                }`}
                type="button"
              >
                Español
              </button>
            </div>
          </div>

          {/* Aktiivne keel */}
          <div className="mt-6 bg-white border border-gray-200 rounded-lg p-4 text-center">
            <div className="text-sm text-gray-700">
              Hetkel aktiivne keel
            </div>
            <div className="mt-1 font-semibold text-gray-900">
              {keel.toUpperCase()}
            </div>
          </div>

          {/* Selgitus */}
          <div className="mt-4 text-center text-gray-700">
            {keelTekst[keel]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seaded;
