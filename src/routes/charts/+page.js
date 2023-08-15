/*
import { universityService } from '../../services/university-service.js';
export const ssr = false;

export async function load()  {
  universityService.reload();
  //const userEmail = get(user).email;
  //const userEmail = localStorage.university.email;
  let loggedInUser = await universityService.getUserByEmail("homer@simpson.com");
  let countiesList = await universityService.getUserCounties(loggedInUser._id);
  
  
  return {countiesList}
}
*/