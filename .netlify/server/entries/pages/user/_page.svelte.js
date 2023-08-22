import { c as create_ssr_component, a as add_attribute, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import { a as subscribe } from "../../../chunks/utils.js";
import { u as user } from "../../../chunks/store.js";
import { H as Header } from "../../../chunks/Header.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
const EditUserDetails = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => value);
  let { data } = $$props;
  let firstName = "";
  let lastName = "";
  let email = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_user();
  return `<div class="box"><section class="section"><h1 class="title" data-svelte-h="svelte-10ixgnk">Edit Your Details</h1> <form><div class="field"><label class="label">First Name
                    <input class="input" placeholder="First Name" type="text" name="firstName"${add_attribute("value", firstName, 0)}></label></div> <div class="field"><label class="label">Last Name
                    <input class="input" placeholder="Last Name" type="text" name="lastName"${add_attribute("value", lastName, 0)}></label></div> <div class="field"><label class="label">Email
                    <input class="input" placeholder="Email" type="text" name="email"${add_attribute("value", email, 0)}></label></div> <button class="button is-link" data-svelte-h="svelte-hh4g2m">Update user details</button></form></section></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })} <div class="box"><h1 class="is-size-2 has-text-centered" data-svelte-h="svelte-1rjxiw">Your Details</h1> <table class="table is-bordered is-fullwidth is-hoverable"><thead data-svelte-h="svelte-clalzs"><tr><th>Field</th> <th>Value</th></tr></thead> <tbody><tr><td data-label="Field" data-svelte-h="svelte-1agospb">First Name</td> <td data-label="Value">${escape(data.loggedInUser.firstName)}</td></tr> <tr><td data-label="Field" data-svelte-h="svelte-10r9chz">Last Name</td> <td data-label="Value">${escape(data.loggedInUser.lastName)}</td></tr> <tr><td data-label="Field" data-svelte-h="svelte-16vzovk">Email</td> <td data-label="Value">${escape(data.loggedInUser.email)}</td></tr></tbody></table></div> ${validate_component(EditUserDetails, "EditUserDetails").$$render($$result, { data }, {}, {})}`;
});
export {
  Page as default
};
