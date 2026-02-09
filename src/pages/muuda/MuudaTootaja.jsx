import { useParams } from "react-router-dom";
import tootajadFailist from "../../data/Tootajad.json";

function MuudaTootaja() {
  const { index } = useParams();
  const tootaja = tootajadFailist[index];

  if (tootaja === undefined) {
    return (
      <div className="flex items-center justify-center text-gray-700">
        Kasutajat ei leitud
      </div>
    );
  }

  const inputBase =
    "w-full px-3 py-2 rounded border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300";
  const labelBase = "text-sm text-gray-700";
  const btnPrimary =
    "px-4 py-2 rounded bg-gray-900 text-white hover:bg-gray-800 transition text-sm";

  return (
    <div className="flex justify-center items-start mt-16 px-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6 text-center">
            Muuda töötaja andmeid
          </h2>

          <div className="space-y-4">
            {/* Nimi */}
            <div>
              <label className={labelBase}>Töötaja eesnimi</label>
              <input
                defaultValue={tootaja.eesnimi}
                type="text"
                className={inputBase}
              />
            </div>

            {/* Aadress */}
            <div>
              <label className={labelBase}>Töötaja perenimi</label>
              <input
                defaultValue={tootaja.perenimi}
                type="text"
                className={inputBase}
              />
            </div>

            {/* Telefon */}
            <div>
              <label className={labelBase}>Töötaja ametikoht</label>
              <input
                defaultValue={tootaja.ametikoht}
                type="text"
                className={inputBase}
              />
            </div>
            <div>
              <label className={labelBase}>Töötaja telefon</label>
              <input
                defaultValue={tootaja.telefon}
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

export default MuudaTootaja;
