import { c as create_ssr_component } from "./ssr.js";
const MainNavigator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="box has-text-centered columns m-2" data-svelte-h="svelte-obf70"><a href="/dashboard" class="column"><i class="fas fa-house fa-3x"></i></a> <a href="/map" class="column"><i class="fas fa-map-marked-alt fa-3x"></i></a> <a href="/charts" class="column is-2 mx-2"><i class="fas fa-chart-line fa-3x"></i></a> <a href="/logout" class="column"><i class="fas fa-sign-out-alt fa-3x"></i></a></div>`;
});
export {
  MainNavigator as M
};
