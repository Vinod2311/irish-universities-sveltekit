<script>
// @ts-nocheck
  import { universityService } from '../services/university-service';
  import { countyStore } from '../store';
  //export let data;

  /*
  async function fileInputChange() {
    const fileInput = document.querySelector(".file-input");
    if (fileInput.files.length > 0) {
      const fileName = document.querySelector(".file-name");
      fileName.textContent = fileInput.files[0].name;
    }
  };*/

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
  {#if $countyStore.img}
  <div class="card-image"> 
      <figure class="image is-256x256">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={$countyStore.img} alt="picture of spire">
      </figure>
        <button on:click|preventDefault={() => deleteImage($countyStore._id)}>
          <span class="icon is-medium">
            <i class="fas fa-trash"></i>
          </span>
        </button>
      
  </div>
  {/if}

  <div class="card-content">
    <form action="/county/{$countyStore._id}/uploadImage" method="POST"  enctype="multipart/form-data" id="uploadImage">
      <div id="file-select" class="file has-name is-fullwidth">
        <label class="file-label"> <input on:change={fileInputChange} class="file-input" name="imagefile" type="file" accept="image/png, image/jpeg">
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
