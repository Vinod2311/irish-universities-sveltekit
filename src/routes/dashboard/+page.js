
import { universityService } from "../../services/university-service";
import { user,countiesListStore } from "../../store";
import { get } from "svelte/store"


export const ssr = false;



export async function load()  {
  universityService.reload();
  const userEmail = get(user).email;
  let loggedInUser = await universityService.getUserByEmail(userEmail);
  let countiesList = await universityService.getUserCounties(loggedInUser._id);
  countiesListStore.set(countiesList);
  //console.log(countiesList);
  //console.log(get(countiesListStore));
  return {countiesList}
}

