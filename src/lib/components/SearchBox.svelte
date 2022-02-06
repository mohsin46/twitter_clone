<script lang="ts" >
import Search from "$lib/icons/Search.svelte";
var searchActive: boolean = false;
</script>

<div class="w-full h-12 bg-color-gray-darker rounded-full" class:searchbar-active={searchActive} >
    <div class="text-center pt-3 flex px-4" >
        <Search active={searchActive} />
        <input on:focusout={()=>{searchActive=false}} on:focus={()=>{searchActive=true}} class="ml-2 w-full bg-color-gray-darker focus:outline-none" class:search-active={searchActive} id="searchbar" type="text" placeholder="Search Twitter" >
    </div>
</div>

<style>
    .searchbar-active{
        @apply bg-white border-color-blue-dark;
        border-width: 1px;
	}

	.search-active{
		@apply bg-white text-black
	}

	.search-active::placeholder{
		color: rgba(0,0,0,0.7);
	}
</style>