import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <div class="bg-slate-700 text-slate-100 w-full h-full block p-11">
      <div class="flex  flex-col sm:flex-row gap-4">
        <div class="sm:w-1/2 flex flex-col gap-2">
          <p class="text-green-400 font-bold text-base">O Nama</p>
          <h2 class="text-2xl">
            Postavljamo standarde kojima se drugi trude živjeti.
          </h2>
          <p>
            BRAMES doo je porodična firma osnovana 2019 god. u naselju Rudače bb
            u Zavidovićima. Naša djelatnost se bazira na proizvodnji metalnih
            profila, a u prioritetu su profili za suhu gradnju. Kvalitet naših
            proizvoda je na prvom mjestu uz zadovoljstvo naših kupaca. Trenutno
            je u ponudi osam vrsta profila i to za suhu gradnju.
          </p>
          <div class="flex flex-col items-start gap-4">
            <h1 class="text-2xl font-bold mt-10">Drugi O Nama</h1>
            <a href="https://avaz.ba/vijesti/biznis/535342/investirao-milionski-kapital-u-firmu-%E2%80%99brames%E2%80%99">
              <Image
                class="w-full"
                src="/dnevni-avaz-logo.jpg"
                layout="constrained"
                width={120}
                height={120}
                alt="dnevni-avaz-logo"
              />
            </a>
            <h1 class="text-2xl font-bold">
              Investirao milionski kapital u firmu &rsquo;Brames&rsquo;
            </h1>
            <p>
              Firma &bdquo;Brames&ldquo; u oblasti metalne industrije bavi se
              proizvodnjom vi&scaron;e vrsta metalnih profila, uglavnom za suho
              građenje. Sjedi&scaron;te firme je u mjestu Rudače, MZ
              Hajderovići. Moderno opremljen proizvodni pogon s pratećim
              objektima proteže se na oko 2.000 kvadrata.Najsavremenije
              ma&scaron;ine za obradu metala i proizvodnju su velikih kapaciteta
              i po&scaron;tuju se svi propisani standardi. Prema riječima
              vlasnika firme, ovih dana se čeka i certifikat CE koji treba
              izdati nadležna firma iz Slovenije.
            </p>
          </div>
        </div>
        <Image
          class="w-1/2"
          src="/2.jpg"
          layout="constrained"
          width={120}
          height={120}
          alt="brames"
        />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Brames - Proizvodnja Metalnih Profila",
  meta: [
    {
      name: "description",
      content: "Brames, Zavidovici se bavi proizvodnjom metalnih profila",
    },
  ],
};
