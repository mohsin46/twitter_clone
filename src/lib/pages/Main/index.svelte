<script lang="ts">
import Customize from "$icons/Customize.svelte";
import CreateTweet from "$lib/components/CreateTweet.svelte";
import Tweet from "./Tweet.svelte";
import type { TweetType } from "src/global";


const tweets: Array<TweetType> = [
        {
            profileImage: "https://pbs.twimg.com/profile_images/1489375145684873217/3VYnFrzx_400x400.jpg",
            name: "Elon Musk",
            username: "elonmusk",
            isCertified: true,
            time: "30s",
            tweet: `SpaceX standard antenna production rises rapidly this year, so those with orders shouldn’t have to wait long.
            Note, Starlink can only support a limited number of users in an area, so best to order early.`,
            images: []
        },
        {
            profileImage: "https://pbs.twimg.com/profile_images/421692600446619648/dWAbC2wg_400x400.jpeg",
            name: "Bitcoin",
            username: "bitcoin",
            isCertified: true,
            time: "Feb 1",
            tweet: `Is a recession on the horizon?`,
            images: ["https://pbs.twimg.com/media/FKhrGhCVcAAAZ-z?format=jpg&name=small"]
        },
        {
            profileImage: "https://pbs.twimg.com/profile_images/1323550440571559936/Sa5crqyr_400x400.jpg",
            name: "BCCI",
            username: "BCCI",
            isCertified: true,
            time: "58m",
            tweet: `As we gear up for the #U19CWC 2022 Final, let's rewind the #BoysInBlue's journey in the tournament.
            Sit back & relive how the India U19 started their campaign with a win over South Africa U19. #INDvSA `,
            images: [
                "https://pbs.twimg.com/media/FK0WkMLaMAQv-ll?format=jpg&name=4096x4096",
            ]
        },
    ]

</script>

<div class="flex justify-between mt-8 border-b-2 pb-4 px-8" >
	<p class="font-black text-xl" >Home</p>
	<Customize />
</div>

<CreateTweet />

<div class="w-full" >
	{#each tweets as tweet}
		<Tweet 
			profileImage={tweet.profileImage} name={tweet.name} username={tweet.username}
			isCertified={tweet.isCertified} time={tweet.time} tweet={tweet.tweet}
			images = {tweet.images}	
		/>				
	{/each}
</div>


<style lang="postcss">
	* {
		font-family: 'Roboto', sans-serif;
	}
</style>
