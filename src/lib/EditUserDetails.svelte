<script>
  import { universityService } from "../services/university-service";
	import { user } from "../store";
  export let data;

  let message=""
  let firstName="";
  let lastName="";
  let email="";

  async function editUserDetails() {
  if (firstName && lastName && email) {
    const userDetails = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    }
    const success = await universityService.editUserDetails(userDetails, data.loggedInUser._id);
    if (!success) {
			message = "Edit not complete - some error occurred";
			return;
		}
    const token = $user.token
    localStorage.university = JSON.stringify({email: email, token: token, 
          firstName: firstName, lastName: lastName});
    location.reload();
		message = `Edited user details`;
    } else {
      message = "Please enter user details"
    }
  }
</script>

<div class="box">
  <section class="section">
      <h1 class="title">Edit Your Details</h1>
      <form on:submit|preventDefault={editUserDetails}>
              <div class="field">
                  <label class="label">First Name</label>
                  <input bind:value={firstName} class="input" placeholder="First Name" type="text" name="firstName">
              </div>
              <div class="field">
                  <label class="label">Last Name</label>
                  <input bind:value={lastName} class="input" placeholder="Last Name" type="text" name="lastName" >
              </div>
              <div class="field">
                  <label class="label">Email</label>
                  <input bind:value={email} class="input" placeholder="Email" type="text" name="email" >
              </div>

          <button class="button is-link">Update user details</button>
      </form>
  </section>
</div>