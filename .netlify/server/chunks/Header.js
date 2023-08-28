import { c as create_ssr_component, e as escape, v as validate_component } from "./ssr.js";
import { s as subscribe } from "./utils.js";
import { u as user } from "./store.js";
const TitleBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let { title = "" } = $$props;
  let { subTitle = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subTitle === void 0 && $$bindings.subTitle && subTitle !== void 0)
    $$bindings.subTitle(subTitle);
  $$unsubscribe_user();
  return `<div class="box has-text-centered columns m-2"><div class="column" data-svelte-h="svelte-1fkpcck"></div> <div class="column"><div class="title is-5">${escape(title)}</div> <div class="subtitle is-5">${escape(subTitle)}</div></div> <div class="column"><i class="fas fa-graduation-cap" style="font-size: 48px; color: Dodgerblue;"></i> ${$user.email ? `<div class="is-size-7">${escape($user.email)}</div>` : `<div class="is-size-7" data-svelte-h="svelte-obhbq0">Irish Universities - sveltekit 1.0.1</div>`}</div></div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="columns is-vcentered"><div class="column is-half">${validate_component(TitleBar, "TitleBar").$$render(
    $$result,
    {
      title: "Irish Universities",
      subTitle: "Sign up or Log in"
    },
    {},
    {}
  )}</div> <div class="column is-half">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Header as H
};
