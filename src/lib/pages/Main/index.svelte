<script lang="ts">

	import Navbar from "$lib/components/Navbar.svelte";
import Sidebar from "$lib/components/Sidebar.svelte";

	
</script>

<main class="pt-4 flex" >
	<Navbar page="home" />
	<div class='ml-auto w-6/12 bg-gray-100' style="height: 200vh;" >
		hello
	</div>

	<Sidebar />
	
</main>

<style lang="postcss">
	* {
		font-family: 'Roboto', sans-serif;
	}


</style>
