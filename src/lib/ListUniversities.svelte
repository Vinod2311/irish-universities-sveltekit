<script>
	import { onMount } from "svelte";
	import { universityService } from "../services/university-service";
  import {user} from "../store";
  import { goto } from "$app/navigation";

  export let data;

  let errorMessage="";
  

  async function deleteUniversity( id) {
    console.log(`attemting to delete university with id: ${id}`);
		let success = await universityService.deleteUniversity(id);
		if (success) {
			location.reload();
		} else {
			errorMessage = "Unsuccessful deletion";
		}
  };


</script>

<table class="table is-fullwidth">
  <thead>
    <tr>
      <th>University Name</th>
      <th>Latitude</th>
      <th>Longitude</th>
      <th>Description</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    
    {#each data.county.universities as university}
      <tr>
        <td>
          {university.name}
        </td>
        <td>
          {university.lat}
        </td>
        <td>
          {university.lng}
        </td>
        <td>
          {university.description}
        </td>
        <td>
          <button on:click|preventDefault={() => deleteUniversity(university._id)}>
            <span class="icon is-medium">
              <i class="fas fa-trash"></i>
            </span>
          </button>
        </td>
      </tr>
    {/each}
  
  </tbody>
</table>

{#if errorMessage}
  <div class="section">
    {errorMessage}
  </div>
{/if}