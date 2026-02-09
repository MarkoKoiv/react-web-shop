import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import tootedData from "../../data/Tooted.json";

function MuudaToode() {
  const { index } = useParams();
  const navigate = useNavigate();

  const i = Number(index);
  const toode = tootedData[i];

  const [nimi, setNimi] = useState(toode?.nimi ?? "");
  const [hind, setHind] = useState(toode?.hind ?? "");
  const [pilt, setPilt] = useState(toode?.pilt ?? "");
  const [aktiivne, setAktiivne] = useState(toode?.aktiivne ?? false);

  const eur = (v) =>
    new Intl.NumberFormat("et-EE", { style: "currency", currency: "EUR" }).format(v);

  if (!toode) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        Toodet ei leitud!
      </div>
    );
  }


  const inputClass =
    "w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 " +
    "focus:outline-none focus:ring-1 focus:ring-gray-400";

  return (
    <div className="min-h-screen flex justify-center items-start mt-16 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 text-center">
            Muuda toodet
          </h2>

          <div className="mt-2 text-center text-sm text-gray-600">
            Index: <span className="font-medium text-gray-900">{i}</span> • ID:{" "}
            <span className="font-medium text-gray-900">{toode.id}</span>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nimi
              </label>
              <input
                className={inputClass}
                value={nimi}
                onChange={(e) => setNimi(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hind (€)
              </label>
              <input
                className={inputClass}
                type="number"
                step="0.01"
                value={hind}
                onChange={(e) => setHind(e.target.value)}
              />
              <div className="mt-1 text-xs text-gray-500">
                Eelvaade: {hind !== "" ? eur(Number(hind)) : "—"}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pildi URL
              </label>
              <input
                className={inputClass}
                value={pilt}
                onChange={(e) => setPilt(e.target.value)}
              />
            </div>

            {pilt && (
              <div className="flex justify-center">
                <img
                  src={pilt}
                  alt={nimi}
                  className="w-36 h-36 object-cover rounded-lg border border-gray-200"
                />
              </div>
            )}

            <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-3">
              <span className="text-sm text-gray-700">Aktiivne</span>

              <button
                type="button"
                onClick={() => setAktiivne((prev) => !prev)}
                className={`px-3 py-1 rounded-md text-sm border transition ${aktiivne
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
              >
                {aktiivne ? "Jah" : "Ei"}
              </button>
            </div>
          </div>

          <div className="mt-6 flex justify-between">
            <button
              onClick={() => navigate(-1)}
              className="px-3 py-1.5 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition text-sm"
              type="button"
            >
              ← Tagasi
            </button>

            <button
              className="px-3 py-1.5 rounded-md bg-green-600 text-white hover:bg-green-700 transition text-sm"
              type="button"
            >
              Salvesta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MuudaToode;
