import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { H as Header } from "../../../chunks/Header.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
import { U as UniversityMap } from "../../../chunks/UniversityMap.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })} ${validate_component(UniversityMap, "UniversityMap").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
