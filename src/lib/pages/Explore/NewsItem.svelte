<script lang="ts" >
export let topic : string ;
export let title : string;
export let image : string;
</script>

<div class="flex w-full px-4 py-3 hover:bg-color-gray-light" >
    <div>
        <p class="text-sm font-medium text-slate-700" >{topic}</p>
        <p class="font-bold" >{title}</p>
    </div>
    <div class="ml-auto" >
        <img class="w-24 h-24 rounded-xl object-cover" src={image} alt={title} />
    </div>
</div>
