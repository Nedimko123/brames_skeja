import { component$ } from "@builder.io/qwik";
import { links } from "../header/header";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const loc = useLocation();
  return (
    <footer class="border-t border-slate-500  w-full  bg-slate-700 text-slate-100">
      <div class="flex flex-col sm:flex-row justify-between p-4 gap-4">
        <p>© Brames DOO</p>
        <div class="flex flex-col gap-4 items-start">
          <h1 class="text-xl font-bold">Linkovi</h1>
          {links.map((link)=>{
            return <a
            class={`${
              loc.url.pathname === link.link
                ? "text-green-600 font-bold hover:text-green-500"
                : "text-slate-100 hover:text-slate-50"
            } `}
            key={link.name}
            href={link.link}>{link.name}</a>
          })}
        </div>
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
