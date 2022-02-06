<script lang="ts" >
import type { ExploreTagsType } from "src/global";
import TweetItem from "../TweetItem.svelte";

const items: Array<ExploreTagsType> = [
    {
        topic: "Politics",
        hashtag: "BarackObama",
        tweets: 4000
    },
    {
        topic: "Cricket",
        hashtag: "PayTM",
        tweets: 2500
    },
    {
        topic: "Movies & TV",
        hashtag: "Diana",
        tweets: 53000
    },
    {
        topic: "Automotive",
        hashtag: "BoycottHundai",
        tweets: 3000
    },
    {
        topic: "Politics",
        hashtag: "BarackObama",
        tweets: 4000
    },
    {
        topic: "Cricket",
        hashtag: "PayTM",
        tweets: 2500
    },
    {
        topic: "Movies & TV",
        hashtag: "Diana",
        tweets: 53000
    },
    {
        topic: "Automotive",
        hashtag: "BoycottHundai",
        tweets: 3000
    },
    {
        topic: "Cricket",
        hashtag: "PayTM",
        tweets: 2500
    },
    {
        topic: "Movies & TV",
        hashtag: "Diana",
        tweets: 53000
    },
    {
        topic: "Automotive",
        hashtag: "BoycottHundai",
        tweets: 3000
    }   
]
</script>

<div class="h-full overflow-auto pb-12" >
    {#each items as item}
        <TweetItem topic={item.topic} hashtag={item.hashtag} tweets={item.tweets} />
    {/each}
</div>

<style>
    ::-webkit-scrollbar {
        width: 0px;
    }
</style>