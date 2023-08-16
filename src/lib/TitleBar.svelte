<script>
  import { user } from "../store.js";
	export let title = '';
	export let subTitle = '';
</script>

<div class="box has-text-centered columns m-2">
	<div class="column">
	</div>
	<div class="column">
		<div class="title is-5">{title}</div>
		<div class="subtitle is-5">{subTitle}</div>
	</div>
	<div class="column">
		<i class="fas fa-graduation-cap" style="font-size: 48px; color: Dodgerblue;" />
		{#if $user.email}
			<div class="is-size-7">{$user.email}</div>
		{:else}
			<div class="is-size-7">Irish Universities - sveltekit 1.0.1</div>
		{/if}
	</div>
</div>