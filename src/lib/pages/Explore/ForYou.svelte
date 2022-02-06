<script lang="ts" >
import type { ExploreTags } from "src/global";
import TweetItem from "./TweetItem.svelte";

const items: Array<ExploreTags> = [
    {
        topic: "Politics",
        hashtag: "BarackObama",
        tweets: 4000
    }  
]
</script>

<div>
    {#each items as item}
        <TweetItem topic={item.topic} hashtag={item.hashtag} tweets={item.tweets} />
    {/each}
</div>