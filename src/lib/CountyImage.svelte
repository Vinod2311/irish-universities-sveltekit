<script>
  import { CldImage } from 'svelte-cloudinary'; 
  import { universityService } from '../services/university-service';
  import { goto } from '$app/navigation';

  // export const csr = false;
  export let data;
  

  let errorMessage = "";
  
  
  async function deleteImage(countyId) {
    console.log(`attemting to delete image with county id: ${countyId}`);
		let success = await universityService.deleteImage(countyId);
		if (success) {
			location.reload();
		} else {
			errorMessage = "Unsuccessful deletion";
		}
  };
  

  

  


</script>

<div class="card">
  <div class="card-image"> 
      <figure class="image is-256x256">
        <img src={data.county.img}>
      </figure>
      {#if data.county.img}
        <button on:click|preventDefault={() => deleteImage(data.county._id)}>
          <span class="icon is-medium">
            <i class="fas fa-trash"></i>
          </span>
        </button>
      {/if}
  </div>

  <div class="card-content">
    <form action="/county/{data.county._id}/uploadImage" method="POST"  enctype="multipart/form-data" id="uploadImage">
      <div id="file-select" class="file has-name is-fullwidth">
        <label class="file-label"> <input class="file-input" name="imagefile" type="file" accept="image/png, image/jpeg">
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">
              Choose a file…
            </span>
           </span>
          <span class="file-name"></span>
        </label>
        <button type="submit" class="button is-info">Upload</button>
      </div>
    </form>
  </div>

</div>
{#if errorMessage}
  <div class="section">
    {errorMessage}
  </div>
{/if}
