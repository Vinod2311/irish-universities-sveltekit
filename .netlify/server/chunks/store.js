import { w as writable } from "./index2.js";
const user = writable({
  email: "",
  token: "",
  firstName: "",
  lastName: ""
});
const countiesListStore = writable(null);
const countyStore = writable(null);
export {
  countiesListStore as a,
  countyStore as c,
  user as u
};
