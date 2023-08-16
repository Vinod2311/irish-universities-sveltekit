import { u as universityService } from "../../../chunks/university-service.js";
import { u as user } from "../../../chunks/store.js";
import { g as get_store_value } from "../../../chunks/utils.js";
const ssr = false;
if (typeof window !== "undefined") {
  console.log("we are running on the client");
} else {
  console.log("we are running on the server");
}
async function load() {
  universityService.reload();
  const userEmail = get_store_value(user).email;
  let loggedInUser = await universityService.getUserByEmail(userEmail);
  let countiesList = await universityService.getUserCounties(loggedInUser._id);
  return { countiesList };
}
export {
  load,
  ssr
};
