import { a as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, b as each, e as escape, a as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
import { H as Header } from "../../../chunks/Header.js";
import { u as user } from "../../../chunks/store.js";
const ListCounties = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${each(data.countiesList, (county) => {
    return `<div class="box box-link-hover-shadow"><h2 class="title">${escape(county.name)}</h2> <a href="${"/county/" + escape(county._id, true)}" class="button"><span class="icon is-small" data-svelte-h="svelte-1npbblp"><i class="fas fa-folder-open"></i> </span></a> <button data-svelte-h="svelte-1o7my5e"><span class="icon is-medium"><i class="fas fa-trash"></i> </span></button> </div>`;
  })} ${``}`;
});
const AddCounty = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => value);
  let message = "";
  let county = {};
  county.name = "";
  $$unsubscribe_user();
  return `<form><div class="field"><label>County Name
    <input class="input" type="text" placeholder="Enter County Name" name="name"${add_attribute("value", county.name, 0)}></label></div> <button class="button is-link" data-svelte-h="svelte-1ap33kd">Add County</button> <div class="box">${escape(message)}</div></form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_user();
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })} <div class="box has-text-centered"><span class="icon is-large" data-svelte-h="svelte-7dpsuh"><i class="fas fa-user fa-2x"></i></span> <h1 class="is-size-2 ">Welcome ${escape($user.firstName)}</h1> <a href="/user" class="button is-link" data-svelte-h="svelte-11kb5y5">Edit Your Personal Details</a></div> <section class="section">${validate_component(ListCounties, "ListCounties").$$render($$result, { data }, {}, {})} ${validate_component(AddCounty, "AddCounty").$$render($$result, {}, {}, {})}</section>`;
});
export {
  Page as default
};
