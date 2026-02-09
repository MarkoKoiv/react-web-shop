import { useRef } from "react";
import esindusedDb from "../../data/esindused.json";
import { ToastContainer, toast } from "react-toastify";

function LisaEsindus() {
  const nimiRef = useRef();
  const aadressRef = useRef();
  const telefonRef = useRef();

  function lisa() {
    esindusedDb.push({
      nimi: nimiRef.current.value,
      aadress: aadressRef.current.value,
      telefon: telefonRef.current.value,
    });

    toast.success("Esindus lisatud!");

    // tühjendab väljad
    nimiRef.current.value = "";
    aadressRef.current.value = "";
    telefonRef.current.value = "";
  }

  return (
    <div className=" flex justify-center p-6">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-sm p-6">

        <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">
          Lisa esindus
        </h2>

        <div className="flex flex-col gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Esinduse nimi
            </label>
            <input
              ref={nimiRef}
              type="text"
              placeholder="Nt. Tallinn"
              className="w-full px-3 py-2 border border-gray-300 rounded-md
                         focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Esinduse aadress
            </label>
            <input
              ref={aadressRef}
              type="text"
              placeholder="Nt. Pärnu mnt 10"
              className="w-full px-3 py-2 border border-gray-300 rounded-md
                         focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Esinduse telefon
            </label>
            <input
              ref={telefonRef}
              type="text"
              placeholder="+372 5555 5555"
              className="w-full px-3 py-2 border border-gray-300 rounded-md
                         focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          <button
            onClick={lisa}
            className="mt-3 w-full px-4 py-2 text-sm font-medium rounded-md
                       bg-gray-900 text-white hover:bg-gray-800
                       active:bg-gray-700 transition"
          >
            Lisa
          </button>
        </div>
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        theme="light"
      />
    </div>
  );
}

export default LisaEsindus;
