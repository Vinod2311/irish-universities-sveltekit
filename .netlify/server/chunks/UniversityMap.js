import { c as create_ssr_component } from "./ssr.js";
import "leaflet";
const UniversityMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="box" id="donation-map" style="height:75vh"></div>`;
});
export {
  UniversityMap as U
};
