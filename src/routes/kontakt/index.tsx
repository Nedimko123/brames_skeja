import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="bg-slate-700 text-slate-100 w-full h-full block p-11">
      <div class="flex flex-col gap-4 items-start">
        <p class="text-2xl font-bold">
          Kontakirati nas možete putem emaila ili telefona.
        </p>
        <p>Adresa: Rudače bb, Hajderovići 72225</p>
        <p>Telefon: +387 (32) 852-2222 ili +387 (61) 376-634</p>
        <p>Email: brameszavidovici@gmail.com</p>
        <p>Radno vrijeme: 08:00 - 17:00</p>
        <p class="text-2xl font-bold">Lokacija na Mapi</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11388.494471421429!2d18.231332!3d44.4716388!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ebf9e9fd64e1f%3A0x3a4bbb38c525d0ca!2sPD%20%22BRAMES%22%20DOO!5e0!3m2!1sen!2sba!4v1686290650184!5m2!1sen!2sba"
          class="w-full h-96"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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
