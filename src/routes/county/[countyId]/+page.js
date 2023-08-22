import { universityService } from "../../../services/university-service.js";

export const ssr = false;



if (typeof window !== 'undefined') {
  console.log('we are running on the client');
   

} else {
  console.log('we are running on the server');
}

export async function load(params)  {
  universityService.reload();
  let county = await universityService.getCounty(params.params.countyId);
  return {county}
}

