import {writable} from "svelte/store";

export const user = writable({
  email: "",
  token: "",
  firstName: "",
  lastName: "",
});


export const latestUniversity = writable(null);

export const countiesListStore = writable(null);

export const countyStore = writable(null);