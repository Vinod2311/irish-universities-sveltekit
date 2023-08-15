
import { goto } from "$app/navigation";
import { universityService } from "../../../../services/university-service";
export const ssr=false;


export const actions = {
  default: async ({request,params}) => {
    const data = await request.formData();
    const countyId = await params.countyId;
    universityService.uploadImage(data,countyId);
    // goto("/dashboard")
  }
}

