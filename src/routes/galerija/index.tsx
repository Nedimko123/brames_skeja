import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <div class="bg-slate-700 text-slate-100 w-full h-full block p-11">
      <div class="grid sm:grid-cols-2 place-items-center gap-10">
        {Array.from({ length: 15 }).map((_, index) => {
          return (
            <Image
              key={index}
              class="w-full"
              src={`/${index + 1}.jpg`}
              layout="constrained"
              width={120}
              height={120}
              alt="brames"
            />
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
