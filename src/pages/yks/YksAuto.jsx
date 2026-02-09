import { useParams } from "react-router-dom";
import autodFailist from "../../data/autod.json";

function YksAuto() {
  const { jrknr } = useParams();
  const auto = autodFailist[jrknr];

  if (auto === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        Autot ei leitud
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-start mt-16 px-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            Auto detailid
          </h2>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Nimi</span>
              <span className="font-medium text-gray-900">
                {auto.nimi}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-700">Hind</span>
              <span className="font-medium text-gray-900">
                {auto.hind} €
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-700">Staatus</span>
              <span
                className={`px-2 py-0.5 rounded text-sm font-medium
                  ${
                    auto.aktiivne
                      ? "bg-gray-200 text-gray-900"
                      : "bg-gray-100 text-gray-500"
                  }`}
              >
                {auto.aktiivne ? "Aktiivne" : "Mitteaktiivne"}
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

export default YksAuto;
