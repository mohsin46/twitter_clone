<script lang="ts" >
import Gif from "$icons/Gif.svelte";
import Image from "$icons/Image.svelte";
import Stats from "$icons/Stats.svelte"
import ProfilePic from "$icons/ProfilePic.svelte";
import Smiley from "$lib/icons/Smiley.svelte";

let tweetValue : String = '';
export let tweetRowCount: number = 2;

const resizeTextArea = (e) => {	
	if(e.keyCode == 13){
	tweetRowCount = tweetRowCount + 1 ;
	}
}
</script>

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

<style>
    .disabled-tweet{
		opacity: 0.4;
	}

    .icon-hover{
		@apply p-2 rounded-full m-auto;
	}

	.icon-hover:hover{
		@apply bg-color-blue-light;
	}
</style>