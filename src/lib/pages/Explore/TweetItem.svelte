<script>
import ThreeDots from "$lib/icons/ThreeDots.svelte";

export let topic;
export let hashtag;
export let tweets;
</script>

<div class="flex w-full px-4 py-3 hover:bg-color-gray-light" >
    <div>
        <p class="text-sm font-medium text-slate-700" >Trending in {topic}</p>
        <p class="font-bold" >#{hashtag}</p>
        <p class="text-sm text-slate-700">{tweets} Tweets</p>
    </div>
    <div class="ml-auto" >
        <ThreeDots />
    </div>
</div>