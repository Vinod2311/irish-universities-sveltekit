<script>
  import MainNavigator from "$lib/MainNavigator.svelte";
  import Header from "$lib/Header.svelte";
  import ListCounties from "$lib/ListCounties.svelte";
  import AddCounty from "$lib/AddCounty.svelte";
  import { user,countiesListStore } from "../../store";
	import { universityService } from "../../services/university-service";
  //export let data;
  
</script>

<Header>
  <MainNavigator />
</Header>

<div class="box has-text-centered">
  <span class="icon is-large">
      <i class="fas fa-user fa-2x"></i>
  </span>
  <h1 class="is-size-2 "> Welcome {$user.firstName}</h1>
  <a href="/user" class="button is-link" >Edit Your Personal Details</a>
</div>

<section class="section">
  <ListCounties />
  <AddCounty />
</section>