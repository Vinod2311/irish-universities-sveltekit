import { u as universityService } from "../../../../chunks/university-service.js";
import { c as countyStore } from "../../../../chunks/store.js";
const ssr = false;
async function load(params) {
  universityService.reload();
  let county = await universityService.getCounty(params.params.countyId);
  countyStore.set(county);
  return { county };
}
export {
  load,
  ssr
};
