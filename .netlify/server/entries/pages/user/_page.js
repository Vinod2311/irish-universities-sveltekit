import { u as universityService } from "../../../chunks/university-service.js";
import { g as get_store_value } from "../../../chunks/utils.js";
import { u as user } from "../../../chunks/store.js";
const ssr = false;
async function load() {
  universityService.reload();
  const userEmail = get_store_value(user).email;
  let loggedInUser = await universityService.getUserByEmail(userEmail);
  return { loggedInUser };
}
export {
  load,
  ssr
};
