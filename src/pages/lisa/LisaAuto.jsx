import { useState } from "react";
import autodFailist from "../../data/autod.json";

function LisaAuto() {
  const [auto, setAuto] = useState({
    nimi: "",
    hind: "",
    pilt: "",
    aktiivne: false,
  });

  function lisa() {
    const uusAuto = {
      ...auto,
      id: Math.floor(Math.random() * 9999),
    };

    if (uusAuto.nimi.trim() === "") {
      alert("Tühja nimega ei saa lisada!");
      return;
    }
    if (uusAuto.hind.trim() === "") {
      alert("Tühja hinnaga ei saa lisada!");
      return;
    }
    if (uusAuto.pilt.trim() === "") {
      alert("Tühja pildiga ei saa lisada!");
      return;
    }

    autodFailist.push(uusAuto);

    // soovi korral: tee vorm tühjaks
    setAuto({ nimi: "", hind: "", pilt: "", aktiivne: false });
  }

  return (
    <div className="p-6">
      <div>Ajutine: {JSON.stringify(auto)}</div>

      <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">
          Lisa auto
        </h2>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Auto nimi</label>
          <input
            value={auto.nimi}
            onChange={(e) => setAuto({ ...auto, nimi: e.target.value })}
            type="text"
            placeholder="Nt. Tesla Model 3"
            className="px-3 py-2 border border-gray-300 rounded-md
                       focus:outline-none focus:ring-2 focus:ring-gray-200"
          />

          <label className="text-sm font-medium text-gray-700">Auto hind</label>
          <input
            value={auto.hind}
            onChange={(e) => setAuto({ ...auto, hind: e.target.value })}
            type="text"
            className="px-3 py-2 border border-gray-300 rounded-md
                       focus:outline-none focus:ring-2 focus:ring-gray-200"
          />

          <label className="text-sm font-medium text-gray-700">Auto pilt</label>
          <input
            value={auto.pilt}
            onChange={(e) => setAuto({ ...auto, pilt: e.target.value })}
            type="text"
            className="px-3 py-2 border border-gray-300 rounded-md
                       focus:outline-none focus:ring-2 focus:ring-gray-200"
          />

          <label className="text-sm font-medium text-gray-700">
            Auto aktiivne
          </label>
          <input
            checked={auto.aktiivne}
            onChange={(e) => setAuto({ ...auto, aktiivne: e.target.checked })}
            type="checkbox"
            className="h-4 w-4"
          />

          <button
            onClick={lisa}
            className="mt-3 px-4 py-2 text-sm rounded-md border border-gray-300
                       bg-white text-gray-800 hover:bg-gray-50
                       active:bg-gray-100 transition"
          >
            Lisa
          </button>
        </div>
      </div>
    </div>
  );
}

export default LisaAuto;
