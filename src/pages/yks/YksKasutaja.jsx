import { useParams } from "react-router-dom";
import kasutajadFailist from "../../data/kasutajad.json";

function YksKasutaja() {
  const { kasutaja_nimi } = useParams();
  const kasutaja = kasutajadFailist.find(
    (u) => u.kasutajanimi === kasutaja_nimi
  );



  if (kasutaja === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        Kasutajat ei leitud!
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-start mt-16 px-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            Kasutaja info
          </h2>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Kasutajanimi</span>
              <span className="font-medium text-gray-900">
                {kasutaja.kasutajanimi}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-700">E-mail</span>
              <span className="font-medium text-gray-900">
                {kasutaja.email}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Vanus</span>
              <span className="font-medium text-gray-900">
                {kasutaja.vanus}
              </span>
            </div>

          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => window.history.back()}
              className="px-3 py-1.5 rounded border border-gray-300 text-gray-700 hover:bg-gray-100 transition text-sm"
              type="button"
            >
              ← Tagasi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YksKasutaja;
