<script>

	import WelcomeNavigator from "$lib/WelcomeNavigator.svelte";
  import Header from "$lib/Header.svelte";
  import { universityService } from "../services/university-service";
  import { onMount } from "svelte";
  import { user } from "../store";
  import { goto } from "$app/navigation";
  
  let loggedInUser = null;

  onMount(async () => {
      loggedInUser = await universityService.getUserByEmail($user.email);
      console.log(loggedInUser);
      if (loggedInUser.email) {
        goto("/dashboard");
      }
    });
</script>

<Header>
  <WelcomeNavigator />
</Header>