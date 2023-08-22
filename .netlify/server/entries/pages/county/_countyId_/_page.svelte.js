import { c as create_ssr_component, b as each, e as escape, a as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
import { M as MainNavigator } from "../../../../chunks/MainNavigator.js";
import { H as Header } from "../../../../chunks/Header.js";
import { U as UniversityMap } from "../../../../chunks/UniversityMap.js";
const ListUniversities = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<table class="table is-fullwidth"><thead data-svelte-h="svelte-19dp7q4"><tr><th>University Name</th> <th>Latitude</th> <th>Longitude</th> <th>Description</th> <th></th></tr></thead> <tbody>${each(data.county.universities, (university) => {
    return `<tr><td>${escape(university.name)}</td> <td>${escape(university.lat)}</td> <td>${escape(university.lng)}</td> <td>${escape(university.description)}</td> <td><button data-svelte-h="svelte-g96zia"><span class="icon is-medium"><i class="fas fa-trash"></i></span> </button></td> </tr>`;
  })}</tbody></table> ${``}`;
});
const AddUniversity = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let message = "";
  let university = {};
  university.name = "";
  university.lat = 53.365276;
  university.lng = -7.798909;
  university.description = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<form class="box"><label>Enter University Details
  <div class="field is-horizontal"><div class="field-body"><div class="field"><input class="input" type="text" placeholder="Enter University Name" name="name"${add_attribute("value", university.name, 0)}></div> <div class="field"><input class="input" type="number" placeholder="Enter University Latitude" name="lat" step="0.000001"${add_attribute("value", university.lat, 0)}></div> <div class="field"><input class="input" type="number" placeholder="Enter University Longitude" name="lng" step="0.000001"${add_attribute("value", university.lng, 0)}></div> <div class="field"><input class="input" type="text" placeholder="Enter University Description" name="description"${add_attribute("value", university.description, 0)}></div></div></div></label> <button class="button is-link" data-svelte-h="svelte-1g5wyw3">Add university</button> <div class="box">${escape(message)}</div></form>`;
});
const CountyImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="card">${data.county.img ? `<div class="card-image"><figure class="image is-256x256"> <img${add_attribute("src", data.county.img, 0)} alt="picture of spire"></figure> <button data-svelte-h="svelte-xmxcnr"><span class="icon is-medium"><i class="fas fa-trash"></i></span></button></div>` : ``} <div class="card-content"><form action="${"/county/" + escape(data.county._id, true) + "/uploadImage"}" method="POST" enctype="multipart/form-data" id="uploadImage"><div id="file-select" class="file has-name is-fullwidth" data-svelte-h="svelte-wd21w1"><label class="file-label"><input class="file-input" name="imagefile" type="file" accept="image/png, image/jpeg"> <span class="file-cta"><span class="file-icon"><i class="fas fa-upload"></i></span> <span class="file-label">Choose a file…</span></span> <span class="file-name"></span></label> <button type="submit" class="button is-info">Upload</button></div></form></div></div> ${``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })} <section class="section columns is-vcentered"><div class="column has-text-centered"><div class="title">${escape(data.county.name)}</div> ${validate_component(ListUniversities, "ListUniversities").$$render($$result, { data }, {}, {})} ${validate_component(AddUniversity, "AddUniversity").$$render($$result, { data }, {}, {})}</div> <div class="column">${validate_component(CountyImage, "CountyImage").$$render($$result, { data }, {}, {})}</div></section> ${validate_component(UniversityMap, "UniversityMap").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
