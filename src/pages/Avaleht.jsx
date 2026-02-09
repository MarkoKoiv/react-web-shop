import { useState } from "react"
import heart from "../assets/heart.png"
import nolove from "../assets/no-love.png"




// tumesinine -> JS liigitus (function, const). sissekirjutatud väärtused: false/true. undefined/null
//               HTML element. <img>   <input>    <button>
// tavaline sinine -> muutuja nii JS-s kui ka HTML-s
// helesinine -> JS objekti võti või sisseimporditud väärtus
//               HTML-s elemendi atribuut: onClick   src   className    disabled   key
// kollased -> funktsioonid. käivitatavad koodilõigud
// tumeroheline -> kommentaar. 
// roheline -> JS: klass. HTML-s sisseimporditud koodilõik
// heleroheline -> number
// oranž/punane -> sõna (jutumärkide vahel)
// valge -> märgid ( =  ;   &&   ? :  ===   >  +   , lisaks väljakuvatav tekst HTMLs)
// lilla -> käsklused: if / else , return , export, import
// {{{{{{{{{{{{{[[[[[[((((({})))))]]]]]]}}}}}}}}}}}}}
// kollane. tema sees olev sulg on lilla. lilla sees olev sulg on sinine. ja siis jälle kollane jne

// {} -> JS koodibloki jaoks. function lisa() {KOOD}      if (true) {}
//       HTMLs dünaamika jaoks - hakkan JavaScriptitama
// [] -> array.
// () -> käivitaja - funktsiooni lõpus.  kokkutõmbaja:  .map((toode,index) =>)
// .  -> temaga mingi funktsiooni tegemine või temale mingi omaduse võtmine
//      .sort()    .map()   .length    ref.current.value
// =>   kasutatav tsüklites. kui noole ees midagi muutub, siis käivita parempoolne kood
// =  -> väärtuse andmine
// === -> kontroll, kas parem ja vasak pool on identsed
// == -> ka kontroll, aga ilma tüübikontrollita   "7" == 7    "true" == true   <- ei taheta
// ;  -> realõpetaja (vabatahtlik)
// ? : -> ternary operator: lühendatud if/else     KAS_TÕSI ? KUI_ON_TÕSI : KUI_EI_OLE_TÕSI
// && -> lühendatud if     KAS_TÕSI && SIIS_NÄITA_HTMLs
// > < <=  >=   suurem, väiksem, väiksem-võrdne, suurem-võrdne
// // -> kaldkriipsud on kommentaar



function Avaleht() {
  const [amount, setAmount] = useState(0)
  const [message, setMessage] = useState("Muuda kogust!")
  const [liked, setLiked] = useState(false)
  const [tooted, setTooted] = useState(["Lay's", "Pringles", "Estrella"])

  return (
    <div className="flex flex-col items-center gap-4 p-6">

      {/* Laikimise nupp */}
      <img
        onClick={() => setLiked(!liked)}
        src={liked ? heart : nolove}
        alt="like"
        className="w-8 h-8 cursor-pointer hover:scale-110 transition"
      />

      {/* Algus teade */}
      <div className="text-gray-700">{message}</div>

      {/* Tagasi nulli nupp */}
      <button
        onClick={() => {
          setAmount(0)
          setMessage("Nullisid kogust!")
        }}
        className={`px-3 py-1 text-sm border rounded ${
          amount === 0 ? "invisible" : "visible"
        }`}
      >
        Tagasi nulli
      </button>

      {/* + - ja Lisa Taffel ala */}
      <div className="flex flex-col items-center gap-4 mt-2">

        {/* - 0 + rida */}
        <div className="flex items-center gap-4">
          <button
            disabled={amount === 0}
            onClick={() => {
              setAmount(amount - 1)
              setMessage("Vähendasid kogust!")
            }}
            className="px-3 py-1 border rounded disabled:opacity-40 hover:bg-gray-100"
          >
            -
          </button>

          <span
            className={`text-xl font-semibold ${
              amount > 10 ? "text-amber-500" : ""
            }`}
          >
            {amount}
          </span>

          <button
            onClick={() => {
              setAmount(amount + 1)
              setMessage("Suurendasid kogust!")
            }}
            className="px-3 py-1 border rounded hover:bg-gray-100"
          >
            +
          </button>
        </div>

        {/* Lisa juurde Taffel */}
        <button
          onClick={() => setTooted(["Lay's", "Pringles", "Estrella"])}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          Lisa juurde Taffel
        </button>

        {/* Toodete list */}
        <div>
          {tooted.map((toode, index) => (
            <div key={index} className="text-gray-700">
              {toode}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Avaleht