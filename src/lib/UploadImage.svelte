<script>
  import { onMount } from "svelte";

  let widget;

  onMount(() => {
    if('cloudinary' in window) {
      widget = window.cloudinary.createUploadWidget({
        cloudName: 'ddqagjyf3',
        uploadPreset: 'mezbybkj'
      }, (error, result) => {
        console.log(result)
      });
      console.log(widget)
    }
  });

  function handleClick(){
    if (widget){
      widget.open()
    }
  };
  

</script>

<button on:click|preventDefault={handleClick}>Upload</button>