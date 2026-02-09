import { useParams } from "react-router-dom";
import hinnadFailist from "../../data/hinnad.json";

function MuudaHind() {
  const { index } = useParams();
  const hind = hinnadFailist[index];

  if (hind === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        Hinda ei leitud
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
            Muuda hinda
          </h2>

          <div className="space-y-4">
            {/* Arv */}
            <div>
              <label className={labelBase}>Hind arvuna</label>
              <input
                defaultValue={hind.arv}
                type="number"
                className={inputBase}
              />
            </div>

            {/* Sõnana */}
            <div>
              <label className={labelBase}>Hind sõnana</label>
              <input
                defaultValue={hind.sonana}
                type="text"
                className={inputBase}
              />
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

export default MuudaHind;
