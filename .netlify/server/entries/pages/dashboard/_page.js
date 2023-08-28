import { u as universityService } from "../../../chunks/university-service.js";
import { a as countiesListStore, u as user } from "../../../chunks/store.js";
import { g as get_store_value } from "../../../chunks/utils.js";
const ssr = false;
async function load() {
  universityService.reload();
  const userEmail = get_store_value(user).email;
  let loggedInUser = await universityService.getUserByEmail(userEmail);
  let countiesList = await universityService.getUserCounties(loggedInUser._id);
  countiesListStore.set(countiesList);
  return { countiesList };
}
export {
  load,
  ssr
};
