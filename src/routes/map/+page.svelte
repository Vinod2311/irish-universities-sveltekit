<script>
	import Header from "$lib/Header.svelte";
	import MainNavigator from "$lib/MainNavigator.svelte";
  import { beforeUpdate } from "svelte";
  import { universityService } from "../../services/university-service";
  import UniversityMap from "$lib/UniversityMap.svelte";

  beforeUpdate(() => {
		universityService.reload();
	});

</script>

<Header>
	<MainNavigator />
</Header>

<UniversityMap />