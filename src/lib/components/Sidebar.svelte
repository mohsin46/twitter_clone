<script lang="ts" >
    import Certified from "$lib/icons/Certified.svelte";
import ChevronDown from "$lib/icons/ChevronDown.svelte";
    import GearSettings from "$lib/icons/GearSettings.svelte";
    import ProfilePic1 from "$lib/icons/ProfilePic1.svelte";
    import Search from "$lib/icons/Search.svelte";
    var searchActive: boolean = false;
</script>

<div class="w-3/12 pl-8 pr-20 pb-4 pt-4" >
    <div class="w-full h-12 bg-color-gray-darker rounded-full" class:searchbar-active={searchActive} >
        <div class="text-center pt-3 flex px-4" >
            <Search active={searchActive} />
            <input on:focusout={()=>{searchActive=false}} on:focus={()=>{searchActive=true}} class="ml-2 bg-color-gray-darker focus:outline-none" class:search-active={searchActive} id="searchbar" type="text" placeholder="Search Twitter" >
        </div>
    </div>

    <div class="w-full bg-color-gray-base rounded-2xl mt-4" >
        <div class="mt-1 flex justify-between p-4" >
            <p class="font-black text-lg" >Paris Trend</p>
            <GearSettings />
        </div>
        <div class="divide-y" >
            <div class="trending-div" >
                <div class="flex justify-between" >
                    <p class="trending-text" >1. Trending</p>
                    <ChevronDown width={12} color="#828282" />  
                </div>
                <p class="hashtag-text" >#JessieMueller</p>
                <p class="tweets-text">456K Tweets</p>
            </div>
            <div class="trending-div" >
                <div class="flex justify-between" >
                    <p class="trending-text" >2. Trending</p>
                    <ChevronDown width={12} color="#828282" />  
                </div>
                <p class="hashtag-text" >#ThelmaJones</p>
                <p class="tweets-text">350K Tweets</p>
            </div>
            <div class="trending-div" >
                <div class="flex justify-between" >
                    <p class="trending-text" >3. Trending</p>
                    <ChevronDown width={12} color="#828282" />  
                </div>
                <p class="hashtag-text" >#LoisPearson</p>
                <p class="tweets-text">290K Tweets</p>
            </div>
            <div class="trending-div" >
                <div class="flex justify-between" >
                    <p class="trending-text" >4. Trending</p>
                    <ChevronDown width={12} color="#828282" />  
                </div>
                <p class="hashtag-text" >#WilmaBoyd</p>
                <p class="tweets-text">334K Tweets</p>
            </div>
            <div class="trending-div" >
                <div class="flex justify-between" >
                    <p class="trending-text" >5. Trending</p>
                    <ChevronDown width={12} color="#828282" />  
                </div>
                <p class="hashtag-text" >#ErikBaker</p>
                <p class="tweets-text">185K Tweets</p>
            </div>
            <div class="text-color-blue-dark font-semibold text-center mt-2 pt-2" >
                Show more
            </div>
        </div>
    </div>

    <div class="w-full bg-color-gray-base rounded-2xl mt-4 p-4 mb-6">
        <p class="font-black text-lg" >Who to follow</p>
        <div class="mt-4 divide-y" >
            <div class="flex mt-2 pt-4" >
                <ProfilePic1 />
                <div class="px-2" >
                    <div class="flex">
                        <p class="font-bold mr-2" >McFly</p>
                        <Certified />
                    </div>
                    <p class="username-text" >@levraimcfly</p>
                </div>
                <button class="follow-btn">
                    Follow
                </button>
            </div>
            <div class="flex mt-2 pt-4" >
                <ProfilePic1 />
                <div class="px-2" >
                    <div class="flex">
                        <p class="font-bold mr-2" >McFly</p>
                        <Certified />
                    </div>
                    <p class="username-text" >@levraimcfly</p>
                </div>
                <button class="follow-btn">
                    Follow
                </button>
            </div> 
            <div class="flex mt-2 pt-4" >
                <ProfilePic1 />
                <div class="px-2" >
                    <div class="flex">
                        <p class="font-bold mr-2" >McFly</p>
                        <Certified />
                    </div>
                    <p class="username-text" >@levraimcfly</p>
                </div>
                <button class="follow-btn">
                    Follow
                </button>
            </div> 
            
        </div>
    </div>
</div>

<style>
    .searchbar-active{
        @apply bg-white border-color-blue-dark;
        border-width: 1px;
	}

	.search-active{
		@apply bg-white text-black
	}

	.search-active::placeholder{
		color: rgba(0,0,0,0.7);
	}

    .trending-div{
        @apply py-4 px-8 hover:bg-color-gray-light
    }

    .trending-text{
        @apply text-sm text-gray-500;
    }

    .hashtag-text{
        @apply mt-1 text-base font-bold;
    }

    .tweets-text{
        @apply mt-1 text-base text-gray-500;
    }

    .username-text{
        @apply text-sm text-gray-500;
    }

    .follow-btn{
        @apply ml-auto font-bold text-color-blue-dark border-color-blue-dark rounded-full px-4 h-8 ;
        border-width: 1px;
    }

</style>