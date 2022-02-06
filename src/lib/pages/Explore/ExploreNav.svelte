<script lang="ts">
import type { NavOptions } from "src/global";

const navOptions: Array<NavOptions> = [
    {
        name: "For you", 
        link: "for-you"
    },
    {
        name: "Covid 19", 
        link: "covid-19"
    },
    {
        name: "Trending", 
        link: "trending"
    },
    {
        name: "News", 
        link: "news"
    },
    {
        name: "Sports", 
        link: "sports"
    },
    {
        name: "Events", 
        link: "events"
    },
]

let activeNav: number = 0;
const changeActiveNav = (e : Event) => {
    activeNav = e.target.id;
    console.log(activeNav);
    
}

</script>

<div class="w-full mt-1 grid grid-cols-6 text-center border-b-2" >
    {#each navOptions as nav, i}
        <a href={"/explore/tabs/"+nav.link} class="nav-text" class:active={i == activeNav} id={i} on:click={changeActiveNav} >{nav.name}</a>
    {/each}    
</div>

<style>
    .nav-text{
        @apply font-bold text-sm py-4 hover:bg-color-gray-dark opacity-60;
    }

    .active{
        @apply opacity-100;
    }
</style>