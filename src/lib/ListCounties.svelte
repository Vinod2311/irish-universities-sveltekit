<script>
	import { onMount } from "svelte";
	import { universityService } from "../services/university-service";
  import {user} from "../store";
  import { goto } from "$app/navigation";

  export let data;
	
  let errorMessage="";


  async function deleteCounty(id) {
    console.log(`attemting to delete county with id: ${id}`);
		let success = await universityService.deleteCounty(id);
		if (success) {
			location.reload();
		} else {
			errorMessage = "Unsuccessful deletion";
		}
  }

</script>


{#each data.countiesList as county}
  <div class="box box-link-hover-shadow">
    <h2 class="title">
      {county.name}
    </h2>
    <a href="/county/{county._id}" class="button">
      <span class="icon is-small">
        <i class="fas fa-folder-open"></i>
      </span>
    </a>
    <button on:click|preventDefault={() => deleteCounty(county._id)}>
      <span class="icon is-medium">
        <i class="fas fa-trash"></i>
      </span>
    </button>
  </div>
{/each}

{#if errorMessage}
  <div class="section">
    {errorMessage}
  </div>
{/if}
