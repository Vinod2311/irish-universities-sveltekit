import { onMount } from "svelte";
import { universityService } from "../../../services/university-service.js";
import { user } from "../../../store.js";
import { get } from "svelte/store"

export const ssr = false;



if (typeof window !== 'undefined') {
  console.log('we are running on the client');
   
  //universityService.reload();
} else {
  console.log('we are running on the server');
}

export async function load(params)  {
  universityService.reload();
  // const userEmail = get(user).email;
  //const userEmail = localStorage.university.email;
  // let loggedInUser = await universityService.getUserByEmail(userEmail);
  let county = await universityService.getCounty(params.params.countyId);
  
  
  return {county}
}

