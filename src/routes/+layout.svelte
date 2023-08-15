<script>
	import { beforeUpdate } from "svelte";
	import { universityService } from "../services/university-service";

	beforeUpdate(() => {
		universityService.reload();
	});
</script>

<div class="container">
	<slot />
</div>