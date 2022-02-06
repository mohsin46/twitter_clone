<script lang="ts" >

import Comment from "$lib/icons/Comment.svelte";
import Retweet from "$lib/icons/Retweet.svelte";
import Like from "$lib/icons/Like.svelte";
import Upload from "$lib/icons/Upload.svelte";
import TweetHeader from "./TweetHeader.svelte";

export let profileImage: string;
export let name: string;
export let username: string;
export let isCertified: boolean;
export let time: string;
export let tweet: string;
export let images : Array<string>;

</script>

<div class="tweet-div" >
    <img class="rounded-full w-12 h-12 mt-2" src={profileImage} alt="profile" />
    <div class="ml-4 mt-2 w-full" >
        <TweetHeader {name} {username} {isCertified} {time} />
        <div class="w-full" >
            <p class="leading-6">
                {tweet}
            </p>
            <div class="grid" >
                {#each images as image}
                    <img class="mt-4 rounded-2xl w-full" src={image} alt="tweet" >
                {/each}
            </div>
            <div class="tweet-icons">
                <Comment />
                <Retweet />
                <Like />
                <Upload />
            </div>
        </div>
    </div>
</div>

<style>
    .tweet-div{
		@apply flex w-full pb-4 border-b-2 px-4 py-4 w-full ;
	}

	.tweet-div:hover{
		@apply bg-color-gray-light;
	}

	.tweet-icons{
		@apply w-4/5 flex justify-between mt-2 pl-8;
	}

</style>