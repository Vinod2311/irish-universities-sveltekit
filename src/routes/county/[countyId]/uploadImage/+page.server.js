
import { redirect } from "@sveltejs/kit";
import { universityService } from "../../../../services/university-service";
export const ssr=false;


export const actions = {
  default: async ({request,params}) => {
    const data = await request.formData();
    const countyId = await params.countyId;
    console.log(`attempting to upload image with id ${countyId}`);
    await universityService.uploadImage(data,countyId);
    throw redirect(303,`/county/${params.countyId}`);
  }
}

