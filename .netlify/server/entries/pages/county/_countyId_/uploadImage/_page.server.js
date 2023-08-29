import { r as redirect } from "../../../../../chunks/index.js";
import { u as universityService } from "../../../../../chunks/university-service.js";
const ssr = false;
const actions = {
  default: async ({ request, params }) => {
    const data = await request.formData();
    const countyId = await params.countyId;
    console.log(`attempting to upload image with id ${countyId}`);
    await universityService.uploadImage(data, countyId);
    throw redirect(303, `/county/${params.countyId}`);
  }
};
export {
  actions,
  ssr
};
