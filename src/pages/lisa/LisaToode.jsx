import { useState } from "react";
import tootedFromDb from "../../data/Tooted.json";



function LisaToode() {
  const [toode, setToode] = useState({
    nimi: "",
    hind: "",
    pilt: "",
    aktiivne: false,
  });

  function lisa() {
    if (toode.nimi.trim() === "") {
      alert("Toote nimi on kohustuslik!");
      return;
    }
    if (toode.hind === "") {
      alert("Toote hind on kohustuslik!");
      return;
    }
    if (toode.pilt.trim() === "") {
      alert("Toote pilt on kohustuslik!");
      return;
    }

    const uusToode = {
      ...toode,
      id: Math.floor(Math.random() * 100000),
      hind: Number(toode.hind),
    };

    tootedFromDb.push(uusToode);

    // tühjenda vorm
    setToode({
      nimi: "",
      hind: "",
      pilt: "",
      aktiivne: false,
    });
  }

  return (
    <div className="p-6">
      <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">
          Lisa toode
        </h2>

        <div className="flex flex-col gap-2">

          <label className="text-sm font-medium text-gray-700">Toote nimi</label>
          <input
            value={toode.nimi}
            onChange={(e) => setToode({ ...toode, nimi: e.target.value })}
            placeholder="Nt. Piim"
            className="px-3 py-2 border rounded-md"
          />

          <label className="text-sm font-medium text-gray-700">Toote hind (€)</label>
          <input
            type="number"
            value={toode.hind}
            onChange={(e) => setToode({ ...toode, hind: e.target.value })}
            placeholder="Nt. 1.50"
            className="px-3 py-2 border rounded-md"
          />

          <label className="text-sm font-medium text-gray-700">Toote pilt (URL)</label>
          <input
            value={toode.pilt}
            onChange={(e) => setToode({ ...toode, pilt: e.target.value })}
            placeholder="https://..."
            className="px-3 py-2 border rounded-md"
          />

          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mt-2">
            <input
              type="checkbox"
              checked={toode.aktiivne}
              onChange={(e) =>
                setToode({ ...toode, aktiivne: e.target.checked })
              }
            />
            Aktiivne
          </label>

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

export default LisaToode;
