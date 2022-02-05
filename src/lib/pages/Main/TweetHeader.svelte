<script lang="ts">
import Certified from "$lib/icons/Certified.svelte";
import ChevronDown from "$lib/icons/ChevronDown.svelte";

export let name: string;
export let username: string;
export let isCertified: boolean;
export let time: string;

</script>

<div class="flex w-full" >
    <p class='font-bold mr-1' >{name}</p>
    {#if isCertified}
        <Certified />
    {/if}
    <div class='tweet-descriptor'>
        <p class="mx-1" >{username}</p>
        <span>&bull;</span>
        <p class="mx-1">{time}</p>
    </div>
    <div class="ml-auto py-2" >
        <ChevronDown color={'#000000'} width={16} />
    </div>
</div>

<style>
    .tweet-descriptor{
		@apply ml-1 flex justify-between opacity-60;
	}
</style>