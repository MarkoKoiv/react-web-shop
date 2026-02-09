import { useParams } from "react-router-dom";
import autodFailist from "../../data/autod.json";

function MuudaAuto() {
  const { index } = useParams();
  const auto = autodFailist[index];

  if (auto === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        Autot ei leitud
      </div>
    );
  }

  const inputBase =
    "w-full px-3 py-2 rounded border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300";
  const labelBase = "text-sm text-gray-700";
  const btnPrimary =
    "px-4 py-2 rounded bg-gray-900 text-white hover:bg-gray-800 transition text-sm";

  return (
    <div className="min-h-screen flex justify-center items-start mt-16 px-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6 text-center">
            Muuda auto andmeid
          </h2>

          <div className="space-y-4">
            {/* ID */}
            <div>
              <label className={labelBase}>Auto ID</label>
              <input
                disabled
                defaultValue={auto.id}
                type="text"
                className={`${inputBase} bg-gray-100 cursor-not-allowed`}
              />
            </div>

            {/* Nimi */}
            <div>
              <label className={labelBase}>Auto nimi</label>
              <input
                defaultValue={auto.nimi}
                type="text"
                className={inputBase}
              />
            </div>

            {/* Hind */}
            <div>
              <label className={labelBase}>Auto hind</label>
              <input
                defaultValue={auto.hind}
                type="number"
                className={inputBase}
              />
            </div>

            {/* Pilt */}
            <div>
              <label className={labelBase}>Auto pilt (URL)</label>
              <input
                defaultValue={auto.pilt}
                type="text"
                className={inputBase}
              />
            </div>

            {/* Aktiivne */}
            <div className="flex items-center gap-3 pt-2">
              <input
                defaultChecked={auto.aktiivne}
                type="checkbox"
                className="w-4 h-4 accent-gray-900"
              />
              <span className="text-sm text-gray-700">
                Auto on aktiivne
              </span>
            </div>
          </div>

          {/* Nupud */}
          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={() => window.history.back()}
              className="px-3 py-1.5 rounded border border-gray-300 text-gray-700 hover:bg-gray-100 transition text-sm"
              type="button"
            >
              ← Tagasi
            </button>

            <button className={btnPrimary} type="button">
              Salvesta muudatused
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MuudaAuto;
