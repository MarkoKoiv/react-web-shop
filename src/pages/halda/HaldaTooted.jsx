import { useState } from "react";
import tootedData from "../../data/Tooted.json";
import { Link } from "react-router-dom";

function HaldaTooted() {
  const [tooted, setTooted] = useState(tootedData);
  const eur = (v) =>
    new Intl.NumberFormat("et-EE", {
      style: "currency",
      currency: "EUR",
    }).format(v);

 function kustuta(index) {
  tootedData.splice(index, 1);   
  setTooted(tootedData.slice());
}

  const reset = () => {
    setTooted(tootedData);
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-xl shadow-sm p-6">

        {/* Pealkiri + reset */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Halda tooteid ({tooted.length})
          </h2>

          <button
            onClick={reset}
            className="px-3 py-1 text-sm rounded-md border border-gray-300 text-gray-700
                       hover:bg-gray-50 active:bg-gray-100 transition"
          >
            Taasta originaal
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  #
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Index
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Toode
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Hind
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Pilt
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Aktiivne
                </th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">
                  Kustuta
                </th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">
                  Muuda
                </th>
              </tr>
            </thead>

            <tbody>
              {tooted.map((toode, index) => (
                <tr
                  key={toode.id}
                  className="border-t border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-500">
                    {index}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-800">
                    {toode.nimi}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-800">
                    {eur(toode.hind)}
                  </td>
                  <td className="px-4 py-2">
                    <img
                      src={toode.pilt}
                      alt={toode.nimi}
                      className="w-10 h-10 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-2 text-center text-lg">
                    {toode.aktiivne ? "✅" : "❌"}
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => kustuta(index)}
                      className="px-3 py-1 text-sm rounded-md border border-red-300 text-red-600
                                 hover:bg-red-50 active:bg-red-100 transition"
                    >
                      Kustuta
                    </button>
                  </td>
                  <td>
                    <Link className="px-3 py-1 text-sm rounded-md border border-green-500 text-green-600
                                 hover:bg-green-50 active:bg-red-100 transition"
                    to={"/muuda-toode/" + index }>
                    <button>Muuda</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {tooted.length === 0 && (
            <p className="text-center text-sm text-gray-500 mt-4">
              Kõik tooted on kustutatud!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HaldaTooted;
