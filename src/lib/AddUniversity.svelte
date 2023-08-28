<script>
 
  import { universityService } from "../services/university-service";
  import { user,countyStore} from "../store";

  //export let data;

  let message = "";

  let university = {};

  university.name = "";
  university.lat = 53.365276;
  university.lng = -7.798909;
  university.description = "";

  async function addUniversity() {
    if (university.name) {
      const newUniversity = {
        name: university.name,
        lat: university.lat,
        lng: university.lng,
        description: university.description
      };
      const success = await universityService.createUniversity(newUniversity, $countyStore._id);
      if (!success) {
				message = "Addition of university not completed - some error occurred";
				return;
			}
      $countyStore.universities.push(success);
      $countyStore = $countyStore;
      message= `You added ${newUniversity.name}.`;

    } else {
      message = "Add a university!"
    }
  };

</script>


<form class="box" on:submit|preventDefault={addUniversity}>
  <label>Enter University Details
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <input bind:value={university.name} class="input" type="text" placeholder="Enter University Name" name="name">
      </div>
      <div class="field">
        <input bind:value={university.lat} class="input" type="number" placeholder="Enter University Latitude" name="lat" step="0.000001">
      </div>
      <div class="field">
        <input bind:value={university.lng} class="input" type="number" placeholder="Enter University Longitude" name="lng" step="0.000001">
      </div>
      <div class="field">
        <input bind:value={university.description} class="input" type="text" placeholder="Enter University Description" name="description">
      </div>
    </div>
  </div>
  </label>
  <button class="button is-link">Add university</button>
  <div class="box">
    {message}
  </div>
</form>