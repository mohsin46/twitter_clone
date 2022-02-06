<script>
import '$styles/tailwind.css'
import Navbar from "$lib/components/Navbar.svelte";
import Sidebar from "$lib/components/Sidebar.svelte";
import SearchDiv from '$lib/pages/Explore/SearchDiv.svelte';
import ExploreNav from '$lib/pages/Explore/ExploreNav.svelte';
</script>

<svelte:head>
    <title>IDS.Company</title>
</svelte:head>
    
<main class="flex h-screen overflow-hidden" >
    <Navbar />
    <div class='w-9/12 lg:w-7/12 xl:w-5/12 ml-24 lg:ml-40 xl:ml-auto mr-20 lg:mr-0 border-x-2' >
        <SearchDiv />    
        <ExploreNav />
        <slot></slot>
    </div>
    <Sidebar />
</main>

<style>
    * {
		font-family: 'Roboto', sans-serif;
	}
</style>
    