<script>
  import MainNavigator from "$lib/MainNavigator.svelte";
  import Header from "$lib/Header.svelte";
  import ListUniversities from "$lib/ListUniversities.svelte";
  import AddUniversity from "$lib/AddUniversity.svelte";
	import CountyImage from "$lib/CountyImage.svelte";
  import UniversityMap from "$lib/UniversityMap.svelte";
  
  export let data;

</script>


<Header>
  <MainNavigator />
</Header>


<section class="section columns is-vcentered">
  <div class="column has-text-centered">
    <div class="title">
      {data.county.name}
    </div>
    <ListUniversities data={data}/>
    <AddUniversity data={data}/>
  </div>
  <div class="column">
    <CountyImage data={data}/> 
  </div>
</section>

<UniversityMap />