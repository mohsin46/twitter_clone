<script>
import '$styles/tailwind.css'
import Navbar from "$lib/components/Navbar.svelte";
import Sidebar from "$lib/components/Sidebar.svelte";
</script>

<svelte:head>
	<title>IDS.Company</title>
</svelte:head>

<main class="flex" >
	<Navbar />
  <div class='w-9/12 lg:w-7/12 xl:w-5/12 ml-24 lg:ml-40 xl:ml-auto mr-20 lg:mr-0 border-x-2' >
	  <slot></slot>
  </div>
	<Sidebar />
</main>
