import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <footer class="border-t border-slate-500  w-full  bg-slate-700 text-slate-100">
      <div class="flex flex-row justify-between p-4 gap-2">
        <p>© Brames DOO</p>
        <div class="flex flex-col items-start gap-4">
          <h1 class='text-xl font-bold'>Korisne informacije</h1>
          <p>Adresa: Rudače bb, Hajderovići 72225</p>
          <p>Telefon: +387 (32) 852-2222 ili +387 (61) 376-634</p>
          <p>Email: brameszavidovici@gmail.com</p>
          <p>Radno vrijeme: 08:00 - 17:00</p>
        </div>
      </div>
    </footer>
  );
});
