import "../../../../../chunks/index.js";
import { u as universityService } from "../../../../../chunks/university-service.js";
const actions = {
  default: async ({ request, params }) => {
    const data = await request.formData();
    const countyId = await params.countyId;
    console.log(`attempting to upload image with id ${countyId}`);
    await universityService.uploadImage(data, countyId);
  }
};
async function load({ request, params }) {
  const countyId = await params.countyId;
  return { countyId };
}
export {
  actions,
  load
};
