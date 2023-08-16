import { universityService } from "../../services/university-service";
import { get } from "svelte/store";
import { user } from "../../store";
export const ssr = false;

export async function load()  {
  universityService.reload();
  const userEmail = get(user).email;
  let loggedInUser = await universityService.getUserByEmail(userEmail);
  return {loggedInUser}
}