import { useRef } from "react";
import hinnadFromDb from "../../data/hinnad.json";

function LisaHind() {
  const hindRef = useRef();
  const sonaRef = useRef();

  function lisa() {
    if (hindRef.current.value.trim() === "") {
      alert("Hind ei tohi olla tühi!");
      return;
    }

    hinnadFromDb.push({"arv": hindRef.current.value, "sonana": sonaRef.current.value});
 /*    hindRef.current.value = ""; */
  }

  return (
    <div className="p-6">
      <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">
          Lisa hind
        </h2>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Hind
          </label>

          <input
            ref={hindRef}
            type="number"
            placeholder="Nt. 9.99"
            className="px-3 py-2 border border-gray-300 rounded-md
                       focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <label className="text-sm font-medium text-gray-700">
            Hind sõnana
          </label>

          <input
            ref={sonaRef}
            type="text"
            placeholder="Nt. 9.99"
            className="px-3 py-2 border border-gray-300 rounded-md
                       focus:outline-none focus:ring-2 focus:ring-gray-200"
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

export default LisaHind;
