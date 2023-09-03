
import { redirect } from "@sveltejs/kit";
import { universityService } from "../../../../services/university-service";
// export const ssr=false;

let formData = null;


export const actions = {
  default: async ({request,params}) => {
    const data = await request.formData();
    const countyId = await params.countyId;
    console.log(`attempting to upload image with id ${countyId}`);
    await universityService.uploadImage(data,countyId);
    if (data) {
      formData = true
    }
    //throw redirect(303,`/county/${params.countyId}`);
  }
}

export async function load({request, params})  {
  //universityService.reload();
  const countyId = await params.countyId;
  //countyStore.set(county);
  //console.log(get(countyStore));
  return {countyId,formData}
}

