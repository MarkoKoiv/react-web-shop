import { useState } from "react";
import autos from "../../data/autod.json"
import { Link } from "react-router-dom";



function HaldaAutod() {
    //  const autos = [
    //    "Tesla Model 3",
    //  "Toyota Camry",
    //    "Ford F-15",
    //  "BMW M4",
    // "Porsche 911",
    // "Honda Civic",
    // "Chevrolet Corvette",
    // "Audi Q5",
    // "Mercedes-Benz S-Class",
    //   "Hyundai Ioniq 5"
    //   ]

    const [autod, setAutod] = useState(autos);

    function kustuta(index) {
        autos.splice(index, 1);
        setAutod(autos.slice());
    }

    return (
       <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
          Halda autosid ({autod.length})
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
                  Auto id
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Auto nimi
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Auto hind
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Auto pilt
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Auto aktiivne
                </th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">
                  Kustuta
                </th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">Muuda</th>
              </tr>
            </thead>

            <tbody>
              {autod.map((auto, index) => (
                <tr
                  key={auto.id}
                  className="border-t border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-500">
                    {index}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-800">
                    {auto.id}
                  </td>
                    <td className="px-4 py-2 text-sm text-gray-800">
                    {auto.nimi}
                  </td>
                    <td className="px-4 py-2 text-sm text-gray-800">
                    {auto.hind}
                  </td>
                    <td className="px-4 py-2 text-sm text-gray-800">
                    {auto.pilt}
                  </td>
                    {/* <td className="px-4 py-2 text-sm text-gray-800">
                    {auto.aktiivne + 0}
                  </td> */}

                  <td className="px-4 py-2 text-sm text-gray-800">
                    {auto.aktiivne === true ? "Auto on aktiivne" : "Auto on mitteaktiivne"}
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
                    to={"/muuda-auto/" + index}>
                    <button>Muuda</button>
                    </Link>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>

          {autod.length === 0 && (
            <p className="text-center text-sm text-gray-500 mt-4">
              Kõik autod on kustutatud!
            </p>
          )}
        </div>
      </div>
    </div>
    )
}

export default HaldaAutod