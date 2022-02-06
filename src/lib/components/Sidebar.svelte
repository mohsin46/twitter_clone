<script lang="ts" >
import Certified from "$lib/icons/Certified.svelte";
import ChevronDown from "$lib/icons/ChevronDown.svelte";
import GearSettings from "$lib/icons/GearSettings.svelte";
import ProfilePic1 from "$lib/icons/ProfilePic1.svelte";
import SearchBox from "./SearchBox.svelte";
    
</script>

<div class="w-4/12 xl:w-4/12 pl-8 pr-8 xl:pr-32 pb-4 pt-4 hidden lg:block overflow-auto" >

    <SearchBox />

    <div class="w-full bg-color-gray-base rounded-2xl mt-4" >
        <div class="mt-1 flex justify-between px-4 pt-4 pb-1" >
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
            <div class="text-center py-4" >
                <button class="text-color-blue-dark font-semibold">
                    Show more
                </button>
            </div>
        </div>
    </div>

    <div class="w-full bg-color-gray-base rounded-2xl mt-4">
        <p class="font-black text-lg pt-4 px-4" >Who to follow</p>
        <div class="mt-2 divide-y" >
            <div class="follow-div" >
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
            <div class="follow-div" >
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
            <div class="follow-div" >
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

    ::-webkit-scrollbar{
        width: 0;
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
        @apply ml-auto font-bold text-color-blue-dark border-color-blue-dark rounded-full px-4 h-8;
        border-width: 1px;
    }

    .follow-btn:hover{
        @apply bg-color-blue-dark text-white
    }

    .follow-div{
        @apply flex px-4 py-4 hover:bg-color-gray-light;
    }

</style>