import { component$, useSignal } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";

export const links = [
  { name: "Početna", link: "/" },
  { name: "O nama", link: "/o-nama/" },
  { name: "Galerija", link: "/galerija/" },
  { name: "Kontakt", link: "/kontakt/" },
];

export default component$(() => {
  const loc = useLocation();
  const isMobileDropdownOpen = useSignal(false);

  return (
    <header class="border-b border-slate-500 flex flex-row justify-between px-2 py-1 bg-slate-700 text-slate-100 items-center relative">
      <a
        href="/
      "
      >
        <Image
          src="/logo.png"
          layout="constrained"
          width={120}
          height={120}
          alt="brames-logotip"
        />
      </a>
      <ul class=" gap-8 hidden sm:flex sm:flex-row">
        {links.map((link) => {
          return (
            <>
              <li>
                <Link
                  class={`${
                    loc.url.pathname === link.link
                      ? "text-green-600 font-bold hover:text-green-500"
                      : "text-slate-100 hover:text-slate-50"
                  } `}
                  href={link.link}
                >
                  {link.name}
                </Link>
              </li>
            </>
          );
        })}
      </ul>
      <div class="visible sm:hidden">
        <button
          onClick$={() => {
            isMobileDropdownOpen.value = !isMobileDropdownOpen.value;
          }}
        >
          <i
            class={`fa-solid fa-bars text-2xl  transition duration-300 hover:rotate-[-45deg]`}
          ></i>
        </button>
        <ul
          class={`${
            isMobileDropdownOpen.value ? "scale-y-100" : "scale-y-0"
          } p-4 absolute top-12 left-0 w-screen gap-8 flex flex-col bg-slate-700 z-50 transition duration-300 origin-top`}
        >
          {links.map((link) => {
            return (
              <>
                <li class="">
                  <a
                    class={`${
                      loc.url.pathname === link.link
                        ? "text-green-600 font-bold hover:text-green-500"
                        : "text-slate-100 hover:text-slate-50"
                    } `}
                    href={link.link}
                  >
                    {link.name}
                  </a>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </header>
  );
});
