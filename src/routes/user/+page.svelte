<script>
	import EditUserDetails from "$lib/EditUserDetails.svelte";
  import Header from "$lib/Header.svelte";
	import MainNavigator from "$lib/MainNavigator.svelte";
  export let data;

</script>

<Header>
	<MainNavigator />
</Header>

<div class="box">
  <h1 class="is-size-2 has-text-centered">Your Details</h1>
  <table class="table is-bordered is-fullwidth is-hoverable">
      
        <thead>
          <tr>
              <th>Field</th>
              <th>Value</th>
          </tr>
        </thead>

      <tbody>
      <tr>
          <td data-label="Field">First Name</td>
          <td data-label="Value">{data.loggedInUser.firstName}</td>
      </tr>
      <tr>
          <td data-label="Field">Last Name</td>
          <td data-label="Value">{data.loggedInUser.lastName}</td>
      </tr>
      <tr>
          <td data-label="Field">Email</td>
          <td data-label="Value">{data.loggedInUser.email}</td>
      </tr>
      </tbody>
  </table>
</div>

<EditUserDetails data={data}/>