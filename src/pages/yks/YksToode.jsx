import { useParams } from "react-router-dom";
import tootedFailist from "../../data/Tooted.json";

function YksToode() {
  const { jrknr } = useParams();
  const toode = tootedFailist[jrknr];

  if (!toode) {
    return (
      <div className="flex items-center justify-center text-gray-700">
        Toodet ei leitud!
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-start mt-16 px-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            Toote info
          </h2>

          <div className="flex justify-center mb-4">
            <img
              src={toode.pilt}
              alt={toode.nimi}
              className="w-40 h-40 object-cover rounded border border-gray-200"
            />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Nimi</span>
              <span className="font-medium text-gray-900">{toode.nimi}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-700">Hind</span>
              <span className="font-medium text-gray-900">
                {toode.hind.toFixed(2)} €
              </span>
              {/* või kui kasutad eur helperit: {eur(toode.hind)} */}
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-700">Staatus</span>
              <span
                className={`px-2 py-0.5 rounded text-sm font-medium ${
                  toode.aktiivne
                    ? "bg-gray-200 text-gray-900"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {toode.aktiivne ? "Aktiivne" : "Mitteaktiivne"}
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

export default YksToode;
