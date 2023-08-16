import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { W as WelcomeNavigator } from "../../chunks/WelcomeNavigator.js";
import { H as Header } from "../../chunks/Header.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(WelcomeNavigator, "WelcomeNavigator").$$render($$result, {}, {}, {})}`;
    }
  })}`;
});
export {
  Page as default
};
