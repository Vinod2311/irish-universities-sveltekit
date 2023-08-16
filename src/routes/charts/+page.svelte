<script>
	import Header from "$lib/Header.svelte";
	import MainNavigator from "$lib/MainNavigator.svelte";
	import Chart from "svelte-frappe-charts";
  import { universityService } from "../../services/university-service";
	import { onMount } from "svelte";
  import { user } from "../../store";


  //export let data;

  onMount( async () => {
    let countyPicked;
    let universityCount = 0;
    let loggedInUser = await universityService.getUserByEmail($user.email);
    let countiesList = await universityService.getUserCounties(loggedInUser._id);
    for (let i=0; i< countiesList.length; i++){
      
      dataStore.labels.push(countiesList[i].name);
      countyPicked = await universityService.getCounty(countiesList[i]._id);
      universityCount =  countyPicked.universities.length;
      dataStore.datasets[0].values.push(universityCount);
    }
    dataStore = dataStore;
  });

	let dataStore = {
    labels: [],
    datasets: [
      {
        values: []
      }
    ]
  };



</script>

<Header>
  <MainNavigator />
</Header>

<div class="columns">
	<div class="column box has-text-centered">
		<h1 class="title is-4">Number of universities per county</h1>
		<Chart data={dataStore} type="bar" />
	</div>
	<div class="column has-text-centered">
    <h1 class="title is-4">Number of universities per county</h1>
		<Chart data={dataStore} type="pie" />
	</div>
</div>