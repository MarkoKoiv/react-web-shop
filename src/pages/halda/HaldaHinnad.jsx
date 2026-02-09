import { useState } from "react";
import hinnadFromDb from "../../data/hinnad.json"
import { Link } from "react-router-dom";


function HaldaHinnad() {
    const [hinnad, setHinnad] = useState(hinnadFromDb);

    function kustutaEsimene() {
        hinnadFromDb.splice(0, 1);
        setHinnad(hinnadFromDb.slice());
    }

    function kustutaTeine() {
        hinnadFromDb.splice(1, 1);
        setHinnad(hinnadFromDb.slice());

    }

    function kustutaKolmas() {
        hinnadFromDb.splice(2, 1);
        setHinnad(hinnadFromDb.slice());

    }

    function kustuta(index) {
        hinnadFromDb.splice(index, 1);
        setHinnad(hinnadFromDb.slice());
    }


    return (
         <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
          Halda hindu ({hinnad.length})
        </h2>

        <div className="flex flex-wrap gap-2 justify-center mb-6">
          <button onClick={kustutaEsimene} className="px-3 py-2 text-sm rounded-md border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 active:bg-gray-100 transition">
            Kustuta esimene
          </button>
          <button onClick={kustutaTeine} className="px-3 py-2 text-sm rounded-md border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 active:bg-gray-100 transition">
            Kustuta teine
          </button>
          <button onClick={kustutaKolmas} className="px-3 py-2 text-sm rounded-md border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 active:bg-gray-100 transition">
            Kustuta kolmas
          </button>

          <button onClick={() => kustuta(3)} className="px-3 py-2 text-sm rounded-md border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 active:bg-gray-100 transition">
            Kustuta neljas
          </button>
          <button onClick={() => kustuta(4)} className="px-3 py-2 text-sm rounded-md border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 active:bg-gray-100 transition">
            Kustuta viies
          </button>
          <button onClick={() => kustuta(5)} className="px-3 py-2 text-sm rounded-md border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 active:bg-gray-100 transition">
            Kustuta kuues
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
                  Hind arvuna
                </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Hind sõnana
                </th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">
                  Kustuta
                </th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">Muuda</th>
              </tr>
            </thead>

            <tbody>
              {hinnad.map((hind, index) => (
                <tr
                  key={`${hind.arv}-${index}`}
                  className="border-t border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-500">{index}</td>
                  <td className="px-4 py-2 text-sm text-gray-800">{hind.arv}</td>
                  <td className="px-4 py-2 text-sm text-gray-800">{hind.sonana}</td>
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
                    to={"/muuda-hind/" + index}>
                    <button>Muuda</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {hinnad.length === 0 && (
            <p className="text-center text-sm text-gray-500 mt-4">
              Kõik hinnad on kustutatud!
            </p>
          )}
        </div>
      </div>
    </div>
    )
}

export default HaldaHinnad