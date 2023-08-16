import { u as universityService } from "../../../../chunks/university-service.js";
const ssr = false;
if (typeof window !== "undefined") {
  console.log("we are running on the client");
} else {
  console.log("we are running on the server");
}
async function load(params) {
  universityService.reload();
  let county = await universityService.getCounty(params.params.countyId);
  return { county };
}
export {
  load,
  ssr
};
