<script>
import '$styles/tailwind.css'
import Navbar from "$lib/components/Navbar.svelte";
import Sidebar from "$lib/components/Sidebar.svelte";
</script>

<svelte:head>
	<title>IDS.Company</title>
</svelte:head>

<main class="flex" >
	<Navbar page="home" />

	<slot></slot>

	<Sidebar />
</main>
