import { get } from "svelte/store";
import { universityService } from "../../../services/university-service.js";
import { countyStore } from "../../../store.js";
export const ssr = false;


export async function load(params)  {
  universityService.reload();
  let county = await universityService.getCounty(params.params.countyId);
  countyStore.set(county);
  //console.log(get(countyStore));
  return {county}
}

