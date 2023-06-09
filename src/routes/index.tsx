import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";

const benefits = [
  {
    header: "Otpornost",
    text: "Otpornost na nagle promjene temperature i visoku vlažnost zraka.",
    icon: "fa-solid fa-hand-fist",
  },
  {
    header: "Visoka čvrstoća i pouzdanost",
    text: "Visoka čvrstoća i pouzdanost - ovi parametri ovise o prisutnosti metalnih rebara i dovoljnoj debljini metala.",
    icon: "fa-solid fa-user-shield",
  },
  {
    header: "Otpornost na koroziju",
    text: "Većina modela ima zaštitnu, antikorozivnu prevlaku (sloj cinkovog ili polimernog raspršivanja) koji im omogućuje da zadrže svoj izvorni izgled dugo čak iu uvjetima visoke vlažnosti. ",
    icon: "fa-solid fa-virus-slash",
  },
  {
    header: "Ekološki",
    text: "Prijateljstvo okoliša ovog građevinskog materijala. Ne emitirajte štetne kemikalije u atmosferu. ",
    icon: "fa-solid fa-leaf",
  },
  {
    header: "Dugi vijek trajanja",
    text: "Dugi vijek trajanja. Pravilnim montažom, metalni profili mogu vam dugo poslužiti. ",
    icon: "fa-solid fa-hourglass",
  },
  {
    header: "Jedinstvena kombinacija cijene i kvalitete",
    text: "Niska cijena ih povoljno razlikuje na tržištu građevinskih materijala. Korištenje metalnih profila u popravcima i građevinskim radovima neće značajno utjecati na konačni proračun i neće uzrokovati nepredviđene materijalne troškove.",
    icon: "fa-solid fa-hand-holding-dollar",
  },
];

export default component$(() => {
  return (
    <div class="bg-slate-700 text-slate-100 block p-11">
      <div class="flex  flex-col sm:flex-row gap-4">
        <div class="sm:w-1/2 flex flex-col gap-2">
          <p class="text-green-400 font-bold text-base">
            Karakteristike metalnih profila
          </p>
          <h2 class="text-2xl">
            Pružanje najboljih svjetskih industrijskih usluga.
          </h2>
          <p>
            Osigurali smo u prvom redu strano tržište, tačnije u Njemačkoj, a
            već imamo dogovorene poslove i za nekoliko domaćih firmi. Kvalitet
            proizvoda i ispunjenje ugovorenih uvjeta bit će naš zaštitni znak.
            Za proizvodnju koristimo najkvalitetniji italijanski tim.
          </p>
        </div>
        <Image
          key="image-brames"
          class="w-full sm:w-1/2"
          src="/1.jpg"
          layout="constrained"
          width={120}
          height={120}
          alt="brames"
        />
      </div>
      <div class="flex flex-row overflow-scroll w-full snap-x gap-10 p-10 snap-proximity">
        {benefits.map((benefit) => {
          return (
            <div class="cursor-pointer min-w-[200px] sm:min-w-[350px] snap-center flex flex-col gap-4 border border-slate-500 p-2 sm:p-10 justify-center items-center">
              <i class={`text-3xl ${benefit.icon}`}></i>
              <h2 class="text-2xl font-bold">{benefit.header}</h2>
              <p>{benefit.text}</p>
            </div>
          );
        })}
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
