function show_menu() {
  const drawer     = document.querySelector(".mdl-layout__drawer");
  const obfuscator = document.querySelector(".mdl-layout__obfuscator");

  if (drawer) {
    drawer.classList.add("is-visible");
    obfuscator.classList.add("is-visible");
    drawer.setAttribute("aria-hidden", "false");
  }
}

function hide_menu() {
  const drawer     = document.querySelector(".mdl-layout__drawer");
  const obfuscator = document.querySelector(".mdl-layout__obfuscator");

  if (drawer) {
    drawer.classList.remove("is-visible");
    obfuscator.classList.remove("is-visible");
    drawer.setAttribute("aria-hidden", "true");
  }
}