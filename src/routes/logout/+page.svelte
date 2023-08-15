<script>
  import { goto } from "$app/navigation";
  import { universityService } from "../../services/university-service";

  universityService.logout();
  goto("/");
</script>