<script lang="ts">

import Navbar from "$lib/components/Navbar.svelte";
import Sidebar from "$lib/components/Sidebar.svelte";
import Customize from "$icons/Customize.svelte";
import Gif from "$icons/Gif.svelte";
import Image from "$icons/Image.svelte";
import Stats from "$icons/Stats.svelte"
import ProfilePic from "$icons/ProfilePic.svelte";
import Smiley from "$lib/icons/Smiley.svelte";
import ProfilePic2 from "$lib/icons/ProfilePic2.svelte";
import Certified from "$lib/icons/Certified.svelte";
import ChevronDown from "$lib/icons/ChevronDown.svelte";
import Message from "$lib/icons/Message.svelte";
import Comment from "$lib/icons/Comment.svelte";
import Retweet from "$lib/icons/Retweet.svelte";
import Like from "$lib/icons/Like.svelte";
import Upload from "$lib/icons/Upload.svelte";
import ProfilePic3 from "$lib/icons/ProfilePic3.svelte";
import ProfilePic4 from "$lib/icons/ProfilePic4.svelte";

export let tweetRowCount: number = 2;

let tweetValue : String = '';

const resizeTextArea = (e) => {	
	if(e.keyCode == 13){
	tweetRowCount = tweetRowCount + 1 ;
	}
}

</script>

<main class="flex" >
	<Navbar page="home" />

	<div class='w-9/12 lg:w-7/12 xl:w-6/12 ml-24 lg:ml-40 xl:ml-auto mr-20 lg:mr-0 border-x-2' >
		<div class="flex justify-between mt-8 border-b-2 pb-4 px-8" >
			<p class="font-black text-xl" >Home</p>
			<Customize />
		</div>

		<div class="px-8 pt-4 pb-8 border-b-8" >
			<div class="flex" >
				<ProfilePic size={48} />
				<div class="w-full">
					<textarea on:keypress={resizeTextArea} bind:value={tweetValue} class="ml-4 text-xl w-full focus:outline-none" type="text" rows={tweetRowCount} placeholder="What's happening?" />
					<div class="flex justify-between w-full mt-1" >
						<div class="w-1/3 flex justify-between" >
							<div class='icon-hover' >
								<Image />
							</div>
							<div class='icon-hover' >
								<Gif />
							</div>
							<div class='icon-hover' >
								<Stats />
							</div>
							<div class='icon-hover' >
								<Smiley />
							</div>
						</div>
						<div>
							<button class="px-6 py-3 text-white text-lg font-bold bg-color-blue-dark rounded-full" class:disabled-tweet={tweetValue==''} >
								Tweet
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="w-full" >
				<div class="tweet-div" >
					<ProfilePic2 />
					<div class="ml-4 mt-2 w-full" >
						<div class="flex w-full" >
							<p class='font-bold mr-1' >Annie</p>
							<Certified />
							<div class='tweet-descriptor'>
								<p class="mx-1" >@annie</p>
								<span>&bull;</span>
								<p class="mx-1">14s</p>
							</div>
							<div class="ml-auto py-2" >
								<ChevronDown color={'#000000'} width={16} />
							</div>
						</div>
						<div class="w-full" >
							<p class="leading-6">
								This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis 
							</p>
							<img class="mt-4 rounded-2xl w-full" src='https://pbs.twimg.com/media/FKJKKEAX0AILWLi?format=jpg&name=small' alt="tweet" >
							<div class="tweet-icons">
								<Comment />
								<Retweet />
								<Like />
								<Upload />
							</div>
						</div>
					</div>
				</div>

				<div class="tweet-div" >
					<ProfilePic3 />
					<div class="ml-4 mt-2 w-full" >
						<div class="flex w-full" >
							<p class='font-bold mr-1' >Jorge Mckinney</p>
							<Certified />
							<div class='tweet-descriptor'>
								<p class="mx-1" >@Travis Wade</p>
								<span>&bull;</span>
								<p class="mx-1">14s</p>
							</div>
							<div class="ml-auto py-2" >
								<ChevronDown color={'#000000'} width={16} />
							</div>
						</div>
						<div class="w-full" >
							<p class="leading-6">
								This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis 
							</p>
							<div class="tweet-icons">
								<Comment />
								<Retweet />
								<Like />
								<Upload />
							</div>
						</div>
					</div>
				</div>

				<div class="tweet-div" >
					<ProfilePic4 />
					<div class="ml-4 mt-2 w-full" >
						<div class="flex w-full" >
							<p class='font-bold mr-1' >Serenity Jones</p>
							<Certified />
							<div class='tweet-descriptor'>
								<p class="mx-1" >@Crystal Robinson</p>
								<span>&bull;</span>
								<p class="mx-1">14s</p>
							</div>
							<div class="ml-auto py-2" >
								<ChevronDown color={'#000000'} width={16} />
							</div>
						</div>
						<div class="w-full" >
							<p class="py-2">
								This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis. This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis 
							</p>
							<img class="mt-2 rounded-2xl w-full " src='https://pbs.twimg.com/media/FJp5Lp4XwAU1U-P?format=jpg&name=small' alt="tweet" >
							<div class="tweet-icons">
								<Comment />
								<Retweet />
								<Like />
								<Upload />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	<Sidebar />
	
</main>

<style lang="postcss">
	* {
		font-family: 'Roboto', sans-serif;
	}

	.disabled-tweet{
		opacity: 0.4;
	}

	.tweet-div{
		@apply flex w-full pb-4 border-b-2 px-8 py-4 w-full ;
	}

	.tweet-div:hover{
		@apply bg-color-gray-light;
	}

	.icon-hover{
		@apply p-2 rounded-full m-auto;
	}

	.icon-hover:hover{
		@apply bg-color-blue-light;
	}

	.tweet-descriptor{
		@apply ml-1 flex justify-between opacity-60;
	}

	.tweet-icons{
		@apply w-4/5 flex justify-between mt-2 pl-8;
	}

</style>
