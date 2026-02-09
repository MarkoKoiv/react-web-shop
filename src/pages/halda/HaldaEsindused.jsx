import { useState } from "react";
import esindusedDb from "../../data/esindused.json"
import { Link } from "react-router-dom";



function HaldaEsindused() {

  const [esindused, setEsindused] = useState(esindusedDb);

  function kustuta(index) {
    esindusedDb.splice(index, 1);
    setEsindused(esindusedDb.slice());
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
          Halda esindused ({esindused.length})
        </h2>

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
                  Esindus nimi
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Esinduse aadress
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Esinduse telefon
                </th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">
                  Kustuta
                </th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">Muuda</th>
              </tr>
            </thead>

            <tbody>
              {esindused.map((esindused, index) => (
                <tr
                  key={esindused.nimi}
                  className="border-t border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-500">
                    {index}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-800">
                    {esindused.nimi}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-800">
                    {esindused.aadress}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-800">
                    {esindused.telefon}
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
                    <Link  className="px-3 py-1 text-sm rounded-md border border-green-500 text-green-600
                                 hover:bg-green-50 active:bg-red-100 transition"
                    to={"/muuda-esindus/" + index}>
                      <button>Muuda</button>
                    </Link>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {esindused.length === 0 && (
            <p className="text-center text-sm text-gray-500 mt-4">
              Kõik esindused kustutatud!
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default HaldaEsindused