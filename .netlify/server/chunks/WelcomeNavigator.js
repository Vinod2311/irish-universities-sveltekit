import { c as create_ssr_component } from "./ssr.js";
const WelcomeNavigator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="box has-text-centered columns m-2" data-svelte-h="svelte-1eg4hkd"><a id="myId" href="/signup" class="column"><i class="fas fa-user-cog fa-3x" style="color:rgb(63, 160, 155)"></i></a> <a href="/login" class="column"><i class="fas fa-user-edit fa-3x" style="color:green" title="Log in"></i></a></div>`;
});
export {
  WelcomeNavigator as W
};
