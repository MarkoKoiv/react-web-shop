import { useState } from "react";
import kasutajadData from "../../data/kasutajad.json";
import { Link } from "react-router-dom";

function HaldaKasutajad() {
  const [kasutajad, setKasutajad] = useState(kasutajadData);

  function kustuta(index) {
  kasutajadData.splice(index, 1);   
  setKasutajad(kasutajadData.slice());
}
  const reset = () => {
    setKasutajad(kasutajadData);
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Halda kasutajaid ({kasutajad.length})
          </h2>
          <button
            onClick={reset}
            className="px-3 py-1.5 text-sm rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition"
          >
            Taasta originaal
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">#</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Index</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Kasutajanimi</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Email</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Vanus</th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">Kustuta</th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">Muuda</th>
              </tr>
            </thead>

            <tbody>
              {kasutajad.map((kasutaja, index) => (
                <tr key={kasutaja.email ?? `${kasutaja.kasutajanimi}-${index}`} className="border-t border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-700">{index + 1}</td>
                  <td className="px-4 py-2 text-sm text-gray-500">{index}</td>
                  <td className="px-4 py-2 text-sm text-gray-900">{kasutaja.kasutajanimi}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{kasutaja.email}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{kasutaja.vanus}</td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => kustuta(index)}
                      className="px-3 py-1 text-sm rounded-md border border-red-300 text-red-600 hover:bg-red-50 active:bg-red-100 transition"
                    >
                      Kustuta
                    </button>
                  </td>
                    <td>
                    <Link className="px-3 py-1 text-sm rounded-md border border-green-500 text-green-600
                                 hover:bg-green-50 active:bg-red-100 transition"
                    to={"/muuda-kasutaja/" + index}>
                    <button>Muuda</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {kasutajad.length === 0 && (
            <p className="text-center text-sm text-gray-500 mt-4">
              Kõik kasutajad on kustutatud!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HaldaKasutajad;
