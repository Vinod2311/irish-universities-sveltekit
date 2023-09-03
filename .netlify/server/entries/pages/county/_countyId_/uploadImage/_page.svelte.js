import { c as create_ssr_component } from "../../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data.countyId);
  console.log(data.formData);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<p data-svelte-h="svelte-q5r9lp">Image uploaded</p>`;
});
export {
  Page as default
};
