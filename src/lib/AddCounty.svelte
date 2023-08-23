<script>
  import { onMount } from "svelte";
  import { universityService } from "../services/university-service";
  import { user, countiesListStore } from "../store";

  let message = "";

  let county = {};
  county.name = "";
  let loggedInUser = null;

  onMount(async () => {
      loggedInUser = await universityService.getUserByEmail($user.email);
    });

  async function addCounty() {
    if (county.name) {
      const addedCounty = await universityService.createCounty(county,loggedInUser._id);
      //$countiesListStore[$countiesListStore.length] = addedCounty;
      $countiesListStore.push(addedCounty);
      $countiesListStore = $countiesListStore;
      console.log($countiesListStore);
      if (!addedCounty) {
				message = "Addition of county not completed - some error occurred";
				return;
			}
      // location.reload();
      message= `You added ${county.name}.`;
      

    } else {
      message = "Add a county!"
    }
  };

</script>


<form on:submit|preventDefault={addCounty}>
  <div class="field">
    <label >County Name
    <input bind:value={county.name} class="input" type="text" placeholder="Enter County Name" name="name">
    </label>
  </div>
  <button class="button is-link">Add County</button>
  <div class="box">
    {message}
  </div>
</form>