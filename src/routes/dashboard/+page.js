import { onMount } from "svelte";
import { universityService } from "../../services/university-service";
import { user } from "../../store";
import { get } from "svelte/store"

export const ssr = false;



if (typeof window !== 'undefined') {
  console.log('we are running on the client');
   
  //universityService.reload();
} else {
  console.log('we are running on the server');
}

export async function load()  {
  universityService.reload();
  const userEmail = get(user).email;
  //const userEmail = localStorage.university.email;
  let loggedInUser = await universityService.getUserByEmail(userEmail);
  let countiesList = await universityService.getUserCounties(loggedInUser._id);
  
  return {countiesList}
}

