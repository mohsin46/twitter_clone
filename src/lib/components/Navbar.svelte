<script lang="ts" >
    import { page } from '$app/stores';
	import TwitterLogo from "$icons/TwitterLogo.svelte";
	import Home from "$icons/Home.svelte"
    import Hashtag from "$lib/icons/Hashtag.svelte";
    import Notification from "$lib/icons/Notification.svelte";
    import Message from "$lib/icons/Message.svelte";
    import Bookmark from "$lib/icons/Bookmark.svelte";
    import List from "$lib/icons/List.svelte";
    import More from "$lib/icons/More.svelte";
    import ProfilePic from "$lib/icons/ProfilePic.svelte";

    let pathName = $page.url.pathname;
	function initPathName() {
		pathName = pathName.split('/').pop();
	}
	initPathName();
  
    

</script>

<div class="w-24 lg:w-44 ml-6 lg:ml-16 xl:ml-32 h-screen fixed pt-4" >
    <div class="p-2 w-12 rounded-full hover:bg-color-blue-light" >
        <TwitterLogo />
    </div>

    <a href="/" class="nav-ele mt-12">
        <Home active={pathName==''} />
        <p class="{pathName=='' && 'nav-active'} nav-text" >Home</p>
    </a>

    <a href="/explore/tabs/for-you" class="nav-ele" >
        <Hashtag active={pathName=='explore'} />
        <p class="{pathName=='explore' && 'nav-active'} nav-text" >Explore</p>
    </a>

    <a href="/" class="nav-ele" >
        <Notification active={pathName=='notifications'} />
        <p class="{pathName=='notifications' && 'nav-active'} nav-text" >Notifications</p>
    </a>

    <a href="/" class="nav-ele" >
        <Message active={pathName=='messages'} />
        <p class="{pathName=='messages' && 'nav-active'} nav-text" >Messages</p>
    </a>

    <a href="/" class="nav-ele" >
        <Bookmark active={pathName=='bookmarks'} />
        <p class="{pathName=='bookmarks' && 'nav-active'} nav-text" >Bookmarks</p>
    </a>

    <a href="/" class="nav-ele" >
        <List active={pathName=='lists'} />
        <p class="{pathName=='lists' && 'nav-active'} nav-text" >Lists</p>
    </a>

    <a href="/" class="nav-ele" >
        <ProfilePic size={32} />
        <p class="{pathName=='more' && 'nav-active'} nav-text" >Profile</p>
    </a>

    <a href="/" class="nav-ele" >
        <More active={pathName=='more'} />
        <p class="{pathName=='more' && 'nav-active'} nav-text" >More</p>
    </a>

    <button class="mt-6 bg-color-blue-dark w-48 h-12 rounded-full py-3 shadow-lg hover:bg-color-blue-darker hidden xl:block" >
        <p class="text-center font-bold text-sm text-white" >Tweet</p>
    </button>
</div>

<style>
    .nav-ele{
		@apply rounded-full w-fit px-4 py-2 pr-6 mt-4 flex;
	}

	.nav-text{
		@apply ml-4 font-bold text-base hidden xl:block;
	}

	.nav-active{
		@apply text-color-blue-dark
	}

    .nav-ele:hover{
       @apply bg-color-gray-dark;
    }
</style>