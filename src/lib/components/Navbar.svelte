<script lang="ts" >
	import TwitterLogo from "$icons/TwitterLogo.svelte";
	import Home from "$icons/Home.svelte"
import Hashtag from "$lib/icons/Hashtag.svelte";
import Notification from "$lib/icons/Notification.svelte";
import Message from "$lib/icons/Message.svelte";
import Bookmark from "$lib/icons/Bookmark.svelte";
import List from "$lib/icons/List.svelte";
import More from "$lib/icons/More.svelte";
import ProfilePic from "$lib/icons/ProfilePic.svelte";

    export let page: String;
</script>

<div class="p-2 w-12 rounded-full hover:bg-color-blue-light" >
    <TwitterLogo />
</div>

<a href="/" class="nav-ele mt-12">
    <Home active={page=='home'} />
    <p class="{page=='home' && 'nav-active'} nav-text" >Home</p>
</a>

<a href="/" class="nav-ele" >
    <Hashtag active={page=='explore'} />
    <p class="{page=='explore' && 'nav-active'} nav-text" >Explore</p>
</a>

<a href="/" class="nav-ele" >
    <Notification active={page=='notifications'} />
    <p class="{page=='notifications' && 'nav-active'} nav-text" >Notifications</p>
</a>

<a href="/" class="nav-ele" >
    <Message active={page=='messages'} />
    <p class="{page=='messages' && 'nav-active'} nav-text" >Messages</p>
</a>

<a href="/" class="nav-ele" >
    <Bookmark active={page=='bookmarks'} />
    <p class="{page=='bookmarks' && 'nav-active'} nav-text" >Bookmarks</p>
</a>

<a href="/" class="nav-ele" >
    <List active={page=='lists'} />
    <p class="{page=='lists' && 'nav-active'} nav-text" >Lists</p>
</a>

<a href="/" class="nav-ele" >
    <ProfilePic />
    <p class="{page=='more' && 'nav-active'} nav-text" >Profile</p>
</a>

<a href="/" class="nav-ele" >
    <More active={page=='more'} />
    <p class="{page=='more' && 'nav-active'} nav-text" >More</p>
</a>

<button class="mt-6 bg-color-blue-dark w-48 h-12 rounded-full py-3 shadow-lg hover:bg-color-blue-darker" >
    <p class="text-center font-bold text-sm text-white" >Tweet</p>
</button>

<style>
    .nav-ele{
		@apply rounded-full w-fit px-4 py-2 pr-6 mt-4 flex;
	}

	.nav-text{
		@apply ml-4 font-bold text-base;
	}

	.nav-active{
		@apply text-color-blue-dark
	}

    .nav-ele:hover{
       @apply bg-color-gray-dark;
    }
</style>