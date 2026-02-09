import { useParams } from "react-router-dom";
import esindusedFailist from "../../data/esindused.json";

function YksEsindus() {
  const { esinduse_nimi } = useParams();
  

  const esindus = esindusedFailist.find(
    (e) => e.nimi.toLowerCase().replaceAll(" ", "-") === esinduse_nimi
  );

  if (esindus === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        Esindust ei leitud
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-start mt-16 px-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            Esinduse detailid
          </h2>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Nimi</span>
              <span className="font-medium text-gray-900">
                {esindus.nimi}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-700">Aadress</span>
              <span className="font-medium text-gray-900 text-right">
                {esindus.aadress}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-700">Telefon</span>
              <span className="font-medium text-gray-900">
                {esindus.telefon}
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

export default YksEsindus;
