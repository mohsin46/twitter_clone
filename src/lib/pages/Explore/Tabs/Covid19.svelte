<script lang="ts" >
    import type { ExploreNewsType } from "src/global";
    import NewsItem from "../NewsItem.svelte";
    
    const items: Array<ExploreNewsType> = [
        {
            topic: "Covid-19",
            title: "Covid 19 in India",
            image: "https://pbs.twimg.com/semantic_core_img/1255575536824233984/CiLy4der?format=jpg&name=240x240"
        },
        {
            topic: "Covid-19",
            title: "Vaccine information for children in India",
            image: "https://pbs.twimg.com/semantic_core_img/1478328238984232961/_XodghPF?format=jpg&name=240x240"
        },
        {
            topic: "Beijing",
            title: "What you need to know about Beijing 2022 COVID-19 protocols",
            image: "https://pbs.twimg.com/semantic_core_img/1484017167666348038/-yh8HbjK?format=jpg&name=240x240"
        },
        {
            topic: "Indian national news",
            title: "Assembly Elections 2022: COVID-19 restrictions in place for campaigning",
            image: "https://pbs.twimg.com/semantic_core_img/1483390839032147970/Fjl0DXPX?format=jpg&name=240x240"
        },
        {
            topic: "Covid-19",
            title: "Covid 19 in India",
            image: "https://pbs.twimg.com/semantic_core_img/1255575536824233984/CiLy4der?format=jpg&name=240x240"
        },
        {
            topic: "Covid-19",
            title: "Vaccine information for children in India",
            image: "https://pbs.twimg.com/semantic_core_img/1478328238984232961/_XodghPF?format=jpg&name=240x240"
        },
        {
            topic: "Beijing",
            title: "What you need to know about Beijing 2022 COVID-19 protocols",
            image: "https://pbs.twimg.com/semantic_core_img/1484017167666348038/-yh8HbjK?format=jpg&name=240x240"
        },
        {
            topic: "Indian national news",
            title: "Assembly Elections 2022: COVID-19 restrictions in place for campaigning",
            image: "https://pbs.twimg.com/semantic_core_img/1483390839032147970/Fjl0DXPX?format=jpg&name=240x240"
        },
        {
            topic: "Covid-19",
            title: "Covid 19 in India",
            image: "https://pbs.twimg.com/semantic_core_img/1255575536824233984/CiLy4der?format=jpg&name=240x240"
        },
        {
            topic: "Covid-19",
            title: "Vaccine information for children in India",
            image: "https://pbs.twimg.com/semantic_core_img/1478328238984232961/_XodghPF?format=jpg&name=240x240"
        },
        {
            topic: "Beijing",
            title: "What you need to know about Beijing 2022 COVID-19 protocols",
            image: "https://pbs.twimg.com/semantic_core_img/1484017167666348038/-yh8HbjK?format=jpg&name=240x240"
        },
        {
            topic: "Indian national news",
            title: "Assembly Elections 2022: COVID-19 restrictions in place for campaigning",
            image: "https://pbs.twimg.com/semantic_core_img/1483390839032147970/Fjl0DXPX?format=jpg&name=240x240"
        },
        
    ]
    </script>
    
    <div class="h-full overflow-auto mb-16" >
        {#each items as item}
            <NewsItem topic={item.topic} title={item.title} image={item.image} />
        {/each}
    </div>
    
    <style>
        ::-webkit-scrollbar {
            width: 0px;
        }
    </style>