<script>
	import "leaflet/dist/leaflet.css";
	import { LeafletMap } from "../services/leaflet-map";
	import { onMount } from "svelte";
  import { universityService } from "../services/university-service";
  import { latestUniversity } from "../store";

	const mapConfig = {
		location: { lat: 53.414629, lng: -7.676845 },
		zoom: 7,
		minZoom: 1
	};
/*
  function addUniversityMarker(map, university){
    const universityStr = `${university.name}: ${university.description}`;
    map.addMarker({ lat: university.lat, lng: university.lng}, universityStr, "Universities");
  };

  latestUniversity.subscribe((university) => {
    if (university && map) {
      addUniversityMarker(map, university);
    }
  })
*/
	onMount(async () => {
		const map = new LeafletMap("donation-map", mapConfig);
    map.showZoomControl();
    const countiesList = await universityService.getAllCounties();
    for (let i=0; i< countiesList.length; i++){
      map.addLayerGroup(`${countiesList[i].name}`);
      let countyPicked = await universityService.getCounty(countiesList[i]._id);
      for (let i=0; i<countyPicked.universities.length; i++) {
        const universityStr = `${countyPicked.universities[i].name}: ${countyPicked.universities[i].description}`;
        map.addMarker({ lat: countyPicked.universities[i].lat, lng: countyPicked.universities[i].lng}, universityStr, `${countyPicked.name}`);
      }
    };
    map.showLayerControl();
	});
</script>

<div class="box" id="donation-map" style="height:75vh" />