import { r as redirect } from "../../../../../chunks/index.js";
import { u as universityService } from "../../../../../chunks/university-service.js";
let formData = null;
const actions = {
  default: async ({ request, params }) => {
    const data = await request.formData();
    const countyId = await params.countyId;
    console.log(`attempting to upload image with id ${countyId}`);
    await universityService.uploadImage(data, countyId);
    if (data) {
      formData = true;
    }
    throw redirect(303, `/county/${params.countyId}`);
  }
};
async function load({ request, params }) {
  const countyId = await params.countyId;
  return { countyId, formData };
}
export {
  actions,
  load
};
